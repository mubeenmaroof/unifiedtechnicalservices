import { NextRequest, NextResponse } from "next/server";

import { Resend } from "resend";

/*
 * Explicitly use Node.js because
 * attachments are converted to Buffer.
 */
export const runtime = "nodejs";

/* =====================================================
   CONFIGURATION
===================================================== */

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_FILE_SIZE = 10 * 1024 * 1024;

const MAX_TOTAL_SIZE = 25 * 1024 * 1024;

const MAX_FILES = 10;

/* =====================================================
   ALLOWED SERVICES
===================================================== */

const allowedServices = [
  "Fiber Optic & Telecom",
  "FTTH / FTTB / FTTX Planning",
  "GPON Network Planning",
  "ADT / FDT Planning",
  "GIS & Mapping",
  "ArcGIS",
  "QGIS",
  "RS/GIS",
  "CCTV & Security",
  "Electrical Works",
  "Electrical As-Builts",
  "Fire Alarm Systems",
  "Solar Installation",
  "Other",
];

/* =====================================================
   ALLOWED FILE TYPES
===================================================== */

const allowedExtensions = [
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "zip",
  "rar",
  "kml",
  "kmz",
];

/* =====================================================
   HELPERS
===================================================== */

function getExtension(filename: string) {
  return filename.split(".").pop()?.toLowerCase();
}

function sanitizeFilename(filename: string) {
  return filename.replace(/[^a-zA-Z0-9._-]/g, "_").replace(/_+/g, "_");
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* =====================================================
   POST
===================================================== */

export async function POST(request: NextRequest) {
  try {
    /* ===============================================
       ENVIRONMENT
    =============================================== */

    const toEmail = process.env.CONTACT_TO_EMAIL;

    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!process.env.RESEND_API_KEY || !toEmail || !fromEmail) {
      console.error("Missing email environment variables.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        {
          status: 500,
        },
      );
    }

    /* ===============================================
       FORM DATA
    =============================================== */

    const formData = await request.formData();

    /* ===============================================
       ANTI-SPAM HONEYPOT
    =============================================== */

    const honeypot = formData.get("website")?.toString().trim() ?? "";

    if (honeypot) {
      console.warn("Spam blocked: honeypot field filled.");

      /*
       * Fake successful response.
       *
       * Do not tell automated bots
       * that they were detected.
       */

      return NextResponse.json(
        {
          success: true,
          message: "Your project inquiry has been received.",
          inquiryId: "UTS-RECEIVED",
        },
        {
          status: 201,
        },
      );
    }

    /* ===============================================
       FORM TIMING
    =============================================== */

    const startedAtValue = formData.get("formStartedAt")?.toString();

    const formStartedAt = Number(startedAtValue);

    if (!Number.isFinite(formStartedAt) || formStartedAt <= 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid form submission.",
        },
        {
          status: 400,
        },
      );
    }

    const submissionTime = Date.now() - formStartedAt;

    /*
     * Future timestamps are invalid.
     */

    if (submissionTime < 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid form submission.",
        },
        {
          status: 400,
        },
      );
    }

    /*
     * Extremely fast submission is
     * treated as automated activity.
     */

    if (submissionTime < 1000) {
      console.warn("Spam blocked: form submitted too quickly.");

      return NextResponse.json(
        {
          success: true,
          message: "Your project inquiry has been received.",
          inquiryId: "UTS-RECEIVED",
        },
        {
          status: 201,
        },
      );
    }

    /* ===============================================
       TEXT FIELDS
    =============================================== */

    const fullName = formData.get("fullName")?.toString().trim() ?? "";

    const company = formData.get("company")?.toString().trim() ?? "";

    const phone = formData.get("phone")?.toString().trim() ?? "";

    const email = formData.get("email")?.toString().trim().toLowerCase() ?? "";

    const service = formData.get("service")?.toString().trim() ?? "";

    const location = formData.get("location")?.toString().trim() ?? "";

    const description = formData.get("description")?.toString().trim() ?? "";

    /* ===============================================
       MULTIPLE ATTACHMENTS
    =============================================== */

    const attachments = formData
      .getAll("attachments")
      .filter((item): item is File => item instanceof File && item.size > 0);

    console.log(
      "Attachments received:",
      attachments.map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type,
      })),
    );

    /* ===============================================
       REQUIRED FIELDS
    =============================================== */

    if (!fullName || !phone || !email || !service || !description) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        {
          status: 400,
        },
      );
    }

    /* ===============================================
       FIELD LENGTH VALIDATION
    =============================================== */

    if (
      fullName.length > 150 ||
      company.length > 200 ||
      phone.length > 50 ||
      email.length > 254 ||
      service.length > 200 ||
      location.length > 250 ||
      description.length > 10000
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "One or more fields exceed the allowed length.",
        },
        {
          status: 400,
        },
      );
    }

    /* ===============================================
       EMAIL VALIDATION
    =============================================== */

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        {
          status: 400,
        },
      );
    }

    /* ===============================================
       SERVICE WHITELIST
    =============================================== */

    if (!allowedServices.includes(service)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please select a valid service.",
        },
        {
          status: 400,
        },
      );
    }

    /* ===============================================
       FILE COUNT
    =============================================== */

    if (attachments.length > MAX_FILES) {
      return NextResponse.json(
        {
          success: false,
          message: `Maximum ${MAX_FILES} attachments are allowed.`,
        },
        {
          status: 400,
        },
      );
    }

    /* ===============================================
       VALIDATE FILES
    =============================================== */

    let totalSize = 0;

    for (const file of attachments) {
      /* FILE SIZE */

      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          {
            success: false,
            message: `${file.name} is larger than 10 MB.`,
          },
          {
            status: 400,
          },
        );
      }

      /* FILE EXTENSION */

      const extension = getExtension(file.name);

      if (!extension || !allowedExtensions.includes(extension)) {
        return NextResponse.json(
          {
            success: false,
            message: `${file.name} has an unsupported file format.`,
          },
          {
            status: 400,
          },
        );
      }

      totalSize += file.size;
    }

    /* ===============================================
       TOTAL ATTACHMENT SIZE
    =============================================== */

    if (totalSize > MAX_TOTAL_SIZE) {
      return NextResponse.json(
        {
          success: false,
          message: "Total attachment size must not exceed 25 MB.",
        },
        {
          status: 400,
        },
      );
    }

    /* ===============================================
       INQUIRY ID
    =============================================== */

    const inquiryId = `UTS-${Date.now().toString().slice(-8)}-${crypto
      .randomUUID()
      .slice(0, 6)
      .toUpperCase()}`;

    /* ===============================================
       PREPARE RESEND ATTACHMENTS
    =============================================== */

    const emailAttachments: {
      filename: string;
      content: Buffer;
      contentType?: string;
    }[] = [];

    const attachmentNames: string[] = [];

    for (const file of attachments) {
      const filename = sanitizeFilename(file.name);

      const arrayBuffer = await file.arrayBuffer();

      emailAttachments.push({
        filename,

        content: Buffer.from(arrayBuffer),

        contentType: file.type || "application/octet-stream",
      });

      attachmentNames.push(filename);
    }

    /* ===============================================
       SAFE HTML VALUES
    =============================================== */

    const safeName = escapeHtml(fullName);

    const safeCompany = escapeHtml(company);

    const safePhone = escapeHtml(phone);

    const safeEmail = escapeHtml(email);

    const safeService = escapeHtml(service);

    const safeLocation = escapeHtml(location);

    const safeDescription = escapeHtml(description).replace(/\n/g, "<br />");

    /* ===============================================
       ATTACHMENT LIST
    =============================================== */

    const attachmentHtml =
      attachmentNames.length > 0
        ? `
          <ul
            style="
              margin:0;
              padding-left:18px;
            "
          >
            ${attachmentNames
              .map(
                (name) =>
                  `
                    <li
                      style="
                        margin-bottom:4px;
                      "
                    >
                      ${escapeHtml(name)}
                    </li>
                  `,
              )
              .join("")}
          </ul>
        `
        : "No attachments";

    /* ===============================================
       HTML EMAIL
    =============================================== */

    const html = `
      <!DOCTYPE html>

      <html>

        <head>

          <meta charset="UTF-8" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

        </head>

        <body
          style="
            margin:0;
            padding:0;
            background:#f1f5f9;
            font-family:Arial,Helvetica,sans-serif;
          "
        >

          <div
            style="
              width:100%;
              padding:30px 15px;
              box-sizing:border-box;
            "
          >

            <div
              style="
                max-width:680px;
                margin:0 auto;
                background:#ffffff;
                border-radius:16px;
                overflow:hidden;
                border:1px solid #e2e8f0;
              "
            >

              <!-- ===================================
                   HEADER
              ==================================== -->

              <div
                style="
                  background:#06111f;
                  padding:28px 30px;
                "
              >

                <div
                  style="
                    color:#38bdf8;
                    font-size:11px;
                    font-weight:bold;
                    letter-spacing:2px;
                    text-transform:uppercase;
                  "
                >
                  Unified Technical Services
                </div>

                <h1
                  style="
                    margin:10px 0 0;
                    color:#ffffff;
                    font-size:25px;
                  "
                >
                  New Project Inquiry
                </h1>

                <div
                  style="
                    margin-top:8px;
                    color:#94a3b8;
                    font-size:12px;
                  "
                >
                  ${inquiryId}
                </div>

              </div>

              <!-- ===================================
                   CONTENT
              ==================================== -->

              <div
                style="
                  padding:30px;
                "
              >

                <p
                  style="
                    margin-top:0;
                    margin-bottom:25px;
                    color:#475569;
                    font-size:14px;
                    line-height:22px;
                  "
                >
                  A new project inquiry
                  has been submitted
                  through the Unified
                  Technical Services
                  website.
                </p>

                <!-- CUSTOMER -->

                ${createSectionTitle("Customer Details")}

                ${createRow("Full Name", safeName)}

                ${createRow("Company", safeCompany || "Not provided")}

                ${createRow("Phone", safePhone)}

                ${createRow("Email", safeEmail)}

                <!-- PROJECT -->

                <div
                  style="
                    height:28px;
                  "
                ></div>

                ${createSectionTitle("Project Details")}

                ${createRow("Service", safeService)}

                ${createRow("Location", safeLocation || "Not provided")}

                ${createRow(
                  "Attachments",
                  attachments.length > 0
                    ? `${attachments.length} file(s)`
                    : "No attachments",
                )}

                ${
                  attachments.length > 0
                    ? `
                      <div
                        style="
                          margin-top:15px;
                          padding:15px 18px;
                          background:#f8fafc;
                          border:1px solid #e2e8f0;
                          border-radius:10px;
                          color:#334155;
                          font-size:13px;
                          line-height:22px;
                        "
                      >
                        ${attachmentHtml}
                      </div>
                    `
                    : ""
                }

                <!-- DESCRIPTION -->

                <div
                  style="
                    height:28px;
                  "
                ></div>

                ${createSectionTitle("Project Description")}

                <div
                  style="
                    padding:18px;
                    background:#f8fafc;
                    border:1px solid #e2e8f0;
                    border-radius:10px;
                    color:#334155;
                    font-size:14px;
                    line-height:23px;
                    word-break:break-word;
                  "
                >
                  ${safeDescription}
                </div>

              </div>

              <!-- ===================================
                   FOOTER
              ==================================== -->

              <div
                style="
                  padding:20px 30px;
                  background:#f8fafc;
                  border-top:1px solid #e2e8f0;
                  color:#64748b;
                  font-size:11px;
                  line-height:18px;
                "
              >

                This inquiry was
                submitted through the
                Unified Technical
                Services website.

                <br />

                Reply directly to this
                email to contact
                ${safeName}.

              </div>

            </div>

          </div>

        </body>

      </html>
    `;

    /* ===============================================
       SEND EMAIL
    =============================================== */

    const { data, error } = await resend.emails.send({
      from: fromEmail,

      to: [toEmail],

      /*
       * Clicking Reply in Gmail
       * sends the response directly
       * to the customer.
       */
      replyTo: email,

      subject: `[${inquiryId}] New ${service} Inquiry - ${fullName}`,

      html,

      attachments: emailAttachments.length > 0 ? emailAttachments : undefined,
    });

    /* ===============================================
       RESEND ERROR
    =============================================== */

    if (error) {
      console.error("Resend email error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send your inquiry. Please try again.",
        },
        {
          status: 500,
        },
      );
    }

    /* ===============================================
       SUCCESS LOG
    =============================================== */

    console.log("Inquiry successfully sent:", {
      inquiryId,

      emailId: data?.id,

      customer: email,

      service,

      attachmentCount: attachments.length,

      attachmentNames,
    });

    /* ===============================================
       SUCCESS RESPONSE
    =============================================== */

    return NextResponse.json(
      {
        success: true,

        message: "Your project inquiry has been sent successfully.",

        inquiryId,

        attachmentCount: attachments.length,
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,

        message: "Unable to process your inquiry. Please try again.",
      },
      {
        status: 500,
      },
    );
  }
}

/* =====================================================
   EMAIL SECTION TITLE
===================================================== */

function createSectionTitle(title: string) {
  return `
    <div
      style="
        margin-bottom:12px;
        color:#0284c7;
        font-size:11px;
        font-weight:bold;
        letter-spacing:1.5px;
        text-transform:uppercase;
      "
    >
      ${title}
    </div>
  `;
}

/* =====================================================
   EMAIL ROW
===================================================== */

function createRow(label: string, value: string) {
  return `
    <div
      style="
        display:flex;
        border-bottom:1px solid #e2e8f0;
        padding:10px 0;
      "
    >

      <div
        style="
          width:140px;
          min-width:140px;
          color:#64748b;
          font-size:13px;
        "
      >
        ${label}
      </div>

      <div
        style="
          color:#0f172a;
          font-size:13px;
          font-weight:600;
          word-break:break-word;
        "
      >
        ${value}
      </div>

    </div>
  `;
}

"use client";

import { useRef, useState } from "react";

import { useSearchParams } from "next/navigation";

import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  FileText,
  FileUp,
  LoaderCircle,
  Send,
  X,
} from "lucide-react";

/* =====================================================
   SERVICES
===================================================== */

const serviceOptions = [
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

const serviceMap: Record<string, string> = {
  fiber: "Fiber Optic & Telecom",
  gis: "GIS & Mapping",
  cctv: "CCTV & Security",
  electrical: "Electrical Works",
  fire: "Fire Alarm Systems",
  solar: "Solar Installation",
};

/* =====================================================
   FILE SETTINGS
===================================================== */

const MAX_FILE_SIZE = 10 * 1024 * 1024;

const MAX_TOTAL_SIZE = 25 * 1024 * 1024;

const MAX_FILES = 10;

/* =====================================================
   CONTACT FORM
===================================================== */

export default function ContactForm() {
  const searchParams = useSearchParams();

  const formRef = useRef<HTMLFormElement>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [submitted, setSubmitted] = useState(false);

  const [submitting, setSubmitting] = useState(false);

  const [error, setError] = useState("");

  const [inquiryId, setInquiryId] = useState("");

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  /*
   * Starts as null.
   *
   * Date.now() is only called from an
   * event handler, never during render.
   */
  const [formStartedAt, setFormStartedAt] = useState<number | null>(null);

  /* ===================================================
     DEFAULT SERVICE
  =================================================== */

  const requestedService = searchParams.get("service");

  const defaultService = requestedService
    ? (serviceMap[requestedService] ?? "")
    : "";

  /* ===================================================
     START FORM TIMER
  =================================================== */

  const startFormTimer = () => {
    setFormStartedAt((current) => current ?? Date.now());
  };

  /* ===================================================
     FILE IDENTIFIER
  =================================================== */

  const getFileKey = (file: File) =>
    `${file.name}-${file.size}-${file.lastModified}`;

  /* ===================================================
     FILE CHANGE
  =================================================== */

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    /*
     * File selection itself is
     * user interaction.
     */
    startFormTimer();

    setError("");

    const incomingFiles = Array.from(event.target.files ?? []);

    if (incomingFiles.length === 0) {
      return;
    }

    /* ===============================================
       INDIVIDUAL FILE SIZE
    =============================================== */

    const oversizedFile = incomingFiles.find(
      (file) => file.size > MAX_FILE_SIZE,
    );

    if (oversizedFile) {
      event.target.value = "";

      setError(`${oversizedFile.name} is larger than 10 MB.`);

      return;
    }

    /* ===============================================
       REMOVE DUPLICATES
    =============================================== */

    const existingKeys = new Set(selectedFiles.map(getFileKey));

    const uniqueNewFiles = incomingFiles.filter(
      (file) => !existingKeys.has(getFileKey(file)),
    );

    const combinedFiles = [...selectedFiles, ...uniqueNewFiles];

    /* ===============================================
       MAXIMUM FILE COUNT
    =============================================== */

    if (combinedFiles.length > MAX_FILES) {
      event.target.value = "";

      setError(`You can attach a maximum of ${MAX_FILES} files.`);

      return;
    }

    /* ===============================================
       TOTAL FILE SIZE
    =============================================== */

    const totalSize = combinedFiles.reduce(
      (total, file) => total + file.size,
      0,
    );

    if (totalSize > MAX_TOTAL_SIZE) {
      event.target.value = "";

      setError("Total attachment size must not exceed 25 MB.");

      return;
    }

    setSelectedFiles(combinedFiles);

    /*
     * Clear the native input after
     * copying the files into state.
     *
     * This lets the visitor select
     * additional files later.
     */
    event.target.value = "";
  };

  /* ===================================================
     REMOVE ONE FILE
  =================================================== */

  const removeFile = (fileKey: string) => {
    setSelectedFiles((currentFiles) =>
      currentFiles.filter((file) => getFileKey(file) !== fileKey),
    );

    setError("");
  };

  /* ===================================================
     REMOVE ALL FILES
  =================================================== */

  const removeAllFiles = () => {
    setSelectedFiles([]);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    setError("");
  };

  /* ===================================================
     TOTAL FILE SIZE
  =================================================== */

  const totalFileSize = selectedFiles.reduce(
    (total, file) => total + file.size,
    0,
  );

  /* ===================================================
     SUBMIT FORM
  =================================================== */

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submitting) {
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      /* =============================================
         CREATE FORM DATA
      ============================================= */

      const formData = new FormData(event.currentTarget);

      /* =============================================
         ANTI-SPAM TIMESTAMP
      ============================================= */

      /*
       * Normally formStartedAt was set
       * when the visitor first interacted
       * with the form.
       *
       * Date.now() here is inside an event
       * handler, so React purity rules are
       * satisfied.
       */
      const startedAt = formStartedAt ?? Date.now();

      formData.set("formStartedAt", String(startedAt));

      /* =============================================
         MULTIPLE ATTACHMENTS
      ============================================= */

      formData.delete("attachments");

      selectedFiles.forEach((file) => {
        formData.append("attachments", file, file.name);
      });

      /* =============================================
         SEND TO API
      ============================================= */

      const response = await fetch("/api/contact", {
        method: "POST",

        body: formData,
      });

      /* =============================================
         READ RESPONSE
      ============================================= */

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to submit inquiry.");
      }

      /* =============================================
         SUCCESS
      ============================================= */

      setInquiryId(data.inquiryId ?? "");

      setSubmitted(true);

      setSelectedFiles([]);

      setFormStartedAt(null);

      formRef.current?.reset();

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (submitError) {
      console.error("Contact form error:", submitError);

      if (submitError instanceof Error) {
        setError(submitError.message);
      } else {
        setError("Unable to submit inquiry. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  /* ===================================================
     SUCCESS SCREEN
  =================================================== */

  if (submitted) {
    return (
      <div className="flex min-h-[540px] flex-col items-center justify-center rounded-3xl border border-sky-400/20 bg-[#08192b] p-8 text-center shadow-2xl shadow-black/20">
        {/* ICON */}

        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-sky-400/20 bg-sky-400/10 text-sky-400">
          <CheckCircle2 size={32} />
        </div>

        {/* LABEL */}

        <div className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
          Inquiry Received
        </div>

        {/* TITLE */}

        <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
          Thank You
        </h2>

        {/* MESSAGE */}

        <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
          Your project inquiry has been successfully sent to Unified Technical
          Services.
        </p>

        <p className="mt-2 max-w-md text-xs leading-6 text-slate-500">
          Our team will review your requirements and contact you using the
          information you provided.
        </p>

        {/* INQUIRY REFERENCE */}

        {inquiryId && (
          <div className="mt-6 rounded-xl border border-white/10 bg-[#020817]/60 px-5 py-3">
            <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">
              Inquiry Reference
            </div>

            <div className="mt-1 break-all font-mono text-xs text-sky-400">
              {inquiryId}
            </div>
          </div>
        )}

        {/* SUBMIT ANOTHER */}

        <button
          type="button"
          onClick={() => {
            setSubmitted(false);

            setInquiryId("");

            setError("");

            setSelectedFiles([]);

            setFormStartedAt(null);
          }}
          className="mt-7 rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-400/30 hover:bg-white/10"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  /* ===================================================
     FORM
  =================================================== */

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      onFocusCapture={startFormTimer}
      onChangeCapture={startFormTimer}
      encType="multipart/form-data"
      className="relative rounded-3xl border border-white/10 bg-[#08192b] p-5 shadow-2xl shadow-black/20 sm:p-7 lg:p-9"
    >
      {/* =============================================
          ANTI-SPAM HONEYPOT
      ============================================= */}

      <div
        aria-hidden="true"
        className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="website">Website</label>

        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* =============================================
          IMPORTANT

          There is intentionally NO hidden
          formStartedAt input here.

          It is appended to FormData inside
          handleSubmit().
      ============================================= */}

      {/* =============================================
          HEADER
      ============================================= */}

      <div className="border-b border-white/10 pb-7">
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
          Project Inquiry
        </div>

        <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
          Request a Consultation
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          Tell us about your project requirements and the technical services you
          need.
        </p>
      </div>

      {/* =============================================
          ERROR
      ============================================= */}

      {error && (
        <div
          role="alert"
          className="mt-6 flex items-start gap-3 rounded-xl border border-red-400/20 bg-red-400/[0.06] p-4"
        >
          <AlertCircle size={18} className="mt-0.5 shrink-0 text-red-400" />

          <div className="text-sm leading-6 text-red-200">{error}</div>
        </div>
      )}

      {/* =============================================
          FORM FIELDS
      ============================================= */}

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        {/* FULL NAME */}

        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-xs font-semibold text-slate-300"
          >
            Full Name <span className="text-sky-400">*</span>
          </label>

          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            maxLength={150}
            placeholder="Your full name"
            className="w-full rounded-xl border border-white/10 bg-[#020817]/60 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/10"
          />
        </div>

        {/* COMPANY */}

        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-xs font-semibold text-slate-300"
          >
            Company / Organization
          </label>

          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={200}
            placeholder="Company name"
            className="w-full rounded-xl border border-white/10 bg-[#020817]/60 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/10"
          />
        </div>

        {/* PHONE */}

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-xs font-semibold text-slate-300"
          >
            Phone Number <span className="text-sky-400">*</span>
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            maxLength={50}
            placeholder="+92 3XX XXXXXXX"
            className="w-full rounded-xl border border-white/10 bg-[#020817]/60 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/10"
          />
        </div>

        {/* EMAIL */}

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-xs font-semibold text-slate-300"
          >
            Email Address <span className="text-sky-400">*</span>
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={254}
            placeholder="name@company.com"
            className="w-full rounded-xl border border-white/10 bg-[#020817]/60 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/10"
          />
        </div>

        {/* SERVICE */}

        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-xs font-semibold text-slate-300"
          >
            Service Required <span className="text-sky-400">*</span>
          </label>

          <select
            key={defaultService}
            id="service"
            name="service"
            required
            defaultValue={defaultService}
            className="w-full rounded-xl border border-white/10 bg-[#020817] px-4 py-3.5 text-sm text-slate-300 outline-none transition focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/10"
          >
            <option value="" disabled>
              Select a service
            </option>

            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        {/* PROJECT LOCATION */}

        <div>
          <label
            htmlFor="location"
            className="mb-2 block text-xs font-semibold text-slate-300"
          >
            Project Location
          </label>

          <input
            id="location"
            name="location"
            type="text"
            maxLength={250}
            placeholder="City / Area"
            className="w-full rounded-xl border border-white/10 bg-[#020817]/60 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/10"
          />
        </div>

        {/* PROJECT DESCRIPTION */}

        <div className="sm:col-span-2">
          <label
            htmlFor="description"
            className="mb-2 block text-xs font-semibold text-slate-300"
          >
            Project Description <span className="text-sky-400">*</span>
          </label>

          <textarea
            id="description"
            name="description"
            required
            rows={6}
            maxLength={10000}
            placeholder="Briefly describe your project, requirements, scope or technical challenge..."
            className="w-full resize-none rounded-xl border border-white/10 bg-[#020817]/60 px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/10"
          />
        </div>

        {/* =========================================
            MULTIPLE ATTACHMENTS
        ========================================= */}

        <div className="sm:col-span-2">
          <div className="mb-2 flex items-center justify-between">
            <label className="block text-xs font-semibold text-slate-300">
              Project Attachments
            </label>

            {selectedFiles.length > 0 && (
              <span className="text-[10px] text-slate-500">
                {selectedFiles.length} file
                {selectedFiles.length > 1 ? "s" : ""}
              </span>
            )}
          </div>

          {/* FILE INPUT */}

          <input
            ref={fileInputRef}
            id="attachments"
            name="attachments"
            type="file"
            multiple
            className="hidden"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.xls,.xlsx,.zip,.rar,.kml,.kmz"
          />

          {/* UPLOAD AREA */}

          <label
            htmlFor="attachments"
            className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/15 bg-[#020817]/40 px-5 py-7 text-center transition hover:border-sky-400/40 hover:bg-sky-400/[0.03]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
              <FileUp size={23} />
            </div>

            <span className="mt-3 text-sm font-semibold text-slate-300">
              {selectedFiles.length > 0
                ? "Add More Files"
                : "Upload Project Documents"}
            </span>

            <span className="mt-1 text-xs leading-5 text-slate-500">
              PDF, Word, Excel, ZIP, RAR, KML or KMZ
            </span>

            <span className="mt-1 text-[10px] text-slate-600">
              Maximum 10 MB per file • 25 MB total • Up to {MAX_FILES} files
            </span>
          </label>

          {/* =======================================
              SELECTED FILE LIST
          ======================================= */}

          {selectedFiles.length > 0 && (
            <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-[#020817]/40">
              {/* HEADER */}

              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div>
                  <div className="text-xs font-bold text-slate-300">
                    Selected Attachments
                  </div>

                  <div className="mt-1 text-[10px] text-slate-500">
                    {(totalFileSize / 1024 / 1024).toFixed(2)} MB total
                  </div>
                </div>

                <button
                  type="button"
                  onClick={removeAllFiles}
                  className="text-[11px] font-semibold text-red-400 transition hover:text-red-300"
                >
                  Remove All
                </button>
              </div>

              {/* FILES */}

              <div className="divide-y divide-white/[0.06]">
                {selectedFiles.map((file, index) => {
                  const fileKey = getFileKey(file);

                  return (
                    <div
                      key={fileKey}
                      className="flex items-center justify-between gap-4 px-4 py-3"
                    >
                      {/* FILE INFO */}

                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-400/10 text-sky-400">
                          <FileText size={17} />
                        </div>

                        <div className="min-w-0">
                          <div className="truncate text-xs font-semibold text-slate-300">
                            {index + 1}. {file.name}
                          </div>

                          <div className="mt-1 text-[10px] text-slate-500">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </div>
                        </div>
                      </div>

                      {/* REMOVE */}

                      <button
                        type="button"
                        onClick={() => removeFile(fileKey)}
                        aria-label={`Remove ${file.name}`}
                        title="Remove attachment"
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 text-slate-500 transition hover:border-red-400/30 hover:bg-red-400/10 hover:text-red-400"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* =============================================
          SUBMIT BUTTON
      ============================================= */}

      <button
        type="submit"
        disabled={submitting}
        className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-4 text-sm font-bold text-white transition hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/20 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {submitting ? (
          <>
            <LoaderCircle size={17} className="animate-spin" />
            Sending Inquiry...
          </>
        ) : (
          <>
            <Send size={17} />
            Submit Project Inquiry
            <ArrowRight size={16} />
          </>
        )}
      </button>

      {/* NOTE */}

      <p className="mt-4 text-[11px] leading-5 text-slate-500">
        Required fields are marked with an asterisk (*). All selected project
        files will be included with the inquiry email.
      </p>
    </form>
  );
}

"use client";

import { useState } from "react";

import { ArrowRight, CheckCircle2, FileUp, Send } from "lucide-react";

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

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Temporary front-end success state.
    // Later we will connect this to an API/database/email service.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex min-h-[500px] flex-col items-center justify-center rounded-3xl border border-sky-400/20 bg-[#08192b] p-8 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-400/10 text-sky-400">
          <CheckCircle2 size={32} />
        </div>

        <h2 className="mt-6 text-2xl font-black text-white sm:text-3xl">
          Inquiry Prepared
        </h2>

        <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
          The form interface is working correctly. We&apos;ll connect actual
          submission and notification functionality in a later step.
        </p>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-7 rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-[#08192b] p-5 shadow-2xl shadow-black/20 sm:p-7 lg:p-9"
    >
      {/* FORM HEADER */}

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

      {/* FORM */}

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        {/* FULL NAME */}

        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-xs font-semibold text-slate-300"
          >
            Full Name
            <span className="text-sky-400"> *</span>
          </label>

          <input
            id="fullName"
            name="fullName"
            type="text"
            required
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
            Phone Number
            <span className="text-sky-400"> *</span>
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            required
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
            Email Address
            <span className="text-sky-400"> *</span>
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
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
            Service Required
            <span className="text-sky-400"> *</span>
          </label>

          <select
            id="service"
            name="service"
            required
            defaultValue=""
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

        {/* LOCATION */}

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
            placeholder="City / Area"
            className="w-full rounded-xl border border-white/10 bg-[#020817]/60 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/10"
          />
        </div>

        {/* DESCRIPTION */}

        <div className="sm:col-span-2">
          <label
            htmlFor="description"
            className="mb-2 block text-xs font-semibold text-slate-300"
          >
            Project Description
            <span className="text-sky-400"> *</span>
          </label>

          <textarea
            id="description"
            name="description"
            required
            rows={6}
            placeholder="Briefly describe your project, requirements, scope or technical challenge..."
            className="w-full resize-none rounded-xl border border-white/10 bg-[#020817]/60 px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/10"
          />
        </div>

        {/* ATTACHMENT */}

        <div className="sm:col-span-2">
          <label
            htmlFor="attachment"
            className="mb-2 block text-xs font-semibold text-slate-300"
          >
            Project Attachment
          </label>

          <label
            htmlFor="attachment"
            className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/15 bg-[#020817]/40 px-5 py-7 text-center transition hover:border-sky-400/40 hover:bg-sky-400/[0.03]"
          >
            <FileUp size={25} className="text-sky-400" />

            <span className="mt-3 text-sm font-semibold text-slate-300">
              Upload project documents
            </span>

            <span className="mt-1 text-xs text-slate-500">
              Drawings, GIS data, specifications or other supporting documents
            </span>

            <input
              id="attachment"
              name="attachment"
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx,.xls,.xlsx,.zip,.rar,.kml,.kmz"
            />
          </label>
        </div>
      </div>

      {/* SUBMIT */}

      <button
        type="submit"
        className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-4 text-sm font-bold text-white transition hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/20 sm:w-auto"
      >
        <Send size={17} />
        Submit Project Inquiry
        <ArrowRight size={16} />
      </button>

      <p className="mt-4 text-[11px] leading-5 text-slate-500">
        Required fields are marked with an asterisk (*).
      </p>
    </form>
  );
}

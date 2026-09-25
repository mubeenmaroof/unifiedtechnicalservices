import { siteConfig } from "@/data/site";

type WhatsAppOptions = {
  service?: string;
  packageName?: string;
  extraMessage?: string;
};

export function createWhatsAppUrl({
  service,
  packageName,
  extraMessage,
}: WhatsAppOptions = {}) {
  const whatsappNumber = siteConfig.contact.whatsapp.replace(/\D/g, "");

  const lines = [
    "Hello Unified Technical Services,",
    "",
    "I would like to discuss a project.",
  ];

  if (service) {
    lines.push("", `Service: ${service}`);
  }

  if (packageName) {
    lines.push(`Package: ${packageName}`);
  }

  if (extraMessage) {
    lines.push("", extraMessage);
  }

  lines.push("", "Please share more information. Thank you.");

  const message = encodeURIComponent(lines.join("\n"));

  return `https://wa.me/${whatsappNumber}?text=${message}`;
}

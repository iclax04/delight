import { business } from "@/data/business";

export function shopNumber(): string {
  return business.whatsappE164.replace(/\D/g, "");
}

export function phoneLabel(): string {
  if (business.phoneDisplay.trim()) return business.phoneDisplay.trim();
  const digits = shopNumber();
  return digits ? `+${digits}` : "";
}

export function whatsappUrl(text: string): string {
  const digits = shopNumber();
  const encoded = encodeURIComponent(text);
  if (digits) return `https://wa.me/${digits}?text=${encoded}`;
  return `https://wa.me/?text=${encoded}`;
}

export function orderMessage(
  lines: { name: string; color: string; qty: number }[],
): string {
  const items = lines
    .map((line, index) => `${index + 1}. ${line.name} — ${line.color} × ${line.qty}`)
    .join("\n");
  return [
    "Hello Delight Gadgets,",
    "I would like to order:",
    "",
    items || "(no items listed)",
    "",
    "Please confirm today's price in naira, whether each unit is new or UK-used, and availability.",
    "I am ordering from Anambra State, or I will tell you where to deliver.",
  ].join("\n");
}

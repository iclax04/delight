import { useEffect, useState } from "react";

function absolutize(value: unknown, origin: string): unknown {
  if (typeof value === "string") return value.startsWith("/") ? origin + value : value;
  if (Array.isArray(value)) return value.map((item) => absolutize(item, origin));
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [key, item] of Object.entries(value)) out[key] = absolutize(item, origin);
    return out;
  }
  return value;
}

export function JsonLd({ data }: { data: unknown }) {
  const [origin, setOrigin] = useState("");
  useEffect(() => setOrigin(window.location.origin), []);
  const payload = origin ? absolutize(data, origin) : data;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload).replace(/</g, "\\u003c") }}
    />
  );
}

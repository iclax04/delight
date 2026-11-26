import { useState, type FormEvent } from "react";
import { btn } from "@/lib/ui";

export function Newsletter({ id, tone = "navy" }: { id: string; tone?: "navy" | "card" }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const light = tone === "card";

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError("Enter a valid email address.");
      return;
    }
    const key = "delight-newsletter";
    const prev = JSON.parse(localStorage.getItem(key) || "[]") as { email: string; at: string }[];
    prev.push({ email: value, at: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(prev.slice(-100)));
    setError("");
    setDone(true);
  }

  if (done) {
    return (
      <p className={light ? "text-sm text-ink" : "text-sm text-paper"}>
        Saved on this device. Delight Gadgets will use it only for shop news, once email delivery is
        connected.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid w-full gap-2" noValidate>
      <div className="flex min-w-0 flex-col gap-2 sm:flex-row">
        <label className="sr-only" htmlFor={id}>
          Email address
        </label>
        <input
          id={id}
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={
            light
              ? "min-h-11 w-full min-w-0 flex-1 rounded-full border border-line bg-card px-4 text-ink outline-none"
              : "min-h-11 w-full min-w-0 flex-1 rounded-full bg-paper px-4 text-ink outline-none"
          }
        />
        <button type="submit" className={btn("primary", "shrink-0")}>
          Join the list
        </button>
      </div>
      {error ? (
        <p className={light ? "text-sm text-electric-deep" : "text-sm text-paper"}>{error}</p>
      ) : null}
    </form>
  );
}

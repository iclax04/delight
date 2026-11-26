import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { getProduct } from "@/data/catalog";
import { btn } from "@/lib/ui";
import { phoneLabel, shopNumber, whatsappUrl } from "@/lib/whatsapp";

type ContactSearch = { product?: string; intent?: "order" };

const mapQuery = "Spring Life Plaza Shop 9 St Joseph Cathedral Ekwulobia";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => {
    const result: ContactSearch = {};
    if (typeof search.product === "string" && search.product) result.product = search.product;
    if (search.intent === "order") result.intent = "order";
    return result;
  },
  head: () => ({
    meta: [
      { title: "Contact Delight Gadgets | Ekwulobia, Anambra" },
      {
        name: "description",
        content:
          "Visit Delight Gadgets at Spring Life Plaza, Shop 9, along St Joseph Cathedral, Ekwulobia. Call or WhatsApp to confirm today's price.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const search = Route.useSearch();
  const named = search.product ? getProduct(search.product) : undefined;
  const phone = phoneLabel();

  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-sm font-semibold tracking-widest text-electric-deep uppercase">Contact</p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-navy">Talk to Delight Gadgets</h1>
      <p className="mt-3 max-w-2xl text-muted">
        The shop is at Spring Life Plaza, Shop 9, along St Joseph Cathedral, Ekwulobia. Call or WhatsApp
        and we will confirm the device and today's price before you pay.
      </p>

      <section className="mt-8 max-w-xl rounded-3xl bg-card p-6 shadow-card">
        <h2 className="font-display text-xl font-semibold text-navy">Shop details</h2>
        <dl className="mt-4 space-y-4 text-sm">
          <div>
            <dt className="font-semibold text-navy">Address</dt>
            <dd className="text-muted">
              {business.street}
              <br />
              {business.city}, Anambra State, Nigeria
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-navy">Phone</dt>
            <dd>
              {phone ? (
                <a className="text-electric-deep" href={`tel:+${shopNumber()}`}>
                  {phone}
                </a>
              ) : (
                <span className="text-muted">A public phone number has not been added yet.</span>
              )}
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-navy">Opening hours</dt>
            {business.hours.length > 0 ? (
              <dd>
                <ul className="mt-1 space-y-1 text-muted">
                  {business.hours.map((row) => (
                    <li key={row.days}>
                      {row.days}: {row.hours}
                    </li>
                  ))}
                </ul>
              </dd>
            ) : (
              <dd className="text-muted">
                A weekly timetable has not been published. Message us before you travel.
              </dd>
            )}
          </div>
        </dl>
        <a
          className={btn("primary", "mt-6")}
          href={whatsappUrl(
            named
              ? `Hello Delight Gadgets, I want to order the ${named.name}. Please confirm today's price in naira.`
              : "Hello Delight Gadgets, I would like to ask about a device. Please confirm today's price in naira.",
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp the shop
        </a>
      </section>

      <section className="mt-8">
        <h2 className="font-display text-2xl font-semibold text-navy">Map</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Spring Life Plaza, Shop 9, along St Joseph Cathedral, Ekwulobia.
        </p>
        <iframe
          title="Map of Delight Gadgets, Spring Life Plaza, Ekwulobia"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=16&output=embed`}
          className="mt-4 h-80 w-full rounded-3xl border-0 shadow-card"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  );
}

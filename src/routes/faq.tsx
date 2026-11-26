import { createFileRoute, Link } from "@tanstack/react-router";
import { faqs } from "@/data/faq";
import { JsonLd } from "@/components/json-ld";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Phone Shop in Anambra | Delight Gadgets" },
      {
        name: "description",
        content:
          "Questions about buying smartphones, iPhones, laptops and accessories from Delight Gadgets in Anambra State. Prices, delivery, warranty and how to order.",
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <main id="main" className="mx-auto max-w-3xl px-4 py-12">
      <JsonLd data={schema} />
      <p className="text-sm font-semibold tracking-widest text-electric-deep uppercase">Help</p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-navy">
        Questions about shopping for gadgets in Anambra
      </h1>
      <p className="mt-3 text-muted">
        Straight answers. If yours is not here,{" "}
        <Link to="/contact" className="font-semibold text-electric-deep">
          send a message
        </Link>
        .
      </p>
      <div className="mt-8 divide-y divide-line rounded-3xl bg-card px-5 shadow-card">
        {faqs.map((item) => (
          <details key={item.q} className="py-1">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-3 font-display text-lg font-semibold text-navy">
              <h2 className="text-lg font-semibold">{item.q}</h2>
            </summary>
            <p className="pb-4 text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </main>
  );
}

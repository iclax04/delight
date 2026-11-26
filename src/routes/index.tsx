import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, MessageCircle, ShieldCheck, Truck } from "lucide-react";
import { faqs } from "@/data/faq";
import { categories, products } from "@/data/catalog";
import { ProductCard } from "@/components/product-card";
import { btn } from "@/lib/ui";
import { whatsappUrl } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gadgets in Anambra State | Delight Gadgets" },
      {
        name: "description",
        content:
          "Phone shop in Anambra for quality smartphones, iPhones, laptops, electronics and accessories. Delight Gadgets confirms today's naira price before you pay.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const best = products.filter((product) => product.badge === "Best seller");

  return (
    <main id="main">
      <section className="mx-auto max-w-6xl px-4 pt-6 md:pt-10">
        <div className="grid overflow-hidden rounded-3xl bg-navy text-paper md:grid-cols-2">
          <div className="rise flex flex-col justify-center px-6 py-10 md:px-12 md:py-16">
            <h1 className="font-display text-4xl leading-tight font-semibold sm:text-5xl">
              Discover Quality Gadgets. Experience More.
            </h1>
            <p className="mt-4 max-w-md text-lg text-paper/80">
              Your trusted destination for quality smartphones, laptops, electronics and accessories in
              Anambra State.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop" className={btn("primary")}>
                Shop now
              </Link>
              <Link to="/contact" className={btn("ghost")}>
                Contact us
              </Link>
            </div>
          </div>
          <img
            src="/images/hero.jpg"
            alt="Flagship smartphone and silver laptop on a stone surface"
            width={1792}
            height={1008}
            fetchPriority="high"
            className="h-72 w-full object-cover object-right md:h-full"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-semibold text-navy">Featured categories</h2>
            <p className="mt-2 max-w-xl text-muted">
              A phone shop in Anambra for smartphones, laptops and the accessories that go with them.
            </p>
          </div>
          <Link to="/shop" className="hidden font-semibold text-electric-deep md:inline">
            View the full shop
          </Link>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-5">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                to="/shop"
                search={{ category: category.id }}
                className="block overflow-hidden rounded-2xl bg-card shadow-card"
              >
                <img
                  src={category.image}
                  alt={category.alt}
                  width={600}
                  height={600}
                  loading="lazy"
                  className="aspect-square w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
                />
                <span className="block px-3 py-3 font-display text-sm font-semibold text-navy">
                  {category.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="font-display text-3xl font-semibold text-navy">Best-selling products</h2>
        <p className="mt-2 max-w-xl text-muted">
          The devices people ask for first. Prices are confirmed on WhatsApp, not guessed on the page.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {best.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid overflow-hidden rounded-3xl bg-navy text-paper md:grid-cols-2">
          <div className="px-6 py-10 md:px-12 md:py-14">
            <h2 className="font-display text-3xl font-semibold">Special offers</h2>
            <p className="mt-3 max-w-md text-paper/80">
              We do not print a discount we cannot stand behind. Ask about a case with your phone, or a
              charger with a laptop, and we will confirm today's naira total before you pay.
            </p>
            <a
              className={btn("primary", "mt-6")}
              href={whatsappUrl(
                "Hello Delight Gadgets, I would like to ask about current offers and today's prices in naira.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ask about an offer
            </a>
          </div>
          <img
            src="/images/offers.jpg"
            alt="Charger, power bank, cable and phone case on a stone table"
            width={1792}
            height={1008}
            loading="lazy"
            className="h-64 w-full object-cover md:h-full"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="font-display text-3xl font-semibold text-navy">Why shop with us</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: ShieldCheck,
              title: "Quality you can ask about",
              body: "We say whether a unit is new or UK-used before you pay. No silent swaps.",
            },
            {
              icon: BadgeCheck,
              title: "Customer care",
              body: "Tell us what you use the device for and we will help you compare what is actually in reach.",
            },
            {
              icon: MessageCircle,
              title: "A fair naira price",
              body: "Affordable means the price we confirm today, not a stale number left on a page.",
            },
            {
              icon: Truck,
              title: "Anambra and beyond",
              body: "Shop from Anambra State, or ask about delivery further out. We confirm it with the order.",
            },
          ].map((item) => (
            <li key={item.title} className="rounded-2xl bg-card p-5 shadow-card">
              <item.icon className="size-5 text-electric-deep" aria-hidden="true" />
              <h3 className="mt-3 font-display text-lg font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl bg-card p-6 shadow-card md:p-10">
          <h2 className="font-display text-3xl font-semibold text-navy">Customer reviews</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Delight Gadgets does not publish reviews we cannot verify. There are no customer reviews on
            this site yet. After a real order, you can send feedback and we will only show it once it is
            checked.
          </p>
          <Link to="/contact" className={btn("navy", "mt-6")}>
            Contact the shop
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="font-display text-3xl font-semibold text-navy">Questions before you buy</h2>
        <div className="mt-6 divide-y divide-line rounded-2xl bg-card px-5 shadow-card">
          {faqs.slice(0, 4).map((item) => (
            <details key={item.q} className="group py-1">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-3 font-display text-lg font-semibold text-navy">
                {item.q}
                <span className="text-electric-deep" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="pb-4 text-muted">{item.a}</p>
            </details>
          ))}
        </div>
        <Link to="/faq" className="mt-4 inline-flex min-h-11 items-center font-semibold text-electric-deep">
          Read all questions
        </Link>
      </section>
    </main>
  );
}

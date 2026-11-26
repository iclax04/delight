import { createFileRoute, Link } from "@tanstack/react-router";
import { btn } from "@/lib/ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Delight Gadgets | Electronics Store in Anambra" },
      {
        name: "description",
        content:
          "Delight Gadgets is a trusted gadget retailer in Anambra State. Quality smartphones, laptops and accessories, fair naira prices, and service you can actually reach.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-sm font-semibold tracking-widest text-electric-deep uppercase">About us</p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-navy">Delight Gadgets</h1>
      <p className="mt-4 text-lg text-muted">
        Delight Gadgets is a gadget and electronics retailer for people in Anambra State, and for customers
        who order from further away. We sell smartphones, laptops, tablets, smartwatches, audio and phone
        accessories.
      </p>

      <img
        src="/images/hero.jpg"
        alt="Smartphone and laptop displayed the way Delight Gadgets presents its devices"
        width={1792}
        height={1008}
        className="mt-8 w-full rounded-3xl object-cover shadow-card"
      />

      <h2 className="mt-10 font-display text-2xl font-semibold text-navy">Product quality</h2>
      <p className="mt-3 text-muted">
        A phone is not a mystery box. We write the specification we know, and we say what still has to be
        confirmed: storage, colour, and whether the unit is new or UK-used. If we are not sure, we say so
        before you pay.
      </p>

      <h2 className="mt-8 font-display text-2xl font-semibold text-navy">Affordability</h2>
      <p className="mt-3 text-muted">
        People in Anambra should be able to buy a solid phone or laptop without a stale price sitting on a
        website. Naira prices move. We confirm today's figure with you, including any case or charger you
        add, so “affordable” means a number you agreed to — not a guess.
      </p>

      <h2 className="mt-8 font-display text-2xl font-semibold text-navy">Customer satisfaction</h2>
      <p className="mt-3 text-muted">
        Tell us what the device is for: school, a shop, content, or simply a phone that lasts the day. We
        would rather point you to a simpler model than push a flagship you do not need. We also do not
        publish customer reviews we cannot verify. There are none on this site yet.
      </p>

      <h2 className="mt-8 font-display text-2xl font-semibold text-navy">Reliable service</h2>
      <p className="mt-3 text-muted">
        Orders go through WhatsApp, so there is a written list of what you asked for. Warranty follows the unit, not a slogan. The shop is at Spring Life Plaza, Shop 9, along St Joseph Cathedral, Ekwulobia.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/shop" className={btn("navy")}>
          Shop now
        </Link>
        <Link to="/contact" className={btn("line")}>
          Contact us
        </Link>
      </div>
    </main>
  );
}

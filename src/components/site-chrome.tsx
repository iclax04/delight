import { Link, useNavigate, useRouter, useRouterState } from "@tanstack/react-router";
import { ArrowLeft, Menu, MessageCircle, Search, X } from "lucide-react";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Toaster } from "sonner";
import { business, STORE_BLURB } from "@/data/business";
import { JsonLd } from "@/components/json-ld";
import { phoneLabel, shopNumber, whatsappUrl } from "@/lib/whatsapp";

const nav = [
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteChrome({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const router = useRouter();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const phone = phoneLabel();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function onSearch(event: FormEvent) {
    event.preventDefault();
    setOpen(false);
    void navigate({ to: "/shop", search: { q: query.trim() || undefined } });
  }

  function goBack() {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.history.back();
      return;
    }
    void navigate({ to: "/" });
  }

  const storeSchema = {
    "@context": "https://schema.org",
    "@type": "ElectronicsStore",
    name: business.name,
    description: STORE_BLURB,
    url: "/",
    image: "/images/hero.jpg",
    areaServed: "Anambra State, Nigeria",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Anambra",
      addressCountry: "NG",
      ...(business.street ? { streetAddress: business.street } : {}),
      ...(business.city ? { addressLocality: business.city } : {}),
    },
    ...(phone ? { telephone: phone } : {}),
    ...(business.email ? { email: business.email } : {}),
    openingHours: "Mo-Su 00:00-23:59",
  };

  return (
    <>
      <JsonLd data={storeSchema} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-card focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <div className="bg-navy text-paper">
        <p className="mx-auto max-w-6xl px-4 py-2 text-center text-sm">
          Anambra State · Smartphones, laptops and accessories · Today's price confirmed before you pay
        </p>
      </div>
      <header className="sticky top-0 z-40 border-b border-line bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          {pathname !== "/" ? (
            <button
              type="button"
              onClick={goBack}
              className="inline-flex min-h-11 shrink-0 items-center gap-1 rounded-full text-sm font-semibold text-navy"
            >
              <ArrowLeft className="size-5" aria-hidden="true" />
              Back
            </button>
          ) : null}
          <Link to="/" className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-lg bg-navy font-display text-base font-semibold text-paper">
              D
            </span>
            <span className="leading-tight">
              <span className="block font-display text-base font-semibold text-navy">Delight</span>
              <span className="block text-xs tracking-widest text-muted uppercase">Gadgets</span>
            </span>
          </Link>
          <nav className="ml-6 hidden items-center gap-5 md:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-semibold text-ink hover:text-electric-deep"
                activeOptions={{ exact: item.to === "/shop" ? false : true }}
                activeProps={{ className: "text-electric-deep" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <form onSubmit={onSearch} className="ml-auto hidden min-w-0 flex-1 md:block md:max-w-xs" role="search">
            <label className="sr-only" htmlFor="header-search">
              Search gadgets
            </label>
            <div className="flex items-center gap-2 rounded-full border border-line bg-paper px-3">
              <Search className="size-4 text-muted" aria-hidden="true" />
              <input
                id="header-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search phones, laptops…"
                className="min-h-11 w-full bg-transparent text-sm outline-none"
              />
            </div>
          </form>
          <button
            type="button"
            className="ml-auto inline-flex size-11 items-center justify-center rounded-full text-navy md:ml-0"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {open ? (
          <div className="border-t border-line bg-card px-4 py-3">
            <nav className="flex flex-col" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex min-h-11 items-center text-base font-semibold text-navy"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </header>
      {children}
      <footer className="mt-16 border-t border-line bg-navy text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3 md:*:min-w-0">
          <div className="md:col-span-1">
            <p className="font-display text-xl font-semibold">Delight Gadgets</p>
            <p className="mt-2 text-sm text-paper/80">
              Electronics store in Anambra State. Quality phones, laptops and accessories, with the price
              confirmed before you pay.
            </p>
          </div>
          <div>
            <h2 className="font-display text-sm font-semibold tracking-widest uppercase">Browse</h2>
            <ul className="mt-3 space-y-2 text-sm text-paper/80">
              <li>
                <Link to="/shop" search={{ category: "smartphones" }} className="hover:text-paper">
                  Buy smartphones in Anambra
                </Link>
              </li>
              <li>
                <Link to="/shop" search={{ category: "iphones" }} className="hover:text-paper">
                  Buy iPhones in Anambra
                </Link>
              </li>
              <li>
                <Link to="/shop" search={{ category: "android" }} className="hover:text-paper">
                  Affordable phones in Anambra
                </Link>
              </li>
              <li>
                <Link to="/shop" search={{ category: "laptops" }} className="hover:text-paper">
                  Laptop shop in Anambra
                </Link>
              </li>
              <li>
                <Link to="/shop" search={{ category: "accessories" }} className="hover:text-paper">
                  Phone accessories in Anambra
                </Link>
              </li>
            </ul>
          </div>
          <div className="min-w-0">
            <h2 className="font-display text-sm font-semibold tracking-widest uppercase">Visit</h2>
            <ul className="mt-3 space-y-2 text-sm text-paper/80">
              <li>Spring Life Plaza, Shop 9</li>
              <li>Along St Joseph Cathedral, Ekwulobia</li>
              <li>Anambra State, Nigeria</li>
              <li>
                <a href={`tel:+${shopNumber()}`} className="hover:text-paper">
                  {phone}
                </a>
              </li>
              <li>
                <Link to="/about" className="hover:text-paper">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-paper">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-paper">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="/sitemap.xml" className="hover:text-paper">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-paper/15">
          <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-paper/70">
            © {new Date().getFullYear()} Delight Gadgets. Anambra State, Nigeria.
          </p>
        </div>
      </footer>
      <a
        href={whatsappUrl(
          "Hello Delight Gadgets, I am looking for gadgets in Anambra State. Please confirm what you have and today's price in naira.",
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-4 z-30 inline-flex min-h-11 items-center gap-2 rounded-full bg-electric-deep px-4 font-display text-sm font-semibold text-on-electric shadow-card"
      >
        <MessageCircle className="size-4" aria-hidden="true" />
        WhatsApp
        {shopNumber() ? null : <span className="sr-only"> Opens WhatsApp with a message ready to send.</span>}
      </a>
      <Toaster position="top-center" />
    </>
  );
}

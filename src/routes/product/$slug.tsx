import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { formatNaira, getProduct, relatedProducts } from "@/data/catalog";
import { JsonLd } from "@/components/json-ld";
import { ProductCard } from "@/components/product-card";
import { btn } from "@/lib/ui";
import { orderMessage, whatsappUrl } from "@/lib/whatsapp";

export const Route = createFileRoute("/product/$slug")({
  beforeLoad: ({ params }) => {
    if (!getProduct(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) {
      return { meta: [{ title: "Product not found | Delight Gadgets" }] };
    }
    return {
      meta: [
        { title: `Buy ${product.name} in Anambra | Delight Gadgets` },
        {
          name: "description",
          content: `${product.summary} Available to order from Delight Gadgets, a phone and electronics shop in Anambra State. Price confirmed in naira.`,
        },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useParams();
  const product = getProduct(slug);
  const [color, setColor] = useState(product?.colors[0]?.name ?? "Default");
  const [qty, setQty] = useState(1);

  if (!product) return null;

  const related = relatedProducts(product.slug);
  const price = product.priceNaira == null ? "Confirm today's price in naira" : formatNaira(product.priceNaira);
  const message = orderMessage([{ name: product.name, color, qty }]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    brand: { "@type": "Brand", name: product.brand },
    category: product.categories[0],
    ...(product.priceNaira == null
      ? {}
      : {
          offers: {
            "@type": "Offer",
            priceCurrency: "NGN",
            price: product.priceNaira,
            availability: "https://schema.org/InStock",
            url: `/product/${product.slug}`,
          },
        }),
  };

  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className="text-sm text-muted">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link to="/" className="hover:text-navy">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link to="/shop" className="hover:text-navy">
              Shop
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-navy">{product.name}</li>
        </ol>
      </nav>

      <div className="mt-6 grid items-start gap-8 md:grid-cols-2">
        <img
          src={product.image}
          alt={product.imageAlt}
          width={1200}
          height={1200}
          className="w-full rounded-3xl bg-card object-cover shadow-card outline outline-1 -outline-offset-1 outline-ink/10"
        />
        <div>
          <p className="text-sm font-semibold tracking-widest text-muted uppercase">{product.brand}</p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-navy">{product.name}</h1>
          <p className="mt-4 font-display text-xl font-semibold text-electric-deep">{price}</p>
          <p className="mt-2 text-sm font-semibold text-navy">Available to order</p>
          <p className="mt-3 text-muted">{product.summary}</p>
          <p className="mt-3 text-sm text-muted">
            Photos show the type of device. Storage, colour, condition (new or UK-used) and today's
            naira price are confirmed before you pay.
          </p>

          <fieldset className="mt-6">
            <legend className="text-sm font-semibold text-navy">Colour</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.colors.map((item) => {
                const selected = item.name === color;
                return (
                  <button
                    key={item.name}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setColor(item.name)}
                    className={
                      selected
                        ? "inline-flex min-h-11 items-center gap-2 rounded-full bg-navy px-3 text-sm font-semibold text-paper"
                        : "inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-card px-3 text-sm font-semibold text-navy"
                    }
                  >
                    <span
                      className="size-3 rounded-full border border-line"
                      style={{ background: item.hex }}
                      aria-hidden="true"
                    />
                    {item.name}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-5 flex items-center gap-3">
            <span className="text-sm font-semibold text-navy">Quantity</span>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-card"
              onClick={() => setQty((value) => Math.max(1, value - 1))}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="w-6 text-center tabular-nums">{qty}</span>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-card"
              onClick={() => setQty((value) => Math.min(9, value + 1))}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          <div className="mt-6">
            <a className={btn("primary")} href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">
              Order via WhatsApp
            </a>
          </div>
        </div>
      </div>

      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-semibold text-navy">Description</h2>
          <p className="mt-3 text-muted">{product.description}</p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-navy">Specifications</h2>
          <dl className="mt-3 divide-y divide-line rounded-2xl bg-card px-4 shadow-card">
            {product.specs.map((spec) => (
              <div key={spec.label} className="grid gap-1 py-3 sm:grid-cols-2">
                <dt className="text-sm font-semibold text-navy">{spec.label}</dt>
                <dd className="text-sm text-muted">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-navy">You may also need</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}

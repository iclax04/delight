import { createFileRoute, Link } from "@tanstack/react-router";
import { formatNaira, getProduct } from "@/data/catalog";
import { useCart, useCartReady } from "@/lib/cart";
import { btn } from "@/lib/ui";
import { orderMessage, shopNumber, whatsappUrl } from "@/lib/whatsapp";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart | Delight Gadgets" },
      {
        name: "description",
        content: "Review your Delight Gadgets cart and send the order on WhatsApp for a confirmed naira price.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const ready = useCartReady();
  const lines = useCart((state) => state.lines);
  const setQty = useCart((state) => state.setQty);
  const remove = useCart((state) => state.remove);
  const clear = useCart((state) => state.clear);

  const detailed = lines.map((line) => ({
    line,
    product: getProduct(line.slug),
  }));
  const priced = detailed.every((item) => item.product && item.product.priceNaira != null);
  const total = priced
    ? detailed.reduce((sum, item) => sum + (item.product?.priceNaira ?? 0) * item.line.qty, 0)
    : null;
  const message = orderMessage(
    detailed.map((item) => ({
      name: item.product?.name ?? item.line.slug,
      color: item.line.color,
      qty: item.line.qty,
    })),
  );

  return (
    <main id="main" className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="font-display text-4xl font-semibold text-navy">Your cart</h1>
      {!ready ? <p className="mt-4 text-muted">Loading your cart…</p> : null}
      {ready && lines.length === 0 ? (
        <div className="mt-6 rounded-3xl bg-card p-8 shadow-card">
          <p className="text-muted">Your cart is empty. Browse the shop and add a device.</p>
          <Link to="/shop" className={btn("navy", "mt-5")}>
            Shop now
          </Link>
        </div>
      ) : null}
      {ready && lines.length > 0 ? (
        <div className="mt-6 grid gap-6">
          <ul className="divide-y divide-line rounded-3xl bg-card px-4 shadow-card">
            {detailed.map(({ line, product }) => (
              <li key={`${line.slug}-${line.color}`} className="flex gap-4 py-4">
                {product ? (
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    width={96}
                    height={96}
                    className="size-24 rounded-xl object-cover"
                  />
                ) : (
                  <div className="size-24 rounded-xl bg-paper" />
                )}
                <div className="min-w-0 flex-1">
                  <h2 className="font-display text-lg font-semibold text-navy">
                    {product ? (
                      <Link to="/product/$slug" params={{ slug: product.slug }}>
                        {product.name}
                      </Link>
                    ) : (
                      "This item is no longer listed"
                    )}
                  </h2>
                  <p className="text-sm text-muted">{line.color}</p>
                  <p className="mt-1 text-sm font-semibold text-electric-deep">
                    {product?.priceNaira == null ? "Price confirmed on WhatsApp" : formatNaira(product.priceNaira)}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      type="button"
                      className="inline-flex size-11 items-center justify-center rounded-full border border-line"
                      aria-label="Decrease quantity"
                      onClick={() =>
                        line.qty <= 1
                          ? remove(line.slug, line.color)
                          : setQty(line.slug, line.color, line.qty - 1)
                      }
                    >
                      −
                    </button>
                    <span className="w-6 text-center tabular-nums">{line.qty}</span>
                    <button
                      type="button"
                      className="inline-flex size-11 items-center justify-center rounded-full border border-line"
                      aria-label="Increase quantity"
                      onClick={() => setQty(line.slug, line.color, line.qty + 1)}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="ml-auto text-sm font-semibold text-electric-deep"
                      onClick={() => remove(line.slug, line.color)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <aside className="rounded-3xl bg-navy p-6 text-paper">
            <h2 className="font-display text-xl font-semibold">Order</h2>
            <p className="mt-2 text-sm text-paper/80">
              {total == null
                ? "The total is confirmed on WhatsApp. We have not published prices for these items."
                : `Total ${formatNaira(total)}`}
            </p>
            <a
              className={btn("primary", "mt-5 w-full")}
              href={whatsappUrl(message)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Checkout on WhatsApp
            </a>
            {!shopNumber() ? (
              <p className="mt-3 text-sm text-paper/75">
                No shop number is published yet. WhatsApp will open with this order written out.
              </p>
            ) : null}
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <Link to="/shop" className="font-semibold text-paper">
                Continue shopping
              </Link>
              <button type="button" className="font-semibold text-paper/80" onClick={() => clear()}>
                Clear cart
              </button>
            </div>
          </aside>
        </div>
      ) : null}
    </main>
  );
}

import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/catalog";
import { formatNaira } from "@/data/catalog";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl bg-card p-2 shadow-card transition-[box-shadow] duration-200 hover:shadow-card-hover">
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="relative block overflow-hidden rounded-xl bg-paper"
      >
        <img
          src={product.image}
          alt={product.imageAlt}
          width={800}
          height={800}
          loading="lazy"
          className="aspect-square w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-105"
        />
        {product.badge ? (
          <span className="absolute top-3 left-3 rounded-full bg-navy px-2.5 py-1 font-display text-xs font-semibold text-paper">
            {product.badge}
          </span>
        ) : null}
      </Link>
      <div className="flex flex-1 flex-col px-2 pt-3 pb-2">
        <p className="text-xs font-semibold tracking-widest text-muted uppercase">{product.brand}</p>
        <h3 className="mt-1 font-display text-lg leading-snug font-semibold text-navy">
          <Link to="/product/$slug" params={{ slug: product.slug }} className="hover:text-electric-deep">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm font-semibold text-electric-deep">
          {product.priceNaira == null ? "Confirm today's price" : formatNaira(product.priceNaira)}
        </p>
        <p className="mt-1 text-sm text-muted">Available to order</p>
        <div className="mt-auto pt-3">
          <Link
            to="/product/$slug"
            params={{ slug: product.slug }}
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-navy px-3 font-display text-sm font-semibold text-paper hover:bg-electric-deep"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
}

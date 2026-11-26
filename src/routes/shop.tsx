import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { categories, filterProducts, getCategory, type SortKey } from "@/data/catalog";
import { ProductCard } from "@/components/product-card";

type ShopSearch = {
  q?: string;
  category?: string;
  sort?: SortKey;
};

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>): ShopSearch => {
    const result: ShopSearch = {};
    if (typeof search.q === "string" && search.q.trim()) result.q = search.q.trim();
    if (typeof search.category === "string" && search.category) result.category = search.category;
    if (search.sort === "az" || search.sort === "za") result.sort = search.sort;
    return result;
  },
  head: ({ match }) => {
    const category = match.search.category ? getCategory(match.search.category) : undefined;
    const title = category
      ? `${category.name} in Anambra | Delight Gadgets`
      : "Phone Shop in Anambra | Buy Smartphones and Laptops | Delight Gadgets";
    const description = category
      ? `${category.blurb} Shop ${category.name.toLowerCase()} at Delight Gadgets in Anambra State. Price confirmed in naira before you pay.`
      : "Buy smartphones, iPhones, Android phones, laptops and phone accessories in Anambra. Delight Gadgets is an electronics store with prices confirmed before you pay.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
      ],
    };
  },
  component: ShopPage,
});

function ShopPage() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/shop" });
  const [q, setQ] = useState(search.q ?? "");
  const category = getCategory(search.category ?? "");
  const sort = search.sort ?? "featured";
  const list = filterProducts({ q: search.q, category: search.category, sort });

  useEffect(() => {
    setQ(search.q ?? "");
  }, [search.q]);

  function onSearch(event: FormEvent) {
    event.preventDefault();
    void navigate({
      search: {
        q: q.trim() || undefined,
        category: search.category,
        sort: search.sort,
      },
    });
  }

  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-sm font-semibold tracking-widest text-electric-deep uppercase">
        Gadgets in Anambra State
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-navy">
        {category ? category.name : "Shop phones, laptops and electronics"}
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        {category
          ? category.blurb
          : "A phone shop in Anambra for iPhones, Android phones, laptops, tablets, watches, audio and accessories. Search, filter, and confirm today's price before you pay."}
      </p>

      <form onSubmit={onSearch} className="mt-6 flex flex-col gap-2 sm:flex-row" role="search">
        <label className="sr-only" htmlFor="shop-search">
          Search products
        </label>
        <input
          id="shop-search"
          value={q}
          onChange={(event) => setQ(event.target.value)}
          placeholder="Search iPhone, MacBook, charger…"
          className="min-h-11 flex-1 rounded-full border border-line bg-card px-4"
        />
        <button
          type="submit"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-navy px-5 font-display text-sm font-semibold text-paper"
        >
          Search
        </button>
      </form>

      <div className="mt-5 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Categories">
        <Link
          to="/shop"
          search={{ q: search.q, sort: search.sort }}
          className={
            search.category
              ? "inline-flex min-h-11 shrink-0 items-center rounded-full border border-line bg-card px-4 text-sm font-semibold text-navy"
              : "inline-flex min-h-11 shrink-0 items-center rounded-full bg-navy px-4 text-sm font-semibold text-paper"
          }
        >
          All
        </Link>
        {categories.map((item) => {
          const active = search.category === item.id;
          return (
            <Link
              key={item.id}
              to="/shop"
              search={{ category: item.id, q: search.q, sort: search.sort }}
              className={
                active
                  ? "inline-flex min-h-11 shrink-0 items-center rounded-full bg-navy px-4 text-sm font-semibold text-paper"
                  : "inline-flex min-h-11 shrink-0 items-center rounded-full border border-line bg-card px-4 text-sm font-semibold text-navy"
              }
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted">
          {list.length} {list.length === 1 ? "device" : "devices"}
          {search.category && !category ? " — that category is not listed" : ""}
        </p>
        <label className="flex items-center gap-2 text-sm font-semibold text-navy">
          Sort
          <select
            value={sort}
            onChange={(event) => {
              const next = event.target.value as SortKey;
              void navigate({
                search: {
                  q: search.q,
                  category: search.category,
                  sort: next === "featured" ? undefined : next,
                },
              });
            }}
            className="min-h-11 rounded-full border border-line bg-card px-3 font-sans font-normal"
          >
            <option value="featured">Featured</option>
            <option value="az">Name A–Z</option>
            <option value="za">Name Z–A</option>
          </select>
        </label>
      </div>

      {list.length === 0 ? (
        <div className="mt-8 rounded-2xl bg-card p-8 shadow-card">
          <h2 className="font-display text-2xl font-semibold text-navy">Nothing matches that search.</h2>
          <p className="mt-2 text-muted">
            Try another word, or tell us the device you want and we will say if we can get it.
          </p>
          <Link to="/shop" className="mt-4 inline-flex min-h-11 items-center font-semibold text-electric-deep">
            Clear filters
          </Link>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {list.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}

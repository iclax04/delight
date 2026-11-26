import { i as __toESM } from "../_runtime.mjs";
import { S as useNavigate, Z as require_react, w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as categories, h as getCategory, p as filterProducts, r as Route$2 } from "./router-CVXJB6hA.mjs";
import { t as ProductCard } from "./product-card-BDQC1Vdy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-DsRQBDtm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ShopPage() {
	const search = Route$2.useSearch();
	const navigate = useNavigate({ from: "/shop" });
	const [q, setQ] = (0, import_react.useState)(search.q ?? "");
	const category = getCategory(search.category ?? "");
	const sort = search.sort ?? "featured";
	const list = filterProducts({
		q: search.q,
		category: search.category,
		sort
	});
	(0, import_react.useEffect)(() => {
		setQ(search.q ?? "");
	}, [search.q]);
	function onSearch(event) {
		event.preventDefault();
		navigate({ search: {
			q: q.trim() || void 0,
			category: search.category,
			sort: search.sort
		} });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold tracking-widest text-electric-deep uppercase",
				children: "Gadgets in Anambra State"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold text-navy",
				children: category ? category.name : "Shop phones, laptops and electronics"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: category ? category.blurb : "A phone shop in Anambra for iPhones, Android phones, laptops, tablets, watches, audio and accessories. Search, filter, and confirm today's price before you pay."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: onSearch,
				className: "mt-6 flex flex-col gap-2 sm:flex-row",
				role: "search",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "sr-only",
						htmlFor: "shop-search",
						children: "Search products"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "shop-search",
						value: q,
						onChange: (event) => setQ(event.target.value),
						placeholder: "Search iPhone, MacBook, charger…",
						className: "min-h-11 flex-1 rounded-full border border-line bg-card px-4"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "inline-flex min-h-11 items-center justify-center rounded-full bg-navy px-5 font-display text-sm font-semibold text-paper",
						children: "Search"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex gap-2 overflow-x-auto pb-1",
				role: "tablist",
				"aria-label": "Categories",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					search: {
						q: search.q,
						sort: search.sort
					},
					className: search.category ? "inline-flex min-h-11 shrink-0 items-center rounded-full border border-line bg-card px-4 text-sm font-semibold text-navy" : "inline-flex min-h-11 shrink-0 items-center rounded-full bg-navy px-4 text-sm font-semibold text-paper",
					children: "All"
				}), categories.map((item) => {
					const active = search.category === item.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						search: {
							category: item.id,
							q: search.q,
							sort: search.sort
						},
						className: active ? "inline-flex min-h-11 shrink-0 items-center rounded-full bg-navy px-4 text-sm font-semibold text-paper" : "inline-flex min-h-11 shrink-0 items-center rounded-full border border-line bg-card px-4 text-sm font-semibold text-navy",
						children: item.name
					}, item.id);
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						list.length,
						" ",
						list.length === 1 ? "device" : "devices",
						search.category && !category ? " — that category is not listed" : ""
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2 text-sm font-semibold text-navy",
					children: ["Sort", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: sort,
						onChange: (event) => {
							const next = event.target.value;
							navigate({ search: {
								q: search.q,
								category: search.category,
								sort: next === "featured" ? void 0 : next
							} });
						},
						className: "min-h-11 rounded-full border border-line bg-card px-3 font-sans font-normal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "featured",
								children: "Featured"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "az",
								children: "Name A–Z"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "za",
								children: "Name Z–A"
							})
						]
					})]
				})]
			}),
			list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-2xl bg-card p-8 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold text-navy",
						children: "Nothing matches that search."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted",
						children: "Try another word, or tell us the device you want and we will say if we can get it."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "mt-4 inline-flex min-h-11 items-center font-semibold text-electric-deep",
						children: "Clear filters"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4",
				children: list.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.slug))
			})
		]
	});
}
//#endregion
export { ShopPage as component };

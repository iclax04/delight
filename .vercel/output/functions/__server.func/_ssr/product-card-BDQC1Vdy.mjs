import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as formatNaira } from "./router-CVXJB6hA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-card-BDQC1Vdy.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex h-full flex-col rounded-2xl bg-card p-2 shadow-card transition-[box-shadow] duration-200 hover:shadow-card-hover",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/product/$slug",
			params: { slug: product.slug },
			className: "relative block overflow-hidden rounded-xl bg-paper",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.image,
				alt: product.imageAlt,
				width: 800,
				height: 800,
				loading: "lazy",
				className: "aspect-square w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-105"
			}), product.badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-3 left-3 rounded-full bg-navy px-2.5 py-1 font-display text-xs font-semibold text-paper",
				children: product.badge
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col px-2 pt-3 pb-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-widest text-muted uppercase",
					children: product.brand
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 font-display text-lg leading-snug font-semibold text-navy",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/product/$slug",
						params: { slug: product.slug },
						className: "hover:text-electric-deep",
						children: product.name
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm font-semibold text-electric-deep",
					children: product.priceNaira == null ? "Confirm today's price" : formatNaira(product.priceNaira)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Available to order"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-auto pt-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/product/$slug",
						params: { slug: product.slug },
						className: "inline-flex min-h-11 w-full items-center justify-center rounded-full bg-navy px-3 font-display text-sm font-semibold text-paper hover:bg-electric-deep",
						children: "View"
					})
				})
			]
		})]
	});
}
//#endregion
export { ProductCard as t };

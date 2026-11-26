import { i as __toESM } from "../_runtime.mjs";
import { Z as require_react, w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as orderMessage, c as whatsappUrl, d as btn, g as getProduct, m as formatNaira, s as shopNumber } from "./router-CVXJB6hA.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-OLDGFkIz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function keyOf(line) {
	return `${line.slug}|${line.color}`;
}
var useCart = create()(persist((set, get) => ({
	lines: [],
	add: (slug, color, qty = 1) => {
		const lines = get().lines.slice();
		const index = lines.findIndex((line) => line.slug === slug && line.color === color);
		const nextQty = Math.min(9, Math.max(1, qty));
		if (index >= 0) lines[index] = {
			...lines[index],
			qty: Math.min(9, lines[index].qty + nextQty)
		};
		else lines.push({
			slug,
			color,
			qty: nextQty
		});
		set({ lines });
	},
	setQty: (slug, color, qty) => {
		const next = Math.min(9, Math.max(1, qty));
		set({ lines: get().lines.map((line) => line.slug === slug && line.color === color ? {
			...line,
			qty: next
		} : line) });
	},
	remove: (slug, color) => {
		set({ lines: get().lines.filter((line) => !(line.slug === slug && line.color === color)) });
	},
	clear: () => set({ lines: [] })
}), {
	name: "delight-gadgets-cart",
	storage: createJSONStorage(() => localStorage),
	skipHydration: true,
	merge: (persisted, current) => {
		const stored = persisted && typeof persisted === "object" && "lines" in persisted ? persisted.lines : [];
		if (current.lines.length === 0) return {
			...current,
			lines: stored
		};
		const map = /* @__PURE__ */ new Map();
		for (const line of stored) map.set(keyOf(line), line);
		for (const line of current.lines) {
			const prev = map.get(keyOf(line));
			map.set(keyOf(line), prev ? {
				...line,
				qty: Math.max(prev.qty, line.qty)
			} : line);
		}
		return {
			...current,
			lines: [...map.values()]
		};
	}
}));
function useCartReady() {
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const unsub = useCart.persist.onFinishHydration(() => setReady(true));
		useCart.persist.rehydrate();
		if (useCart.persist.hasHydrated()) setReady(true);
		return unsub;
	}, []);
	return ready;
}
function CartPage() {
	const ready = useCartReady();
	const lines = useCart((state) => state.lines);
	const setQty = useCart((state) => state.setQty);
	const remove = useCart((state) => state.remove);
	const clear = useCart((state) => state.clear);
	const detailed = lines.map((line) => ({
		line,
		product: getProduct(line.slug)
	}));
	const total = detailed.every((item) => item.product && item.product.priceNaira != null) ? detailed.reduce((sum, item) => sum + (item.product?.priceNaira ?? 0) * item.line.qty, 0) : null;
	const message = orderMessage(detailed.map((item) => ({
		name: item.product?.name ?? item.line.slug,
		color: item.line.color,
		qty: item.line.qty
	})));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		className: "mx-auto max-w-4xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-semibold text-navy",
				children: "Your cart"
			}),
			!ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted",
				children: "Loading your cart…"
			}) : null,
			ready && lines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 rounded-3xl bg-card p-8 shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted",
					children: "Your cart is empty. Browse the shop and add a device."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: btn("navy", "mt-5"),
					children: "Shop now"
				})]
			}) : null,
			ready && lines.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-line rounded-3xl bg-card px-4 shadow-card",
					children: detailed.map(({ line, product }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4 py-4",
						children: [product ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: product.image,
							alt: product.imageAlt,
							width: 96,
							height: 96,
							className: "size-24 rounded-xl object-cover"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-24 rounded-xl bg-paper" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-lg font-semibold text-navy",
									children: product ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/product/$slug",
										params: { slug: product.slug },
										children: product.name
									}) : "This item is no longer listed"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: line.color
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm font-semibold text-electric-deep",
									children: product?.priceNaira == null ? "Price confirmed on WhatsApp" : formatNaira(product.priceNaira)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "inline-flex size-11 items-center justify-center rounded-full border border-line",
											"aria-label": "Decrease quantity",
											onClick: () => line.qty <= 1 ? remove(line.slug, line.color) : setQty(line.slug, line.color, line.qty - 1),
											children: "−"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-6 text-center tabular-nums",
											children: line.qty
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "inline-flex size-11 items-center justify-center rounded-full border border-line",
											"aria-label": "Increase quantity",
											onClick: () => setQty(line.slug, line.color, line.qty + 1),
											children: "+"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "ml-auto text-sm font-semibold text-electric-deep",
											onClick: () => remove(line.slug, line.color),
											children: "Remove"
										})
									]
								})
							]
						})]
					}, `${line.slug}-${line.color}`))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "rounded-3xl bg-navy p-6 text-paper",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-semibold",
							children: "Order"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-paper/80",
							children: total == null ? "The total is confirmed on WhatsApp. We have not published prices for these items." : `Total ${formatNaira(total)}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: btn("primary", "mt-5 w-full"),
							href: whatsappUrl(message),
							target: "_blank",
							rel: "noopener noreferrer",
							children: "Checkout on WhatsApp"
						}),
						!shopNumber() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-paper/75",
							children: "No shop number is published yet. WhatsApp will open with this order written out."
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap gap-4 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								className: "font-semibold text-paper",
								children: "Continue shopping"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "font-semibold text-paper/80",
								onClick: () => clear(),
								children: "Clear cart"
							})]
						})
					]
				})]
			}) : null
		]
	});
}
//#endregion
export { CartPage as component };

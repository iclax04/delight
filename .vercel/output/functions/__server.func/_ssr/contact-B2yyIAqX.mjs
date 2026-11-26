import { w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as whatsappUrl, d as btn, g as getProduct, i as Route$5, o as phoneLabel, s as shopNumber, u as business } from "./router-CVXJB6hA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-B2yyIAqX.js
var import_jsx_runtime = require_jsx_runtime();
var mapQuery = "Spring Life Plaza Shop 9 St Joseph Cathedral Ekwulobia";
function ContactPage() {
	const search = Route$5.useSearch();
	const named = search.product ? getProduct(search.product) : void 0;
	const phone = phoneLabel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		className: "mx-auto max-w-6xl px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold tracking-widest text-electric-deep uppercase",
				children: "Contact"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold text-navy",
				children: "Talk to Delight Gadgets"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: "The shop is at Spring Life Plaza, Shop 9, along St Joseph Cathedral, Ekwulobia. Call or WhatsApp and we will confirm the device and today's price before you pay."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 max-w-xl rounded-3xl bg-card p-6 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-semibold text-navy",
						children: "Shop details"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 space-y-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-semibold text-navy",
								children: "Address"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "text-muted",
								children: [
									business.street,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									business.city,
									", Anambra State, Nigeria"
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-semibold text-navy",
								children: "Phone"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-electric-deep",
								href: `tel:+${shopNumber()}`,
								children: phone
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: "A public phone number has not been added yet."
							}) })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-semibold text-navy",
								children: "Opening hours"
							}), business.hours.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-1 space-y-1 text-muted",
								children: business.hours.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									row.days,
									": ",
									row.hours
								] }, row.days))
							}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-muted",
								children: "A weekly timetable has not been published. Message us before you travel."
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: btn("primary", "mt-6"),
						href: whatsappUrl(named ? `Hello Delight Gadgets, I want to order the ${named.name}. Please confirm today's price in naira.` : "Hello Delight Gadgets, I would like to ask about a device. Please confirm today's price in naira."),
						target: "_blank",
						rel: "noopener noreferrer",
						children: "WhatsApp the shop"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold text-navy",
						children: "Map"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-sm text-muted",
						children: "Spring Life Plaza, Shop 9, along St Joseph Cathedral, Ekwulobia."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Map of Delight Gadgets, Spring Life Plaza, Ekwulobia",
						src: `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=16&output=embed`,
						className: "mt-4 h-80 w-full rounded-3xl border-0 shadow-card",
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade"
					})
				]
			})
		]
	});
}
//#endregion
export { ContactPage as component };

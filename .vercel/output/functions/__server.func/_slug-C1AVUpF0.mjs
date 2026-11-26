import { i as __toESM } from "./_runtime.mjs";
import { Z as require_react, w as require_jsx_runtime, x as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as orderMessage, c as whatsappUrl, d as btn, g as getProduct, l as JsonLd, m as formatNaira, n as Route, v as relatedProducts } from "./_ssr/router-CVXJB6hA.mjs";
import { t as ProductCard } from "./_ssr/product-card-BDQC1Vdy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-C1AVUpF0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { slug } = Route.useParams();
	const product = getProduct(slug);
	const [color, setColor] = (0, import_react.useState)(product?.colors[0]?.name ?? "Default");
	const [qty, setQty] = (0, import_react.useState)(1);
	if (!product) return null;
	const related = relatedProducts(product.slug);
	const price = product.priceNaira == null ? "Confirm today's price in naira" : formatNaira(product.priceNaira);
	const message = orderMessage([{
		name: product.name,
		color,
		qty
	}]);
	const schema = {
		"@context": "https://schema.org",
		"@type": "Product",
		name: product.name,
		description: product.description,
		image: product.image,
		brand: {
			"@type": "Brand",
			name: product.brand
		},
		category: product.categories[0],
		...product.priceNaira == null ? {} : { offers: {
			"@type": "Offer",
			priceCurrency: "NGN",
			price: product.priceNaira,
			availability: "https://schema.org/InStock",
			url: `/product/${product.slug}`
		} }
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		className: "mx-auto max-w-6xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: schema }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Breadcrumb",
				className: "text-sm text-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "hover:text-navy",
							children: "Home"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							"aria-hidden": "true",
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							className: "hover:text-navy",
							children: "Shop"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							"aria-hidden": "true",
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-navy",
							children: product.name
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid items-start gap-8 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product.image,
					alt: product.imageAlt,
					width: 1200,
					height: 1200,
					className: "w-full rounded-3xl bg-card object-cover shadow-card outline outline-1 -outline-offset-1 outline-ink/10"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold tracking-widest text-muted uppercase",
						children: product.brand
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl font-semibold text-navy",
						children: product.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-display text-xl font-semibold text-electric-deep",
						children: price
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm font-semibold text-navy",
						children: "Available to order"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted",
						children: product.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "Photos show the type of device. Storage, colour, condition (new or UK-used) and today's naira price are confirmed before you pay."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "text-sm font-semibold text-navy",
							children: "Colour"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex flex-wrap gap-2",
							children: product.colors.map((item) => {
								const selected = item.name === color;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									"aria-pressed": selected,
									onClick: () => setColor(item.name),
									className: selected ? "inline-flex min-h-11 items-center gap-2 rounded-full bg-navy px-3 text-sm font-semibold text-paper" : "inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-card px-3 text-sm font-semibold text-navy",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "size-3 rounded-full border border-line",
										style: { background: item.hex },
										"aria-hidden": "true"
									}), item.name]
								}, item.name);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold text-navy",
								children: "Quantity"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "inline-flex size-11 items-center justify-center rounded-full border border-line bg-card",
								onClick: () => setQty((value) => Math.max(1, value - 1)),
								"aria-label": "Decrease quantity",
								children: "−"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-6 text-center tabular-nums",
								children: qty
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "inline-flex size-11 items-center justify-center rounded-full border border-line bg-card",
								onClick: () => setQty((value) => Math.min(9, value + 1)),
								"aria-label": "Increase quantity",
								children: "+"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: btn("primary"),
							href: whatsappUrl(message),
							target: "_blank",
							rel: "noopener noreferrer",
							children: "Order via WhatsApp"
						})
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12 grid gap-8 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold text-navy",
					children: "Description"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted",
					children: product.description
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold text-navy",
					children: "Specifications"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-3 divide-y divide-line rounded-2xl bg-card px-4 shadow-card",
					children: product.specs.map((spec) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1 py-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-sm font-semibold text-navy",
							children: spec.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-sm text-muted",
							children: spec.value
						})]
					}, spec.label))
				})] })]
			}),
			related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold text-navy",
					children: "You may also need"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4",
					children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: item }, item.slug))
				})]
			}) : null
		]
	});
}
//#endregion
export { ProductPage as component };

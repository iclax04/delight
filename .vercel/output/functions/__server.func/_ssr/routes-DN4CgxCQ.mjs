import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as BadgeCheck, i as ShieldCheck, n as Truck, o as MessageCircle } from "../_libs/lucide-react.mjs";
import { _ as products, c as whatsappUrl, d as btn, f as categories } from "./router-CVXJB6hA.mjs";
import { t as ProductCard } from "./product-card-BDQC1Vdy.mjs";
import { t as faqs } from "./faq-C5Co9oR2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DN4CgxCQ.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const best = products.filter((product) => product.badge === "Best seller");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-6xl px-4 pt-6 md:pt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid overflow-hidden rounded-3xl bg-navy text-paper md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rise flex flex-col justify-center px-6 py-10 md:px-12 md:py-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-4xl leading-tight font-semibold sm:text-5xl",
								children: "Discover Quality Gadgets. Experience More."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-md text-lg text-paper/80",
								children: "Your trusted destination for quality smartphones, laptops, electronics and accessories in Anambra State."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/shop",
									className: btn("primary"),
									children: "Shop now"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: btn("ghost"),
									children: "Contact us"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/hero.jpg",
						alt: "Flagship smartphone and silver laptop on a stone surface",
						width: 1792,
						height: 1008,
						fetchPriority: "high",
						className: "h-72 w-full object-cover object-right md:h-full"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold text-navy",
						children: "Featured categories"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-muted",
						children: "A phone shop in Anambra for smartphones, laptops and the accessories that go with them."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "hidden font-semibold text-electric-deep md:inline",
						children: "View the full shop"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid grid-cols-2 gap-3 md:grid-cols-5",
					children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/shop",
						search: { category: category.id },
						className: "block overflow-hidden rounded-2xl bg-card shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: category.image,
							alt: category.alt,
							width: 600,
							height: 600,
							loading: "lazy",
							className: "aspect-square w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block px-3 py-3 font-display text-sm font-semibold text-navy",
							children: category.name
						})]
					}) }, category.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 pb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold text-navy",
						children: "Best-selling products"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-muted",
						children: "The devices people ask for first. Prices are confirmed on WhatsApp, not guessed on the page."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4",
						children: best.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.slug))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-6xl px-4 pb-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid overflow-hidden rounded-3xl bg-navy text-paper md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-6 py-10 md:px-12 md:py-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl font-semibold",
								children: "Special offers"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-md text-paper/80",
								children: "We do not print a discount we cannot stand behind. Ask about a case with your phone, or a charger with a laptop, and we will confirm today's naira total before you pay."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: btn("primary", "mt-6"),
								href: whatsappUrl("Hello Delight Gadgets, I would like to ask about current offers and today's prices in naira."),
								target: "_blank",
								rel: "noopener noreferrer",
								children: "Ask about an offer"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/offers.jpg",
						alt: "Charger, power bank, cable and phone case on a stone table",
						width: 1792,
						height: 1008,
						loading: "lazy",
						className: "h-64 w-full object-cover md:h-full"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 pb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-semibold text-navy",
					children: "Why shop with us"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						{
							icon: ShieldCheck,
							title: "Quality you can ask about",
							body: "We say whether a unit is new or UK-used before you pay. No silent swaps."
						},
						{
							icon: BadgeCheck,
							title: "Customer care",
							body: "Tell us what you use the device for and we will help you compare what is actually in reach."
						},
						{
							icon: MessageCircle,
							title: "A fair naira price",
							body: "Affordable means the price we confirm today, not a stale number left on a page."
						},
						{
							icon: Truck,
							title: "Anambra and beyond",
							body: "Shop from Anambra State, or ask about delivery further out. We confirm it with the order."
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-2xl bg-card p-5 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
								className: "size-5 text-electric-deep",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-lg font-semibold text-navy",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: item.body
							})
						]
					}, item.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-6xl px-4 pb-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl bg-card p-6 shadow-card md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-semibold text-navy",
							children: "Customer reviews"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-2xl text-muted",
							children: "Delight Gadgets does not publish reviews we cannot verify. There are no customer reviews on this site yet. After a real order, you can send feedback and we will only show it once it is checked."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: btn("navy", "mt-6"),
							children: "Contact the shop"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 pb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold text-navy",
						children: "Questions before you buy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 divide-y divide-line rounded-2xl bg-card px-5 shadow-card",
						children: faqs.slice(0, 4).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							className: "group py-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
								className: "flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-3 font-display text-lg font-semibold text-navy",
								children: [item.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-electric-deep",
									"aria-hidden": "true",
									children: "+"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "pb-4 text-muted",
								children: item.a
							})]
						}, item.q))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/faq",
						className: "mt-4 inline-flex min-h-11 items-center font-semibold text-electric-deep",
						children: "Read all questions"
					})
				]
			})
		]
	});
}
//#endregion
export { Home as component };

import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as JsonLd } from "./router-CVXJB6hA.mjs";
import { t as faqs } from "./faq-C5Co9oR2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-Cchpfqyz.js
var import_jsx_runtime = require_jsx_runtime();
function FaqPage() {
	const schema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((item) => ({
			"@type": "Question",
			name: item.q,
			acceptedAnswer: {
				"@type": "Answer",
				text: item.a
			}
		}))
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		className: "mx-auto max-w-3xl px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: schema }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold tracking-widest text-electric-deep uppercase",
				children: "Help"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold text-navy",
				children: "Questions about shopping for gadgets in Anambra"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-muted",
				children: [
					"Straight answers. If yours is not here,",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "font-semibold text-electric-deep",
						children: "send a message"
					}),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 divide-y divide-line rounded-3xl bg-card px-5 shadow-card",
				children: faqs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "py-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
						className: "flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-3 font-display text-lg font-semibold text-navy",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-semibold",
							children: item.q
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pb-4 text-muted",
						children: item.a
					})]
				}, item.q))
			})
		]
	});
}
//#endregion
export { FaqPage as component };

import { i as __toESM } from "../_runtime.mjs";
import { C as useRouter, S as useNavigate, X as notFound, Z as require_react, _ as Outlet, b as createRootRoute, f as Scripts, g as createRouter, m as useRouterState, p as HeadContent, v as lazyRouteComponent, w as require_jsx_runtime, x as Link, y as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Search, l as ArrowLeft, o as MessageCircle, r as TriangleAlert, s as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalog-BPwK0CRH.js
var categories = [
	{
		id: "smartphones",
		name: "Smartphones",
		blurb: "iPhones and Android phones for calls, photos and everyday work.",
		image: "/images/galaxy-s24.jpg",
		alt: "Graphite Android smartphone, front and back, from Delight Gadgets"
	},
	{
		id: "iphones",
		name: "iPhones",
		blurb: "iPhone Pro Max from 18 down to 12. Confirm storage and condition before you pay.",
		image: "/images/iphone-18-pro-max.jpg",
		alt: "Burgundy iPhone 18 Pro Max standing on a light grey background"
	},
	{
		id: "android",
		name: "Android Phones",
		blurb: "Samsung and other Android phones, including more reachable mid-range sets.",
		image: "/images/galaxy-s24.jpg",
		alt: "Samsung-style Android flagship phone in graphite"
	},
	{
		id: "laptops",
		name: "Laptops",
		blurb: "MacBook and Windows laptops for school, business and design.",
		image: "/images/macbook-air.jpg",
		alt: "Open silver MacBook Air on a light grey background"
	},
	{
		id: "tablets",
		name: "Tablets",
		blurb: "iPad and Android tablets for reading, class and film.",
		image: "/images/ipad.jpg",
		alt: "Silver tablet with a blue abstract wallpaper"
	},
	{
		id: "smartwatches",
		name: "Smartwatches",
		blurb: "Watches for time, fitness and phone alerts.",
		image: "/images/apple-watch.jpg",
		alt: "Silver aluminium smartwatch with a light sport band"
	},
	{
		id: "audio",
		name: "Earphones and Headphones",
		blurb: "Earbuds and over-ear headphones.",
		image: "/images/earbuds.jpg",
		alt: "White wireless earbuds and an open charging case"
	},
	{
		id: "accessories",
		name: "Phone Accessories",
		blurb: "Cases sized to the phone you actually buy.",
		image: "/images/cases.jpg",
		alt: "Clear phone case and navy silicone phone case"
	},
	{
		id: "power",
		name: "Chargers and Power Banks",
		blurb: "USB-C chargers, cables and power banks.",
		image: "/images/power-bank.jpg",
		alt: "Matte black USB-C power bank"
	},
	{
		id: "other",
		name: "Other Electronics",
		blurb: "Speakers and other small electronics.",
		image: "/images/speaker.jpg",
		alt: "Charcoal fabric Bluetooth speaker"
	}
];
var products = [
	{
		slug: "iphone-18-pro-max",
		name: "iPhone 18 Pro Max",
		brand: "Apple",
		categories: ["smartphones", "iphones"],
		summary: "The large Pro iPhone, with a triple camera and a 6.9-inch screen. Confirm the storage before you pay.",
		description: "iPhone 18 Pro Max is the one to ask for when you want the biggest screen and the Pro camera. Aluminum unibody, A20 Pro chip, and a 48MP camera system with variable aperture. The picture shows burgundy. Ask which storage is in reach — 256GB, 512GB, 1TB or 2TB — and whether the unit is new or UK-used.",
		colors: [
			{
				name: "Burgundy",
				hex: "#6e3040"
			},
			{
				name: "Black",
				hex: "#1c1c1e"
			},
			{
				name: "Silver",
				hex: "#e3e4e8"
			},
			{
				name: "Glacier",
				hex: "#d5dde6"
			}
		],
		specs: [
			{
				label: "Display",
				value: "6.9-inch Super Retina XDR"
			},
			{
				label: "Chip",
				value: "A20 Pro"
			},
			{
				label: "Camera",
				value: "48MP main with variable aperture, ultrawide and 4x telephoto"
			},
			{
				label: "Port",
				value: "USB-C"
			},
			{
				label: "Storage",
				value: "Confirm 256GB, 512GB, 1TB or 2TB"
			}
		],
		priceNaira: null,
		image: "/images/iphone-18-pro-max.jpg",
		imageAlt: "iPhone 18 Pro Max in burgundy, back view with a triple camera",
		badge: "Best seller",
		rank: 1
	},
	{
		slug: "iphone-17-pro-max",
		name: "iPhone 17 Pro Max",
		brand: "Apple",
		categories: ["smartphones", "iphones"],
		summary: "The previous Pro Max, with a 6.9-inch screen and the A19 Pro chip.",
		description: "iPhone 17 Pro Max is the step just before the 18. Aluminum unibody, 6.9-inch display, A19 Pro. The photo shows Cosmic Orange. Confirm storage — 256GB, 512GB, 1TB or 2TB — and whether the unit is new or UK-used before you pay.",
		colors: [
			{
				name: "Cosmic Orange",
				hex: "#e36a1e"
			},
			{
				name: "Deep Blue",
				hex: "#2c3e66"
			},
			{
				name: "Silver",
				hex: "#d9dce1"
			}
		],
		specs: [
			{
				label: "Display",
				value: "6.9-inch Super Retina XDR"
			},
			{
				label: "Chip",
				value: "A19 Pro"
			},
			{
				label: "Camera",
				value: "48MP main, ultrawide and telephoto"
			},
			{
				label: "Port",
				value: "USB-C"
			},
			{
				label: "Storage",
				value: "Confirm 256GB, 512GB, 1TB or 2TB"
			}
		],
		priceNaira: null,
		image: "/images/iphone-17-pro-max.jpg",
		imageAlt: "iPhone 17 Pro Max in Cosmic Orange, back view with a triple camera",
		rank: 1.1
	},
	{
		slug: "iphone-16-pro-max",
		name: "iPhone 16 Pro Max",
		brand: "Apple",
		categories: ["smartphones", "iphones"],
		summary: "Titanium Pro Max with a 6.9-inch screen and a 5x telephoto camera.",
		description: "iPhone 16 Pro Max is the large 2024 Pro, still a common request. Titanium frame, A18 Pro, Camera Control on the side. The photo shows Desert Titanium. Ask the storage and whether it is new or UK-used.",
		colors: [
			{
				name: "Desert Titanium",
				hex: "#c4b39a"
			},
			{
				name: "Natural Titanium",
				hex: "#c8c2b4"
			},
			{
				name: "White Titanium",
				hex: "#f2f1ed"
			},
			{
				name: "Black Titanium",
				hex: "#3a3a3c"
			}
		],
		specs: [
			{
				label: "Display",
				value: "6.9-inch Super Retina XDR"
			},
			{
				label: "Chip",
				value: "A18 Pro"
			},
			{
				label: "Camera",
				value: "48MP main and 5x tetraprism telephoto"
			},
			{
				label: "Port",
				value: "USB-C"
			},
			{
				label: "Storage",
				value: "Confirm 256GB, 512GB or 1TB"
			}
		],
		priceNaira: null,
		image: "/images/iphone-16-pro-max.jpg",
		imageAlt: "iPhone 16 Pro Max in Desert Titanium, back view with a triple camera",
		rank: 1.2
	},
	{
		slug: "iphone-15-pro-max",
		name: "iPhone 15 Pro Max",
		brand: "Apple",
		categories: ["smartphones", "iphones"],
		summary: "The first titanium Pro Max, with a 6.7-inch screen and USB-C.",
		description: "iPhone 15 Pro Max is the one many people still ask for when they want a Pro camera without the newest price. Titanium, A17 Pro, 5x telephoto. The photo shows Natural Titanium. Confirm storage and battery health on any UK-used unit.",
		colors: [
			{
				name: "Natural Titanium",
				hex: "#b7b1a6"
			},
			{
				name: "Blue Titanium",
				hex: "#4a5c6e"
			},
			{
				name: "White Titanium",
				hex: "#f2f1ed"
			},
			{
				name: "Black Titanium",
				hex: "#3a3a3c"
			}
		],
		specs: [
			{
				label: "Display",
				value: "6.7-inch Super Retina XDR"
			},
			{
				label: "Chip",
				value: "A17 Pro"
			},
			{
				label: "Camera",
				value: "48MP main and 5x tetraprism telephoto"
			},
			{
				label: "Port",
				value: "USB-C"
			},
			{
				label: "Storage",
				value: "Confirm 256GB, 512GB or 1TB"
			}
		],
		priceNaira: null,
		image: "/images/iphone-15-pro-max.jpg",
		imageAlt: "iPhone 15 Pro Max in Natural Titanium, back view with a triple camera",
		rank: 1.3
	},
	{
		slug: "iphone-14-pro-max",
		name: "iPhone 14 Pro Max",
		brand: "Apple",
		categories: ["smartphones", "iphones"],
		summary: "6.7-inch Pro Max with the Dynamic Island and an A16 chip. Lightning port.",
		description: "iPhone 14 Pro Max is the last large Pro before USB-C. Always-On display, A16 Bionic, 48MP main camera. The photo shows Deep Purple. It charges with Lightning, not USB-C. Confirm storage and battery health before you pay.",
		colors: [
			{
				name: "Deep Purple",
				hex: "#5b4b6e"
			},
			{
				name: "Gold",
				hex: "#f4e8c8"
			},
			{
				name: "Silver",
				hex: "#f2f2f4"
			},
			{
				name: "Space Black",
				hex: "#3a3a3c"
			}
		],
		specs: [
			{
				label: "Display",
				value: "6.7-inch Super Retina XDR, Always-On"
			},
			{
				label: "Chip",
				value: "A16 Bionic"
			},
			{
				label: "Camera",
				value: "48MP main and 3x telephoto"
			},
			{
				label: "Port",
				value: "Lightning"
			},
			{
				label: "Storage",
				value: "Confirm 128GB, 256GB, 512GB or 1TB"
			}
		],
		priceNaira: null,
		image: "/images/iphone-14-pro-max.jpg",
		imageAlt: "iPhone 14 Pro Max in Deep Purple, back view with a triple camera",
		rank: 1.4
	},
	{
		slug: "iphone-13-pro-max",
		name: "iPhone 13 Pro Max",
		brand: "Apple",
		categories: ["smartphones", "iphones"],
		summary: "6.7-inch Pro Max with ProMotion and a long battery. Lightning port.",
		description: "iPhone 13 Pro Max is a practical large iPhone when the newer Pro models are out of reach. A15 Bionic, 120Hz display, triple camera. The photo shows Sierra Blue. Lightning cable. Ask about battery health on UK-used units.",
		colors: [
			{
				name: "Sierra Blue",
				hex: "#a8c0d4"
			},
			{
				name: "Graphite",
				hex: "#545453"
			},
			{
				name: "Gold",
				hex: "#f6e6c8"
			},
			{
				name: "Silver",
				hex: "#f2f2f4"
			},
			{
				name: "Alpine Green",
				hex: "#5c6b58"
			}
		],
		specs: [
			{
				label: "Display",
				value: "6.7-inch Super Retina XDR, ProMotion"
			},
			{
				label: "Chip",
				value: "A15 Bionic"
			},
			{
				label: "Camera",
				value: "12MP triple camera, 3x telephoto"
			},
			{
				label: "Port",
				value: "Lightning"
			},
			{
				label: "Storage",
				value: "Confirm 128GB, 256GB, 512GB or 1TB"
			}
		],
		priceNaira: null,
		image: "/images/iphone-13-pro-max.jpg",
		imageAlt: "iPhone 13 Pro Max in Sierra Blue, back view with a triple camera",
		rank: 1.5
	},
	{
		slug: "iphone-12-pro-max",
		name: "iPhone 12 Pro Max",
		brand: "Apple",
		categories: ["smartphones", "iphones"],
		summary: "The first 6.7-inch Pro Max. Stainless steel frame and a Lightning port.",
		description: "iPhone 12 Pro Max is the start of the large Pro Max line. Flat stainless edges, A14 Bionic, triple camera. The photo shows Pacific Blue. It uses Lightning. Confirm the storage and the battery health before you pay.",
		colors: [
			{
				name: "Pacific Blue",
				hex: "#3d5a73"
			},
			{
				name: "Gold",
				hex: "#f4e5c6"
			},
			{
				name: "Silver",
				hex: "#e8e8ea"
			},
			{
				name: "Graphite",
				hex: "#555553"
			}
		],
		specs: [
			{
				label: "Display",
				value: "6.7-inch Super Retina XDR"
			},
			{
				label: "Chip",
				value: "A14 Bionic"
			},
			{
				label: "Camera",
				value: "12MP triple camera, 2.5x telephoto"
			},
			{
				label: "Port",
				value: "Lightning"
			},
			{
				label: "Storage",
				value: "Confirm 128GB, 256GB or 512GB"
			}
		],
		priceNaira: null,
		image: "/images/iphone-12-pro-max.jpg",
		imageAlt: "iPhone 12 Pro Max in Pacific Blue, back view with a triple camera",
		rank: 1.6
	},
	{
		slug: "samsung-galaxy-s24",
		name: "Samsung Galaxy S24",
		brand: "Samsung",
		categories: ["smartphones", "android"],
		summary: "Compact Galaxy flagship. Confirm whether the unit is the Exynos or Snapdragon version.",
		description: "A smaller flagship Android that still fits a pocket, with a bright screen and a strong main camera. Nigerian stock can be Exynos or Snapdragon depending on where the unit was imported from. Ask before you pay, and ask if it is new or UK-used.",
		colors: [
			{
				name: "Onyx Black",
				hex: "#2a2a2c"
			},
			{
				name: "Marble Gray",
				hex: "#c5c7c9"
			},
			{
				name: "Cobalt Violet",
				hex: "#6d6b8a"
			},
			{
				name: "Amber Yellow",
				hex: "#e2c56a"
			}
		],
		specs: [
			{
				label: "Display",
				value: "6.2-inch Dynamic AMOLED 2X, 120Hz"
			},
			{
				label: "Camera",
				value: "50MP main camera"
			},
			{
				label: "Memory",
				value: "Confirm RAM and storage"
			},
			{
				label: "Chipset",
				value: "Confirm Exynos 2400 or Snapdragon 8 Gen 3"
			},
			{
				label: "Charging",
				value: "USB-C"
			}
		],
		priceNaira: null,
		image: "/images/galaxy-s24.jpg",
		imageAlt: "Samsung Galaxy S24 shown from the front and the graphite back",
		badge: "Best seller",
		rank: 3
	},
	{
		slug: "macbook-air-13",
		name: "MacBook Air 13-inch",
		brand: "Apple",
		categories: ["laptops"],
		summary: "Thin Apple laptop for writing, class, and light design work.",
		description: "The 13-inch MacBook Air is the laptop most people mean when they want something light that stays quiet. Chip, memory and storage change by unit. Tell us what you run — Word and Chrome, or Final Cut and Xcode — and we will help you check the configuration before you pay.",
		colors: [
			{
				name: "Silver",
				hex: "#d8d8dc"
			},
			{
				name: "Starlight",
				hex: "#e8e0d4"
			},
			{
				name: "Space Gray",
				hex: "#7d7e80"
			},
			{
				name: "Midnight",
				hex: "#2c3138"
			}
		],
		specs: [
			{
				label: "Display",
				value: "13.6-inch Liquid Retina"
			},
			{
				label: "Chip",
				value: "Apple silicon — confirm M2, M3 or newer"
			},
			{
				label: "Memory",
				value: "Confirm RAM"
			},
			{
				label: "Storage",
				value: "Confirm SSD size"
			},
			{
				label: "Ports",
				value: "USB-C / MagSafe — confirm the exact layout"
			}
		],
		priceNaira: null,
		image: "/images/macbook-air.jpg",
		imageAlt: "Open 13-inch MacBook Air in silver with a blue wallpaper",
		badge: "Best seller",
		rank: 4
	},
	{
		slug: "windows-laptop-15",
		name: "15-inch Windows laptop",
		brand: "Windows",
		categories: ["laptops"],
		summary: "A full-size Windows laptop for school, office work and browsing.",
		description: "Listed as a Windows laptop rather than a brand we have not confirmed. Ask whether the unit in stock is HP, Dell, Lenovo or another maker, and get the processor, RAM and SSD in writing before you pay. A 15-inch screen is easier for long documents than a 13-inch.",
		colors: [{
			name: "Silver",
			hex: "#d5d6da"
		}, {
			name: "Gray",
			hex: "#8d8f93"
		}],
		specs: [
			{
				label: "Display",
				value: "About 15-inch full HD class"
			},
			{
				label: "System",
				value: "Windows — confirm the edition"
			},
			{
				label: "Processor",
				value: "Confirm Intel or AMD model"
			},
			{
				label: "Memory",
				value: "Confirm RAM"
			},
			{
				label: "Storage",
				value: "Confirm SSD size"
			}
		],
		priceNaira: null,
		image: "/images/hp-pavilion.jpg",
		imageAlt: "Open silver 15-inch Windows laptop on a light grey background",
		badge: "Best seller",
		rank: 8
	},
	{
		slug: "ipad",
		name: "iPad",
		brand: "Apple",
		categories: ["tablets"],
		summary: "An Apple tablet for notes, film and light work. Confirm the generation.",
		description: "Useful beside a phone when you want a larger screen for lecture notes, Netflix or marking up PDFs. iPad generations differ in chip, storage and whether they support a Pencil. The photo shows the kind of tablet — ask for the exact model name on the box.",
		colors: [
			{
				name: "Silver",
				hex: "#e4e4e6"
			},
			{
				name: "Blue",
				hex: "#b9c7d6"
			},
			{
				name: "Pink",
				hex: "#f0d5d6"
			},
			{
				name: "Yellow",
				hex: "#f3e3b0"
			}
		],
		specs: [
			{
				label: "Type",
				value: "iPad — confirm generation"
			},
			{
				label: "Display",
				value: "Confirm screen size, commonly 10.9 or 11-inch class"
			},
			{
				label: "Storage",
				value: "Confirm capacity"
			},
			{
				label: "Connector",
				value: "USB-C on current models — confirm"
			},
			{
				label: "Pencil",
				value: "Ask which Apple Pencil, if any, fits"
			}
		],
		priceNaira: null,
		image: "/images/ipad.jpg",
		imageAlt: "Silver iPad in landscape with a blue wallpaper",
		badge: "Best seller",
		rank: 6
	},
	{
		slug: "samsung-galaxy-tab",
		name: "Samsung Galaxy Tab",
		brand: "Samsung",
		categories: ["tablets"],
		summary: "An Android tablet. Confirm whether it is a Tab A or a Tab S.",
		description: "A Galaxy Tab is the Android alternative when the rest of your devices are Samsung and you want a bigger screen without buying an iPad. Tab A and Tab S are very different machines. Ask for the model number, storage and whether an S Pen is included.",
		colors: [{
			name: "Graphite",
			hex: "#4a4e53"
		}, {
			name: "Silver",
			hex: "#d7d8dc"
		}],
		specs: [
			{
				label: "Line",
				value: "Galaxy Tab — confirm Tab A or Tab S"
			},
			{
				label: "Display",
				value: "Confirm size"
			},
			{
				label: "Storage",
				value: "Confirm capacity and RAM"
			},
			{
				label: "Network",
				value: "Confirm Wi-Fi only or LTE"
			},
			{
				label: "Pen",
				value: "Ask if an S Pen is in the box"
			}
		],
		priceNaira: null,
		image: "/images/galaxy-tab.jpg",
		imageAlt: "Graphite Android tablet with a navy and blue screen",
		badge: "Best seller",
		rank: 10
	},
	{
		slug: "apple-watch",
		name: "Apple Watch",
		brand: "Apple",
		categories: ["smartwatches"],
		summary: "Aluminium Apple Watch with a sport band. Confirm series, size and GPS or cellular.",
		description: "Pairs with an iPhone for alerts, walking and the time. Series, case size and GPS versus cellular change the price by a lot. The photo shows a silver aluminium case and a light band. Tell us your iPhone model so we can check compatibility.",
		colors: [
			{
				name: "Silver",
				hex: "#e6e7ea"
			},
			{
				name: "Starlight",
				hex: "#e7e0d4"
			},
			{
				name: "Midnight",
				hex: "#2d3136"
			}
		],
		specs: [
			{
				label: "Case",
				value: "Aluminium — confirm the series"
			},
			{
				label: "Size",
				value: "Confirm millimetres"
			},
			{
				label: "Connectivity",
				value: "Confirm GPS or GPS + Cellular"
			},
			{
				label: "Band",
				value: "Sport band — confirm colour and size"
			},
			{
				label: "Works with",
				value: "iPhone — confirm your iOS version"
			}
		],
		priceNaira: null,
		image: "/images/apple-watch.jpg",
		imageAlt: "Silver Apple Watch with a light sport band",
		badge: "Best seller",
		rank: 5
	},
	{
		slug: "samsung-galaxy-watch",
		name: "Samsung Galaxy Watch",
		brand: "Samsung",
		categories: ["smartwatches"],
		summary: "Round Galaxy Watch. Confirm the series and whether it is Bluetooth or LTE.",
		description: "A round watch for Android users who want calls, notifications and step counts on the wrist. Galaxy Watch generations look similar in photos. Ask for the model printed on the box, the case size, and Bluetooth versus LTE.",
		colors: [{
			name: "Graphite",
			hex: "#3c4146"
		}, {
			name: "Silver",
			hex: "#d5d7db"
		}],
		specs: [
			{
				label: "Line",
				value: "Galaxy Watch — confirm series"
			},
			{
				label: "Shape",
				value: "Round"
			},
			{
				label: "Size",
				value: "Confirm millimetres"
			},
			{
				label: "Network",
				value: "Confirm Bluetooth or LTE"
			},
			{
				label: "Works with",
				value: "Android — ask about iPhone limits"
			}
		],
		priceNaira: null,
		image: "/images/galaxy-watch.jpg",
		imageAlt: "Round graphite smartwatch with a dark strap",
		badge: "Best seller",
		rank: 9
	},
	{
		slug: "airpods-pro",
		name: "AirPods Pro",
		brand: "Apple",
		categories: ["audio"],
		summary: "In-ear AirPods with a charging case. Confirm the generation and the USB-C case.",
		description: "The usual earbuds people ask for with an iPhone. Generations differ in the case port and noise cancellation. Ask for AirPods Pro with a USB-C case if you want one cable for your phone and your ears, and check that the seal tips fit.",
		colors: [{
			name: "White",
			hex: "#f4f4f5"
		}],
		specs: [
			{
				label: "Type",
				value: "In-ear with silicone tips"
			},
			{
				label: "Case",
				value: "Confirm USB-C or Lightning"
			},
			{
				label: "Generation",
				value: "Confirm 2nd generation or newer"
			},
			{
				label: "Noise control",
				value: "Active noise cancellation on Pro models"
			},
			{
				label: "Pairing",
				value: "Best with iPhone — confirm Android limits"
			}
		],
		priceNaira: null,
		image: "/images/earbuds.jpg",
		imageAlt: "White AirPods Pro earbuds with an open charging case",
		badge: "Best seller",
		rank: 7
	},
	{
		slug: "over-ear-headphones",
		name: "Wireless over-ear headphones",
		brand: "Audio",
		categories: ["audio"],
		summary: "Closed over-ear headphones. We name the brand only when the unit is confirmed.",
		description: "For calls, study and travel when earbuds are not enough. The photo is the style, not a promise of a particular logo. Ask us for the brand and model in stock — Sony, JBL or another — and whether active noise cancellation is included.",
		colors: [{
			name: "Black",
			hex: "#1c1c1e"
		}],
		specs: [
			{
				label: "Style",
				value: "Over-ear, wireless"
			},
			{
				label: "Brand",
				value: "Confirm before you pay"
			},
			{
				label: "Noise cancellation",
				value: "Ask if the unit has it"
			},
			{
				label: "Battery",
				value: "Confirm the rated hours"
			},
			{
				label: "Cable",
				value: "Ask if a wired cable is in the box"
			}
		],
		priceNaira: null,
		image: "/images/headphones.jpg",
		imageAlt: "Matte black wireless over-ear headphones",
		badge: "Best seller",
		rank: 11
	},
	{
		slug: "power-bank",
		name: "USB-C power bank",
		brand: "Power",
		categories: ["power"],
		summary: "A slim power bank for the hours the light is out. Confirm the mAh rating.",
		description: "Worth keeping in a bag in Anambra, where a day can outlast a phone battery. We will not print a milliamp-hour number the unit does not have. Ask for the rated capacity, the wattage it can output, and whether it charges a laptop or only a phone.",
		colors: [{
			name: "Black",
			hex: "#1a1a1c"
		}],
		specs: [
			{
				label: "Port",
				value: "USB-C"
			},
			{
				label: "Capacity",
				value: "Confirm the mAh on the unit"
			},
			{
				label: "Output",
				value: "Confirm wattage"
			},
			{
				label: "Laptop charging",
				value: "Ask — not every bank can do it"
			},
			{
				label: "Airline",
				value: "Ask if you need a rating under 100Wh"
			}
		],
		priceNaira: null,
		image: "/images/power-bank.jpg",
		imageAlt: "Slim matte black power bank with a USB-C port",
		badge: "Offer",
		rank: 12
	},
	{
		slug: "usbc-charger",
		name: "USB-C wall charger",
		brand: "Power",
		categories: ["power"],
		summary: "A compact USB-C charger with a cable. Confirm the wattage for your device.",
		description: "A phone, tablet and laptop do not all want the same charger. Tell us the device and we will confirm a wattage that is safe for it. The photo shows a small white charger and a coiled cable — ask the length of the cable that comes with it.",
		colors: [{
			name: "White",
			hex: "#f7f7f8"
		}],
		specs: [
			{
				label: "Plug",
				value: "Confirm UK or other pin type"
			},
			{
				label: "Port",
				value: "USB-C"
			},
			{
				label: "Wattage",
				value: "Confirm — phone and laptop needs differ"
			},
			{
				label: "Cable",
				value: "Confirm if a cable is included"
			},
			{
				label: "Fast charge",
				value: "Ask which protocol the unit supports"
			}
		],
		priceNaira: null,
		image: "/images/charger.jpg",
		imageAlt: "White USB-C wall charger beside a coiled white cable",
		badge: "Offer",
		rank: 13
	},
	{
		slug: "phone-cases",
		name: "Phone cases",
		brand: "Accessory",
		categories: ["accessories"],
		summary: "Clear and navy cases. The case must match the exact phone model.",
		description: "A case is only useful if the camera cutout matches your phone. Tell us the model — iPhone 18 Pro Max and Galaxy S24 are not the same shape. Clear shows the colour of the phone. Navy silicone hides it. Ask about a bundle with the phone you are already ordering.",
		colors: [{
			name: "Clear",
			hex: "#e7eef5"
		}, {
			name: "Navy",
			hex: "#24344d"
		}],
		specs: [
			{
				label: "Styles",
				value: "Clear and navy silicone"
			},
			{
				label: "Fit",
				value: "Confirm your exact phone model"
			},
			{
				label: "Camera",
				value: "Raised lip — confirm for your model"
			},
			{
				label: "Buttons",
				value: "Covered side buttons"
			},
			{
				label: "Bundle",
				value: "Ask to add one to a phone order"
			}
		],
		priceNaira: null,
		image: "/images/cases.jpg",
		imageAlt: "A clear phone case next to a navy silicone phone case",
		badge: "Offer",
		rank: 14
	},
	{
		slug: "bluetooth-speaker",
		name: "Portable Bluetooth speaker",
		brand: "Audio",
		categories: ["other"],
		summary: "A small fabric speaker for a room or a backyard. Confirm brand and battery.",
		description: "For music without waking the whole compound on a phone speaker. We confirm the brand, whether it is loud enough for outdoors, and how many hours it plays. The photo shows the size and shape, not a hidden logo.",
		colors: [{
			name: "Charcoal",
			hex: "#3a3d40"
		}],
		specs: [
			{
				label: "Connection",
				value: "Bluetooth"
			},
			{
				label: "Brand",
				value: "Confirm the unit in stock"
			},
			{
				label: "Battery",
				value: "Confirm rated play time"
			},
			{
				label: "Water",
				value: "Ask if it is splash resistant"
			},
			{
				label: "Power",
				value: "USB-C charging — confirm"
			}
		],
		priceNaira: null,
		image: "/images/speaker.jpg",
		imageAlt: "Charcoal cylindrical Bluetooth speaker",
		rank: 15
	}
];
function getCategory(id) {
	return categories.find((category) => category.id === id);
}
function getProduct(slug) {
	return products.find((product) => product.slug === slug);
}
function filterProducts(options) {
	const q = (options.q ?? "").trim().toLowerCase();
	const category = options.category ?? "";
	let list = products.filter((product) => {
		if (category && !product.categories.includes(category)) return false;
		if (!q) return true;
		return [
			product.name,
			product.brand,
			product.summary,
			product.description,
			...product.categories,
			...product.specs.map((spec) => `${spec.label} ${spec.value}`)
		].join(" ").toLowerCase().includes(q);
	});
	const sort = options.sort ?? "featured";
	if (sort === "az") list = list.slice().sort((a, b) => a.name.localeCompare(b.name));
	else if (sort === "za") list = list.slice().sort((a, b) => b.name.localeCompare(a.name));
	else list = list.slice().sort((a, b) => a.rank - b.rank);
	return list;
}
function relatedProducts(slug) {
	const product = getProduct(slug);
	if (!product) return [];
	return products.filter((item) => item.slug !== slug && item.categories.some((category) => product.categories.includes(category))).slice(0, 4);
}
function formatNaira(value) {
	return `₦${value.toLocaleString("en-NG")}`;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-CVXJB6hA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 bg-paper px-6 text-center text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-electric-deep",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-lg font-semibold text-navy",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-muted",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function btn(variant = "primary", className) {
	return cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 font-display text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric disabled:cursor-not-allowed disabled:opacity-50", {
		primary: "bg-electric-deep text-on-electric hover:bg-navy",
		navy: "bg-navy text-paper hover:bg-electric-deep",
		line: "bg-card text-navy shadow-card hover:bg-paper",
		ghost: "border border-paper/40 bg-transparent text-paper hover:bg-paper/10"
	}[variant], className);
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		className: "mx-auto flex min-h-[60vh] max-w-xl flex-col items-start justify-center px-4 py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold tracking-widest text-electric-deep uppercase",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold text-navy",
				children: "That page is not in the shop."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "The link may be old. Browse the catalogue or go back to the Delight Gadgets homepage."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: btn("navy"),
					children: "Home"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: btn("line"),
					children: "Shop gadgets"
				})]
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
/**
* The only place Delight Gadgets contact details live.
* Leave a field blank. Do not invent a street, phone, email or opening hours.
* When a real WhatsApp number is added (digits, country code, no plus),
* every WhatsApp button opens that chat.
*/
var business = {
	name: "Delight Gadgets",
	area: "Anambra State",
	country: "Nigeria",
	whatsappE164: "2348136138666",
	phoneDisplay: "0813 613 8666",
	email: "",
	street: "Spring Life Plaza, Shop 9, along St Joseph Cathedral",
	city: "Ekwulobia",
	hours: [{
		days: "Every day",
		hours: "Open 24 hours"
	}]
};
var STORE_BLURB = "Delight Gadgets is a gadget and electronics retailer for customers in Anambra State and beyond. We sell smartphones, laptops, tablets, smartwatches, audio and accessories, and we confirm today's naira price before you pay.";
function absolutize(value, origin) {
	if (typeof value === "string") return value.startsWith("/") ? origin + value : value;
	if (Array.isArray(value)) return value.map((item) => absolutize(item, origin));
	if (value && typeof value === "object") {
		const out = {};
		for (const [key, item] of Object.entries(value)) out[key] = absolutize(item, origin);
		return out;
	}
	return value;
}
function JsonLd({ data }) {
	const [origin, setOrigin] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => setOrigin(window.location.origin), []);
	const payload = origin ? absolutize(data, origin) : data;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
		type: "application/ld+json",
		dangerouslySetInnerHTML: { __html: JSON.stringify(payload).replace(/</g, "\\u003c") }
	});
}
function shopNumber() {
	return business.whatsappE164.replace(/\D/g, "");
}
function phoneLabel() {
	if (business.phoneDisplay.trim()) return business.phoneDisplay.trim();
	const digits = shopNumber();
	return digits ? `+${digits}` : "";
}
function whatsappUrl(text) {
	const digits = shopNumber();
	const encoded = encodeURIComponent(text);
	if (digits) return `https://wa.me/${digits}?text=${encoded}`;
	return `https://wa.me/?text=${encoded}`;
}
function orderMessage(lines) {
	return [
		"Hello Delight Gadgets,",
		"I would like to order:",
		"",
		lines.map((line, index) => `${index + 1}. ${line.name} — ${line.color} × ${line.qty}`).join("\n") || "(no items listed)",
		"",
		"Please confirm today's price in naira, whether each unit is new or UK-used, and availability.",
		"I am ordering from Anambra State, or I will tell you where to deliver."
	].join("\n");
}
var nav = [
	{
		to: "/shop",
		label: "Shop"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/faq",
		label: "FAQ"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteChrome({ children }) {
	const navigate = useNavigate();
	const router = useRouter();
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const phone = phoneLabel();
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	function onSearch(event) {
		event.preventDefault();
		setOpen(false);
		navigate({
			to: "/shop",
			search: { q: query.trim() || void 0 }
		});
	}
	function goBack() {
		if (typeof window !== "undefined" && window.history.length > 1) {
			router.history.back();
			return;
		}
		navigate({ to: "/" });
	}
	const storeSchema = {
		"@context": "https://schema.org",
		"@type": "ElectronicsStore",
		name: business.name,
		description: STORE_BLURB,
		url: "/",
		image: "/images/hero.jpg",
		areaServed: "Anambra State, Nigeria",
		address: {
			"@type": "PostalAddress",
			addressRegion: "Anambra",
			addressCountry: "NG",
			...business.street ? { streetAddress: business.street } : {},
			...business.city ? { addressLocality: business.city } : {}
		},
		...phone ? { telephone: phone } : {},
		...business.email ? { email: business.email } : {},
		openingHours: "Mo-Su 00:00-23:59"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: storeSchema }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#main",
			className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-card focus:px-4 focus:py-2",
			children: "Skip to content"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-navy text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto max-w-6xl px-4 py-2 text-center text-sm",
				children: "Anambra State · Smartphones, laptops and accessories · Today's price confirmed before you pay"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "sticky top-0 z-40 border-b border-line bg-card/95 backdrop-blur",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center gap-3 px-4 py-3",
				children: [
					pathname !== "/" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: goBack,
						className: "inline-flex min-h-11 shrink-0 items-center gap-1 rounded-full text-sm font-semibold text-navy",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							className: "size-5",
							"aria-hidden": "true"
						}), "Back"]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-9 place-items-center rounded-lg bg-navy font-display text-base font-semibold text-paper",
							children: "D"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-base font-semibold text-navy",
								children: "Delight"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs tracking-widest text-muted uppercase",
								children: "Gadgets"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "ml-6 hidden items-center gap-5 md:flex",
						"aria-label": "Primary",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "text-sm font-semibold text-ink hover:text-electric-deep",
							activeOptions: { exact: item.to === "/shop" ? false : true },
							activeProps: { className: "text-electric-deep" },
							children: item.label
						}, item.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: onSearch,
						className: "ml-auto hidden min-w-0 flex-1 md:block md:max-w-xs",
						role: "search",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "sr-only",
							htmlFor: "header-search",
							children: "Search gadgets"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 rounded-full border border-line bg-paper px-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
								className: "size-4 text-muted",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "header-search",
								value: query,
								onChange: (event) => setQuery(event.target.value),
								placeholder: "Search phones, laptops…",
								className: "min-h-11 w-full bg-transparent text-sm outline-none"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "ml-auto inline-flex size-11 items-center justify-center rounded-full text-navy md:ml-0",
						"aria-expanded": open,
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((value) => !value),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})
				]
			}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-line bg-card px-4 py-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-col",
					"aria-label": "Mobile",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "flex min-h-11 items-center text-base font-semibold text-navy",
						children: item.label
					}, item.to))
				})
			}) : null]
		}),
		children,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
			className: "mt-16 border-t border-line bg-navy text-paper",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3 md:*:min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl font-semibold",
							children: "Delight Gadgets"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-paper/80",
							children: "Electronics store in Anambra State. Quality phones, laptops and accessories, with the price confirmed before you pay."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-sm font-semibold tracking-widest uppercase",
						children: "Browse"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-2 text-sm text-paper/80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								search: { category: "smartphones" },
								className: "hover:text-paper",
								children: "Buy smartphones in Anambra"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								search: { category: "iphones" },
								className: "hover:text-paper",
								children: "Buy iPhones in Anambra"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								search: { category: "android" },
								className: "hover:text-paper",
								children: "Affordable phones in Anambra"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								search: { category: "laptops" },
								className: "hover:text-paper",
								children: "Laptop shop in Anambra"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								search: { category: "accessories" },
								className: "hover:text-paper",
								children: "Phone accessories in Anambra"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-sm font-semibold tracking-widest uppercase",
							children: "Visit"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 space-y-2 text-sm text-paper/80",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Spring Life Plaza, Shop 9" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Along St Joseph Cathedral, Ekwulobia" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Anambra State, Nigeria" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:+${shopNumber()}`,
									className: "hover:text-paper",
									children: phone
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/about",
									className: "hover:text-paper",
									children: "About"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "hover:text-paper",
									children: "Contact"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/faq",
									className: "hover:text-paper",
									children: "FAQ"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/sitemap.xml",
									className: "hover:text-paper",
									children: "Sitemap"
								}) })
							]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-paper/15",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mx-auto max-w-6xl px-4 py-4 text-xs text-paper/70",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Delight Gadgets. Anambra State, Nigeria."
					]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: whatsappUrl("Hello Delight Gadgets, I am looking for gadgets in Anambra State. Please confirm what you have and today's price in naira."),
			target: "_blank",
			rel: "noopener noreferrer",
			className: "fixed right-4 bottom-4 z-30 inline-flex min-h-11 items-center gap-2 rounded-full bg-electric-deep px-4 font-display text-sm font-semibold text-on-electric shadow-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
					className: "size-4",
					"aria-hidden": "true"
				}),
				"WhatsApp",
				shopNumber() ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: " Opens WhatsApp with a message ready to send."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, { position: "top-center" })
	] });
}
var styles_default = "/assets/styles-h4fkQBh3.css";
var TITLE = "Gadgets in Anambra State | Delight Gadgets";
var DESCRIPTION = "Delight Gadgets is a phone shop and electronics store in Anambra State. Buy smartphones, iPhones, laptops and accessories. Today's naira price is confirmed before you pay.";
var Route$9 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: TITLE },
			{
				name: "description",
				content: DESCRIPTION
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				name: "theme-color",
				content: "#0B1F3A"
			},
			{
				name: "geo.region",
				content: "NG-AN"
			},
			{
				name: "geo.placename",
				content: "Anambra State"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&display=swap"
			},
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteChrome, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$6 = () => import("./routes-DN4CgxCQ.mjs");
var Route$8 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Gadgets in Anambra State | Delight Gadgets" }, {
		name: "description",
		content: "Phone shop in Anambra for quality smartphones, iPhones, laptops, electronics and accessories. Delight Gadgets confirms today's naira price before you pay."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./about-CDrVbOo6.mjs");
var Route$7 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About Delight Gadgets | Electronics Store in Anambra" }, {
		name: "description",
		content: "Delight Gadgets is a trusted gadget retailer in Anambra State. Quality smartphones, laptops and accessories, fair naira prices, and service you can actually reach."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./cart-OLDGFkIz.mjs");
var Route$6 = createFileRoute("/cart")({
	head: () => ({ meta: [
		{ title: "Your Cart | Delight Gadgets" },
		{
			name: "description",
			content: "Review your Delight Gadgets cart and send the order on WhatsApp for a confirmed naira price."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-B2yyIAqX.mjs");
var Route$5 = createFileRoute("/contact")({
	validateSearch: (search) => {
		const result = {};
		if (typeof search.product === "string" && search.product) result.product = search.product;
		if (search.intent === "order") result.intent = "order";
		return result;
	},
	head: () => ({ meta: [{ title: "Contact Delight Gadgets | Ekwulobia, Anambra" }, {
		name: "description",
		content: "Visit Delight Gadgets at Spring Life Plaza, Shop 9, along St Joseph Cathedral, Ekwulobia. Call or WhatsApp to confirm today's price."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./faq-Cchpfqyz.mjs");
var Route$4 = createFileRoute("/faq")({
	head: () => ({ meta: [{ title: "FAQ | Phone Shop in Anambra | Delight Gadgets" }, {
		name: "description",
		content: "Questions about buying smartphones, iPhones, laptops and accessories from Delight Gadgets in Anambra State. Prices, delivery, warranty and how to order."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
function originFrom$1(request) {
	const url = new URL(request.url);
	const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? url.host;
	return `${request.headers.get("x-forwarded-proto") ?? url.protocol.replace(":", "")}://${host}`;
}
var Route$3 = createFileRoute("/robots.txt")({ server: { handlers: { GET: async ({ request }) => {
	const body = `User-agent: *\nAllow: /\n\nSitemap: ${originFrom$1(request)}/sitemap.xml\n`;
	return new Response(body, { headers: {
		"Content-Type": "text/plain; charset=utf-8",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$1 = () => import("./shop-DsRQBDtm.mjs");
var Route$2 = createFileRoute("/shop")({
	validateSearch: (search) => {
		const result = {};
		if (typeof search.q === "string" && search.q.trim()) result.q = search.q.trim();
		if (typeof search.category === "string" && search.category) result.category = search.category;
		if (search.sort === "az" || search.sort === "za") result.sort = search.sort;
		return result;
	},
	head: ({ match }) => {
		const category = match.search.category ? getCategory(match.search.category) : void 0;
		const title = category ? `${category.name} in Anambra | Delight Gadgets` : "Phone Shop in Anambra | Buy Smartphones and Laptops | Delight Gadgets";
		const description = category ? `${category.blurb} Shop ${category.name.toLowerCase()} at Delight Gadgets in Anambra State. Price confirmed in naira before you pay.` : "Buy smartphones, iPhones, Android phones, laptops and phone accessories in Anambra. Delight Gadgets is an electronics store with prices confirmed before you pay.";
		return { meta: [{ title }, {
			name: "description",
			content: description
		}] };
	},
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
function originFrom(request) {
	const url = new URL(request.url);
	const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? url.host;
	return `${request.headers.get("x-forwarded-proto") ?? url.protocol.replace(":", "")}://${host}`;
}
var Route$1 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async ({ request }) => {
	const origin = originFrom(request);
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[
		"/",
		"/shop",
		"/about",
		"/contact",
		"/faq",
		...products.map((product) => `/product/${product.slug}`)
	].map((path) => `  <url><loc>${origin}${path}</loc></url>`).join("\n")}
</urlset>`;
	return new Response(body, { headers: {
		"Content-Type": "application/xml; charset=utf-8",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter = () => import("../_slug-C1AVUpF0.mjs");
var Route = createFileRoute("/product/$slug")({
	beforeLoad: ({ params }) => {
		if (!getProduct(params.slug)) throw notFound();
	},
	head: ({ params }) => {
		const product = getProduct(params.slug);
		if (!product) return { meta: [{ title: "Product not found | Delight Gadgets" }] };
		return { meta: [{ title: `Buy ${product.name} in Anambra | Delight Gadgets` }, {
			name: "description",
			content: `${product.summary} Available to order from Delight Gadgets, a phone and electronics shop in Anambra State. Price confirmed in naira.`
		}] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$8.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	AboutRoute: Route$7.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$9
	}),
	CartRoute: Route$6.update({
		id: "/cart",
		path: "/cart",
		getParentRoute: () => Route$9
	}),
	ContactRoute: Route$5.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$9
	}),
	FaqRoute: Route$4.update({
		id: "/faq",
		path: "/faq",
		getParentRoute: () => Route$9
	}),
	RobotsDottxtRoute: Route$3.update({
		id: "/robots.txt",
		path: "/robots.txt",
		getParentRoute: () => Route$9
	}),
	ShopRoute: Route$2.update({
		id: "/shop",
		path: "/shop",
		getParentRoute: () => Route$9
	}),
	SitemapDotxmlRoute: Route$1.update({
		id: "/sitemap.xml",
		path: "/sitemap.xml",
		getParentRoute: () => Route$9
	}),
	ProductSlugRoute: Route.update({
		id: "/product/$slug",
		path: "/product/$slug",
		getParentRoute: () => Route$9
	})
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent,
		defaultNotFoundComponent: NotFound,
		scrollRestoration: true
	});
}
//#endregion
export { products as _, orderMessage as a, whatsappUrl as c, btn as d, categories as f, getProduct as g, getCategory as h, Route$5 as i, JsonLd as l, formatNaira as m, Route as n, phoneLabel as o, filterProducts as p, Route$2 as r, shopNumber as s, router_exports as t, business as u, relatedProducts as v };

import { c as createComponent, d as createAstro, r as renderTemplate, f as addAttribute, m as maybeRenderHead, i as renderComponent, k as renderSlot, l as renderHead } from './astro/server_kQJ0UsT0.mjs';
/* empty css                         */

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro();
const $$SubscribeModal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SubscribeModal;
  const { delay = 3e3 } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div id="subscribe-modal" class="modal pointer-events-none opacity-0 transition-opacity duration-300 z-20"', ` aria-hidden="true"> <div class="modal-box max-w-lg text-center space-y-4 sm:space-y-6 p-4 sm:p-6 mx-4"> <h2 class="text-2xl sm:text-3xl md:text-4xl font-family-sancreek">
Don't Miss Your Exit
</h2> <p class="font-family-chelsea text-sm sm:text-base">
Join the text + email list for first dibs on shows, drops, and
			secret truck-stop sets.
</p> <form id="modal-subscribe-form" class="space-y-4"> <input type="email" id="modal-email-input" name="email" class="input input-bordered w-full bg-transparent text-sm sm:text-base" placeholder="yourname@email.com" required> <button type="submit" id="modal-subscribe-button" class="btn btn-accent w-full rounded-full text-sm sm:text-base"> <span id="modal-button-text">Get Updates</span> <span id="modal-button-loading" class="loading loading-spinner hidden"></span> </button> <div id="modal-message" class="text-center hidden text-sm font-family-chelsea"></div> </form> <button type="button" class="btn btn-ghost w-full rounded-full text-sm sm:text-base" data-close-modal data-dismiss-session="true">
Maybe later
</button> </div> </div> <script>
	(() => {
		const modal = document.getElementById("subscribe-modal");
		if (!modal) return;

		const delay = Number(modal.dataset.delay || 3000);
		const form = document.getElementById("modal-subscribe-form");
		const emailInput = document.getElementById("modal-email-input");
		const submitButton = document.getElementById("modal-subscribe-button");
		const buttonText = document.getElementById("modal-button-text");
		const buttonLoading = document.getElementById("modal-button-loading");
		const messageDiv = document.getElementById("modal-message");
		const DISMISS_KEY = "hh-subscribe-dismissed";
		const sessionStore = (() => {
			try {
				return window.sessionStorage;
			} catch {
				return null;
			}
		})();

		if (sessionStore?.getItem(DISMISS_KEY) === "true") {
			return;
		}

		let hasOpened = false;

		const openModal = () => {
			if (hasOpened) return;
			hasOpened = true;
			modal.classList.remove("pointer-events-none");
			modal.classList.add(
				"modal-open",
				"pointer-events-auto",
				"opacity-100",
			);
			modal.setAttribute("aria-hidden", "false");
		};

		const closeModal = (persist = false) => {
			modal.classList.remove(
				"modal-open",
				"pointer-events-auto",
				"opacity-100",
			);
			modal.classList.add("pointer-events-none");
			modal.setAttribute("aria-hidden", "true");

			if (persist) {
				sessionStore?.setItem(DISMISS_KEY, "true");
			}
		};

		setTimeout(openModal, delay);

		modal.addEventListener("click", (event) => {
			const target = event.target;
			if (target === modal) {
				closeModal();
			} else if (
				target instanceof HTMLElement &&
				target.dataset.closeModal !== undefined
			) {
				const persist = target.dataset.dismissSession === "true";
				closeModal(persist);
			}
		});

		document.addEventListener("keydown", (event) => {
			if (event.key === "Escape") {
				closeModal();
			}
		});

		if (form) {
			form.addEventListener("submit", async (event) => {
				event.preventDefault();

				const email = emailInput.value.trim();

				if (!email) {
					showMessage("Please enter your email address", "error");
					return;
				}

				// Disable form during submission
				submitButton.disabled = true;
				buttonText.classList.add("hidden");
				buttonLoading.classList.remove("hidden");
				messageDiv.classList.add("hidden");

				try {
					const response = await fetch("/api/subscribe", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({ email }),
					});

					const data = await response.json();

					if (response.ok) {
						showMessage(
							"\u{1F389} Welcome to the Homesick Highway community!",
							"success",
						);
						form.reset();
						setTimeout(() => {
							closeModal(true);
						}, 2000);
					} else {
						showMessage(
							data.error ||
								"Something went wrong. Please try again.",
							"error",
						);
					}
				} catch (error) {
					console.error("Subscription error:", error);
					showMessage(
						"Network error. Please check your connection and try again.",
						"error",
					);
				} finally {
					// Re-enable form
					submitButton.disabled = false;
					buttonText.classList.remove("hidden");
					buttonLoading.classList.add("hidden");
				}
			});
		}

		function showMessage(message, type) {
			messageDiv.textContent = message;
			messageDiv.classList.remove("hidden", "text-success", "text-error");
			messageDiv.classList.add(
				type === "success" ? "text-success" : "text-error",
			);
		}
	})();
<\/script>`])), maybeRenderHead(), addAttribute(delay, "data-delay"));
}, "/Users/shawnpapineau/Developer/homesick-highway/hh-band-website/client/src/components/SubscribeModal.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$RootLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RootLayout;
  const { title = "Homesick Highway", description = "Official band website" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-theme="retro"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Chelsea+Market&family=Danfo&family=Sancreek&display=swap" rel="stylesheet"><title>', "</title>", '</head> <body class="relative"> <header class="fixed top-0 left-0 z-20 w-full bg-white/20 backdrop-blur-sm text-black"> <div class="p-3 md:p-5 flex items-center justify-between"> <a href="/"> <h1 class="text-3xl md:text-6xl font-semibold hover:text-white ease-linear transition-all">\nHMSCK HWY\n</h1> </a> <!-- Mobile Menu Button --> <button id="mobile-menu-btn" class="md:hidden text-3xl hover:text-white transition-all">\n\u2630\n</button> <!-- Desktop Navigation --> <nav class="hidden md:block"> <ul class="flex gap-5 text-3xl font-semibold items-center"> <li class="hover:text-white transition-all ease-linear"> <a href="/#music">MUSIC</a> </li> <li class="hover:text-white transition-all ease-linear"> <a href="/shows">SHOWS</a> </li> </ul> </nav> </div> <!-- Mobile Navigation --> <nav id="mobile-menu" class="hidden md:hidden bg-black/90 backdrop-blur-md"> <ul class="flex flex-col gap-4 p-5 text-2xl font-semibold text-white"> <li class="hover:text-amber-500 transition-all ease-linear"> <a href="/#music" class="block py-2">MUSIC</a> </li> <li class="hover:text-amber-500 transition-all ease-linear"> <a href="/shows" class="block py-2">SHOWS</a> </li> </ul> </nav> </header> <script>\n			const mobileMenuBtn = document.getElementById("mobile-menu-btn");\n			const mobileMenu = document.getElementById("mobile-menu");\n\n			mobileMenuBtn?.addEventListener("click", () => {\n				mobileMenu?.classList.toggle("hidden");\n			});\n\n			// Close mobile menu when clicking a link\n			mobileMenu?.querySelectorAll("a").forEach((link) => {\n				link.addEventListener("click", () => {\n					mobileMenu.classList.add("hidden");\n				});\n			});\n		<\/script> <main class="min-h-screen flex flex-col relative"> ', " </main> <!-- <LucidVisionPlayer /> --> ", ' <footer class="p-5 text-center text-sm text-base-content/80"> <p>\n&copy; ', " Homesick Highway. All rights reserved.\n</p> </footer> </body></html>"])), addAttribute(description, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]), renderComponent($$result, "SubscribeModal", $$SubscribeModal, { "delay": 3e3 }), (/* @__PURE__ */ new Date()).getFullYear());
}, "/Users/shawnpapineau/Developer/homesick-highway/hh-band-website/client/src/layouts/RootLayout.astro", void 0);

export { $$RootLayout as $ };

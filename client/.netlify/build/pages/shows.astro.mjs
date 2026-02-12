import { c as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_kQJ0UsT0.mjs';
import { $ as $$RootLayout } from '../chunks/RootLayout_Evy2IL_L.mjs';
import { $ as $$Hero, a as $$EmailListSubscribe } from '../chunks/Hero_ggngfvi-.mjs';
export { renderers } from '../renderers.mjs';

const $$Shows = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "RootLayout", $$RootLayout, { "title": "Homesick Highway Shows - Tampa Florida Hard Rock Concerts & Tour Dates", "description": "Catch Homesick Highway live! Tampa's premier hard rock, country, and metal band. Get tickets to upcoming Florida concerts and tour dates. High-energy performances across the Sunshine State.", "keywords": "Homesick Highway shows, Tampa concerts, Florida rock concerts, hard rock shows Tampa, metal concerts Florida, live music Tampa, Tampa Bay concerts, rock band tour dates, Florida music venues, Tampa rock shows" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "heroText": "SHOWS", "heroImageUrl": "https://hh-marketing-website.s3.us-east-2.amazonaws.com/HH_Promos+(18+of+37).jpg" })} ${maybeRenderHead()}<section id="shows" class="min-h-screen pt-40 pb-24 px-6 md:px-10 bg-gradient-to-b from-base-200/40 via-base-200/10 to-base-300/40 flex flex-col gap-16"> <div class="max-w-4xl px-4"> <p class="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm text-amber-500 font-semibold mb-3">
tour log
</p> <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-family-danfo leading-tight">
Upcoming Shows
</h1> </div> <div id="show-card-list	" class="flex flex-col gap-10 px-4"> <div class="card bg-base-100 shadow-xl"> <div class="card-body p-4 sm:p-6 md:p-8"> <h2 class="card-title text-2xl sm:text-3xl md:text-4xl">
Nothing to see here yet
</h2> <p class="text-base sm:text-lg italic font-light">
Sign up for the official Homesick Highway email list to
						be the first to know when we announce new shows and tour
						dates.
</p> </div> ${renderComponent($$result2, "EmailListSubscribe", $$EmailListSubscribe, {})} </div> </div> </section> ` })}`;
}, "/Users/shawnpapineau/Developer/homesick-highway/hh-band-website/client/src/pages/shows.astro", void 0);

const $$file = "/Users/shawnpapineau/Developer/homesick-highway/hh-band-website/client/src/pages/shows.astro";
const $$url = "/shows";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Shows,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { c as createComponent, m as maybeRenderHead, i as renderComponent, r as renderTemplate } from '../chunks/astro/server_kQJ0UsT0.mjs';
import { a as $$EmailListSubscribe, $ as $$Hero } from '../chunks/Hero_ggngfvi-.mjs';
import { $ as $$RootLayout } from '../chunks/RootLayout_Evy2IL_L.mjs';
export { renderers } from '../renderers.mjs';

const $$NoMerch = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> <div class="hero min-h-screen relative" style="background-image: url(&quot;https://hh-marketing-website.s3.us-east-2.amazonaws.com/HH_Promos+(11+of+37).jpg&quot;); background-position: center 20%;"> <div class="hero-overlay bg-black/60"></div> <div class="text-center text-white mt-24 px-4"> <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-family-sancreek">
This Rest Stop is Under Construction.
</h1> <p class="mt-4 text-lg sm:text-xl md:text-2xl italic font-family-chelsea max-w-3xl mx-auto">
No Merch Yet. In the meantime, join our community to get the
				latest updates from Homesick Highway
</p> ${renderComponent($$result, "EmailListSubscribe", $$EmailListSubscribe, {})} </div> </div> </div>`;
}, "/Users/shawnpapineau/Developer/homesick-highway/hh-band-website/client/src/components/NoMerch.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "RootLayout", $$RootLayout, { "title": "Homesick Highway - Tampa Florida Hard Rock Country Metal Band | New Music 2026", "description": "Homesick Highway is Tampa's premier hard rock band fusing country and metal. Debut single 'Lucid Vision' drops March 13, 2026. Experience Florida's most exciting new rock band with electrifying live shows and genre-bending sound.", "keywords": "Homesick Highway, Tampa rock band, Florida hard rock, country metal band, new rock music 2026, Lucid Vision single, Tampa concerts, Florida metal band, hard rock Florida, southern rock Tampa, new bands Florida, rock music Tampa Bay", "image": "https://hh-marketing-website.s3.us-east-2.amazonaws.com/lucid-vision/Untitled.png" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "heroText": "Homesick Highway", "heroImageUrl": "https://hh-marketing-website.s3.us-east-2.amazonaws.com/HH_Promos+(36+of+37).jpg" })} ${maybeRenderHead()}<section id="music" class="my-8 md:my-16 flex-col px-3 md:px-5"> <div class="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8 p-3 md:p-5 md:justify-between"> <div class="w-full md:w-auto flex justify-center"> <img src="https://hh-marketing-website.s3.us-east-2.amazonaws.com/lucid-vision/Untitled.png" alt="Lucid Vision Album Cover" class="w-64 sm:w-80 md:w-96 rounded-lg shadow-lg"> </div> <div class="text-center md:text-right flex flex-col gap-4 h-full justify-between w-full md:w-auto"> <div> <h2 class="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold font-family-danfo">
Lucid <span class="italic font-light">Vision</span> </h2> <h3 class="italic text-3xl sm:text-4xl md:text-5xl font-family-chelsea mt-2">
03.13.2026
</h3> </div> <div class="mt-4 md:mt-0"> <button class="btn btn-outline w-full btn-accent btn-lg md:btn-xl font-family-chelsea">Presave Now</button> </div> </div> </div> <p class="italic font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mt-6 md:mt-4">
The Debut Single from Homesick Highway
</p> </section> <section id="store-preview"> <div class="p-3 md:p-5"> <div class="mb-5 text-center md:text-left"> <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-family-sancreek">
From the Truck Stop
</h2> <h3 class="italic font-light font-family-chelsea text-lg sm:text-xl md:text-2xl mt-2">
Pick up some merch and get back on the road.
</h3> </div> ${renderComponent($$result2, "NoMerch", $$NoMerch, {})} <!-- <MerchPreview /> --> </div> </section> ` })}`;
}, "/Users/shawnpapineau/Developer/homesick-highway/hh-band-website/client/src/pages/index.astro", void 0);

const $$file = "/Users/shawnpapineau/Developer/homesick-highway/hh-band-website/client/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

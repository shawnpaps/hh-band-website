// @ts-check
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify"; // or '@astrojs/netlify-edge'

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	adapter: netlify(),
	output: "static",

	vite: {
		plugins: [tailwindcss()],
	},
});

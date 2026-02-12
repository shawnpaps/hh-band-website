import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_D1eh19Ol.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/subscribe.astro.mjs');
const _page2 = () => import('./pages/press.astro.mjs');
const _page3 = () => import('./pages/shows.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.17.2_@netlify+blobs@10.6.0_@types+node@25.0.3_jiti@2.6.1_lightningcss@1.30.2_rollup@4_lptr2sffnyoxxfjhih3ahoh3ha/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/subscribe.ts", _page1],
    ["src/pages/press.astro", _page2],
    ["src/pages/shows.astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b65a1c56-2c48-45a0-970a-9f37b379c9bc"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

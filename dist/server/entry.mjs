import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Dpw4aX3M.mjs';
import { manifest } from './manifest_5aQuo3Lb.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/admin.astro.mjs');
const _page1 = () => import('./pages/products.astro.mjs');
const _page2 = () => import('./pages/services.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/admin/index.astro", _page0],
    ["src/pages/products.astro", _page1],
    ["src/pages/services.astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///D:/Learning/Project/pucca-hairstyling/dist/client/",
    "server": "file:///D:/Learning/Project/pucca-hairstyling/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };

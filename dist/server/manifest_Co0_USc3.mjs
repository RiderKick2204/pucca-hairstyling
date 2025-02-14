import 'kleur/colors';
import { n as decodeKey } from './chunks/astro/server_C7Xamz13.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DzFzdlBN.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/Learning/Project/pucca-hairstyling/","cacheDir":"file:///D:/Learning/Project/pucca-hairstyling/node_modules/.astro/","outDir":"file:///D:/Learning/Project/pucca-hairstyling/dist/","srcDir":"file:///D:/Learning/Project/pucca-hairstyling/src/","publicDir":"file:///D:/Learning/Project/pucca-hairstyling/public/","buildClientDir":"file:///D:/Learning/Project/pucca-hairstyling/dist/client/","buildServerDir":"file:///D:/Learning/Project/pucca-hairstyling/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/my-repo/_astro/index.BHdhsY7h.css"}],"routeData":{"route":"/admin","isIndex":true,"type":"page","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/index.astro","pathname":"/admin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/my-repo/_astro/index.BHdhsY7h.css"},{"type":"inline","content":".filter-btn[data-astro-cid-3swd3b6j].active{--tw-bg-opacity: 1;background-color:rgb(216 51 51 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}\n"}],"routeData":{"route":"/products","isIndex":false,"type":"page","pattern":"^\\/products\\/?$","segments":[[{"content":"products","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/products.astro","pathname":"/products","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/my-repo/_astro/index.BHdhsY7h.css"}],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/my-repo/_astro/index.BHdhsY7h.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://pucca-hairstyling.pages.github.io","base":"/my-repo","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/Learning/Project/pucca-hairstyling/src/pages/admin/index.astro",{"propagation":"none","containsHead":true}],["D:/Learning/Project/pucca-hairstyling/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/Learning/Project/pucca-hairstyling/src/pages/products.astro",{"propagation":"none","containsHead":true}],["D:/Learning/Project/pucca-hairstyling/src/pages/services.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/admin/index@_@astro":"pages/admin.astro.mjs","\u0000@astro-page:src/pages/products@_@astro":"pages/products.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Co0_USc3.mjs","D:/Learning/Project/pucca-hairstyling/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_COFKqfws.mjs","D:/Learning/Project/pucca-hairstyling/src/pages/admin/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang._coCxm5l.js","D:/Learning/Project/pucca-hairstyling/src/pages/products.astro?astro&type=script&index=0&lang.ts":"_astro/products.astro_astro_type_script_index_0_lang.CU4qPgZ4.js","D:/Learning/Project/pucca-hairstyling/src/pages/services.astro?astro&type=script&index=0&lang.ts":"_astro/services.astro_astro_type_script_index_0_lang.dx-JjUfZ.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["D:/Learning/Project/pucca-hairstyling/src/pages/admin/index.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.querySelector(\"form\");e&&e.addEventListener(\"submit\",t=>{t.preventDefault(),console.log(\"Login attempted\")})});"],["D:/Learning/Project/pucca-hairstyling/src/pages/products.astro?astro&type=script&index=0&lang.ts","const a=[{id:1,name:\"Professional Shampoo\",description:\"Sulfate-free shampoo for all hair types\",price:24.99,category:\"Shampoo\"},{id:2,name:\"Deep Conditioning Mask\",description:\"Intensive repair treatment for damaged hair\",price:34.99,category:\"Treatment\"},{id:3,name:\"Heat Protection Spray\",description:\"Protects hair from heat styling damage\",price:19.99,category:\"Styling\"},{id:4,name:\"Argan Oil Serum\",description:\"Smoothing and shine-enhancing hair serum\",price:29.99,category:\"Treatment\"},{id:5,name:\"Volume Boost Mousse\",description:\"Lightweight mousse for added volume\",price:21.99,category:\"Styling\"},{id:6,name:\"Professional Conditioner\",description:\"Moisturizing conditioner for daily use\",price:22.99,category:\"Conditioner\"}],r=document.querySelectorAll(\".filter-btn\"),n=document.querySelectorAll(\".product-card\");r.forEach(t=>{t.addEventListener(\"click\",()=>{const i=t.getAttribute(\"data-category\");r.forEach(e=>e.classList.remove(\"active\")),t.classList.add(\"active\"),n.forEach(e=>{const o=e;i===\"all\"||e.getAttribute(\"data-category\")===i?o.style.display=\"block\":o.style.display=\"none\"})})});window.handleOrder=t=>{const i=a.find(e=>e.id===t);i&&alert(`Thank you for your interest in ${i.name}! Please visit our salon to purchase this product.`)};"],["D:/Learning/Project/pucca-hairstyling/src/pages/services.astro?astro&type=script&index=0&lang.ts","const o=document.getElementById(\"bookingForm\");o&&o.addEventListener(\"submit\",async t=>{t.preventDefault();const r=new FormData(o),e=Object.fromEntries(r);try{console.log(\"Booking data:\",e),alert(\"Thank you for booking! We will contact you shortly to confirm your appointment.\"),o.reset()}catch(n){console.error(\"Error submitting booking:\",n),alert(\"There was an error submitting your booking. Please try again.\")}});"]],"assets":["/my-repo/_astro/index.BHdhsY7h.css","/my-repo/favicon.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"axfNyO9Ok2dSvsJ3tDVD8ENJGoUgPRJOenS7LlFduj4="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };

/* empty css                                 */
import { f as createComponent, r as renderTemplate, i as renderComponent, j as renderScript, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_C7Xamz13.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CTWzrRBV.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Products = createComponent(($$result, $$props, $$slots) => {
  const products = [
    {
      id: 1,
      name: "Professional Shampoo",
      description: "Sulfate-free shampoo for all hair types",
      price: 24.99,
      category: "Shampoo"
    },
    {
      id: 2,
      name: "Deep Conditioning Mask",
      description: "Intensive repair treatment for damaged hair",
      price: 34.99,
      category: "Treatment"
    },
    {
      id: 3,
      name: "Heat Protection Spray",
      description: "Protects hair from heat styling damage",
      price: 19.99,
      category: "Styling"
    },
    {
      id: 4,
      name: "Argan Oil Serum",
      description: "Smoothing and shine-enhancing hair serum",
      price: 29.99,
      category: "Treatment"
    },
    {
      id: 5,
      name: "Volume Boost Mousse",
      description: "Lightweight mousse for added volume",
      price: 21.99,
      category: "Styling"
    },
    {
      id: 6,
      name: "Professional Conditioner",
      description: "Moisturizing conditioner for daily use",
      price: 22.99,
      category: "Conditioner"
    }
  ];
  const categories = [...new Set(products.map((product) => product.category))];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Hair Care Products", "data-astro-cid-3swd3b6j": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-astro-cid-3swd3b6j> <h1 class="text-center" data-astro-cid-3swd3b6j>Hair Care Products</h1> <div class="mt-8" data-astro-cid-3swd3b6j> <div class="flex flex-wrap justify-center gap-4 mb-8" data-astro-cid-3swd3b6j> <button class="btn btn-secondary filter-btn active" data-category="all" data-astro-cid-3swd3b6j>All</button> ${categories.map((category) => renderTemplate`<button class="btn btn-secondary filter-btn"${addAttribute(category, "data-category")} data-astro-cid-3swd3b6j> ${category} </button>`)} </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="products-grid" data-astro-cid-3swd3b6j> ${products.map((product) => renderTemplate`<div class="bg-white p-6 rounded-lg shadow-md product-card"${addAttribute(product.category, "data-category")} data-astro-cid-3swd3b6j> <div class="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg mb-4" data-astro-cid-3swd3b6j> <div class="flex items-center justify-center h-48 bg-gray-100 rounded-lg" data-astro-cid-3swd3b6j> <span class="text-gray-400" data-astro-cid-3swd3b6j>Product Image</span> </div> </div> <h3 data-astro-cid-3swd3b6j>${product.name}</h3> <p class="text-gray-600 mb-4" data-astro-cid-3swd3b6j>${product.description}</p> <div class="flex justify-between items-center" data-astro-cid-3swd3b6j> <span class="text-lg font-semibold" data-astro-cid-3swd3b6j>$${product.price}</span> <button class="btn btn-primary"${addAttribute(`handleOrder(${product.id})`, "onclick")} data-astro-cid-3swd3b6j>
Order Now
</button> </div> </div>`)} </div> </div> </div> ` })} ${renderScript($$result, "D:/Learning/Project/pucca-hairstyling/src/pages/products.astro?astro&type=script&index=0&lang.ts")} `;
}, "D:/Learning/Project/pucca-hairstyling/src/pages/products.astro", void 0);

const $$file = "D:/Learning/Project/pucca-hairstyling/src/pages/products.astro";
const $$url = "/my-repo/products";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Products,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

/* empty css                                 */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C7Xamz13.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CTWzrRBV.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://pucca-hairstyling.pages.github.io");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-gradient-to-r from-primary to-secondary text-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"> <div class="text-center"> <h1 class="text-5xl font-bold mb-6">Welcome to Pucca Hairstyling</h1> <p class="text-xl mb-8">
Experience the art of beautiful hair with our professional styling
          services
</p> <a href="/services" class="btn bg-white text-primary hover:bg-gray-100">Book Now</a> </div> </div> </div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> <h2 class="text-center mb-12">Our Featured Services</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div class="bg-white p-6 rounded-lg shadow-md"> <h3>Haircut & Styling</h3> <p class="text-gray-600 mb-4">
Professional haircuts and styling services tailored to your
          preferences
</p> <a href="/services" class="text-primary hover:text-opacity-80">Learn More →</a> </div> <div class="bg-white p-6 rounded-lg shadow-md"> <h3>Color & Highlights</h3> <p class="text-gray-600 mb-4">
Transform your look with our expert coloring and highlighting services
</p> <a href="/services" class="text-primary hover:text-opacity-80">Learn More →</a> </div> <div class="bg-white p-6 rounded-lg shadow-md"> <h3>Hair Treatments</h3> <p class="text-gray-600 mb-4">
Revitalize your hair with our premium treatment services
</p> <a href="/services" class="text-primary hover:text-opacity-80">Learn More →</a> </div> </div> </div> <div class="bg-gray-100"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> <h2 class="text-center mb-12">Why Choose Us?</h2> <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"> <div> <div class="text-4xl text-primary mb-4">10+</div> <p class="font-semibold">Years Experience</p> </div> <div> <div class="text-4xl text-primary mb-4">1000+</div> <p class="font-semibold">Happy Clients</p> </div> <div> <div class="text-4xl text-primary mb-4">50+</div> <p class="font-semibold">Hair Products</p> </div> <div> <div class="text-4xl text-primary mb-4">100%</div> <p class="font-semibold">Satisfaction</p> </div> </div> </div> </div> ` })}`;
}, "D:/Learning/Project/pucca-hairstyling/src/pages/index.astro", void 0);

const $$file = "D:/Learning/Project/pucca-hairstyling/src/pages/index.astro";
const $$url = "/my-repo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

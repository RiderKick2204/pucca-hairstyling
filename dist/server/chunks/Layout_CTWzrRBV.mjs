import { e as createAstro, f as createComponent, r as renderTemplate, k as renderHead, l as renderSlot } from './astro/server_C7Xamz13.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://pucca-hairstyling.pages.github.io");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title} | Pucca Hairstyling</title><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderHead()}</head> <body class="min-h-screen bg-gray-50"> <nav class="bg-white shadow-md"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between h-16"> <div class="flex"> <a href="/" class="flex items-center"> <span class="text-2xl font-bold text-primary">Pucca Hairstyling</span> </a> </div> <div class="flex items-center space-x-4"> <a href="/" class="text-gray-700 hover:text-primary px-3 py-2">Home</a> <a href="/services" class="text-gray-700 hover:text-primary px-3 py-2">Services</a> <a href="/products" class="text-gray-700 hover:text-primary px-3 py-2">Products</a> <a href="/admin" class="text-gray-700 hover:text-primary px-3 py-2">Admin</a> </div> </div> </div> </nav> <main> ${renderSlot($$result, $$slots["default"])} </main> <footer class="bg-gray-800 text-white mt-12"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div> <h3 class="text-lg font-semibold mb-4">Contact Us</h3> <p>Email: info@puccahairstyling.com</p> <p>Phone: (123) 456-7890</p> </div> <div> <h3 class="text-lg font-semibold mb-4">Business Hours</h3> <p>Monday - Saturday: 9:00 AM - 7:00 PM</p> <p>Sunday: Closed</p> </div> <div> <h3 class="text-lg font-semibold mb-4">Follow Us</h3> <div class="flex space-x-4"> <a href="#" class="hover:text-primary">Instagram</a> <a href="#" class="hover:text-primary">Facebook</a> </div> </div> </div> <div class="mt-8 text-center border-t border-gray-700 pt-8"> <p>
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Pucca Hairstyling. All rights reserved.
</p> </div> </div> </footer> </body></html>`;
}, "D:/Learning/Project/pucca-hairstyling/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };

/* empty css                                 */
import { f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, e as createAstro, i as renderComponent, j as renderScript } from '../chunks/astro/server_C7Xamz13.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CTWzrRBV.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const products = [
  {
    id: 1,
    name: "Professional Shampoo",
    description: "Sulfate-free shampoo for all hair types",
    price: 24.99,
    stock: 24,
    status: "In Stock",
    category: "Shampoo"
  },
  {
    id: 2,
    name: "Hair Treatment Mask",
    description: "Intensive repair treatment for damaged hair",
    price: 34.99,
    stock: 15,
    status: "Low Stock",
    category: "Treatment"
  },
  {
    id: 3,
    name: "Heat Protection Spray",
    description: "Protects hair from heat styling damage",
    price: 19.99,
    stock: 30,
    status: "In Stock",
    category: "Styling"
  },
  {
    id: 4,
    name: "Argan Oil Serum",
    description: "Smoothing and shine-enhancing hair serum",
    price: 29.99,
    stock: 5,
    status: "Low Stock",
    category: "Treatment"
  },
  {
    id: 5,
    name: "Haircut & Styling",
    description: "Professional haircut and styling tailored to your preferences",
    price: 50,
    stock: 10,
    status: "Out of Stock",
    category: "Styling"
  }
];

const $$ProductsTab = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-lg shadow-md"> <div class="p-6"> <div class="flex justify-between items-center mb-6"> <h2 class="text-xl font-semibold">
Product Inventory (${products.length} products)
</h2> <button class="btn btn-primary">Add New Product</button> </div> <div class="overflow-x-auto"> <table class="min-w-full divide-y divide-gray-200"> <thead class="bg-gray-50"> <tr> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Product Name
</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Stock
</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Price
</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Status
</th> <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
Actions
</th> </tr> </thead> <tbody class="bg-white divide-y divide-gray-200"> ${products.map((product) => renderTemplate`<tr> <td class="px-6 py-4 whitespace-nowrap">${product.name}</td> <td class="px-6 py-4 whitespace-nowrap">${product.stock}</td> <td class="px-6 py-4 whitespace-nowrap">$${product.price}</td> <td class="px-6 py-4 whitespace-nowrap"> <span${addAttribute([
    "px-2 inline-flex text-xs leading-5 font-semibold rounded-full",
    {
      "bg-green-100 text-green-800": product.status === "In Stock",
      "bg-yellow-100 text-yellow-800": product.status === "Low Stock",
      "bg-red-100 text-red-800": product.status === "Out of Stock"
    }
  ], "class:list")}> ${product.status} </span> </td> <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"> <button class="text-primary hover:text-opacity-80">
Edit
</button> </td> </tr>`)} </tbody> </table> </div> </div> </div>`;
}, "D:/Learning/Project/pucca-hairstyling/src/components/admin/ProductsTab.astro", void 0);

const services = [
  {
    id: 1,
    name: "Haircut & Styling",
    description: "Professional haircut and styling tailored to your preferences",
    duration: "60 min",
    price: "$50+",
    status: "Active"
  },
  {
    id: 2,
    name: "Color & Highlights",
    description: "Full color or highlighting services with premium products",
    duration: "120 min",
    price: "$100+",
    status: "Active"
  },
  {
    id: 3,
    name: "Hair Treatment",
    description: "Deep conditioning and specialized treatments for hair health",
    duration: "45 min",
    price: "$40+",
    status: "Active"
  },
  {
    id: 4,
    name: "Blowout",
    description: "Professional blow dry and style",
    duration: "45 min",
    price: "$35+",
    status: "Active"
  },
  // Add more services as needed
  {
    id: 5,
    name: "Haircut & Styling",
    description: "Professional haircut and styling tailored to your preferences",
    duration: "60 min",
    price: "$50+",
    status: "Active"
  }
];

const $$ServicesTab = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-lg shadow-md"> <div class="p-6"> <div class="flex justify-between items-center mb-6"> <h2 class="text-xl font-semibold">
Services Management (${services.length} services)
</h2> <button class="btn btn-primary">Add New Service</button> </div> <div class="overflow-x-auto"> <table class="min-w-full divide-y divide-gray-200"> <thead class="bg-gray-50"> <tr> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Service Name
</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Duration
</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Price
</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Status
</th> <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
Actions
</th> </tr> </thead> <tbody class="bg-white divide-y divide-gray-200"> ${services.map((service) => renderTemplate`<tr> <td class="px-6 py-4 whitespace-nowrap">${service.name}</td> <td class="px-6 py-4 whitespace-nowrap">${service.duration}</td> <td class="px-6 py-4 whitespace-nowrap">${service.price}</td> <td class="px-6 py-4 whitespace-nowrap"> <span${addAttribute([
    "px-2 inline-flex text-xs leading-5 font-semibold rounded-full",
    {
      "bg-green-100 text-green-800": service.status === "Active",
      "bg-red-100 text-red-800": service.status === "Inactive"
    }
  ], "class:list")}> ${service.status} </span> </td> <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"> <button class="text-primary hover:text-opacity-80">
Edit
</button> </td> </tr>`)} </tbody> </table> </div> </div> </div>`;
}, "D:/Learning/Project/pucca-hairstyling/src/components/admin/ServicesTab.astro", void 0);

const $$Astro = createAstro("https://pucca-hairstyling.pages.github.io");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const activeTab = Astro2.url.searchParams.get("tab") || "dashboard";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Admin Dashboard" }, { "default": ($$result2) => renderTemplate`${renderTemplate`${maybeRenderHead()}<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <h1 class="text-center mb-8">Admin Dashboard</h1> <div class="border-b border-gray-200 mb-8"> <nav class="-mb-px flex space-x-8 justify-center" aria-label="Tabs"> <a href="/admin?tab=dashboard"${addAttribute([
    "py-4 px-1 border-b-2 font-medium text-sm cursor-pointer",
    activeTab === "dashboard" ? "border-primary text-primary" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
  ], "class:list")}>
Dashboard
</a> <a href="/admin?tab=products"${addAttribute([
    "py-4 px-1 border-b-2 font-medium text-sm cursor-pointer",
    activeTab === "products" ? "border-primary text-primary" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
  ], "class:list")}>
Products
</a> <a href="/admin?tab=services"${addAttribute([
    "py-4 px-1 border-b-2 font-medium text-sm cursor-pointer",
    activeTab === "services" ? "border-primary text-primary" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
  ], "class:list")}>
Services
</a> </nav> </div> ${activeTab === "dashboard" && renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <div class="bg-white p-6 rounded-lg shadow-md"> <h2 class="text-xl font-semibold mb-4">Analytics Overview</h2> <div class="space-y-4"> <div class="p-4 bg-gray-50 rounded"> <p class="font-medium">Today's Appointments</p> <p class="text-2xl font-bold text-primary">8</p> </div> <div class="p-4 bg-gray-50 rounded"> <p class="font-medium">Weekly Revenue</p> <p class="text-2xl font-bold text-primary">$2,450</p> </div> <div class="p-4 bg-gray-50 rounded"> <p class="font-medium">Monthly Customers</p> <p class="text-2xl font-bold text-primary">145</p> </div> </div> </div> <div class="bg-white p-6 rounded-lg shadow-md"> <h2 class="text-xl font-semibold mb-4">Recent Appointments</h2> <div class="space-y-4"> <div class="p-4 bg-gray-50 rounded"> <p class="font-medium">Sarah Johnson</p> <p class="text-sm text-gray-600">Haircut & Styling</p> <p class="text-sm text-gray-600">Today at 2:00 PM</p> </div> <div class="p-4 bg-gray-50 rounded"> <p class="font-medium">Mike Smith</p> <p class="text-sm text-gray-600">Color & Highlights</p> <p class="text-sm text-gray-600">Tomorrow at 10:00 AM</p> </div> </div> </div> <div class="bg-white p-6 rounded-lg shadow-md"> <h2 class="text-xl font-semibold mb-4">Quick Actions</h2> <div class="space-y-3"> <button class="btn btn-primary w-full">
Add New Appointment
</button> <button class="btn btn-secondary w-full">
Update Inventory
</button> <button class="btn btn-secondary w-full">
Modify Services
</button> </div> </div> </div>`} ${activeTab === "products" && renderTemplate`${renderComponent($$result2, "ProductsTab", $$ProductsTab, {})}`} ${activeTab === "services" && renderTemplate`${renderComponent($$result2, "ServicesTab", $$ServicesTab, {})}`} </div>` }` })} ${renderScript($$result, "D:/Learning/Project/pucca-hairstyling/src/pages/admin/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Learning/Project/pucca-hairstyling/src/pages/admin/index.astro", void 0);

const $$file = "D:/Learning/Project/pucca-hairstyling/src/pages/admin/index.astro";
const $$url = "/my-repo/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

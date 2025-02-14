/* empty css                                 */
import { f as createComponent, r as renderTemplate, i as renderComponent, j as renderScript, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_C7Xamz13.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CTWzrRBV.mjs';
export { renderers } from '../renderers.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      name: "Haircut & Styling",
      description: "Professional haircut and styling tailored to your preferences",
      duration: "60 min",
      price: "$50+"
    },
    {
      name: "Color & Highlights",
      description: "Full color or highlighting services with premium products",
      duration: "120 min",
      price: "$100+"
    },
    {
      name: "Hair Treatment",
      description: "Deep conditioning and specialized treatments for hair health",
      duration: "45 min",
      price: "$40+"
    },
    {
      name: "Blowout",
      description: "Professional blow dry and style",
      duration: "45 min",
      price: "$35+"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Services & Booking" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <h1 class="text-center">Our Services</h1> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> ${services.map((service) => renderTemplate`<div class="bg-white p-6 rounded-lg shadow-md"> <h3>${service.name}</h3> <p class="text-gray-600 mb-4">${service.description}</p> <div class="flex justify-between text-sm text-gray-500"> <span>Duration: ${service.duration}</span> <span>Starting at ${service.price}</span> </div> </div>`)} </div> <div class="mt-16"> <h2 class="text-center mb-8">Book an Appointment</h2> <div class="max-w-2xl mx-auto"> <form class="space-y-6" id="bookingForm"> <div> <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label> <input type="text" id="name" name="name" required class="input mt-1"> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700">Email</label> <input type="email" id="email" name="email" required class="input mt-1"> </div> <div> <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label> <input type="tel" id="phone" name="phone" required class="input mt-1"> </div> <div> <label for="service" class="block text-sm font-medium text-gray-700">Service</label> <select id="service" name="service" required class="input mt-1"> <option value="">Select a service</option> ${services.map((service) => renderTemplate`<option${addAttribute(service.name, "value")}>${service.name}</option>`)} </select> </div> <div> <label for="date" class="block text-sm font-medium text-gray-700">Preferred Date</label> <input type="date" id="date" name="date" required class="input mt-1"> </div> <div> <label for="time" class="block text-sm font-medium text-gray-700">Preferred Time</label> <select id="time" name="time" required class="input mt-1"> <option value="">Select a time</option> <option value="09:00">9:00 AM</option> <option value="10:00">10:00 AM</option> <option value="11:00">11:00 AM</option> <option value="12:00">12:00 PM</option> <option value="13:00">1:00 PM</option> <option value="14:00">2:00 PM</option> <option value="15:00">3:00 PM</option> <option value="16:00">4:00 PM</option> <option value="17:00">5:00 PM</option> <option value="18:00">6:00 PM</option> </select> </div> <div> <label for="notes" class="block text-sm font-medium text-gray-700">Special Notes</label> <textarea id="notes" name="notes" rows="3" class="input mt-1"></textarea> </div> <div class="text-center"> <button type="submit" class="btn btn-primary">Book Appointment</button> </div> </form> </div> </div> </div> ` })} ${renderScript($$result, "D:/Learning/Project/pucca-hairstyling/src/pages/services.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Learning/Project/pucca-hairstyling/src/pages/services.astro", void 0);

const $$file = "D:/Learning/Project/pucca-hairstyling/src/pages/services.astro";
const $$url = "/my-repo/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

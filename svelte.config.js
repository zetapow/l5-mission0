// import adapter from "@sveltejs/adapter-auto";
import adapter from "@sveltejs/adapter-netlify";

/** @type {import('@sveltejs/kit').Config} */
const config = {
   kit: {
      // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
      // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
      // See https://svelte.dev/docs/kit/adapters for more information about adapters.
      adapter: adapter({
         // if true, will create a Netlify Edge Function rather
         // than using standard Node-based functions
         edge: false,

         // if true, will split your app into multiple functions
         // instead of creating a single one for the entire app.
         // if `edge` is true, this option cannot be used
         split: false,
      }),
   },
};

export default config;

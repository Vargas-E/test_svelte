import adapter from '@sveltejs/adapter-static';
 
const dev = false;

const url = "/test_svelte";
 
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? '' : url,
    }
  }
};

export default config;
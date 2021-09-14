export default {
  // projectRoot: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
  // pages: './src/pages', // Path to Astro components, pages, and data
  // dist: './dist',       // When running `astro build`, path to final static output
  // public: './public',   // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
  buildOptions: {
    site: 'https://tailwind-labs-project.vercel.app/',           // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    // sitemap: true,         // Generate sitemap (set to "false" to disable)
  },
  devOptions: {
    tailwindConfig: './tailwind.config.js', // Path to tailwind.config.js if used, e.g. './tailwind.config.js'
    // hostname: 'localhost',  // The hostname to run the dev server on.
    // port: 3000,             // The port to run the dev server on.
  },
  renderers: [
    // "@astrojs/renderer-react",
    // "@astrojs/renderer-react": "^0.2.0",
    // "@astrojs/renderer-solid",
    // "@astrojs/renderer-solid": "^0.1.0",
    "@astrojs/renderer-svelte",
    // "@astrojs/renderer-vue"
    // "@astrojs/renderer-vue": "^0.1.7"
  ],
};

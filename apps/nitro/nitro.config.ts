export default defineNitroConfig({
  compatibilityDate: '2025-02-01',
  runtimeConfig: {
    databaseUrl: '',
  },
  imports: {
    autoImport: false,
  },
  routeRules: {
    '/**': {
      cors: true, // TODO: On prod allow only 'www.my-website.de', on dev only 'dev.my-website.de'
    },
  },
  $production: {
    ignore: ['routes/dev/**'],
    storage: {
      cache: {
        driver: 'cloudflareKVBinding',
        binding: 'cache',
      },
      files: {
        driver: 'cloudflareR2Binding',
        binding: 'files',
      },
    },
  },
});

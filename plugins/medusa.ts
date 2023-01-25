import Medusa from "@medusajs/medusa-js";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const medusaClient = new Medusa({
    baseUrl: config.public.medusaBackendUrl,
    maxRetries: 3,
  });

  return {
    provide: {
      medusaClient,
    },
  };
});

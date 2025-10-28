export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::cors',
    config: {
      origin: ['*'], // Specify allowed origins
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'], // Allowed HTTP methods
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'], // Allowed request headers
      credentials: true, // Allow sending cookies and HTTP authentication credentials
    },
  },
];

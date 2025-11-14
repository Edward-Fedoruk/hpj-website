// import type { Core } from '@strapi/strapi';

import { Core } from "@strapi/strapi";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap( { strapi }: { strapi: Core.Strapi }) {
    const config = strapi.config.get('plugin::api-forms');

      strapi.log.info('[Custom] DISABLING EMAIL PLUGIN ENTIRELY');
      
      // Completely replace the email plugin with no-ops
      if (strapi.plugins['email']) {
        strapi.plugins['email'].services.email = {
          send: async () => {
            strapi.log.warn('[Custom] Email send() called but blocked');
            return { messageId: 'blocked', accepted: [], rejected: [] };
          },
          sendTemplatedEmail: async () => {
            strapi.log.warn('[Custom] Templated email send() called but blocked');
            return { messageId: 'blocked', accepted: [], rejected: [] };
          },
        };
      }

      // Also override the provider if it exists
      if (strapi.plugins['email']?.provider) {
        strapi.plugins['email'].provider = {
          send: async () => {
            strapi.log.warn('[Custom] Provider send() called but blocked');
            return { messageId: 'blocked', accepted: [], rejected: [] };
          },
        };
      }
    }
};

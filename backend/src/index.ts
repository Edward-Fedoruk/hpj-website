import type { Core } from '@strapi/strapi';
import fs from "fs";
import path from "path";

const astroTriggerFile = path.resolve(
  __dirname,
  "../../../frontend/src/_strapi-trigger.txt"
);

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

      // Triggers Astro rerender on strapi changes if dev env is development
      if (process.env.NODE_ENV !== "development") return;

      strapi.db.lifecycles.subscribe(async (event) => {
        const { action } = event;
        
        const triggerActions = [
          "afterUpdate",
        ];

        if (triggerActions.includes(action)) {
          touchAstro();
        }
      });

      function touchAstro() {
        const file = path.resolve(
          __dirname,
          astroTriggerFile
        );

        fs.writeFileSync(file, new Date().toISOString());
      }
    }
};

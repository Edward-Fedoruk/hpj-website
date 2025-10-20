import type { Schema, Struct } from "@strapi/strapi";

export interface SectionsAbout extends Struct.ComponentSchema {
  collectionName: "components_sections_abouts";
  info: {
    displayName: "about";
    icon: "information";
  };
  attributes: {
    button_label: Schema.Attribute.String;
    button_link: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: "components_sections_heroes";
  info: {
    displayName: "hero";
    icon: "apps";
  };
  attributes: {
    background_image: Schema.Attribute.Media<
      "images" | "files" | "videos" | "audios"
    >;
    primary_button_label: Schema.Attribute.String;
    primary_button_link: Schema.Attribute.String;
    secondary_button_label: Schema.Attribute.String;
    secondary_button_link: Schema.Attribute.String;
    show_buttons: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedWhyHpjItem extends Struct.ComponentSchema {
  collectionName: "components_shared_why_hpj_items";
  info: {
    displayName: "why_hpj_item";
    icon: "grid";
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "sections.about": SectionsAbout;
      "sections.hero": SectionsHero;
      "shared.why-hpj-item": SharedWhyHpjItem;
    }
  }
}

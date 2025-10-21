import type { Schema, Struct } from "@strapi/strapi";

export interface SectionsAbout extends Struct.ComponentSchema {
  collectionName: "components_sections_abouts";
  info: {
    displayName: "about";
    icon: "information";
  };
  attributes: {
    about_title: Schema.Attribute.String & Schema.Attribute.Required;
    button_label: Schema.Attribute.String;
    button_link: Schema.Attribute.String;
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<"page:section:about">;
    description: Schema.Attribute.Text;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: "components_sections_heroes";
  info: {
    displayName: "hero";
    icon: "apps";
  };
  attributes: {
    bgImgAlt: Schema.Attribute.String;
    bgImgSrc: Schema.Attribute.Media<"images" | "files">;
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<"page:section:hero">;
    heroSubtitle: Schema.Attribute.Text;
    heroTitle: Schema.Attribute.String & Schema.Attribute.Required;
    primaryBtnLabel: Schema.Attribute.String;
    primaryBtnUrl: Schema.Attribute.String;
    secondaryBtnLabel: Schema.Attribute.String;
    secondaryBtnUrl: Schema.Attribute.String;
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

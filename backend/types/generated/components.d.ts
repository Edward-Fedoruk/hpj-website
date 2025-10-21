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

export interface SectionsBusinessUnits extends Struct.ComponentSchema {
  collectionName: "components_sections_business_units";
  info: {
    displayName: "Business Units";
  };
  attributes: {
    bussinessUnitsSubtitle: Schema.Attribute.Text;
    bussinessUnitsTitle: Schema.Attribute.String & Schema.Attribute.Required;
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<"page:section:bussiness_units">;
    sliderItems: Schema.Attribute.Component<"shared.business-unit-item", true>;
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
    primaryBtnURL: Schema.Attribute.String;
    secondaryBtnLabel: Schema.Attribute.String;
    secondaryBtnURL: Schema.Attribute.String;
  };
}

export interface SharedBusinessUnitItem extends Struct.ComponentSchema {
  collectionName: "components_shared_business_unit_items";
  info: {
    displayName: "Business Unit Item";
  };
  attributes: {
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    imgAlt: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
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
      "sections.business-units": SectionsBusinessUnits;
      "sections.hero": SectionsHero;
      "shared.business-unit-item": SharedBusinessUnitItem;
      "shared.why-hpj-item": SharedWhyHpjItem;
    }
  }
}

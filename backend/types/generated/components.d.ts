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
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<"page:section:about">;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface SectionsContactForm extends Struct.ComponentSchema {
  collectionName: "components_sections_contact_forms";
  info: {
    displayName: "Contact Form";
  };
  attributes: {
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<"page:section:contact_form">;
    form: Schema.Attribute.Relation<"oneToOne", "plugin::api-forms.form">;
    subTitle: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"Looking to grow your career with a forward-thinking organization? Join our dynamic team today">;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<"Join Our Team ">;
  };
}

export interface SectionsCvForm extends Struct.ComponentSchema {
  collectionName: "components_sections_cv_forms";
  info: {
    displayName: "CV Form";
  };
  attributes: {
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<"page:section:cv_form">;
    form: Schema.Attribute.Relation<"oneToOne", "plugin::api-forms.form">;
    submitBtnLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<"Submit Application">;
    subTitle: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"\"Didn't find a position that fits? We'd still love to hear from you.\"">;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<"Submit Your CV">;
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

export interface SectionsNews extends Struct.ComponentSchema {
  collectionName: "components_sections_news";
  info: {
    displayName: "News";
  };
  attributes: {
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<"page:section:news">;
    newsList: Schema.Attribute.Component<"shared.news-item", true>;
    newsSubtitle: Schema.Attribute.Text;
    newsTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsQuotes extends Struct.ComponentSchema {
  collectionName: "components_sections_quotes";
  info: {
    displayName: "Quotes";
  };
  attributes: {
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<"page:section:quotes">;
    quotesList: Schema.Attribute.Component<"shared.quotes-item", true>;
  };
}

export interface SectionsWhyUs extends Struct.ComponentSchema {
  collectionName: "components_sections_why_uses";
  info: {
    displayName: "Why Us";
  };
  attributes: {
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<"page:section:why_us">;
    whyUsItems: Schema.Attribute.Component<"shared.why-hpj-item", true>;
    whyUsSubtitle: Schema.Attribute.Text;
    whyUsTitle: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface SharedNewsItem extends Struct.ComponentSchema {
  collectionName: "components_shared_news_items";
  info: {
    displayName: "News Item";
  };
  attributes: {
    dateCreatedAt: Schema.Attribute.DateTime;
    img: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    imgAlt: Schema.Attribute.Text;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedQuotesItem extends Struct.ComponentSchema {
  collectionName: "components_shared_quotes_items";
  info: {
    displayName: "Quotes Item";
  };
  attributes: {
    img: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    imgAlt: Schema.Attribute.Text;
    text: Schema.Attribute.Text;
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
    icon: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "sections.about": SectionsAbout;
      "sections.business-units": SectionsBusinessUnits;
      "sections.contact-form": SectionsContactForm;
      "sections.cv-form": SectionsCvForm;
      "sections.hero": SectionsHero;
      "sections.news": SectionsNews;
      "sections.quotes": SectionsQuotes;
      "sections.why-us": SectionsWhyUs;
      "shared.business-unit-item": SharedBusinessUnitItem;
      "shared.news-item": SharedNewsItem;
      "shared.quotes-item": SharedQuotesItem;
      "shared.why-hpj-item": SharedWhyHpjItem;
    }
  }
}

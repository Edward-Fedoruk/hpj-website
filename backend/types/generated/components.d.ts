import type { Schema, Struct } from "@strapi/strapi";

export interface SectionsAbout extends Struct.ComponentSchema {
  collectionName: "components_sections_abouts";
  info: {
    displayName: "About";
  };
  attributes: {
    button_label: Schema.Attribute.String;
    button_link: Schema.Attribute.String;
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<"page:section:about">;
    customWrapperStyle: Schema.Attribute.Text;
    img: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    imgAlt: Schema.Attribute.String;
    primaryBtnLabel: Schema.Attribute.String;
    primaryBtnURL: Schema.Attribute.String;
    secondaryBtnLabel: Schema.Attribute.String;
    secondaryBtnURL: Schema.Attribute.String;
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
    sliderItems: Schema.Attribute.Relation<
      "oneToMany",
      "api::business-unit.business-unit"
    >;
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
    submitBtnLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<"Send">;
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

export interface SectionsGetInTouchForm extends Struct.ComponentSchema {
  collectionName: "components_sections_get_in_touch_forms";
  info: {
    displayName: "Get In Touch Form";
  };
  attributes: {
    businessUnitsForFormSelect: Schema.Attribute.Relation<
      "oneToMany",
      "api::business-unit.business-unit"
    >;
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<"page:section:get_in_touch_form">;
    form: Schema.Attribute.Relation<"oneToOne", "plugin::api-forms.form">;
    formSubmitBtnLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<"Send Message">;
    formSubTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<"You  can reach us anytime.">;
    formTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<"Get In Touch">;
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

export interface SectionsInfo extends Struct.ComponentSchema {
  collectionName: "components_sections_infos";
  info: {
    displayName: "info";
    icon: "information";
  };
  attributes: {
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<"page:section:info">;
    img: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    imgAlt: Schema.Attribute.String;
    infoSubtitle: Schema.Attribute.Text;
    infoTitle: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface SectionsRoadMap extends Struct.ComponentSchema {
  collectionName: "components_sections_road_maps";
  info: {
    displayName: "Road Map";
  };
  attributes: {
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<"page:section:road_map">;
    roadMapItems: Schema.Attribute.Component<"shared.road-map-item", true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface SharedRoadMapItem extends Struct.ComponentSchema {
  collectionName: "components_shared_road_map_items";
  info: {
    displayName: "Road Map Item";
  };
  attributes: {
    date: Schema.Attribute.Date & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
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
      "sections.get-in-touch-form": SectionsGetInTouchForm;
      "sections.hero": SectionsHero;
      "sections.info": SectionsInfo;
      "sections.news": SectionsNews;
      "sections.quotes": SectionsQuotes;
      "sections.road-map": SectionsRoadMap;
      "sections.why-us": SectionsWhyUs;
      "shared.news-item": SharedNewsItem;
      "shared.quotes-item": SharedQuotesItem;
      "shared.road-map-item": SharedRoadMapItem;
      "shared.why-hpj-item": SharedWhyHpjItem;
    }
  }
}

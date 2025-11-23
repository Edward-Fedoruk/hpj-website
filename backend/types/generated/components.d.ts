import type { Schema, Struct } from '@strapi/strapi';

export interface JobJobForm extends Struct.ComponentSchema {
  collectionName: 'components_job_job_forms';
  info: {
    displayName: 'Job Form';
  };
  attributes: {
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'page:job:job_form'>;
    form: Schema.Attribute.Relation<'oneToOne', 'plugin::api-forms.form'>;
    job: Schema.Attribute.Relation<'oneToOne', 'api::job.job'>;
    submitBtnLabel: Schema.Attribute.String;
    subTitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface JobJobResponsibility extends Struct.ComponentSchema {
  collectionName: 'components_job_job_responsibilities';
  info: {
    displayName: 'Job Responsibility';
  };
  attributes: {
    icon: Schema.Attribute.Text & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface JobJobSkill extends Struct.ComponentSchema {
  collectionName: 'components_job_job_skills';
  info: {
    displayName: 'Job Skill';
  };
  attributes: {
    icon: Schema.Attribute.Text;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface JobRelatedJobs extends Struct.ComponentSchema {
  collectionName: 'components_job_related_jobs';
  info: {
    displayName: 'Related Jobs';
  };
  attributes: {
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'page:job:related_jobs'>;
    jobs: Schema.Attribute.Relation<'oneToMany', 'api::job.job'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsAbout extends Struct.ComponentSchema {
  collectionName: 'components_sections_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'page:section:about'>;
    customWrapperStyle: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgAlt: Schema.Attribute.String;
    primaryBtnLabel: Schema.Attribute.String;
    primaryBtnURL: Schema.Attribute.String;
    secondaryBtnLabel: Schema.Attribute.String;
    secondaryBtnURL: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsAboutAlt extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_alts';
  info: {
    displayName: 'About Alt';
  };
  attributes: {
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'page:section:about_alt'>;
    primaryBtnLabel: Schema.Attribute.String;
    primaryBtnURL: Schema.Attribute.String;
    profilePictures: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    secondaryBtnLabel: Schema.Attribute.String;
    secondaryBtnURL: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsBusinessUnits extends Struct.ComponentSchema {
  collectionName: 'components_sections_business_units';
  info: {
    displayName: 'Business Units';
  };
  attributes: {
    bussinessUnitsSubtitle: Schema.Attribute.Text;
    bussinessUnitsTitle: Schema.Attribute.String & Schema.Attribute.Required;
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'page:section:bussiness_units'>;
    sliderItems: Schema.Attribute.Relation<
      'oneToMany',
      'api::business-unit.business-unit'
    >;
  };
}

export interface SectionsContactForm extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_forms';
  info: {
    displayName: 'Contact Form';
  };
  attributes: {
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'page:section:contact_form'>;
    form: Schema.Attribute.Relation<'oneToOne', 'plugin::api-forms.form'>;
    submitBtnLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Send'>;
    subTitle: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Looking to grow your career with a forward-thinking organization? Join our dynamic team today'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Join Our Team '>;
  };
}

export interface SectionsCoursesSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_courses_sections';
  info: {
    displayName: 'Courses Section';
    icon: 'bulletList';
  };
  attributes: {
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'page:section:courses'>;
    coursesList: Schema.Attribute.Component<'shared.courses-block', true>;
    sectionId: Schema.Attribute.String;
    subTitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsCvForm extends Struct.ComponentSchema {
  collectionName: 'components_sections_cv_forms';
  info: {
    displayName: 'CV Form';
  };
  attributes: {
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'page:section:cv_form'>;
    form: Schema.Attribute.Relation<'oneToOne', 'plugin::api-forms.form'>;
    submitBtnLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Submit Application'>;
    subTitle: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'"Didn\'t find a position that fits? We\'d still love to hear from you."'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Submit Your CV'>;
  };
}

export interface SectionsFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_sections';
  info: {
    displayName: 'FAQ Section';
    icon: 'bulletList';
  };
  attributes: {
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'page:section:faq'>;
    faqItems: Schema.Attribute.Component<'shared.faq-item', true> &
      Schema.Attribute.Required;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsGetInTouchForm extends Struct.ComponentSchema {
  collectionName: 'components_sections_get_in_touch_forms';
  info: {
    displayName: 'Get In Touch Form';
  };
  attributes: {
    address: Schema.Attribute.Text;
    blockSubtitle: Schema.Attribute.String;
    blockTitle: Schema.Attribute.String & Schema.Attribute.Required;
    businessUnitsForFormSelect: Schema.Attribute.Relation<
      'oneToMany',
      'api::business-unit.business-unit'
    >;
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'page:section:get_in_touch_form'>;
    email: Schema.Attribute.Email;
    form: Schema.Attribute.Relation<'oneToOne', 'plugin::api-forms.form'>;
    formSubmitBtnLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Send Message'>;
    formSubTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'You  can reach us anytime.'>;
    formTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Get In Touch'>;
    phone: Schema.Attribute.String;
    workingTime: Schema.Attribute.Text;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero Section';
    icon: 'monitor';
  };
  attributes: {
    bgImgAlt: Schema.Attribute.String;
    bgImgSrc: Schema.Attribute.Media<'images' | 'files'>;
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'page:section:hero'>;
    heroSubtitle: Schema.Attribute.Text;
    heroTitle: Schema.Attribute.String & Schema.Attribute.Required;
    primaryBtnLabel: Schema.Attribute.String;
    primaryBtnURL: Schema.Attribute.String;
    primaryButton: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    secondaryBtnLabel: Schema.Attribute.String;
    secondaryBtnURL: Schema.Attribute.String;
    secondaryButton: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface SectionsInfo extends Struct.ComponentSchema {
  collectionName: 'components_sections_infos';
  info: {
    displayName: 'info';
    icon: 'information';
  };
  attributes: {
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'page:section:info'>;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgAlt: Schema.Attribute.String;
    infoItems: Schema.Attribute.Component<'shared.info-item', true>;
    infoSubtitle: Schema.Attribute.Text;
    infoTitle: Schema.Attribute.String & Schema.Attribute.Required;
    primaryBtnLabel: Schema.Attribute.String;
    primaryBtnURL: Schema.Attribute.String;
    primaryButton: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    secondaryBtnLabel: Schema.Attribute.String;
    secondaryBtnURL: Schema.Attribute.String;
    secondaryButton: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface SectionsJobBenefits extends Struct.ComponentSchema {
  collectionName: 'components_sections_job_benefits';
  info: {
    displayName: 'Job Benefits';
  };
  attributes: {
    benefitsItems: Schema.Attribute.Component<'job.job-responsibility', true>;
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'page:section:job_benefits'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsJobInfo extends Struct.ComponentSchema {
  collectionName: 'components_sections_job_infos';
  info: {
    displayName: 'Job Info';
  };
  attributes: {
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'page:section:job_info'>;
    job: Schema.Attribute.Relation<'oneToOne', 'api::job.job'>;
  };
}

export interface SectionsJobResponsibilitiesSection
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_job_responsibilities_sections';
  info: {
    displayName: 'Job Responsibilities Section';
  };
  attributes: {
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'page:section:job_responsibilities'>;
    responsibilitiesItems: Schema.Attribute.Component<
      'job.job-responsibility',
      true
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsNews extends Struct.ComponentSchema {
  collectionName: 'components_sections_news';
  info: {
    displayName: 'News';
  };
  attributes: {
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'page:section:news'>;
    newsList: Schema.Attribute.Component<'shared.news-item', true>;
    newsSubtitle: Schema.Attribute.Text;
    newsTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsNewsAlt extends Struct.ComponentSchema {
  collectionName: 'components_sections_news_alts';
  info: {
    displayName: 'News Alt';
  };
  attributes: {
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'page:section:news_alt'>;
    newsList: Schema.Attribute.Component<'shared.news-item', true>;
    newsSubtitle: Schema.Attribute.Text;
    newsTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsOpportunitiesSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_opportunities_sections';
  info: {
    displayName: 'Opportunities Section';
    icon: 'bulletList';
  };
  attributes: {
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'page:section:opportunities'>;
    jobs: Schema.Attribute.Relation<'oneToMany', 'api::job.job'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsQuotes extends Struct.ComponentSchema {
  collectionName: 'components_sections_quotes';
  info: {
    displayName: 'Quotes';
  };
  attributes: {
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'page:section:quotes'>;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgAlt: Schema.Attribute.String;
    quotesList: Schema.Attribute.Component<'shared.quotes-item', true>;
  };
}

export interface SectionsRoadMap extends Struct.ComponentSchema {
  collectionName: 'components_sections_road_maps';
  info: {
    displayName: 'Road Map';
  };
  attributes: {
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'page:section:road_map'>;
    roadMapItems: Schema.Attribute.Component<'shared.road-map-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsServiceBlock extends Struct.ComponentSchema {
  collectionName: 'components_sections_service_blocks';
  info: {
    displayName: 'Service Block';
  };
  attributes: {
    business_unit: Schema.Attribute.Relation<
      'oneToOne',
      'api::business-unit.business-unit'
    >;
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'page:section:service'>;
    customWrapperStyle: Schema.Attribute.Text;
    imgPositionLeft: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface SectionsUserSpotlight extends Struct.ComponentSchema {
  collectionName: 'components_sections_user_spotlights';
  info: {
    displayName: 'User Spotlight';
    icon: 'dashboard';
  };
  attributes: {
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'page:section:user_spotlight'>;
    customWrapperStyle: Schema.Attribute.Text;
    public_user_profiles: Schema.Attribute.Relation<
      'oneToMany',
      'api::public-user-profile.public-user-profile'
    >;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsWhyThisUnit extends Struct.ComponentSchema {
  collectionName: 'components_sections_why_this_units';
  info: {
    displayName: 'Why This Unit';
  };
  attributes: {
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'page:section:why_this_unit'>;
    items: Schema.Attribute.Component<'shared.why-this-unit-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsWhyUs extends Struct.ComponentSchema {
  collectionName: 'components_sections_why_uses';
  info: {
    displayName: 'Why Us';
  };
  attributes: {
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'page:section:why_us'>;
    whyUsItems: Schema.Attribute.Component<'shared.why-hpj-item', true>;
    whyUsSubtitle: Schema.Attribute.Text;
    whyUsTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsWhyUsAlt extends Struct.ComponentSchema {
  collectionName: 'components_sections_why_us_alts';
  info: {
    displayName: 'WhyUsAlt';
  };
  attributes: {
    componentId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'page:section:why_us_alt'>;
    HasTitle: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    subTitle: Schema.Attribute.Text;
    whyUsAlt_Title: Schema.Attribute.String;
    whyUsItems: Schema.Attribute.Component<'shared.why-hpj-item', true>;
  };
}

export interface SharedAddress extends Struct.ComponentSchema {
  collectionName: 'components_shared_addresses';
  info: {
    displayName: 'Address';
  };
  attributes: {
    city: Schema.Attribute.String & Schema.Attribute.Required;
    country: Schema.Attribute.String & Schema.Attribute.Required;
    street: Schema.Attribute.String;
  };
}

export interface SharedCourseListItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_course_list_items';
  info: {
    displayName: 'Course List Item';
  };
  attributes: {};
}

export interface SharedCoursesBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_courses_blocks';
  info: {
    displayName: 'Courses Block';
  };
  attributes: {
    blockTitle: Schema.Attribute.String & Schema.Attribute.Required;
    trainingCourses: Schema.Attribute.Relation<
      'oneToMany',
      'api::training-course.training-course'
    >;
  };
}

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_items';
  info: {
    displayName: 'FAQ Item';
  };
  attributes: {
    answerText: Schema.Attribute.Text & Schema.Attribute.Required;
    questionText: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedInfoItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_info_items';
  info: {
    displayName: 'Info Item';
  };
  attributes: {
    bigText: Schema.Attribute.Text & Schema.Attribute.Required;
    smallText: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedNewsItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_news_items';
  info: {
    displayName: 'News Item';
  };
  attributes: {
    dateCreatedAt: Schema.Attribute.DateTime;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgAlt: Schema.Attribute.Text;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedQuotesItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes_items';
  info: {
    displayName: 'Quotes Item';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedRoadMapItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_road_map_items';
  info: {
    displayName: 'Road Map Item';
  };
  attributes: {
    date: Schema.Attribute.Date & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedUserCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_user_cards';
  info: {
    displayName: 'User Card';
    icon: 'user';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bio: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String & Schema.Attribute.Required;
    socials: Schema.Attribute.Component<'shared.user-socials', false>;
  };
}

export interface SharedUserSocials extends Struct.ComponentSchema {
  collectionName: 'components_shared_user_socials';
  info: {
    displayName: 'User Socials';
  };
  attributes: {
    email: Schema.Attribute.String;
    facebook: Schema.Attribute.String;
    linkedin: Schema.Attribute.String;
  };
}

export interface SharedWhyHpjItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_why_hpj_items';
  info: {
    displayName: 'why_hpj_item';
    icon: 'grid';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedWhyThisUnitItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_why_this_unit_items';
  info: {
    displayName: 'Why This Unit Item';
  };
  attributes: {
    icon: Schema.Attribute.Text;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'job.job-form': JobJobForm;
      'job.job-responsibility': JobJobResponsibility;
      'job.job-skill': JobJobSkill;
      'job.related-jobs': JobRelatedJobs;
      'sections.about': SectionsAbout;
      'sections.about-alt': SectionsAboutAlt;
      'sections.business-units': SectionsBusinessUnits;
      'sections.contact-form': SectionsContactForm;
      'sections.courses-section': SectionsCoursesSection;
      'sections.cv-form': SectionsCvForm;
      'sections.faq-section': SectionsFaqSection;
      'sections.get-in-touch-form': SectionsGetInTouchForm;
      'sections.hero': SectionsHero;
      'sections.info': SectionsInfo;
      'sections.job-benefits': SectionsJobBenefits;
      'sections.job-info': SectionsJobInfo;
      'sections.job-responsibilities-section': SectionsJobResponsibilitiesSection;
      'sections.news': SectionsNews;
      'sections.news-alt': SectionsNewsAlt;
      'sections.opportunities-section': SectionsOpportunitiesSection;
      'sections.quotes': SectionsQuotes;
      'sections.road-map': SectionsRoadMap;
      'sections.service-block': SectionsServiceBlock;
      'sections.user-spotlight': SectionsUserSpotlight;
      'sections.why-this-unit': SectionsWhyThisUnit;
      'sections.why-us': SectionsWhyUs;
      'sections.why-us-alt': SectionsWhyUsAlt;
      'shared.address': SharedAddress;
      'shared.course-list-item': SharedCourseListItem;
      'shared.courses-block': SharedCoursesBlock;
      'shared.faq-item': SharedFaqItem;
      'shared.info-item': SharedInfoItem;
      'shared.news-item': SharedNewsItem;
      'shared.quotes-item': SharedQuotesItem;
      'shared.road-map-item': SharedRoadMapItem;
      'shared.user-card': SharedUserCard;
      'shared.user-socials': SharedUserSocials;
      'shared.why-hpj-item': SharedWhyHpjItem;
      'shared.why-this-unit-item': SharedWhyThisUnitItem;
    }
  }
}

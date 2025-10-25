import type { FormType } from './formTypes';

import type { UnitSliderItem } from '@/components/sections/landing/BusinessUnitsSection.astro';
import type { IWhyUsItem } from '@/components/sections/landing/WhyUsSection.astro';
import type { QuotesItem } from '@/components/sections/misc/QuotesSection.astro';
import type { StrapiImageType } from './common';
import type { InfoSectionProps } from '@/components/sections/about/InfoSection.astro';
import type { AboutSectionProps } from '@/components/sections/landing/AboutSection.astro';

export enum SectionType {
  Hero = "page:section:hero",
  About = "page:section:about",
  BusinessUnits = "page:section:bussiness_units",
  WhyUs = "page:section:why_us",
  Quotes = "page:section:quotes",
  News = "page:section:news",
  Info = "page:section:info",
  ContactForm = "page:section:contact_form",
  CvForm = "page:section:cv_form",
  GetInTouchForm = "page:section:get_in_touch_form",
}

export type HeroSection = {
    __typename: "ComponentSectionsHero";
    componentId: SectionType.Hero;
    id: string;
    title: string;
    subtitle?: string | null;
    primaryBtnLabel?: string | null;
    primaryBtnUrl?: string | null;
    secondaryBtnLabel?: string | null;
    secondaryBtnUrl?: string | null;
};

export interface AboutSection extends AboutSectionProps {
    __typename: "ComponentSectionsAbout";
    id: string;
    componentId: SectionType.About;
};

export type BusinessUnitsSection = {
    __typename: "ComponentSectionsBusinessUnits";
    id: string;
    componentId: SectionType.BusinessUnits;
    title?: string | null;
    subTitle?: string | null;
    sliderItems?: UnitSliderItem[];
};

export type WhyUsSection = {
    __typename: "ComponentSectionsWhyUs";
    componentId: SectionType.BusinessUnits;
    id: string;
    title?: string | null;
    subTitle?: string | null;
    whyUsItems?: IWhyUsItem[];
};

export type QoutesSection = {
    __typename: "ComponentSectionsQuotes";
    componentId: SectionType.Quotes;
    quotesList: QuotesItem[];
};

export type NewsItem = {
    title: string;
    description: string;
    date?: string;
    url?: string;
    imgAlt?: string;
    img: StrapiImageType;
}

export type NewsSection = {
    __typename: "ComponentSectionsNews";
    componentId: string;
    title: string;
    subtitle?: string;
    newsList: NewsItem[];
}

export type ContactFormSection = {
    __typename: "ComponentSectionsContactForm";
    componentId: string;
    title?: string | null;
    subTitle?: string | null;
    form?: FormType | null;
}

export type CvFormSection = {
    __typename: "ComponentSectionsCvForm";
    componentId: string;
    title: string;
    subTitle?: string | null;
    form?: FormType | null;
    submitBtnLabel?: string | null;
}

export type GetInTouchFormSection = {
    __typename: "ComponentSectionsGetInTouchForm";
    componentId: string;
    title: string;
    subTitle?: string | null;
    form?: FormType | null;
    submitBtnLabel?: string | null;
    businessUnitsForFormSelect?: Array<{ documentId: string; title: string }>;
}

export interface InfoSection extends InfoSectionProps {
    __typename: "ComponentSectionsInfo";
    componentId: SectionType.Info;
    id: string;
};
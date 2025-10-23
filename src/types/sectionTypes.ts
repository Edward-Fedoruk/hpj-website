import type { UnitSliderItem } from '@/components/sections/landing/BusinessUnitsSection.astro';
import type { IWhyUsItem } from '@/components/sections/landing/WhyUsSection.astro';
import type { QuotesItem } from '@/components/sections/misc/QuotesSection.astro';
import type { SectionType } from '@/gql/services/dynamic-page-handler';
import type { StrapiImageType } from './common';

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

export type AboutSection = {
    __typename: "ComponentSectionsAbout";
    id: string;
    componentId: SectionType.About;
    title?: string | null;
    description?: string | null;
    button_link?: string | null;
    button_label?: string | null;
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
    img?: StrapiImageType;
}

export type NewsSection = {
    __typename: "ComponentSectionsNews";
    componentId: string;
    title: string;
    subtitle?: string;
    newsList: NewsItem[];
}

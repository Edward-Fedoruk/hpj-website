import type { Props } from "astro";

import { SectionType } from '@/types/sectionTypes';
import Hero from "./landing/HeroSection.astro";
import About from "./landing/AboutSection.astro";
import BusinessUnits from "./landing/BusinessUnitsSection.astro";
import WhyUsSection from './landing/WhyUsSection.astro';
import QuotesSection from './misc/QuotesSection.astro';
import InfoSection from './about/InfoSection.astro';
import RoadMapSection from "./about/RoadMap/RoadMapSection.astro";
import NewsAltSection from "./news/NewsAltSection.astro";
import NewsSection from "./news/NewsSection.astro";
import ContactFormSection from './misc/ContactFormSection.astro';
import CvFormSection from './misc/CVFormSection.astro';
import GetInTouchFormSection from "./misc/GetInTouchFormSection.astro";

export const sections: Record<SectionType,  (_props: Props) => any> = { 
    [SectionType.Hero]: Hero as unknown as (_props: Props) => any,
    [SectionType.About]: About as unknown as (_props: Props) => any,
    [SectionType.BusinessUnits]: BusinessUnits as unknown as (_props: Props) => any,
    [SectionType.WhyUs]: WhyUsSection as unknown as (_props: Props) => any,
    [SectionType.Quotes]: QuotesSection as unknown as (_props: Props) => any,
    [SectionType.News]: NewsSection as unknown as (_props: Props) => any,
    [SectionType.Info]: InfoSection as unknown as (_props: Props) => any,
    [SectionType.RoadMap]: RoadMapSection as unknown as (_props: Props) => any,
    [SectionType.NewsAlt]: NewsAltSection as unknown as (_props: Props) => any,
    [SectionType.ContactForm]: ContactFormSection as unknown as (_props: Props) => any,
    [SectionType.CvForm]: CvFormSection as unknown as (_props: Props) => any,
    [SectionType.GetInTouchForm]: GetInTouchFormSection as unknown as (_props: Props) => any,
};
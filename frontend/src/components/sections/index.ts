import type { Props } from "astro";

import { SectionType } from "@/types/sectionTypes";
import BusinessUnits from "./landing/BusinessUnitsSection.astro";
import WhyUsSection from "./landing/WhyUsSection.astro";
import QuotesSection from "./misc/QuotesSection.astro";
import InfoSection from "./aboutPage/InfoSection.astro";
import RoadMapSection from "./aboutPage/RoadMap/RoadMapSection.astro";
import NewsAltSection from "./news/NewsAltSection.astro";
import NewsSection from "./news/NewsSection.astro";
import AboutSection from "./about/AboutSection.astro";
import AboutAltSection from "./about/AboutAltSection.astro";
import ServiceSection from "./service/ServiceSection.astro";
import ContactFormSection from "./misc/ContactFormSection.astro";
import CvFormSection from "./misc/CVFormSection.astro";
import GetInTouchFormSection from "./misc/GetInTouchFormSection.astro";
import HeroSection from "./landing/HeroSection.astro";
import UserSpotlightSection from "./boardMembers/userSpotlight/UserSpotlightSection.astro";
import FAQSection from "./misc/FAQSection.astro";
import Opportunities from "./job/Opportunities.astro";
import WhyUsAltSection from "./unit/WhyUsAltSection.astro";
import WhyThisUnitSection from "./unit/WhyThisUnitSection.astro";
import CoursesSection from "./unit/CoursesSection.astro";
import JobInfoSection from "./job/JobInfoSection.astro";
import JobResponsibilitiesSection from "./job/JobResponsibilitiesSection.astro";
import JobBenefitsSection from "./job/JobBenefitsSection.astro";
import JobFormSection from "./job/JobFormSection.astro";
import RelatedJobsSection from "./job/RelatedJobsSection.astro";

export const sections: Record<SectionType, (_props: Props) => any> = {
  [SectionType.Hero]: HeroSection as unknown as (_props: Props) => any,
  [SectionType.About]: AboutSection as unknown as (_props: Props) => any,
  [SectionType.BusinessUnits]: BusinessUnits as unknown as (_props: Props) => any,
  [SectionType.WhyUs]: WhyUsSection as unknown as (_props: Props) => any,
  [SectionType.WhyUsAlt]: WhyUsAltSection as unknown as (_props: Props) => any,
  [SectionType.WhyThisUnit]: WhyThisUnitSection as unknown as (_props: Props) => any,
  [SectionType.Quotes]: QuotesSection as unknown as (_props: Props) => any,
  [SectionType.News]: NewsSection as unknown as (_props: Props) => any,
  [SectionType.Info]: InfoSection as unknown as (_props: Props) => any,
  [SectionType.RoadMap]: RoadMapSection as unknown as (_props: Props) => any,
  [SectionType.NewsAlt]: NewsAltSection as unknown as (_props: Props) => any,
  [SectionType.AboutAlt]: AboutAltSection as unknown as (_props: Props) => any,
  [SectionType.Service]: ServiceSection as unknown as (_props: Props) => any,
  [SectionType.UserSpotlight]: UserSpotlightSection as unknown as (_props: Props) => any,
  [SectionType.FAQSection]: FAQSection as unknown as (_props: Props) => any,
  [SectionType.Courses]: CoursesSection as unknown as (_props: Props) => any,
  [SectionType.JobInfo]: JobInfoSection as unknown as (_props: Props) => any,
  [SectionType.JobResponsibilities]: JobResponsibilitiesSection as unknown as (_props: Props) => any,
  [SectionType.JobBenefits]: JobBenefitsSection as unknown as (_props: Props) => any,
  [SectionType.RelatedJobs]: RelatedJobsSection as unknown as (_props: Props) => any,
  [SectionType.ContactForm]: ContactFormSection as unknown as (_props: Props) => any,
  [SectionType.CvForm]: CvFormSection as unknown as (_props: Props) => any,
  [SectionType.JobForm]: JobFormSection as unknown as (_props: Props) => any,
  [SectionType.GetInTouchForm]: GetInTouchFormSection as unknown as (_props: Props) => any,
  [SectionType.OpportunitiesSection]: Opportunities as unknown as (_props: Props) => any,
};

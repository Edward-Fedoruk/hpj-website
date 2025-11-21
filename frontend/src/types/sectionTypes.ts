import type { FormType } from "./formTypes";

import type { UnitSliderItem } from "@/components/sections/landing/BusinessUnitsSection.astro";
import type { WhyUsProps } from "@/components/sections/landing/WhyUsSection.astro";
import type { QuotesSectionProps } from "@/components/sections/misc/QuotesSection.astro";
import type { StrapiImageType } from "./common";
import type { NewsSectionProps } from "@/components/sections/news/NewsSection.astro";
import type { NewsAltSectionProps } from "@/components/sections/news/NewsAltSection.astro";
import type { AboutSectionProps } from "@/components/sections/about/AboutSection.astro";
import type { InfoSectionProps } from "@/components/sections/aboutPage/InfoSection.astro";
import type { RoadMapSectionProps } from "@/components/sections/aboutPage/RoadMap/RoadMapSection.astro";
import type { AboutAltSectionProps } from "@/components/sections/about/AboutAltSection.astro";
import type { ServiceSectionProps } from "@/components/sections/service/ServiceSection.astro";
import type { UserSpotlightSectionProps } from "@/components/sections/boardMembers/userSpotlight/UserSpotlightSection.astro";
import type { FAQSectionProps } from "@/components/sections/misc/FAQSection.astro";
import type { OpportunitiesSectionProps } from "@/components/sections/job/Opportunities.astro";
import type { WhyUsAltProps } from "@/components/sections/unit/WhyUsAltSection.astro";
import type { WhyThisUnitProps } from "@/components/sections/unit/WhyThisUnitSection.astro";
import type { CoursesSectionProps } from "@/components/sections/unit/CoursesSection.astro";
import type { JobInfoSectionProps } from "@/components/sections/job/JobInfoSection.astro";
import type { JobResponsibilitiesProps } from "@/components/sections/job/JobResponsibilitiesSection.astro";
import type { JobBenefitsProps } from "@/components/sections/job/JobBenefitsSection.astro";
import type { RelatedJobsProps } from "@/components/sections/job/RelatedJobsSection.astro";

export enum SectionType {
  Hero = "page:section:hero",
  About = "page:section:about",
  AboutAlt = "page:section:about_alt",
  BusinessUnits = "page:section:bussiness_units",
  WhyUs = "page:section:why_us",
  WhyUsAlt = "page:section:why_us_alt",
  WhyThisUnit = "page:section:why_this_unit",
  Quotes = "page:section:quotes",
  News = "page:section:news",
  NewsAlt = "page:section:news_alt",
  Info = "page:section:info",
  RoadMap = "page:section:road_map",
  Service = "page:section:service",
  UserSpotlight = "page:section:user_spotlight",
  FAQSection = "page:section:faq",
  OpportunitiesSection = "page:section:opportunities",
  Courses = "page:section:courses",
  JobInfo = "page:section:job_info",
  JobResponsibilities = "page:section:job_responsibilities",
  JobBenefits = "page:section:job_benefits",
  RelatedJobs = "page:job:related_jobs",
  ContactForm = "page:section:contact_form",
  CvForm = "page:section:cv_form",
  JobForm = "page:job:job_form",
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
}

export type BusinessUnitsSection = {
  __typename: "ComponentSectionsBusinessUnits";
  id: string;
  componentId: SectionType.BusinessUnits;
  title?: string | null;
  subTitle?: string | null;
  sliderItems?: UnitSliderItem[];
};

export interface WhyUsSection extends WhyUsProps {
  __typename: "ComponentSectionsWhyUs";
  componentId: SectionType.WhyUs;
  id: string;
}

export interface WhyUsAltSection extends WhyUsAltProps {
  __typename: "ComponentSectionsWhyUsAlt";
  componentId: SectionType.WhyUs;
  id: string;
}

export interface QoutesSection extends QuotesSectionProps {
  __typename: "ComponentSectionsQuotes";
  componentId: SectionType.Quotes;
}

export type NewsItem = {
  title: string;
  description: string;
  date?: string;
  url?: string;
  imgAlt?: string;
  img: StrapiImageType;
};

export interface NewsSection extends NewsSectionProps {
  __typename: "ComponentSectionsNews";
  componentId: SectionType.News;
}

export interface NewsAltSection extends NewsAltSectionProps {
  __typename: "ComponentSectionsNewsAlt";
  componentId: SectionType.NewsAlt;
}

export type ContactFormSection = {
  __typename: "ComponentSectionsContactForm";
  componentId: string;
  title?: string | null;
  subTitle?: string | null;
  form?: FormType | null;
};

export type CvFormSection = {
  __typename: "ComponentSectionsCvForm";
  componentId: string;
  title: string;
  subTitle?: string | null;
  form?: FormType | null;
  submitBtnLabel?: string | null;
};

export type JobFormSection = {
  __typename: "ComponentJobJobForm";
  componentId: string;
  title: string;
  jobId: string;
  subTitle?: string | null;
  form?: FormType | null;
  submitBtnLabel?: string | null;
};

export type GetInTouchFormSection = {
  __typename: "ComponentSectionsGetInTouchForm";
  componentId: string;
  title: string;
  subTitle?: string | null;
  form?: FormType | null;
  submitBtnLabel?: string | null;
  businessUnitsForFormSelect?: Array<{ documentId: string; title: string }>;
};

export interface InfoSection extends InfoSectionProps {
  __typename: "ComponentSectionsInfo";
  componentId: SectionType.Info;
  id: string;
}

export interface RoadMapSection extends RoadMapSectionProps {
  __typename: "ComponentSectionsRoadMap";
  componentId: SectionType.RoadMap;
  id: string;
}

export interface AboutAltSection extends AboutAltSectionProps {
  __typename: "ComponentSectionsAboutAlt";
  componentId: SectionType.RoadMap;
  id: string;
}

export interface ServiceSection extends ServiceSectionProps {
  __typename: "ComponentSectionsServiceBlock";
  componentId: SectionType.Service;
  id: string;
}

export interface UserSpotlightSection extends UserSpotlightSectionProps {
  __typename: "ComponentSectionsUserSpotlight";
  componentId: SectionType.UserSpotlight;
  id: string;
}

export interface FAQSection extends FAQSectionProps {
  __typename: "ComponentSectionsFaqSection";
  componentId: SectionType.FAQSection;
}

export interface OpportunitiesSection extends OpportunitiesSectionProps {
  __typename: "ComponentSectionsOpportunities";
  componentId: SectionType.FAQSection;
}

export interface WhyThisUnitSection extends WhyThisUnitProps {
  __typename: "ComponentSectionsWhyThisUnit";
  componentId: SectionType.WhyThisUnit;
  id: string;
}

export interface CoursesSection extends CoursesSectionProps {
  __typename: "ComponentSectionsCourses";
  componentId: SectionType.Courses;
  id: string;
}

export interface JobInfoSection extends JobInfoSectionProps {
  __typename: "ComponentSectionsJobInfo";
  componentId: SectionType.Courses;
  id: string;
}

export interface JobResponsibilitiesSection extends JobResponsibilitiesProps {
  __typename: "ComponentSectionsJobResponsibilitiesSection";
  componentId: SectionType.Courses;
  id: string;
}

export interface JobBenefitsSection extends JobBenefitsProps {
  __typename: "ComponentSectionsJobBenefits";
  componentId: SectionType.Courses;
  id: string;
}

export interface RelatedJobsSection extends RelatedJobsProps {
  __typename: "ComponentSectionsRelatedJobs";
  componentId: SectionType.Courses;
  id: string;
}

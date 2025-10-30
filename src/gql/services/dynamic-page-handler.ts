import { gql } from "graphql-request";
import { GqlClient } from "../gql";
import type {
  AboutSection,
  BusinessUnitsSection,
  HeroSection,
  QoutesSection,
  WhyUsSection,
  NewsSection,
  ContactFormSection,
  CvFormSection,
  GetInTouchFormSection,
} from '@/types/sectionTypes';

export enum SectionType {
  Hero = "page:section:hero",
  About = "page:section:about",
  BusinessUnits = "page:section:bussiness_units",
  WhyUs = "page:section:why_us",
  Quotes = "page:section:quotes",
  News = "page:section:news",
  ContactForm = "page:section:contact_form",
  CvForm = "page:section:cv_form",
  GetInTouchForm = "page:section:get_in_touch_form",
}

export type Section =
  | HeroSection
  | AboutSection
  | BusinessUnitsSection
  | WhyUsSection
  | QoutesSection
  | NewsSection
  | ContactFormSection
  | CvFormSection
  | GetInTouchFormSection;

export interface Page {
  documentId: string;
  slug: string;
  title: string;
  sections: Section[];
  seoTitle?: string | null;
  seoDescription?: string | null;
  isIndexable?: boolean | null;
}

export interface Form {
  documentId: string;
  title: string;
  successMessage?: string | null;
  errorMessage?: string | null;
}

export class DynamicPageHandler {
  async getDynamicPageData(): Promise<{ pages: Page[], apiFormsForms: Form[] }> {
    const document = gql`
      {
        pages {
          documentId
          slug
          title
          seoTitle
          seoDescription
          isIndexable
          sections {
            ... on ComponentSectionsHero {
              componentId
              title: heroTitle
              subtitle: heroSubtitle
              primaryBtnLabel
              primaryBtnURL
              secondaryBtnLabel
              secondaryBtnURL
              bgImgSrc {
                url
                alternativeText
                width
                height
                mime
                size
                formats
              }
              bgImgAlt
            }
            ... on ComponentSectionsAbout {
              componentId
              title
              subTitle: subtitle
              secondaryBtn: button_label
              secondaryBtnURL: button_link
            }
            ... on ComponentSectionsBusinessUnits {
              componentId
              title: bussinessUnitsTitle
              subTitle: bussinessUnitsSubtitle
              sliderItems {
                title
                description
                url
                imgAlt
                img {
                  url
                  alternativeText
                  width
                  height
                  mime
                  size
                  formats
                }
              }
            }
            ... on ComponentSectionsWhyUs {
              componentId
              title: whyUsTitle
              subTitle: whyUsSubtitle
              whyUsItems {
                iconStr: icon
                description
                title
              }
            }
            ... on ComponentSectionsQuotes {
              componentId
              quotesList {
                title
                description: text
                imgAlt
                img {
                  url
                  alternativeText
                  width
                  height
                  mime
                  size
                  formats
                }
              }
            }
            ... on ComponentSectionsNews {
              componentId
              title: newsTitle
              subtitle: newsSubtitle
              newsList {
                title
                description: text
                date: dateCreatedAt
                imgAlt
                url
                img {
                  url
                  alternativeText
                  width
                  height
                  mime
                  size
                  formats
                }
              }
            }
            ... on ComponentSectionsContactForm {
              componentId
              title
              subTitle
              submitBtnLabel
              form {
                documentId
                title
                errorMessage
                successMessage
                steps
              }
            }
            ... on ComponentSectionsCvForm {
              componentId
              title
              subTitle
              submitBtnLabel
              form {
                documentId
                title
                successMessage
                errorMessage
                steps
              }
            }
            ... on ComponentSectionsGetInTouchForm {
              componentId
              formTitle
              formSubTitle
              form {
                documentId
                title
                successMessage
                errorMessage
                steps
              }
              formSubmitBtnLabel
              businessUnitsForFormSelect {
                documentId
                title
              }
            }
            ... on Error {
              code
              message
            }
          }
        }
      }
    `;

    try {
      const data = await GqlClient.instance.request<{ pages: Page[], apiFormsForms: Form[] }>(
        document,
      );

      return data;
    } catch (error) {
      console.error("Error fetching dynamic page data:", error);

      throw error;
    }
  }
}

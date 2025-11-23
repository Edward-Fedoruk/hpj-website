import { gql } from "graphql-request";
import { GqlClient } from "../gql";
import type {
  AboutSection,
  BusinessUnitsSection,
  HeroSection,
  QoutesSection,
  WhyUsSection,
  NewsSection,
  InfoSection,
  ContactFormSection,
  CvFormSection,
  GetInTouchFormSection,
  RoadMapSection,
  NewsAltSection,
  AboutAltSection,
  UserSpotlightSection,
  WhyUsAltSection,
  WhyThisUnitSection,
  CoursesSection,
  JobResponsibilitiesSection,
  JobInfoSection,
  JobBenefitsSection,
  JobFormSection,
  RelatedJobsSection,
} from "@/types/sectionTypes";

export type Section =
  | HeroSection
  | AboutSection
  | AboutAltSection
  | BusinessUnitsSection
  | WhyUsSection
  | WhyUsAltSection
  | WhyThisUnitSection
  | QoutesSection
  | NewsSection
  | InfoSection
  | RoadMapSection
  | NewsAltSection
  | UserSpotlightSection
  | CoursesSection
  | JobInfoSection
  | JobResponsibilitiesSection
  | JobBenefitsSection
  | RelatedJobsSection
  | ContactFormSection
  | CvFormSection
  | JobFormSection
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
  async getDynamicPageData(): Promise<{ pages: Page[]; apiFormsForms: Form[] }> {
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
              subtitle
              customWrapperStyle
              primaryBtnLabel
              primaryBtnURL
              secondaryBtnLabel
              secondaryBtnURL
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
            ... on ComponentSectionsAboutAlt {
              componentId
              title
              subtitle
              primaryBtnLabel
              primaryBtnURL
              secondaryBtnLabel
              secondaryBtnURL
              profilePictures {
                url
                alternativeText
                width
                height
                mime
                size
                formats
              }
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
              __typename
              id
              whyUsItems {
                iconStr: icon
                description
                title
              }
            }
            ... on ComponentSectionsWhyUsAlt {
              HasTitle
              componentId
              altTitle: whyUsAlt_Title
              subTitle
              __typename
              id
              whyUsItems {
                iconStr: icon
                description
                title
              }
            }
            ... on ComponentSectionsWhyThisUnit {
              componentId
              title
              items {
                title
                icon
                text
              }
            }
            ... on ComponentSectionsQuotes {
              componentId
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
              quotesList {
                title
                text
              }
            }
            ... on ComponentSectionsNews {
              componentId
              title: newsTitle
              subTitle: newsSubtitle
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
            ... on ComponentSectionsNewsAlt {
              componentId
              title: newsTitle
              subTitle: newsSubtitle
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
            ... on ComponentSectionsInfo {
              componentId
              title: infoTitle
              subTitle: infoSubtitle
              primaryButton
              primaryBtnLabel
              primaryBtnURL
              secondaryButton
              secondaryBtnLabel
              secondaryBtnURL
              infoItems {
                bigText
                smallText
              }
              img {
                url
                alternativeText
                width
                height
                mime
                size
                formats
              }
              imgAlt
            }
            ... on ComponentSectionsJobInfo {
              componentId
              job {
                title
                summary
                jobID
                shortDescription
                address {
                  city
                  country
                  street
                }
                department {
                  title
                  url
                }
                employment_types {
                  name
                }
                location_types {
                  name
                }
              }
            }
            ... on ComponentSectionsJobBenefits {
              componentId
              title
              benefitsItems {
                icon
                text
              }
            }
            ... on ComponentJobRelatedJobs {
              componentId
              title
              relatedJobs: jobs {
                title
                summary
                jobID
                shortDescription
                publishedAt
                address {
                  city
                  country
                  street
                }
                department {
                  title
                  url
                }
                employment_types {
                  name
                }
                location_types {
                  name
                }
              }
            }
            ... on ComponentSectionsJobResponsibilitiesSection {
              componentId
              title
              responsibilitiesItems {
                text
                icon
              }
            }
            ... on ComponentSectionsRoadMap {
              componentId
              id
              title
              roadMapItems {
                date
                description
                id
                title
              }
            }
            ... on ComponentSectionsServiceBlock {
              componentId
              customWrapperStyle
              business_unit {
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
              imgPositionLeft
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
            ... on ComponentJobJobForm {
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
              job {
                jobID
              }
            }
            ... on ComponentSectionsGetInTouchForm {
              componentId
              blockTitle
              blockSubtitle
              email
              address
              workingTime
              phone
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
            ... on ComponentSectionsUserSpotlight {
              componentId
              subtitle
              title
              customWrapperStyle
              userProfiles: public_user_profiles {
                name
                bio
                role
                avatar {
                  url
                  alternativeText
                  width
                  height
                  mime
                  size
                  formats
                }
                socials {
                  email
                  facebook
                  linkedin
                }
              }
            }
            ... on ComponentSectionsFaqSection {
              componentId
              title
              subtitle
              faqItems {
                questionText
                answerText
              }
            }
            ... on ComponentSectionsOpportunitiesSection {
              componentId
              title
              __typename
              id
              jobs {
                summary
                title
                shortDescription
                jobID
                address {
                  city
                  country
                  street
                }
                department {
                  title
                  url
                }
              }
            }
            ... on ComponentSectionsCoursesSection {
              componentId
              title
              subTitle
              sectionId
              coursesList {
                blockTitle
                trainingCourses {
                  courseId
                  title
                  date
                }
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
      const data = await GqlClient.instance.request<{ pages: Page[]; apiFormsForms: Form[] }>(document);

      return data;
    } catch (error) {
      console.error("Error fetching dynamic page data:", error);

      throw error;
    }
  }
}

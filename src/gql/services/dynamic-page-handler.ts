import { gql } from "graphql-request";
import { GqlClient } from "../gql";

export type SectionType = string;

export type Section =
  | {
      __typename: "ComponentSectionsHero";
      id: string;
      componentId: SectionType;
      title: string;
      subtitle?: string | null;
      primaryBtnLabel?: string | null;
      primaryBtnUrl?: string | null;
      secondaryBtnLabel?: string | null;
      secondaryBtnUrl?: string | null;
    }
  | {
      __typename: "ComponentSectionsAbout";
      id: string;
      componentId: SectionType;
      title?: string | null;
      description?: string | null;
      button_link?: string | null;
      button_label?: string | null;
    };

export interface Page {
  documentId: string;
  slug: string;
  title: string;
  sections: Section[];
  seoTitle?: string | null;
  seoDescription?: string | null;
  isIndexable?: boolean | null;
}

export class DynamicPageHandler {
  async getDynamicPageData(): Promise<{ pages: Page[] }> {
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
            ... on Error {
              code
              message
            }
          }
        }
      }
    `;

    try {
      const data = await GqlClient.instance.request<{ pages: Page[] }>(
        document,
      );

      return data;
    } catch (error) {
      console.error("Error fetching dynamic page data:", error);

      throw error;
    }
  }
}

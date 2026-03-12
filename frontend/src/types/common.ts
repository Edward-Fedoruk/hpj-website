export type StrapiImageType = {
    url: string;
    alternativeText: string;
    width: number;
    height: number;
    mime: any;
    size: any;
    formats: any;
};

export interface PolicyTitles {
  terms_and_conditions?: string | null;
  privacy_policy?: string | null;
  cookie_policy?: string | null;
}

export interface NavigationTitles {
  home?: string | null;
  about?: string | null;
  board_members?: string | null;
  business_organisations?: string | null;
  careers?: string | null;
}

export interface GlobalSettings {
  short_name: string;
  full_name: string;
  logo: StrapiImageType;
  tagline?: string | null;
  instagram_url?: string | null;
  youtube_url?: string | null;
  facebook_url?: string | null;
  emails: { email: string }[];
  phone_numbers: { phone_number: string }[];
  address?: string | null;
  address_map_url?: string | null;
  default_footer_logo?: StrapiImageType | null;
  navigation_titles?: NavigationTitles | null;
  contact_btn_label?: string | null;
  copyright_text?: string | null;
  footer_col_pages_label?: string | null;
  footer_col_organisations_label?: string | null;
  footer_col_contact_label?: string | null;
  policy_titles?: PolicyTitles | null;
}
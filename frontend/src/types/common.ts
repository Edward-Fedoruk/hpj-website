export type StrapiImageType = {
    url: string;
    alternativeText: string;
    width: number;
    height: number;
    mime: any;
    size: any;
    formats: any;
};

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
}
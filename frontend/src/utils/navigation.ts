import { headerUnit } from "@/data_files/mega_link";
import type { NavigationTitles, PolicyTitles } from "@/types/common";

export function getNavBarLinks(titles?: NavigationTitles | null) {
  return [
    { name: titles?.home, url: "/", width: 50 },
    { name: titles?.about, url: "/about", width: 75 },
    { name: titles?.board_members, url: "/board-members", width: 140 },
    { name: titles?.business_organisations, url: "/units", width: 65 },
    { name: titles?.careers, url: "/careers", width: 60 },
  ].filter((link): link is { name: string; url: string; width: number } => !!link.name);
}

export function getFooterLinks(
  titles?: NavigationTitles | null,
  pagesLabel?: string | null,
  organisationsLabel?: string | null,
) {
  return [
    {
      section: pagesLabel ?? "Pages",
      links: [
        { name: titles?.home, url: "/" },
        { name: titles?.about, url: "/about" },
        { name: titles?.board_members, url: "/board-members" },
        { name: titles?.business_organisations, url: "/units" },
        { name: titles?.careers, url: "/careers" },
      ].filter((link): link is { name: string; url: string } => !!link.name),
    },
    {
      section: organisationsLabel ?? "Business Organisations",
      links: headerUnit.business_units.map((item) => ({
        name: item.title,
        url: `/unit/${item.url}`,
      })),
    },
  ];
}

export function getFooterBottomLinks(titles?: PolicyTitles | null) {
  return [
    { name: titles?.terms_and_conditions, url: "/terms-and-conditions" },
    { name: titles?.privacy_policy, url: "/privacy-policy" },
    { name: titles?.cookie_policy, url: "/cookie-policy" },
  ].filter((link): link is { name: string; url: string } => !!link.name);
}

// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

const footerBottomLinks = [
  { name: "Terms & Conditions", url: "/terms-and-conditions" },
  { name: "Privacy Policy", url: "/privacy-policy" },
  { name: "Cookie Policy", url: "/cookie-policy" },
];

export default {
  footerBottomLinks,
  socialLinks,
  getNavBarLinks,
  getFooterLinks,
  getFooterBottomLinks,
};

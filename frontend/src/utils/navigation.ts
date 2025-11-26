import { headerUnit } from "@/data_files/mega_link";

// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/", width: 50 },
  { name: "About Us", url: "/about", width: 75 },
  { name: "Board Members", url: "/board-members", width: 140 },
  { name: "Business Organisations", url: "/units", width: 65 },
  { name: "Careers", url: "/careers", width: 60 },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Pages",
    links: [
      { name: "Home", url: "/" },
      { name: "About Us", url: "/about" },
      { name: "Board Members", url: "/board-members" },
      { name: "Units", url: "/units" },
      { name: "Careers", url: "/careers" },
    ],
  },
  {
    section: "Business Organisations",
    links: headerUnit.business_units.map((item) => {
      return {
        name: item.title,
        url: item.url,
      };
    }),
  },
];
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
  navBarLinks,
  footerLinks,
  footerBottomLinks,
  socialLinks,
};

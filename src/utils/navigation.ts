// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about" },
  { name: "Board Members", url: "/board-members" },
  { name: "Units", url: "/units" },
  { name: "Careers", url: "/careers" },
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
    section: "Business Units",
    links: [
      { name: "EHS Training ", url: "#" },
      { name: "Security Solutions", url: "#" },
      { name: "Assurance ", url: "#" },
      { name: "Event Management", url: "#" },
      { name: "Recruitment", url: "#" },
      { name: "CFLS", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
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

import type { Props } from "astro";
import type { SectionType } from "@/gql/services/dynamic-page-handler";

import Hero from "./landing/HeroSection.astro";
import About from "./landing/AboutSection.astro";

export const sections: Record<SectionType,  (_props: Props) => any> = { 
    "page:section:hero": Hero as unknown as (_props: Props) => any,
    "page:section:about": About as unknown as (_props: Props) => any
};
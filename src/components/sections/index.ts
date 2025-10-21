import type { Props } from "astro";
import type { SectionType } from "@/gql/services/dynamic-page-handler";

import Hero from "./landing/HeroSection.astro";
import About from "./landing/AboutSection.astro";
import BusinessUnits from "./landing/BusinessUnitsSection.astro";

export const sections: Record<SectionType,  (_props: Props) => any> = { 
    "page:section:hero": Hero as unknown as (_props: Props) => any,
    "page:section:about": About as unknown as (_props: Props) => any,
    "page:section:bussiness_units": BusinessUnits as unknown as (_props: Props) => any,
};
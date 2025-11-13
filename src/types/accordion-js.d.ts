declare module "accordion-js" {
  export interface AccordionOptions {
    duration?: number;
    showMultiple?: boolean;
    openOnInit?: number[];
    elementClass?: string;
    triggerClass?: string;
    panelClass?: string;
    activeClass?: string;
    beforeOpen?: (element: HTMLElement) => void;
    onOpen?: (element: HTMLElement) => void;
    beforeClose?: (element: HTMLElement) => void;
    onClose?: (element: HTMLElement) => void;
  }

  export default class Accordion {
    constructor(selector: string | HTMLElement | NodeListOf<HTMLElement>, options?: AccordionOptions);
    open(index: number): void;
    close(index: number): void;
    toggle(index: number): void;
    destroy(): void;
  }
}

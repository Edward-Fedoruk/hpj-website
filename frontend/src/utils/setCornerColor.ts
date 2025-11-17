const cornerElements = document.querySelectorAll(`.section-corner:not(.updated-color)`) as NodeListOf<HTMLElement>;

cornerElements.forEach((cornerEl) => {
  const currentSection = cornerEl.closest("section");
  if (!currentSection) return;

  const previousSection = findPreviousSection(currentSection);
  const nextSection = findNextSection(currentSection);

  const cornerPosition: "top-left" | "top-right" | "bottom-left" | "bottom-right" = cornerEl.dataset.position as any;

  let sectionToUse: HTMLElement | null = null;

  if (cornerPosition.startsWith("top")) {
    sectionToUse = previousSection;
  } else if (cornerPosition.startsWith("bottom")) {
    sectionToUse = nextSection;
  }
  if (!sectionToUse) return;

  const bgClass = [...sectionToUse.classList].find((c) => c.startsWith("bg-"));
  let bgColor: string | null = null;

  if (bgClass) {
    bgColor = bgClass.split("bg-")[1].replace("[", "").replace("]", "");
  } else if (sectionToUse.style.backgroundColor) {
    bgColor = sectionToUse.style.backgroundColor;
  }

  if (bgColor && !cornerEl.classList.contains("updated-color")) {
    cornerEl.style.color = bgColor;
    cornerEl.classList.add("updated-color");
    console.log(`updated color for ${cornerEl}, ${bgColor}`);
  }
});

function findNextSection(startEl: Element | null): HTMLElement | null {
  if (!startEl) return null;

  let el = startEl.nextElementSibling;
  while (el) {
    if (el.tagName === "SECTION") return el as HTMLElement;
    el = el.nextElementSibling;
  }
  return null;
}

function findPreviousSection(startEl: Element | null): HTMLElement | null {
  if (!startEl) return null;

  let el = startEl.previousElementSibling;
  while (el) {
    if (el.tagName === "SECTION") return el as HTMLElement;
    el = el.previousElementSibling;
  }
  return null;
}

document.addEventListener("DOMContentLoaded", () => {
  const cornerElements = document.querySelectorAll(".corner");
  cornerElements.forEach((el) => {
    // your logic
    console.log("Corner element:", el);
  });
});

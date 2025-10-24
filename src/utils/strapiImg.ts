const BASE = import.meta.env.PUBLIC_STRAPI_URL || "http://localhost:1337"

type StrapiFormat = { url: string; width: number; height: number };

export type StrapiImage = {
  url: string;
  width?: number;
  height?: number;
  alternativeText?: string | null;
  formats?: Record<string, StrapiFormat>;
};

export type BuildOptions = {
  baseUrl?: string;                          
  capWidth?: number;                         
  preferredBase?: number;                    
  includeOriginal?: boolean;                 
};

export type Built = {
  src: string;            
  srcset: string;         
  width: number;          
  height: number;         
  alt: string;
  candidates: Array<{ w: number; h: number; url: string }>;
};

const abs = (u: string, base?: string) =>
  /^https?:\/\//.test(u) ? u : `${base ?? ""}${u}`;

export function buildStrapiResponsive(
  image: StrapiImage,
  {
    baseUrl = BASE,
    capWidth = 1920,
    preferredBase = 1920,
    includeOriginal = false,
  }: BuildOptions = {}
): Built {
  const raw: Array<{ w: number; h: number; url: string }> = [];
  for (const v of Object.values(image.formats ?? {})) {
    if (!v?.url || !v?.width) continue;
    raw.push({ w: v.width, h: v.height, url: abs(v.url, baseUrl) });
  }

  if (includeOriginal && image.url && (image.width || 0) > 0) {
    raw.push({
      w: image.width!,
      h: image.height ?? Math.round((image.width ?? 1) * 0.56),
      url: abs(image.url, baseUrl),
    });
  }

  if (raw.length === 0) {
    const ow = image.width ?? 1000;
    const oh = image.height ?? Math.round(ow * 0.56);
    const url = abs(image.url, baseUrl);
    return {
      src: url,
      srcset: "",
      width: ow,
      height: oh,
      alt: image.alternativeText ?? "",
      candidates: [{ w: ow, h: oh, url }],
    };
  }

  const uniq = new Map<number, { w: number; h: number; url: string }>();
  for (const v of raw) uniq.set(v.w, v);
  let list = [...uniq.values()].sort((a, b) => a.w - b.w);
  if (capWidth) list = list.filter((v) => v.w <= capWidth);

  const base =
    list.find((v) => v.w >= preferredBase) ??
    list[list.length - 1] ??
    list[0];

  const srcset = list.map((v) => `${v.url} ${v.w}w`).join(", ");

  const ow = image.width ?? base.w;
  const oh = image.height ?? base.h;
  const ratio = (oh || 1) / (ow || 1);
  const width = base.w;
  const height = Math.round(width * ratio);

  return {
    src: base.url,
    srcset,
    width,
    height,
    alt: image.alternativeText ?? "",
    candidates: list,
  };
}

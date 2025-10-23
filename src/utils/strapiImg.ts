export const base_URL = import.meta.env.PUBLIC_STRAPI_URL ?? "http://localhost:1337";

type StrapiImageFormat = 'thumbnail' | 'small' | 'medium' | 'large' | 'original';

interface StrapiImageFormatData {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes?: number;
  url: string;
}

interface StrapiImage {
  url: string;
  alternativeText?: string | null;
  width?: number;
  height?: number;
  mime?: string;
  size?: number;
  formats?: Record<string, StrapiImageFormatData>;
}

//! if url is relative, add baseUrl
export function getImageData(
  image: StrapiImage | null | undefined,
  format: StrapiImageFormat = 'original',
  baseUrl: string = base_URL,
): StrapiImageFormatData & { alt: string | null } | null {
  if (!image) return null;

  let selected: StrapiImageFormatData | undefined;

  if (format === 'original') {
    selected = {
      name: 'original',
      hash: '',
      ext: image.url.split('.').pop() || '',
      mime: image.mime || '',
      path: null,
      width: image.width || 0,
      height: image.height || 0,
      size: image.size || 0,
      url: image.url,
    };
  } else {
    selected = image.formats?.[format];
  }

  if (!selected) {
    //! fallback to original if specified format not found
    selected = {
      name: 'original',
      hash: '',
      ext: image.url.split('.').pop() || '',
      mime: image.mime || '',
      path: null,
      width: image.width || 0,
      height: image.height || 0,
      size: image.size || 0,
      url: image.url,
    };
  }

  const url = /^https?:\/\//.test(selected.url)
    ? selected.url
    : `${baseUrl}${selected.url}`;

  return {
    ...selected,
    url,
    alt: image.alternativeText ?? null,
  };
}

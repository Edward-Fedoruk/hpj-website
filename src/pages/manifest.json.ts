import type { APIRoute, ImageMetadata } from "astro";
import { getImage } from "astro:assets";
import icon from "@images/icon.png";
import maskableIcon from "@images/maskable_icon.png";
import { OG } from "@/data_files/constants";
import wideScreenshot from "@images/wide_screenshot.png";
import mobileScreenshot from "@images/mobile_screenshot.png";

interface Favicon {
  purpose: 'any' | 'maskable' | 'monochrome';
  src: ImageMetadata;
  sizes: number[];
}

interface Sceenshot {
  form_factor: 'wide' | 'narrow';
  src: ImageMetadata;
  sizes: {
    width: number;
    height: number
  };
}

const sizes = [192, 512];
const favicons: Favicon[] = [
  {
    purpose: 'any',
    src: icon,
    sizes,
  },
  {
    purpose: 'maskable',
    src: maskableIcon,
    sizes,
   },
];

const screenshots: Sceenshot[] = [
  {
      form_factor: "wide",
      src: wideScreenshot,
      sizes: {
        width: 1440, height: 1024
      },
  },
  {
      form_factor: "narrow",
      src: mobileScreenshot,
      sizes: {
        width: 390, height: 844
      },
  },
];

export const GET: APIRoute = async () => {
  const icons = await Promise.all(
    favicons.flatMap((favicon) =>
      favicon.sizes.map(async (size) => {
        const image = await getImage({
          src: favicon.src,
          width: size,
          height: size,
          format: "png",
        });
        return {
          src: image.src,
          sizes: `${image.options.width}x${image.options.height}`,
          type: `image/${image.options.format}`,
          purpose: favicon.purpose,
        };
      }),
    ),
  );

  const manifestScreenshots = await Promise.all(
    screenshots.flatMap(async (screenshot) =>
      {
        const image = await getImage({
          src: screenshot.src,
          width: screenshot.sizes.width,
          height: screenshot.sizes.height,
          format: "png",
        })

        return {
          src: image.src,
          sizes: `${image.options.width}x${image.options.height}`,
          type: `image/${image.options.format}`,
        };
      }
    ),
  );

  const manifest = {
    short_name: "HPJ",
    name: "HPJ",
    description: OG.description,
    background_color: '#F5F5F5',
    theme_color: '#373B43',
    icons,
    display: "minimal-ui",
    start_url: "/",
    orientation: "portrait",
    screenshots: manifestScreenshots,
  };

  return new Response(JSON.stringify(manifest));
};

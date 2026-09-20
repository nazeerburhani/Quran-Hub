import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/** PWA manifest — makes the site installable as an app. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: "QuranHub",
    description: "Live one-on-one online Quran classes for kids and adults.",
    start_url: "/",
    display: "standalone",
    background_color: "#070b1d",
    theme_color: "#0b1026",
    icons: [
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}

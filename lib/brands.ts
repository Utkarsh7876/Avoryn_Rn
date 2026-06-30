import type { Brand } from "@/components/BrandLogoMarquee";

export type { Brand };

/**
 * Logo files live in `public/brands/`.
 * Only list entries where the file actually exists.
 * Add more as you export and drop new logo files into public/brands/.
 */
export const brands: Brand[] = [
  { name: "Unstop",      logo: "/brands/unstop.png" },
  { name: "Masai",       logo: "/brands/masai.png" },
  { name: "Naukri",      logo: "/brands/naukri.png" },
  { name: "IntelliPaat", logo: "/brands/intellipaat.png" },
  { name: "Dark Studios",logo: "/brands/dark-studios.png" },
  { name: "Polaris",     logo: "/brands/polaris.png" },
  { name: "Emergent",    logo: "/brands/emergent.jpg" },
  { name: "Alta School", logo: "/brands/alta-school.jpg" },
  { name: "College Vidya", logo: "/brands/CollegeVidya.jpeg" },
];

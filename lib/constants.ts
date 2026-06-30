export type NavLink = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type ServiceIcon =
  | "Users"
  | "TrendingUp"
  | "Film"
  | "Video"
  | "Share2"
  | "Lightbulb";

export type Service = {
  number: string;
  title: string;
  body: string;
  icon: ServiceIcon;
};

export type ProcessStep = {
  number: string;
  title: string;
  body: string;
};

export type Differentiator = {
  title: string;
  body: string;
};

export type Principle = {
  title: string;
  body: string;
};

export type FooterColumn = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

export type SocialLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Creators", href: "#creators" },
  { label: "Brands", href: "#brands" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const heroMarquee = [
  "Influencer Marketing",
  "Brand Campaigns",
  "Creator Partnerships",
  "UGC Content",
  "Reels & Short-form",
  "Social Growth",
];

export const aboutStats: Stat[] = [
  { value: "200+", label: "Creators Network" },
  { value: "50+", label: "Brand Campaigns" },
  { value: "3x", label: "Avg. Engagement Lift" },
];

export const services: Service[] = [
  {
    number: "01",
    title: "Influencer Campaigns",
    body: "End-to-end creator campaigns — casting, briefing, content, and performance tracking built for reach that converts.",
    icon: "Users",
  },
  {
    number: "02",
    title: "Brand Partnerships",
    body: "We match your brand with creators whose audience, tone, and credibility align with what you're building.",
    icon: "TrendingUp",
  },
  {
    number: "03",
    title: "UGC & Reels",
    body: "Scroll-stopping short-form content produced by creators who understand the platform natively.",
    icon: "Film",
  },
  {
    number: "04",
    title: "Content Strategy",
    body: "Campaign narratives, content calendars, and creative direction shaped around your brand goals.",
    icon: "Video",
  },
  {
    number: "05",
    title: "Social Media Growth",
    body: "Organic and paid social systems designed to grow attention, trust, and community around your brand.",
    icon: "Share2",
  },
  {
    number: "06",
    title: "Campaign Strategy",
    body: "Integrated launch plans that connect creators, content, and channels into one coherent rollout.",
    icon: "Lightbulb",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    body: "We learn your brand, audience, and goals — then map the creator landscape that fits.",
  },
  {
    number: "02",
    title: "Match",
    body: "We shortlist creators by fit, reach, and authenticity — not just follower count.",
  },
  {
    number: "03",
    title: "Execute",
    body: "Briefing, content production, and campaign rollout — managed end to end under one roof.",
  },
  {
    number: "04",
    title: "Measure",
    body: "We track performance, optimise live, and report on what actually moved the needle.",
  },
];

export const differentiators: Differentiator[] = [
  {
    title: "Creator-First Matching",
    body: "We pick creators for fit and audience quality — not vanity metrics.",
  },
  {
    title: "Full Campaign Ownership",
    body: "Casting, briefing, content, and reporting — all handled in-house.",
  },
  {
    title: "Results Over Reach",
    body: "We measure success in engagement, conversions, and brand lift.",
  },
  {
    title: "Built for India",
    body: "Deep understanding of Indian creators, platforms, and culture.",
  },
];

export const contactExpectations: Principle[] = [
  {
    title: "Tell us the real goal",
    body: "Launch, awareness, conversions — clarity on the objective helps us shape the right campaign.",
  },
  {
    title: "We'll map the fit",
    body: "You'll hear which creators and formats make sense for your brand and budget.",
  },
  {
    title: "Then we build the plan",
    body: "If we're a fit, we define scope, timeline, and the team that stays with you start to finish.",
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Explore",
    links: [
      { label: "Creators", href: "#creators" },
      { label: "Brands", href: "#brands" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        label: "workwithus@avoryn.in",
        href: "mailto:workwithus@avoryn.in",
      },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "Twitter/X", href: "https://x.com" },
];

export const contactEmail = "workwithus@avoryn.in";

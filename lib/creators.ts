export type Creator = {
  name: string;
  handle: string;
  followers: string;
  niche: string;
  image: string; // path without extension e.g. "/creators/ansh-bhardwaj"
  instagramUrl?: string;
};

export const creators: Creator[] = [
  {
    name: "Ansh Bhardwaj",
    handle: "@anshbhardwajx",
    followers: "68.9K",
    niche: "Reel Creator",
    image: "/creators/ansh-bhardwaj",
    instagramUrl: "https://www.instagram.com/anshbhardwajx",
  },
  {
    name: "Nidhi Choudhary",
    handle: "@futuretalkwith_nidhi",
    followers: "408K",
    niche: "Finance • Tech • Awareness",
    image: "/creators/nidhi-choudhary",
    instagramUrl: "https://www.instagram.com/futuretalkwith_nidhi",
  },
  {
    name: "Yashika Sadhwani",
    handle: "@ai.noobstoninjas",
    followers: "218K",
    niche: "AI & Tech",
    image: "/creators/yashika-sadhwani",
    instagramUrl: "https://www.instagram.com/ai.noobstoninjas",
  },
  {
    name: "Madhuparna Das",
    handle: "@madhu.careers",
    followers: "50.7K",
    niche: "Education & Mentorship",
    image: "/creators/madhuparna-das",
    instagramUrl: "https://www.instagram.com/madhu.careers",
  },
  {
    name: "Nishant Gupta",
    handle: "@codewithnishant",
    followers: "134K",
    niche: "Coding • Career • AI",
    image: "/creators/nishant-gupta",
    instagramUrl: "https://www.instagram.com/codewithnishant",
  },
  {
    name: "Ritik Patel",
    handle: "@edu.ritikpatel",
    followers: "382K",
    niche: "Coding • Career • Tech",
    image: "/creators/ritik-patel",
    instagramUrl: "https://www.instagram.com/edu.ritikpatel",
  },
  {
    name: "Anu Singh",
    handle: "@lifeolearn",
    followers: "25.8K",
    niche: "Maths Educator",
    image: "/creators/anu-singh",
    instagramUrl: "https://www.instagram.com/lifeolearn",
  },
];

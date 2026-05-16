export type ProjectAction = {
  label: string;
  href: string;
};

export type ProjectItem = {
  tag: string;
  title: string;
  body: string;
  img: string;
  actions: [ProjectAction, ProjectAction];
};

export const projects: ProjectItem[] = [
  {
    tag: "B2C SaaS · Tech & UX/UI Design, Product Design",
    title: "Beyond Clean UI: Systems That Improve Designers",
    body: `What If Feedback Could Think With You?That question led to one idea:
            What if every designer had access to a senior-level critique system… on demand?
            What if every designer had clear, principle-based feedback, every single time.
            That’s how Vantage AI was born.`,
    actions: [
      { label: "Watch video case study", href: "#" },
      { label: "See how this was solved", href: "#" },
    ],
    img: "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1778772554/Frame_2147229349_cge2z3.svg",
  },
  {
    tag: "B2B SaaS · Fashion & Apparel",
    title: "Reducing online shopping using AI body-type recognition",
    body: `This case study explores how we replaced the "model-to-reality" gap with an AI-driven experience that prioritizes real human proportions over generic trends. Discover how data-backed personalization can transform online shopping from a guessing game into a confident, inclusive journey for every body type.`,
    actions: [
      { label: "Watch video case study", href: "/projects/reducing-online-shopping-using-ai-body-type-recognition#video" },
      { label: "See how this was solved", href: "/projects/reducing-online-shopping-using-ai-body-type-recognition" },
    ],
    img: "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1778772545/Thumbnail_ne3v2b.svg",
  },
  {
    tag: "B2C SaaS · Digital Streaming",
    title: "Hum It, Find It: Designing a Voice-Activated Search for Spotify.",
    body: `We’ve all had a song stuck in our head with no idea what the title is. This case study explores a voice-first feature for Spotify that lets users simply hum or sing to discover that elusive track, turning a frustrating mental block into an instant musical match.`,
    actions: [
      { label: "Watch video case study", href: "#" },
      { label: "Read the process", href: "#" },
    ],
    img: "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1778772545/image_59_zkrvqf.svg",
  },
  {
    tag: "B2C SaaS · EdTech & Education",
    title:
      "Designing for the Visual Mind: Turning Cognitive Overload into Engaging Videos.",
    body: `Traditional learning assumes reading is the only way to learn, but for visual thinkers, it’s a barrier. Explore how I designed a web app that bridges this gap, transforming 50-page documents into engaging videos that meet students exactly where they are.`,
    actions: [
      { label: "Watch video case study", href: "#" },
      { label: "Find out how", href: "#" },
    ],
    img: "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1778772548/Thumbnail_1_mx5x5o.svg",
  },
];

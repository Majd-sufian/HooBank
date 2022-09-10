interface NavLink {
  id: "home" | "features" | "product" | "clients";
  title: "Home" | "Features" | "Product" | "Clients";
}

interface Feature {
  id: string;
  icon: string;
  title: string;
  content: string;
}

interface Feedback {
  id: string;
  content: string;
  name: string;
  title: string;
  img: string;
}

interface Stats {
  id: string;
  title: string;
  value: string;
}

interface FooterLinks {
  title: string;
  links: Array<{
    name: string;
    link: string;
  }>;
}

interface SocialMedia {
  id: string;
  icon: string;
  link: string;
}

interface Clients {
  id: string;
  logo: string;
}

export type {
  NavLink,
  Feature,
  Feedback,
  Stats,
  FooterLinks,
  SocialMedia,
  Clients,
};

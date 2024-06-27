export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "GG Good Game",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Giochi di Carte",
      href: "/giochi-di-carte",
      navItems: [
        {
          label: "Magic the Gathering",
          href: "/magic-the-gathering",
        },
        {
          label: "Yu-Gi-Oh!",
          href: "/yu-gi-oh",
        },
        {
          label: "Pokémon",
          href: "/pokemon",
        },
        {
          label: "Carte Singole",
          href: "/carte-singole",
        },
        {
          label: "Accessori",
          href: "/cgt-accessori",
        },
      ]
    },
    {
      label: "Manga",
      href: "/manga",
    },
    {
      label: "Modellismo",
      href: "/modellismo",
      navItems: [
        {
          label: "Wargames",
          href: "/Wargames",
        },
        {
          label: "Gunpla",
          href: "/gunpla",
        },
        {
          label: "Accessori",
          href: "/wg-accessori",
        },
      ]
    },
    {
      label: "Commissioni",
      href: "/commissioni",
    },
    {
      label: "Gadget",
      href: "/gadget",
      navItems: [
        {
          label: "Funko Pop",
          href: "/funko-pop",
        },
        {
          label: "Puzzle",
          href: "/puzzle",
        },
        {
          label: "Peluche",
          href: "/peluche",
        },
        {
          label: "Nerf",
          href: "/nerf",
        },
      ]
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};

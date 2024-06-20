import { Link } from "@nextui-org/react";

interface FooterLinkProps {
  title: string;
  links: { label: string; url: string }[];
}

export default function FooterLink({ title, links }: FooterLinkProps) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-lg font-medium mb-2">{title}</h1>
      {
        links.map((link, index) => (
          <Link key={index} color="foreground" href={link.url}>
            {link.label}
          </Link>
        ))
      }
    </div>
  );
}

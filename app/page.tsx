
import {
  SiGithub,
  SiInstagram,
  SiLinkedin
} from "@icons-pack/react-simple-icons";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface Link {
  description: string;
  url: string;
  Icon?: ReactNode;
}

const externalLinks = [
  {
    description: "LinkedIn",
    url: "https://www.linkedin.com/in/luismachadodev",
    Icon: <SiLinkedin />,
  },
  {
    description: "GitHub",
    url: "https://github.com/luismachadodev",
    Icon: <SiGithub />,
  },
  {
    description: "Instagram",
    url: "https://www.instagram.com/luisshmachado/",
    Icon: <SiInstagram />,
  },
] as Link[];

const ExternalLink = (link: Link) => {
  return (
    <a
      key={link.description}
      href={link.url}
      target="_blank"
      className="flex items-center justify-between ring-1 ring-zinc-950 dark:ring-red-200 p-4 dark:hover:bg-red-100 hover:bg-zinc-200 dark:hover:text-black transition-all"
    >
      <span className="flex items-center gap-4">
        {link.Icon} {link.description}
      </span>
      <ArrowUpRight className="size-5" />
    </a>
  );
};

const internalLinks = [
  {
    description: "Meus projetos",
    url: "/projects",
  },
  {
    description: "Leia meus artigos",
    url: "/blog",
  },
  {
    description: "Sobre mim",
    url: "/about",
  },
];

const InternalLink = (link: Link) => {
  return (
    <Link className="group flex items-center gap-2" href={link.url}>
      {link.description}
      <ArrowRight className="size-5 group-hover:tranzinc-x-1 transition-all" />
    </Link>
  );
};


export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      {externalLinks.map((link: Link) => (
        <ExternalLink
          key={link.description}
          description={link.description}
          url={link.url}
          Icon={link.Icon}
        />
      ))}
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-4">
          {internalLinks.map((link: Link) => (
            <InternalLink
              key={link.description}
              description={link.description}
              url={link.url}
            />
          ))}
        </div>
        <div className="flex gap-2 flex-col">
          <a
            href="/machado-dev-cv.pdf"
            download="machado-dev-cv.pdf"
            className="bg-zinc-950 p-4 text-zinc-100 flex items-center gap-4 hover:bg-zinc-700 dark:hover:bg-red-100 dark:hover:text-black transition-all active:tranzinc-y-1"
          >
            Baixe meu CV
            <Download className="size-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

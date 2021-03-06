import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { enNav, esNav, zhNav } from "../../translations/components/Nav";
import { getTranslation } from "../../utils/getTranslation";
import { LanguageToggle } from "../LanguageToggle";
import { NavLogo } from "./NavLogo";

interface NavProps {
  className?: string;
}

export interface NavLink<T extends string> {
  name: T;
  href: string;
}

export const NAV_LINKS: NavLink<keyof typeof enNav>[] = [
  { href: "/about", name: "aboutUs" },
  { href: "/contact", name: "contactUs" },
  { href: "/products", name: "products" },
];

export const Nav: FC<NavProps> = ({ className }) => {
  const { locale } = useRouter();
  const t = getTranslation(locale, enNav, esNav, zhNav);

  return (
    <nav
      className={
        className +
        " w-full h-12 bg-slate-900 flex pl-10 items-center justify-center z-50 sticky top-0 px-4"
      }
    >
      <div className="max-w-6xl flex justify-center items-center h-full w-full">
        <Link href="/" passHref>
          <NavLogo className="h-[85%] w-auto cursor-pointer" />
        </Link>
        <ul className="w-full h-full flex justify-around items-center relative">
          {NAV_LINKS.map(({ href, name }) => (
            <Link key={name} href={href} passHref>
              <li className="cursor-pointer text-neutral-400 text-sm transition duration-200 hover:text-slate-50">
                {t[name]}
              </li>
            </Link>
          ))}
        </ul>
        <LanguageToggle className="" />
      </div>
    </nav>
  );
};

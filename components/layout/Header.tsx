import Link from "next/link";
import HeaderNav, { NavLink } from "./HeaderNav";

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 w-full bg-black ">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-6">
        <Link href="/" className="text-3xl font-bold tracking-tight text-white">
          Toolbox
        </Link>

        <HeaderNav links={navLinks} />
      </div>
    </header>
  );
}

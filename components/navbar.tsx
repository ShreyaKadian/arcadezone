import {
  Navbar as HeroUINavbar,
  NavbarBrand,
} from "@heroui/navbar";
import NextLink from "next/link";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  return (
    <HeroUINavbar
      maxWidth="full"
      position="sticky"
      className="bg-black/60 backdrop-blur-md text-white shadow-[0_0_10px_#8b5cf6] border-b border-violet-700 z-50"
    >
      <NavbarBrand>
        <NextLink href="/" className="flex items-center gap-2">
          <Logo className="text-violet-400 w-6 h-6" />
          <p className="font-bold text-violet-300 tracking-wider text-lg">ArcadeZone</p>
        </NextLink>
      </NavbarBrand>
    </HeroUINavbar>
  );
};

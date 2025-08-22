import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import NextLink from "next/link";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  return (
    <HeroUINavbar
      maxWidth="full"
      position="sticky"
      className="bg-black/70 backdrop-blur-lg text-white shadow-[0_0_15px_#8b5cf6] border-b border-violet-700 z-50 px-8 py-3"
    >
      <NavbarContent className="w-full flex justify-center items-center gap-12">
        {/* Logo + Brand */}
        <NextLink href="/" className="flex items-center gap-2">
          <Logo className="text-violet-400 w-7 h-7" />
          <p className="font-bold text-violet-300 tracking-widest text-xl drop-shadow-[0_0_10px_#a78bfa]">
            ArcadeZone
          </p>
        </NextLink>

        {/* Centered game links
        <NavbarItem>
          <NextLink
            href="/tetris"
            className="text-2xl font-extrabold text-white drop-shadow-[0_0_12px_#ffffffcc] hover:scale-110 transition-transform"
          >
            Tetris
          </NextLink>
        </NavbarItem>
        <NavbarItem>
          <NextLink
            href="/pong"
            className="text-2xl font-extrabold text-white drop-shadow-[0_0_12px_#ffffffcc] hover:scale-110 transition-transform"
          >
            Pong
          </NextLink>
        </NavbarItem>
        <NavbarItem>
          <NextLink
            href="/ironman"
            className="text-2xl font-extrabold text-white drop-shadow-[0_0_12px_#ffffffcc] hover:scale-110 transition-transform"
          >
            Ironman
          </NextLink>
        </NavbarItem> */}
      </NavbarContent>
    </HeroUINavbar>
  );
};

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
      className="bg-black/60 backdrop-blur-md text-white shadow-[0_0_10px_#8b5cf6] border-b border-violet-700 z-50 px-6"
    >
      <NavbarBrand>
        <NextLink href="/" className="flex items-center gap-2">
          <Logo className="text-violet-400 w-6 h-6" />
          <p className="font-bold text-violet-300 tracking-wider text-lg">
            ArcadeZone
          </p>
        </NextLink>
      </NavbarBrand>

      {/* Big, bold game names centered */}
      <div className="flex-1 flex justify-center  items-center gap-8">
        <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-green-400 drop-shadow-[0_0_8px_#ec4899]">
          Tetris
        </span>
        <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-[0_0_8px_#3b82f6]">
          Pong
        </span>
      </div>
    </HeroUINavbar>
  );
};

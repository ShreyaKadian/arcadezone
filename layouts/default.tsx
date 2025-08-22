import { Link } from "@heroui/link";
import { Head } from "./head";
import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative flex flex-col min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/arcade.jpg')" }}
    >
      <Navbar></Navbar>
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Head />
        <main className="container mx-auto max-w-7xl -6 flex-grow pt-16 mt-12">
          {children}
        </main>
        {/* <footer className="w-full flex items-center justify-center py-3 text-sm text-white/80">
          <Link
            isExternal
            className="flex items-center gap-1"
            href="https://www.heroui.com"
            title="heroui.com homepage"
          >
            <span>Powered by</span>
            <p className="text-pink-400">HeroUI</p>
          </Link>
        </footer> */}
      </div>
    </div>
  );
}

import { Link } from "@heroui/link";
import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-start md:items-center gap-6 py-12 px-6 text-white w-full animate-fade-in">
        <div className="w-full max-w-md bg-black/50 p-5 rounded-2xl backdrop-blur-md shadow-[0_0_25px_#a855f7] border border-violet-500">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-300 via-pink-400 to-cyan-300 bg-clip-text text-transparent tracking-wider uppercase drop-shadow-[0_0_10px_#8b5cf6]">
            TETRIS
          </h1>
          <p className="mt-3 text-sm text-gray-300 leading-relaxed">
            Built in C++. Retro vibes. Arcade soul. Slide, spin, drop, and download.
          </p>
        </div>

        <div className="w-full max-w-md rounded-2xl overflow-hidden border border-cyan-400 shadow-[0_0_30px_#00ffff] transition-transform hover:scale-[1.02]">
          <video className="w-full h-auto" controls>
            <source src="tetris.mp4" type="video/mp4" />
            <track
              kind="captions"
              srcLang="en"
              label="English captions"
              src="captions.vtt"
              default
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <Link
          href="/tetris.zip"
          download
          className="inline-block mt-2 px-6 py-2 rounded-full border border-pink-400 text-pink-300 hover:bg-pink-500 hover:text-black transition-all duration-200 shadow-[0_0_12px_#ff69b4] text-xs uppercase tracking-widest relative overflow-hidden group"
        >
          <span className="relative z-10">Download ZIP</span>
          <span className="absolute inset-0 bg-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></span>
        </Link>
      </section>
    </DefaultLayout>
  );
}

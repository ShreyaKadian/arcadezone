import { Link } from "@heroui/link";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      {/* CARD SECTION */}
      <section className="flex flex-wrap lg:flex-nowrap justify-center gap-8 px-6 py-12 w-full">
        {/* TETRIS CARD */}
        <div className="flex flex-col gap-4 max-w-sm text-white">
          <div className="bg-black/50 p-4 rounded-xl backdrop-blur-md shadow-[0_0_16px_#a855f7] border border-violet-500">
            <h1 className="text-2xl font-bold text-violet-300 drop-shadow-[0_0_6px_#8b5cf6] uppercase">
              Tetris
            </h1>
            <p className="mt-2 text-xs text-gray-300 leading-snug">
              Built in C++. Retro vibes. Arcade soul. Slide, spin, drop, and
              download.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-cyan-400 shadow-[0_0_20px_#00ffff]">
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
            className="inline-block px-4 py-1.5 rounded-full border border-pink-400 text-pink-300 hover:bg-pink-500 hover:text-black transition-all shadow-[0_0_10px_#ff69b4] text-xs uppercase tracking-wide text-center"
          >
            Download ZIP
          </Link>
        </div>

        {/* PONG CARD */}
        <div className="flex flex-col gap-4 max-w-sm text-white">
          <div className="bg-black/50 p-4 rounded-xl backdrop-blur-md shadow-[0_0_16px_#34d399] border border-green-400">
            <h1 className="text-2xl font-bold text-green-300 drop-shadow-[0_0_6px_#34d399] uppercase">
              Pong
            </h1>
            <p className="mt-2 text-xs text-gray-300 leading-snug">
              Built in C++. Paddle battles and pixel-perfect chaos.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-green-300 shadow-[0_0_20px_#00ff99]">
            <video className="w-full h-auto" controls>
              <source src="pong.mp4" type="video/mp4" />
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
            href="/pong.zip"
            download
            className="inline-block px-4 py-1.5 rounded-full border border-pink-400 text-pink-300 hover:bg-pink-500 hover:text-black transition-all shadow-[0_0_10px_#ff69b4] text-xs uppercase tracking-wide text-center"
          >
            Download Pong
          </Link>
        </div>

        {/* GAME 3 CARD */}
        <div className="flex flex-col gap-4 max-w-sm text-white">
          <div className="bg-black/50 p-4 rounded-xl backdrop-blur-md shadow-[0_0_16px_#34d399] border border-green-400">
            <h1 className="text-2xl font-bold text-green-300 drop-shadow-[0_0_6px_#34d399] uppercase">
              Game 3
            </h1>
            <p className="mt-2 text-xs text-gray-300 leading-snug">
              Another C++ classic. Bouncing pixels and timeless fun.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-green-300 shadow-[0_0_20px_#00ff99]">
            <video className="w-full h-auto" controls>
              <source src="pong.mp4" type="video/mp4" />
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
            href="/pong.zip"
            download
            className="inline-block px-4 py-1.5 rounded-full border border-pink-400 text-pink-300 hover:bg-pink-500 hover:text-black transition-all shadow-[0_0_10px_#ff69b4] text-xs uppercase tracking-wide text-center"
          >
            Download Game 3
          </Link>
        </div>
      </section>

      {/* VR GAME SECTION */}
      <section className="w-full px-6 pb-12 mt-8">
        <div className="bg-black/50 p-4 rounded-xl backdrop-blur-md shadow-[0_0_16px_#34d399] border border-green-400 mb-4">
          <h1 className="text-2xl font-bold text-green-300 drop-shadow-[0_0_6px_#34d399] uppercase">
            VR IRONMAN
          </h1>
          <p className="mt-2 text-xs text-gray-300 leading-snug">
            You are Ironman. Fly in the sky and shoot the targets.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden border border-cyan-400 shadow-[0_0_20px_#00ffff] mb-4">
          <video className="w-full h-[600px] object-cover" controls>
            <source src="ironman.mp4" type="video/mp4" />
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
          href="https://ironman-vr-game.vercel.app/"
          className="inline-block px-4 py-1.5 rounded-full border border-pink-400 text-pink-300 hover:bg-pink-500 hover:text-black transition-all shadow-[0_0_10px_#ff69b4] text-xs uppercase tracking-wide text-center w-full"
        >
          Play the game
        </Link>
      </section>
    </DefaultLayout>
  );
}

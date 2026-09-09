import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black px-6 py-24 text-white md:px-12 md:py-32 lg:px-16"
    >
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        <div className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border border-yellow-400/40" />

          <div className="relative h-[550px] overflow-hidden rounded-3xl bg-zinc-900 md:h-[650px]">
            <Image
              src="/images/minister-jy-1.jpeg"
              alt="Minister J-Y, Liberian Afro Gospel artist"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-400">
                Monrovia, Liberia
              </p>

              <p className="mt-2 text-3xl font-black">
                Minister J-Y
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
            His Story
          </p>

          <h2 className="mt-5 text-5xl font-black uppercase leading-[0.95] sm:text-6xl">
            Faith.
            <br />
            Music.
            <br />
            <span className="text-yellow-400">
              Purpose.
            </span>
          </h2>

          <div className="mt-8 h-[3px] w-20 bg-yellow-400" />

          <p className="mt-8 text-lg leading-8 text-white/70">
            Minister J-Y, born Julian Tisdell, is a Liberian Afro Gospel
            artist from Monrovia, Liberia. He began his music ministry in
            2024 with a passion for using music to share the message of
            Jesus Christ.
          </p>

          <p className="mt-5 text-lg leading-8 text-white/70">
            Connected with Christ Embassy Liberia, Minister J-Y sees music
            as more than entertainment. To him, music is a ministry — a way
            to reach hearts, inspire faith, and bring the lost closer to
            Christ.
          </p>

          <p className="mt-5 text-lg leading-8 text-white/70">
            Through contemporary Afro Gospel sounds and faith-centered
            messages, his vision is to reach listeners throughout Liberia,
            across Africa, and around the world.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-widest text-white/40">
                Genre
              </p>
              <p className="mt-2 font-bold text-yellow-400">
                Afro Gospel
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-widest text-white/40">
                Journey Began
              </p>
              <p className="mt-2 font-bold text-yellow-400">
                2024
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-widest text-white/40">
                Home
              </p>
              <p className="mt-2 font-bold text-yellow-400">
                Monrovia, Liberia 🇱🇷
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-widest text-white/40">
                Ministry
              </p>
              <p className="mt-2 font-bold text-yellow-400">
                Christ Embassy Liberia
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
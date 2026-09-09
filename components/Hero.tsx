export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/videos/minister-jy-hero-video.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl pt-24">

          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-yellow-400 md:text-base">
            Liberian Afro Gospel Artist
          </p>

          <h1 className="text-6xl font-black uppercase leading-[0.85] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
            Minister
            <span className="block text-yellow-400">
              J-Y
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
            Winning souls. Inspiring faith. Bringing the lost to Christ
            through the power of Afro Gospel music.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#music"
              className="rounded-full bg-yellow-400 px-7 py-4 text-sm font-bold uppercase tracking-wider text-black shadow-xl transition duration-300 hover:scale-105 hover:bg-yellow-300"
            >
              ▶ Play Thank You
            </a>

            <a
              href="#about"
              className="rounded-full border border-white/50 bg-white/10 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-black"
            >
              Discover His Story
            </a>
          </div>

          <div className="mt-12 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/70 md:text-sm">
            <span>Monrovia</span>
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
            <span>Liberia 🇱🇷</span>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[5] h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
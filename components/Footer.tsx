export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 text-white md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <div>
          <p className="text-xl font-black uppercase">
            Minister <span className="text-yellow-400">J-Y</span>
          </p>

          <p className="mt-2 text-sm text-white/40">
            Liberian Afro Gospel Artist • Monrovia, Liberia 🇱🇷
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-white/50">
          <a href="#home" className="transition hover:text-yellow-400">
            Home
          </a>

          <a href="#about" className="transition hover:text-yellow-400">
            About
          </a>

          <a href="#music" className="transition hover:text-yellow-400">
            Music
          </a>

          <a href="#mission" className="transition hover:text-yellow-400">
            Ministry
          </a>

          <a href="#gallery" className="transition hover:text-yellow-400">
            Gallery
          </a>
        </div>

      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/30">
        © {new Date().getFullYear()} Minister J-Y. All rights reserved.
      </div>
    </footer>
  );
}
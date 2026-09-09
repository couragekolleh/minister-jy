export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-16">

        <a
          href="#home"
          className="text-xl font-black uppercase tracking-tight text-white md:text-2xl"
        >
          Minister <span className="text-yellow-400">J-Y</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-sm text-white/80 transition hover:text-yellow-400">
            Home
          </a>

          <a href="#about" className="text-sm text-white/80 transition hover:text-yellow-400">
            About
          </a>

          <a href="#music" className="text-sm text-white/80 transition hover:text-yellow-400">
            Music
          </a>

          <a href="#mission" className="text-sm text-white/80 transition hover:text-yellow-400">
            Ministry
          </a>

          <a href="#gallery" className="text-sm text-white/80 transition hover:text-yellow-400">
            Gallery
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-yellow-400 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
        >
          Contact
        </a>

      </div>
    </header>
  );
}
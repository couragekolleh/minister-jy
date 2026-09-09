export default function Mission() {
  return (
    <section
      id="mission"
      className="relative overflow-hidden bg-black px-6 py-24 text-white md:px-12 md:py-32 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
            The Ministry
          </p>

          <h2 className="mt-5 text-5xl font-black uppercase leading-[0.95] md:text-7xl">
            More Than
            <br />
            <span className="text-yellow-400">Music.</span>
          </h2>
        </div>

        <div>
          <blockquote className="border-l-4 border-yellow-400 pl-7 text-2xl font-semibold leading-relaxed text-white/90 md:text-3xl">
            “To win souls through my talent and bring the lost to Christ.”
          </blockquote>

          <p className="mt-8 text-lg leading-8 text-white/60">
            Minister J-Y believes his gift has a purpose beyond performance.
            His goal is to use Afro Gospel music as a tool for ministry,
            encouragement, evangelism, and bringing people closer to Jesus
            Christ.
          </p>
        </div>

      </div>

      <div className="mx-auto mt-16 grid max-w-7xl gap-5 md:grid-cols-3">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-4xl font-black text-yellow-400">
            01
          </p>

          <h3 className="mt-5 text-xl font-bold">
            Win Souls
          </h3>

          <p className="mt-3 leading-7 text-white/60">
            Sharing the Gospel and reaching people through music with a
            Christ-centered message.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-4xl font-black text-yellow-400">
            02
          </p>

          <h3 className="mt-5 text-xl font-bold">
            Inspire Faith
          </h3>

          <p className="mt-3 leading-7 text-white/60">
            Creating uplifting Afro Gospel music that encourages believers
            through faith, hope, and gratitude.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-4xl font-black text-yellow-400">
            03
          </p>

          <h3 className="mt-5 text-xl font-bold">
            Reach the World
          </h3>

          <p className="mt-3 leading-7 text-white/60">
            Carrying a Liberian Gospel sound beyond borders throughout
            Africa and to listeners around the world.
          </p>
        </div>

      </div>
    </section>
  );
}
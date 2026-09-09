export default function Music() {
  return (
    <section
      id="music"
      className="relative overflow-hidden bg-zinc-950 px-6 py-24 text-white md:px-12 md:py-32 lg:px-16"
    >
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
            Latest Release
          </p>

          <h2 className="mt-4 text-5xl font-black uppercase md:text-7xl">
            Thank <span className="text-yellow-400">You</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Experience Minister J-Y&apos;s Afro Gospel sound and a message
            centered on gratitude, faith, and giving thanks to God.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl md:p-8">

          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-400">
                Minister J-Y
              </p>

              <h3 className="mt-1 text-2xl font-black">
                Thank You
              </h3>
            </div>

            <span className="rounded-full border border-yellow-400/40 px-4 py-2 text-xs font-bold uppercase tracking-wider text-yellow-400">
              Afro Gospel
            </span>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <iframe
              src="https://audiomack.com//embed/ministerjy4/song/thank-you"
              scrolling="no"
              width="100%"
              height="252"
              frameBorder="0"
              title="Minister J-Y - Thank You"
              allow="autoplay"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://audiomack.com/ministerjy4/song/thank-you?share-user-id=208745227"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-yellow-400 px-6 py-3 text-sm font-bold uppercase tracking-wider text-black transition hover:bg-yellow-300"
            >
              Listen on Audiomack
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:border-yellow-400 hover:text-yellow-400"
            >
              Booking & Contact
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
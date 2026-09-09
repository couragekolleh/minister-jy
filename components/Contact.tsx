export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black px-6 py-24 text-white md:px-12 md:py-32 lg:px-16"
    >
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-14">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
                Connect
              </p>

              <h2 className="mt-5 text-5xl font-black uppercase leading-tight md:text-7xl">
                Bring The
                <br />
                <span className="text-yellow-400">
                  Ministry
                </span>
                <br />
                To You.
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
                Connect with Minister J-Y for ministry opportunities,
                appearances, collaborations, and Gospel music engagements.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4">

              <a
                href="https://www.instagram.com/ministerjy?stkn=MTRtMmUzZnJhcXR6OA=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:border-yellow-400/50"
              >
                <span>
                  <span className="block text-xs uppercase tracking-widest text-white/40">
                    Instagram
                  </span>

                  <span className="mt-1 block font-bold">
                    @ministerjy
                  </span>
                </span>

                <span className="text-yellow-400">
                  ↗
                </span>
              </a>

              <a
                href="https://www.tiktok.com/@ministerjy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:border-yellow-400/50"
              >
                <span>
                  <span className="block text-xs uppercase tracking-widest text-white/40">
                    TikTok
                  </span>

                  <span className="mt-1 block font-bold">
                    @ministerjy
                  </span>
                </span>

                <span className="text-yellow-400">
                  ↗
                </span>
              </a>

              <a
                href="https://www.facebook.com/share/19ccdwSwsZ/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:border-yellow-400/50"
              >
                <span>
                  <span className="block text-xs uppercase tracking-widest text-white/40">
                    Facebook
                  </span>

                  <span className="mt-1 block font-bold">
                    Minister J-Y
                  </span>
                </span>

                <span className="text-yellow-400">
                  ↗
                </span>
              </a>

              <a
                href="https://audiomack.com/ministerjy4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:border-yellow-400/50"
              >
                <span>
                  <span className="block text-xs uppercase tracking-widest text-white/40">
                    Audiomack
                  </span>

                  <span className="mt-1 block font-bold">
                    Minister J-Y
                  </span>
                </span>

                <span className="text-yellow-400">
                  ↗
                </span>
              </a>

              <a
                href="https://wa.me/231887234663"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 rounded-full bg-yellow-400 px-7 py-4 text-center text-sm font-black uppercase tracking-wider text-black transition hover:bg-yellow-300"
              >
                Contact on WhatsApp
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
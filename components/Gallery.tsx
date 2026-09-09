import Image from "next/image";

const photos = [
  "/images/minister-jy-1.jpeg",
  "/images/minister-jy-2.jpeg",
  "/images/minister-jy-3.jpeg",
  "/images/minister-jy-4.jpeg",
  "/images/minister-jy-5.jpeg",
  "/images/minister-jy-6.jpeg",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-zinc-950 px-6 py-24 text-white md:px-12 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
              Gallery
            </p>

            <h2 className="mt-4 text-5xl font-black uppercase md:text-7xl">
              Minister <span className="text-yellow-400">J-Y</span>
            </h2>
          </div>

          <p className="max-w-md leading-7 text-white/50">
            Moments from the journey, ministry, music, and life of Liberian
            Afro Gospel artist Minister J-Y.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {photos.map((photo, index) => (
            <div
              key={photo}
              className={`group relative overflow-hidden rounded-3xl bg-zinc-900 ${
                index === 0 || index === 5
                  ? "h-[520px]"
                  : "h-[420px]"
              }`}
            >
              <Image
                src={photo}
                alt={`Minister J-Y gallery photo ${index + 1}`}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition group-hover:opacity-90" />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
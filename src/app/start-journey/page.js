
import Link from "next/link";

const resources = [
  {
    number: "01",
    category: "WATCH",
    duration: "14 MIN",
    title: "Discover Meditation",
    description:
      "Begin with an introduction to meditation and discover its approach to inner peace and balance.",
    embed:
      "https://www.youtube.com/embed/kVYwuG3vJLQ",
    platform: "YouTube",
    action: "Open on YouTube",
    href: "https://www.youtube.com/watch?v=kVYwuG3vJLQ",
  },
  {
    number: "02",
    category: "EXPERIENCE",
    duration: "12 MIN",
    title: "Guided Self-Realization",
    description:
      "Follow a guided meditation and take your first step towards experiencing self-realization.",
    embed:
      "https://www.youtube.com/embed/p_CpyKSorwM?start=79",
    platform: "YouTube",
    action: "Open on YouTube",
    href: "https://www.youtube.com/watch?v=p_CpyKSorwM&t=79s",
  },
  {
    number: "03",
    category: "LISTEN",
    duration: "60 MIN",
    title: "Explore Through Audio",
    description:
      "Listen to the audio introduction and explore the meditation practice at your own pace.",
    embed:
      "https://open.spotify.com/embed/episode/2yWMhrrIJ83pRcoN1bQfWY",
    platform: "Spotify",
    action: "Open on Spotify",
    href: "https://open.spotify.com/episode/2yWMhrrIJ83pRcoN1bQfWY",
  },
];

export default function StartJourneyPage() {
  return (
    <main className="min-h-screen bg-[#F7F8ED] text-neutral-900">
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-neutral-900/5"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-neutral-900/5"
        />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            MEDITATION TREASURES
          </p>

          <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Your journey to
            <span className="mt-2 block italic text-neutral-500">
              inner peace begins here.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
            You don’t need to know where to begin. Explore these simple
            resources, take your first step, and discover a practice that
            invites more awareness, balance, and peace into everyday life.
          </p>

          <a
            href="#getting-started"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-neutral-900 px-7 py-4 text-sm font-medium text-white transition hover:bg-neutral-700"
          >
            Explore Your Starting Point
            <span aria-hidden="true" className="ml-3">
              ↓
            </span>
          </a>
        </div>
      </section>

      {/* Meditation Resources */}
      <section
        id="getting-started"
        className="px-5 pb-20 sm:px-8 sm:pb-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
                THREE WAYS TO BEGIN
              </p>

              <h2 className="font-serif text-3xl font-medium sm:text-4xl">
                Find your first step.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-neutral-600">
              Watch, listen, or experience a guided meditation.
              Choose the starting point that feels right for you.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <article
                key={resource.number}
                className="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-neutral-200/80 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Embedded player */}
                <div className="overflow-hidden bg-neutral-100">
                  <iframe
                    src={resource.embed}
                    title={resource.title}
                    className={
                      resource.platform === "Spotify"
                        ? "block h-[352px] w-full"
                        : "block aspect-video w-full"
                    }
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    style={{ border: 0 }}
                  />
                </div>

                {/* Card content */}
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <div className="mb-7 flex items-center justify-between">
                    <span className="font-serif text-3xl text-neutral-300">
                      {resource.number}
                    </span>

                    <span className="rounded-full bg-[#F2F3E9] px-3 py-2 text-xs font-semibold tracking-wider text-neutral-600">
                      {resource.duration}
                    </span>
                  </div>

                  <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-neutral-500">
                    {resource.category}
                  </p>

                  <h3 className="mb-4 font-serif text-2xl font-medium leading-snug">
                    {resource.title}
                  </h3>

                  <p className="mb-7 flex-1 text-sm leading-7 text-neutral-600">
                    {resource.description}
                  </p>

                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border-t border-neutral-200 pt-5 text-sm font-semibold transition-colors hover:text-neutral-500"
                  >
                    {resource.action}
                    <span
                      aria-hidden="true"
                      className="text-lg transition-transform group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-3xl border border-neutral-200 bg-white p-7 sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              YOUR GUIDE TO THE PRACTICE
            </p>

            <h2 className="font-serif text-3xl font-medium sm:text-4xl">
              Something to take with you.
            </h2>

            <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base">
              Our Meditation Treasures brochure is in preparation.
              It will be available here soon to help you explore
              the practice further.
            </p>
          </div>

          <div className="shrink-0">
            <span className="inline-flex rounded-full border border-neutral-300 px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">
              Brochure · Coming Soon
            </span>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="text-sm text-neutral-600 underline underline-offset-4 transition hover:text-neutral-950"
          >
            Return to Homepage
          </Link>
        </div>
      </section>
    </main>
  );
}

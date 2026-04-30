export default function Home() {
  return (
    <section className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
          Superior Restoration Services
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
          Homepage is live.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-200">
          This root Next.js route is rendering from <code>app/page.tsx</code>.
          Vercel should serve this page when the project root is set to the
          folder containing <code>package.json</code>.
        </p>
      </div>
    </section>
  );
}

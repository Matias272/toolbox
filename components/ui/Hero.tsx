export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
      <div className="mx-auto flex flex-col items-center justify-around max-w-6xl px-6">
        <div className=" max-w-3xl text-center space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-balance">
            Build modern web apps with absolute speed.
          </h1>

          <p className="text-lg text-slate-300">
            Create high-performance full-stack applications with modular
            components, dynamic client interactivity, and accessible UI
            defaults.
          </p>
        </div>
      </div>
    </section>
  );
}

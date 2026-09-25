import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <h3 className="text-lg font-bold">Toolbox</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            ipsam.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">
            Legal
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-slate-200 p-6 text-center text-xs text-slate-400 max-w-6xl mx-auto">
        © {year} Toolbox
      </div>
    </footer>
  );
}

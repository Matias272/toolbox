"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center px-6 relative overflow-hidden">
      <div className="max-w-md w-full text-center relative z-10">
        <p className="text-sm font-semibold tracking-widest text-indigo-400 uppercase mb-2">
          404 Error
        </p>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Page not found
        </h1>

        <p className="text-slate-400 text-base leading-relaxed mb-8">
          Sorry, we couldnt find the page youre looking for. It might have been
          moved or deleted.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 transition-colors rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

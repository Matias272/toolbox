// app/gallery/error.tsx
"use client"; // Error components MUST be Client Components

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GalleryError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an analytics or logging tool if needed
    console.error("Gallery Error caught by Next.js UI boundary:", error);
  }, [error]);

  return (
    <div className="p-6 text-center border border-red-200 rounded-lg bg-red-50 my-4">
      <h2 className="text-lg font-bold text-red-700">Something went wrong!</h2>
      <p className="text-sm text-red-600 mt-1 mb-4">{error.message}</p>

      {/* Clicking reset attempts to re-render the page segment */}
      <button
        onClick={() => reset()}
        className="px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        Try Again
      </button>
    </div>
  );
}

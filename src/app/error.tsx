"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
      <div className="space-y-6 max-w-lg">
        <h1 className="text-9xl font-serif font-bold text-zinc-200">500</h1>
        <div className="space-y-2">
          <h2 className="text-3xl font-serif text-zinc-900 leading-tight">
            Something went wrong!
          </h2>
          <p className="text-zinc-500 font-light leading-relaxed">
            We apologize for the inconvenience. Our team has been notified of
            this issue.
          </p>
        </div>
        <div className="pt-8 flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-all shadow-xl"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-zinc-100 text-zinc-900 px-8 py-4 rounded-xl font-bold hover:bg-zinc-200 transition-all"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

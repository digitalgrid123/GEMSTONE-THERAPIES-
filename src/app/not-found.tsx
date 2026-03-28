import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
      <div className="space-y-6 max-w-lg">
        <h1 className="text-9xl font-serif font-bold text-zinc-200">404</h1>
        <div className="space-y-2">
          <h2 className="text-3xl font-serif text-zinc-900 leading-tight">
            Page Not Found
          </h2>
          <p className="text-zinc-500 font-light leading-relaxed">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        <div className="pt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-zinc-900 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-black transition-all shadow-xl"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

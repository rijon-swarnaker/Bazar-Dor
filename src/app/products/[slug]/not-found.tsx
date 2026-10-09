
import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-8xl font-bold text-[#C10007]">404</p>

      <h1 className="mt-4 text-2xl font-bold text-gray-900">
        পণ্যটি খুঁজে পাওয়া যায়নি!
      </h1>

      <p className="mt-3 max-w-md text-gray-500">
        দুঃখিত, আপনি যে পণ্যটি খুঁজছেন সেটি পাওয়া যায়নি
        অথবা পণ্যটি আর উপলব্ধ নেই।
      </p>

      <Link
        href="/"
        className="mt-6 rounded-xl bg-[#C10007] px-6 py-3 font-semibold text-white transition hover:bg-red-800"
      >
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}



import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[65vh] items-center justify-center bg-[#FAFCFA] px-4 py-12">
      <div className="w-full max-w-xl text-center">
        {/* Clean 404 Illustration */}
        <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-green-50 ring-1 ring-green-100 sm:h-32 sm:w-32">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            className="h-20 w-20 sm:h-24 sm:w-24"
            aria-hidden="true"
          >
            <circle cx="50" cy="50" r="43" fill="#E4F5EA" />
            <path
              d="M29 25H20L27 58C28 63 31 66 36 66H62C67 66 70 63 71 58L77 36H30"
              stroke="#078A45"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="38" cy="76" r="4" fill="#078A45" />
            <circle cx="63" cy="76" r="4" fill="#078A45" />
            <path
              d="M47 39L53 45L47 51"
              stroke="#C10007"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C10007]">
          Page Not Found
        </p>

        <h1 className="mt-3 text-7xl font-black tracking-tight text-[#078A45] sm:text-8xl">
          4<span className="text-[#C10007]">0</span>4
        </h1>

        <h2 className="mt-4 text-xl font-bold text-gray-900 sm:text-2xl">
          পেজটি খুঁজে পাওয়া যায়নি!
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
          দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি।
          সঠিক জায়গায় ফিরে যেতে নিচের বাটনে ক্লিক করুন।
        </p>

        {/* Home Button */}
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="m3 10 9-7 9 7" />
            <path d="M5 9v12h14V9M9 21v-7h6v7" />
          </svg>
          হোম পেজে ফিরে যান
        </Link>

        <div className="mx-auto mt-10 flex max-w-sm items-center gap-3">
          <span className="h-px flex-1 bg-green-100" />
          <Link
            href="/"
            className="text-lg font-extrabold tracking-tight"
            aria-label="BazarDor Home"
          >
            <span className="text-green-800">Bazar</span>
            <span className="text-[#C10007]">Dor</span>
          </Link>
          <span className="h-px flex-1 bg-green-100" />
        </div>

        <p className="mt-2 text-xs text-gray-500">
          বাংলাদেশের দৈনিক বাজারদর
        </p>
      </div>
    </main>
  );
}
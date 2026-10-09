
import Link from "next/link";
import { FaArrowLeft, FaSearch } from "react-icons/fa";

export default function CategoryNotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-[#F0F5F0] px-4 py-12">
      <div className="w-full max-w-lg rounded-3xl border border-[#DDE5DD] bg-white px-6 py-12 text-center shadow-sm sm:px-10">

        {/* Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[#FCE8E8] text-[#C10007]">
          <FaSearch size={32} />
        </div>

        {/* Error Code */}
        <p className="mt-6 text-7xl font-extrabold tracking-tight text-[#C10007]">
          404
        </p>

        {/* Title */}
        <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
          ক্যাটাগরি খুঁজে পাওয়া যায়নি!
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-gray-500 sm:text-base">
          দুঃখিত! আপনি যে ক্যাটাগরিটি খুঁজছেন সেটি পাওয়া যায়নি।
          ক্যাটাগরিটি মুছে ফেলা হতে পারে অথবা লিংকটি ভুল হতে পারে।
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-red-800"
        >
          <FaArrowLeft size={14} />
          হোম পেজে ফিরে যান
        </Link>

        {/* Footer */}
        <p className="mt-6 text-xs text-gray-400">
          Bazardor — প্রতিদিনের বাজারদর জানুন
        </p>
      </div>
    </div>
  );
}


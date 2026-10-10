"use client";

import { useSession, signOut } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const UserInfoPage = () => {
  const { data, isPending } = useSession();
  const user = data?.user;

  if (isPending) {
    return (
      <div className="flex min-h-12.5 w-40 animate-pulse items-center justify-between gap-2 rounded-2xl border border-[#25352A]/10 bg-[#F1F5F1] px-3 py-2 md:w-70">
        {/* Profile Image Skeleton */}
        <div className="h-8 w-11 shrink-0 rounded-full bg-gray-300" />

        {/* User Name Skeleton */}
        <div className="h-4 w-28 flex-1 rounded-md bg-gray-300" />

        {/* Dropdown Icon Skeleton */}
        <div className="h-4 w-4 shrink-0 rounded-sm bg-gray-300" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Link href="/signin" className="btn btn-ghost rounded-2xl font-bold">
          সাইন ইন
        </Link>

        <Link
          href="/signup"
          className="btn rounded-2xl border-0 bg-[#05893E] font-bold text-white hover:bg-[#047333]"
        >
          সাইন আপ
        </Link>
      </div>
    );
  }
  const HandleSignOut = async () => {
    const { error } = await signOut();

    if (error) {
      toast.error("সাইন আউট করা যায়নি!");
      return;
    }

    toast.success("সফলভাবে সাইন আউট হয়েছে!");
    redirect('/')
  };

  return (
    <div className="dropdown dropdown-end">
      {/* Navbar Profile */}
      <button
        type="button"
        tabIndex={0}
        className="flex min-h-12.5 w-40 md:w-70 items-center justify-between gap-2 rounded-2xl hover:border border-[#25352A] bg-[#F1F5F1] px-3 py-2 transition-colors hover:bg-[#E8F0E9]"
      >
        {user.image ? (
          <Image
            src={user.image}
            alt={user.name || "User"}
            height={800}
            width={800}
            className="h-8 w-11 shrink-0 rounded-full object-cover"
          />
        ) : (
          <span className="flex h-8 w-11 shrink-0 items-center justify-center rounded-full bg-[#05893E] text-lg font-bold uppercase text-white">
            {user.name?.trim().charAt(0) || "U"}
          </span>
        )}

        <span className=" flex-1 truncate text-left text-base font-medium text-[#303A33]">
          {user.name || "User"}
        </span>

        <svg
          className="h-4 w-4 shrink-0 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.22 7.22a.75.75 0 011.06 0L10 10.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 8.28a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <ul
        tabIndex={0}
        className="menu dropdown-content z-100 mt-2 w-57  gap-0 rounded-3xl border border-[#DDE6DF] bg-[#FBFCFB] p-3 shadow-[0_12px_24px_rgba(24,45,30,0.12)]"
      >
        {/* User Name & Email */}
        <li className="pointer-events-none">
          <div className="flex flex-col items-start gap-1 px-3 py-2 hover:bg-transparent">
            <h3 className="w-full wraps-break-words text-base font-extrabold text-[#A0A7A1]">
              {user.name || "User"}
            </h3>

            <p className="w-full break-all text-sm text-[#B5BCB7]">
              {user.email}
            </p>
          </div>
        </li>

        <li className="mt-2">
          <Link
            href="/profile"
            className="gap-3 rounded-xl px-3 py-2.5 text-lg font-medium text-[#26332A] hover:bg-[#EDF4EE]"
          >
            <span className="text-lg">👤</span>
            আমার প্রোফাইল
          </Link>
        </li>

        <li className="mt-1">
          <button
            type="button"
            onClick={HandleSignOut}
            className="gap-3 rounded-xl px-3 py-2.5 text-lg font-medium text-[#F04444] hover:bg-red-50"
          >
            <span className="text-lg">↩️</span>
            সাইন আউট
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserInfoPage;

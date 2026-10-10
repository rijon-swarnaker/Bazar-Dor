"use client";

import { useSession, signOut, updateUser } from "@/lib/auth-client";

import toast from "react-hot-toast";
import Image from "next/image";
import { UserRound } from "lucide-react";
import ProfileSkeleton from "@/components/Skeleton/ProfileSkeleton";
import { redirect } from "next/navigation";

export default function ProfilePage() {
  const { data: session, isPending } = useSession();
  const user = session?.user;
  if (isPending) {
    return <ProfileSkeleton />;
  }

  async function handleUpdateName(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await updateUser({
      ...userData,
    });

    if (data) {
      toast.success("আপনার নাম পরিবর্তন সফল হয়েছে");
    }
    if (error) {
      toast.error(error.message || "আপনার নাম পরিবর্তন ব্যর্থ হয়েছে!");
    }
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

  const initial = user?.name?.trim().charAt(0).toUpperCase() || "U";

  return (
    <main className="min-h-screen bg-[#f0f5f1] px-4 py-8 sm:px-8 sm:py-10">
      <div className="mx-auto w-full max-w-265">
        {/* Heading */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[#171b18] sm:text-[38px]">
            আমার প্রোফাইল
          </h1>

          <p className="mt-1 text-lg text-[#78817b]">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </header>

        {/* User Information Card */}
        <section className="mb-9 rounded-3xl border border-[#dfe6e0] bg-[#fbfdfb] p-5 sm:p-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex min-w-0 items-center gap-5">
              {/* Profile Image */}
              {user?.image ? (
                <Image
                  src={user.image}
                  alt={user.name || "User"}
                  width={800}
                  height={800}
                  className="h-20 w-20 shrink-0 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#05893e] text-3xl font-bold text-white">
                  {initial}
                </div>
              )}

              {/* Name and Email */}
              <div className="min-w-0">
                <h2 className="wrap-break-words text-xl font-bold text-[#171b18] sm:text-[27px]">
                  {user?.name}
                </h2>

                <p className="mt-1 break-all text-base text-[#78817b] sm:text-xl">
                  {user?.email}
                </p>
              </div>
            </div>

            {/* Sign Out Button */}
            <button
              type="button"
              onClick={HandleSignOut}
              className="btn h-14 rounded-xl border border-red-500 bg-transparent px-5 text-lg font-medium text-red-500 hover:border-red-600 hover:bg-red-50"
            >
              সাইন আউট
            </button>
          </div>
        </section>

        {/* Update Name Card */}
        <section className="rounded-3xl border border-[#dfe6e0] bg-[#fbfdfb] p-5 sm:p-7">
          <div className="mb-5 flex items-center gap-3">
            <UserRound size={27} className="text-[#05893e]" />

            <h2 className="text-2xl font-bold text-[#171b18]">
              নাম হালনাগাদ করুন
            </h2>
          </div>

          <form onSubmit={handleUpdateName}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-2 block text-xl font-medium text-[#171b18]"
              >
                নাম
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="আপনার নাম লিখুন"
                autoComplete="name"
                required
                maxLength={100}
                className="input input-bordered h-14.5 w-full rounded-xl border-[#cbd3cd] bg-transparent px-4.25 text-base focus:border-[#05893e] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="btn h-14.5 rounded-xl border-[#05893e] bg-[#05893e] px-6 text-lg font-bold text-white shadow-md hover:border-[#047532] hover:bg-[#047532]"
            >
              নাম হালনাগাদ করুন
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

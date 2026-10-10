"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { signIn, signUp } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  interface UserProps {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries()) as unknown as UserProps;

    const { confirmPassword, ...userData } = user;

    if (user.password !== confirmPassword) {
      setError("পাসওয়ার্ড মিলছে না!");
      return;
    }

    const { data, error } = await signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
    });
    if(data){
      toast.success('অ্যাকাউন্টি সাইন আপ হয়েছে। স্বাগতম')
      redirect("/");
    }

    if (error) {
      toast.error(error.message || "অ্যাকাউন্ট সাইন আপ করা যায়নি!");
    }
  }
  const HandleGoogleSignIn = async () => {
  const { error } = await signIn.social({
    provider: "google",
    callbackURL: "/?auth=success",
  });

  if (error) {
    toast.error(error.message || "Google দিয়ে লগইন করা যায়নি!");
  }
};

const HandleGithubSignIn = async () => {
  const { error } = await signIn.social({
    provider: "github",
    callbackURL: "/?auth=success",
  });

  if (error) {
    toast.error(error.message || "GitHub দিয়ে লগইন করা যায়নি!");
  }
};

  return (
    <main className="min-h-screen bg-[#f0f5f1] px-4 py-6 sm:py-8">
      <div className="mx-auto flex w-full max-w-149 flex-col items-center">
        {/* Heading */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold leading-tight text-[#171b18] sm:text-[42px]">
            অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="mt-2 text-base leading-relaxed text-[#78817b] sm:text-[19px]">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </header>

        {/* Sign Up Card */}
        <div className="card w-full rounded-[24px] border border-[#dfe6e0] bg-[#fbfdfb] shadow-none">
          <div className="card-body gap-0 p-6 sm:p-8.5">
            <form onSubmit={handleSubmit}>
              {/* Name */}
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
                  placeholder="যেমন: রহিম উদ্দিন"
                  autoComplete="name"
                  required
                  className="input input-bordered h-14.5 w-full rounded-xl border-[#cbd3cd] bg-transparent px-4.25 text-base focus:border-[#07883f] focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-2 block text-xl font-medium text-[#171b18]"
                >
                  ইমেইল
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="input input-bordered h-14.5 w-full rounded-xl border-[#cbd3cd] bg-transparent px-4.25 text-base focus:border-[#07883f] focus:outline-none"
                />
              </div>

              {/* Password */}
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="mb-2 block text-xl font-medium text-[#171b18]"
                >
                  পাসওয়ার্ড
                </label>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="কমপক্ষে ৮ অক্ষর"
                    autoComplete="new-password"
                    minLength={8}
                    required
                    className="input input-bordered h-14.5 w-full rounded-xl border-[#cbd3cd] bg-transparent px-4.25 pr-12 text-base focus:border-[#07883f] focus:outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "পাসওয়ার্ড লুকান" : "পাসওয়ার্ড দেখুন"
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-500"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="mb-5.5">
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-xl font-medium text-[#171b18]"
                >
                  পাসওয়ার্ড নিশ্চিত করুন
                </label>

                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="আবার লিখুন"
                    autoComplete="new-password"
                    minLength={8}
                    required
                    className="input input-bordered h-14.5 w-full rounded-xl border-[#cbd3cd] bg-transparent px-4.25 pr-12 text-base focus:border-[#07883f] focus:outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label={
                      showConfirmPassword
                        ? "পাসওয়ার্ড লুকান"
                        : "পাসওয়ার্ড দেখুন"
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-500"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div
                  role="alert"
                  className="alert mb-4 border-red-200 bg-red-50 text-sm text-red-600"
                >
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="btn h-14.5 min-h-14.5 w-full rounded-xl border-[#07883f] bg-[#07883f] text-xl font-bold text-white shadow-md hover:border-[#067636] hover:bg-[#067636]"
              >
                অ্যাকাউন্ট তৈরি করুন
              </button>
            </form>

            {/* Divider */}
            <div className="my-5.75 flex items-center gap-5.5">
              <span className="h-0.75 flex-1 bg-[#e2e7e3]" />

              <span className="whitespace-nowrap text-base">অথবা</span>

              <span className="h-0.75 flex-1 bg-[#e2e7e3]" />
            </div>

            {/* Social Signup */}
            <div className="grid grid-cols-1 gap-2.75 sm:grid-cols-2">
              {/* Google */}
              <button
                type="button"
                className="btn h-14.5 min-h-14.5 rounded-xl border-[#27312a] bg-transparent px-3 text-base font-bold leading-6 text-black hover:border-[#07883f] hover:bg-[#f0f5f1]"
                onClick={HandleGoogleSignIn}
              >
                <svg
                  viewBox="0 0 48 48"
                  className="h-5.25 w-5.25 shrink-0"
                  aria-hidden="true"
                >
                  <path
                    fill="#4285F4"
                    d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.8 6.1-15Z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.6-5.1c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20 20 0 0 0 24 44Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M12.6 27.6a12 12 0 0 1 0-7.2v-5.3H5.8a20 20 0 0 0 0 17.8l6.8-5.3Z"
                  />
                  <path
                    fill="#EA4335"
                    d="M24 12c3 0 5.7 1 7.8 3l5.8-5.8A19.5 19.5 0 0 0 24 4 20 20 0 0 0 5.8 15.1l6.8 5.3C14.2 15.6 18.7 12 24 12Z"
                  />
                </svg>

                <span>
                  Google দিয়ে
                  <br />
                  চালিয়ে যান
                </span>
              </button>

              {/* GitHub */}
              <button
                type="button"
                className="btn h-14.5 min-h-14.5 rounded-xl border-[#27312a] bg-transparent px-3 text-base font-bold leading-6 text-black hover:border-[#07883f] hover:bg-[#f0f5f1]"
                onClick={HandleGithubSignIn}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.07c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3.01 0 4.29-2.62 5.23-5.11 5.51.4.35.75 1.03.75 2.08V22c0 .29.2.63.76.52A11.1 11.1 0 0 0 12 .9Z" />
                </svg>

                <span>
                  GitHub দিয়ে
                  <br />
                  চালিয়ে যান
                </span>
              </button>
            </div>

            {/* Sign In Link */}
            <p className="mt-5.5 text-center text-base text-[#737d76] sm:text-lg">
              অ্যাকাউন্ট আছে?{" "}
              <Link
                href="/signin"
                className="text-[#07883f] underline underline-offset-4 hover:text-[#067636]"
              >
                সাইন ইন করুন
              </Link>
            </p>
          </div>
        </div>

        {/* Back Home */}
        <Link
          href="/"
          className="mt-8 text-base text-[#77817a] underline underline-offset-4 hover:text-[#07883f] sm:text-lg"
        >
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
}

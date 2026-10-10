"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { signIn } from "@/lib/auth-client";
import toast from "react-hot-toast";

interface UserProps {
  email: string;
  password: string;
}

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as unknown as UserProps;

    const { data, error } = await signIn.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      toast.success("সফলভাবে সাইন ইন হয়েছে।");
    }

    if (error) {
      toast.error(error.message || "সাইন ইন ব্যর্থ হয়েছে!");
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
    <main className=" bg-[#f0f5f1] px-4 py-10 sm:py-4 container mx-auto">
      <div className="mx-auto flex w-full max-w-145 flex-col items-center">
        {/* Heading */}
        <header className="mb-2 text-center">
          <h1 className="text-4xl font-bold leading-tight text-[#171b18] sm:text-[42px]">
            সাইন ইন
          </h1>

          <p className=" text-base leading-relaxed text-[#78817b] sm:text-[19px]">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </header>

        {/* Sign In Card */}
        <div className="card w-full rounded-[24px] border border-[#dfe6e0] bg-[#fbfdfb] shadow-none">
          <div className="card-body gap-0 p-6 sm:p-2">
            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className=" block text-xl font-medium text-[#171b18]"
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
                  className="input input-bordered h-13 w-full rounded-xl border-[#cbd3cd] bg-transparent px-4 text-base text-[#171b18] outline-none focus:border-[#07883f] focus:outline-none"
                />
              </div>

              {/* Password */}
              <div className="mb-3">
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
                    autoComplete="current-password"
                    minLength={8}
                    required
                    className="input input-bordered h-13 w-full rounded-xl border-[#cbd3cd] bg-transparent px-4 pr-12 text-base text-[#171b18] outline-none focus:border-[#07883f] focus:outline-none"
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

              {/* Submit */}
              <button
                type="submit"
                className="btn  w-full rounded-xl border-[#07883f] bg-[#07883f] text-xl font-bold text-white shadow-md hover:border-[#067636] hover:bg-[#067636]"
              >
                সাইন ইন
              </button>
            </form>

            {/* Divider */}
            <div className="my-4 flex items-center gap-4">
              <span className="h-0.75 flex-1 bg-[#e2e7e3]" />

              <span className="whitespace-nowrap text-base text-[#171b18]">
                অথবা
              </span>

              <span className="h-0.75 flex-1 bg-[#e2e7e3]" />
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Google */}
              <button
                type="button"
                onClick={HandleGoogleSignIn}
                className="btn h-14 min-h-14.5 rounded-xl border-[#27312a] bg-transparent px-3 text-base font-bold leading-6 text-black hover:border-[#07883f] hover:bg-[#f0f5f1]"
              >
                <svg
                  viewBox="0 0 48 48"
                  className="h-5 w-5 shrink-0"
                  aria-hidden="true"
                >
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z"
                    transform="translate(1 4)"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.76 7.18l7.73 6C44.42 37.96 46.98 31.87 46.98 24.55Z"
                    transform="translate(0 0)"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59a14.4 14.4 0 0 1 0-9.18l-7.98-6.19a23.9 23.9 0 0 0 0 21.56l7.98-6.19Z"
                    transform="translate(1 4)"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.15 1.45-4.92 2.3-8.18 2.3-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z"
                    transform="translate(1 0)"
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
                onClick={HandleGithubSignIn}
                className="btn h-14 min-h-14 rounded-xl border-[#27312a] bg-transparent px-3 text-base font-bold leading-6 text-black hover:border-[#07883f] hover:bg-[#f0f5f1]"
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

            {/* Sign Up */}
            <p className="mt-3 text-center text-base text-[#737d76] sm:text-lg">
              অ্যাকাউন্ট নেই?{" "}
              <Link
                href="/signup"
                className="text-[#07883f] underline underline-offset-4 hover:text-[#067636]"
              >
                সাইন আপ করুন
              </Link>
            </p>
          </div>
        </div>

        {/* Back Home */}
        <Link
          href="/"
          className="mt-3 text-base text-[#77817a] underline underline-offset-4 hover:text-[#07883f] sm:text-lg"
        >
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
}

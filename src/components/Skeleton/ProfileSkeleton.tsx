"use client";

export default function ProfileSkeleton() {
  return (
    <main className="min-h-screen animate-pulse bg-[#f0f5f1] px-4 py-8 sm:px-8 sm:py-10">
      <div className="mx-auto w-full max-w-[1060px]">
        {/* Heading Skeleton */}
        <header className="mb-8">
          <div className="h-10 w-56 rounded-lg bg-gray-200 sm:h-12 sm:w-72" />

          <div className="mt-3 h-6 w-64 max-w-full rounded-md bg-gray-200" />
        </header>

        {/* User Information Card Skeleton */}
        <section className="mb-9 rounded-3xl border border-[#dfe6e0] bg-[#fbfdfb] p-5 sm:p-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex min-w-0 items-center gap-5">
              {/* Profile Image */}
              <div className="h-20 w-20 shrink-0 rounded-full bg-gray-200" />

              {/* Name and Email */}
              <div className="min-w-0 flex-1 space-y-3">
                <div className="h-7 w-40 max-w-full rounded-md bg-gray-200 sm:h-8 sm:w-56" />

                <div className="h-5 w-48 max-w-full rounded-md bg-gray-200 sm:h-6 sm:w-64" />
              </div>
            </div>

            {/* Sign Out Button */}
            <div className="h-14 w-32 rounded-xl bg-gray-200" />
          </div>
        </section>

        {/* Update Name Card Skeleton */}
        <section className="rounded-3xl border border-[#dfe6e0] bg-[#fbfdfb] p-5 sm:p-7">
          {/* Section Heading */}
          <div className="mb-5 flex items-center gap-3">
            <div className="h-[27px] w-[27px] shrink-0 rounded-md bg-gray-200" />

            <div className="h-8 w-52 max-w-full rounded-md bg-gray-200 sm:w-64" />
          </div>

          {/* Form Skeleton */}
          <div>
            {/* Label */}
            <div className="mb-2 h-7 w-16 rounded-md bg-gray-200" />

            {/* Input */}
            <div className="mb-5 h-[58px] w-full rounded-xl border border-[#cbd3cd] bg-gray-100" />

            {/* Submit Button */}
            <div className="h-[58px] w-44 rounded-xl bg-gray-200" />
          </div>
        </section>
      </div>
    </main>
  );
}
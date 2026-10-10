import React from "react";

const loading = () => {
  return (
    <div className="bg-[#FAFCFA] p-4 rounded-2xl animate-pulse">
      {" "}
      {/* Card Header */}{" "}
      <div className="flex gap-4 items-center pb-3">
        {" "}
        {/* Image Skeleton */}{" "}
        <div className="h-14 w-14 rounded-2xl bg-gray-200" />{" "}
        {/* Name & Unit Skeleton */}{" "}
        <div className="flex-1 space-y-2">
          {" "}
          <div className="h-5 w-3/4 rounded-md bg-gray-200" />{" "}
          <div className="h-3 w-1/3 rounded-md bg-gray-200" />{" "}
        </div>{" "}
      </div>{" "}
      {/* Price Label */}{" "}
      <div className="pt-2 pb-2">
        {" "}
        <div className="h-4 w-20 rounded-md bg-gray-200" />{" "}
      </div>{" "}
      {/* Price & Change Skeleton */}{" "}
      <div className="flex justify-between items-center">
        {" "}
        <div className="flex items-center gap-2">
          {" "}
          <div className="h-6 w-16 rounded-md bg-gray-200" />{" "}
          <div className="h-4 w-8 rounded-md bg-gray-200" />{" "}
        </div>{" "}
        <div className="h-6 w-16 rounded-2xl bg-gray-200" />{" "}
      </div>{" "}
      {/* Cards Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index}>
                <div className="border border-gray-100 rounded-xl p-4">
                  {/* Image */}
                  <div className="w-full h-40 rounded-lg bg-gray-200 animate-pulse" />

                  {/* Name */}
                  <div className="w-3/4 h-5 rounded-md bg-gray-200 animate-pulse mt-4" />

                  {/* Unit */}
                  <div className="w-1/3 h-4 rounded-md bg-gray-200 animate-pulse mt-2" />

                  {/* Price */}
                  <div className="w-1/2 h-6 rounded-md bg-gray-200 animate-pulse mt-4" />

                  {/* Percentage */}
                  <div className="w-20 h-6 rounded-full bg-gray-200 animate-pulse mt-3" />
                </div>
              </div>
            ))}
          </div>
    </div>
  );
};

export default loading;

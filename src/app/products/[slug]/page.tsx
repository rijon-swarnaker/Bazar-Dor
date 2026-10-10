import { CardItemsType } from "@/Types/CardItemType";
import { Breadcrumbs } from "@heroui/react";
import { notFound } from "next/navigation";

import React from "react";
interface ProductDetailsProps {
  params: Promise<{ slug: number }>;
}

const ProductDetailsPage = async ({ params }: ProductDetailsProps) => {
  const { slug } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${slug}`,
  );
  if (!res.ok) {
    notFound();
  }
  const data: CardItemsType = await res.json();
  console.log(data);

  const max = Math.max(...data.markets.map((m) => m.max));
  const min = Math.min(...data.markets.map((n) => n.min));
  const avg =
    data.markets.reduce((total, m) => total + (m.min + m.min) / 2, 0) /
    data.markets.length;

  console.log(avg);
  console.log(max);
  console.log(min);

  return (
    <div className="bg-[#ADB2AE]/10">
      <div className="container mx-auto py-7 ">
        {/* Breadcrumbs */}
        <div className="">
          <Breadcrumbs>
            <Breadcrumbs.Item href="/">হোম</Breadcrumbs.Item>
            <Breadcrumbs.Item href={`/category/${data.category}`}>
              {data.categoryNameBn}
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>{data.nameBn}</Breadcrumbs.Item>
          </Breadcrumbs>
        </div>
        <div>
          <div className="flex justify-between items-center bg-white p-3 rounded-2xl mt-5 px-5">
            {/* header left */}
            <div className="flex items-center gap-3  ">
              {/* img */}
              <div>
                <span className="text-5xl p-2 bg-[#F0F5F0] rounded-2xl">
                  {data.image}
                </span>
              </div>
              {/* items name */}
              <div>
                <h2 className="text-2xl font-bold mt-2">{data.nameBn}</h2>
                <span className="font-light  text-[#818d81] ">
                  {data.unit === "kg"
                    ? "প্রতি কেজি"
                    : data.unit === "litre"
                      ? "প্রতি লিটার"
                      : data.unit === "dozen"
                        ? "প্রতি ডজন"
                        : data.unit}{" "}
                  . {data.categoryNameBn}
                </span>
                <p className="mb-1 ">
                  {data.change.dir === "up" ? (
                    <span className="text-[#ADB2AE]">
                      গতকালের তুলনায় আজ দাম
                      <span className="font-semibold text-[#768679] text-[18px] ">
                        {" "}
                        বেড়েছে
                      </span>{" "}
                      {Number(data.change.pct).toFixed(1)}%
                    </span>
                  ) : data.change.dir === "down" ? (
                    <span className="text-[#ADB2AE]">
                      গতকালের তুলনায় আজ দাম
                      <span className="font-semibold text-[#768679] text-[18px] ">
                        {" "}
                        কমেছে{" "}
                      </span>{" "}
                      {Math.abs(Number(data.change.pct)).toFixed(1)}%
                    </span>
                  ) : (
                    <span>
                      গতকালের তুলনায় আজ দাম
                      <span className="font-semibold text-[#768679] text-[18px] ">
                        {" "}
                        অপরিবর্তিত{" "}
                      </span>{" "}
                      {Math.abs(Number(data.change.pct)).toFixed(1)}%
                    </span>
                  )}
                </p>
              </div>
            </div>
            {/* header right */}
            <div className="text-center p-3 bg-[#ADB2AE]/10 rounded-2xl ">
              <p className="text-[#818d81] font-light">আজকের দাম</p>
              <p className="text-3xl font-semibold">{data.today}</p>
              <span className="font-light  text-[#818d81] ">
                {data.unit === "kg"
                  ? "টাকা/কেজি"
                  : data.unit === "litre"
                    ? "টাকা/লিটার"
                    : data.unit === "dozen"
                      ? "টাকা/ডজন"
                      : data.unit}{" "}
              </span>
              <p className="">
                {data.change.dir === "up" ? (
                  <span className="text-red-600">
                    ▲ {Number(data.change.pct).toFixed(1)}%
                  </span>
                ) : data.change.dir === "down" ? (
                  <span className="text-green-600">
                    ▼ {Math.abs(Number(data.change.pct)).toFixed(1)}%
                  </span>
                ) : (
                  <span>— {Math.abs(Number(data.change.pct)).toFixed(1)}%</span>
                )}
              </p>
            </div>
          </div>
        </div>
        {/* ------------------------------- */}
        <div className="p-4 bg-white mt-6 rounded-2xl">
          <div>
            <h2 className="text-[20px] font-bold">দামের সারসংক্ষেপ</h2>
          </div>
          <div className="flex  gap-4 mt-4 ">
            <div className="p-4 border border-base-300 rounded-2xl w-full ">
              <p className="text-[#94a297]">সর্বনিম্ন দাম</p>
              <p className="text-green-600">
                <span className="text-2xl font-bold">{min}</span> টাকা
              </p>
              <p className="text-[#94a297]">সবচেয়ে কম দামের বাজার</p>
            </div>
            <div className="p-4 border border-base-300 rounded-2xl w-full ">
              <p className="text-[#94a297]">সর্বাধিক দাম</p>
              <p className="text-red-700">
                <span className="text-2xl font-bold">{min}</span> টাকা
              </p>
              <p className="text-[#94a297]">সবচেয়ে বেশি দামের বাজার</p>
            </div>
            <div className="p-4 border border-base-300 rounded-2xl w-full">
              <p className="text-[#94a297] ">গড় দাম</p>
              <p className="text-green-700">
                <span className="text-2xl font-bold">{min}</span> টাকা
              </p>
              <p className="text-[#94a297] ">
                {data.unit === "kg"
                  ? "প্রতি কেজি"
                  : data.unit === "litre"
                    ? "প্রতি লিটার"
                    : data.unit === "dozen"
                      ? "প্রতি ডজন"
                      : data.unit}{" "}
                -এর হিসাবে
              </p>
            </div>
          </div>
          {/* ---------------Table--------------------------- */}
          <div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              {/* Table Header */}
              <div className="border-b border-gray-200 px-5 py-5 sm:px-6">
                <h2 className="text-xl font-bold text-gray-900">
                  বাজারভিত্তিক দামের তুলনা
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  বিভিন্ন বাজারের সর্বনিম্ন, সর্বাধিক ও গড় দাম
                </p>
              </div>

              {/* Responsive Table */}
              <div className="overflow-x-auto">
                <table className="w-full min-w-162.5 border-collapse text-left">
                  <thead>
                    <tr className="bg-[#F0F5F0] text-sm text-gray-600">
                      <th className="px-5 py-4 font-semibold sm:px-6">বাজার</th>
                      <th className="px-5 py-4 font-semibold">বিভাগ</th>
                      <th className="px-5 py-4 text-right font-semibold">
                        সর্বনিম্ন
                      </th>
                      <th className="px-5 py-4 text-right font-semibold">
                        সর্বাধিক
                      </th>
                      <th className="px-5 py-4 text-right font-semibold">
                        গড় দাম
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {data.markets.map((t, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 transition-colors duration-200 last:border-0 hover:bg-green-50/70"
                      >
                        <td className="whitespace-nowrap px-5 py-4 font-semibold text-gray-800 sm:px-6">
                          {t.market}
                        </td>

                        <td className="px-5 py-4">
                          <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
                            {t.division}
                          </span>
                        </td>

                        <td className="whitespace-nowrap px-5 py-4 text-right font-medium text-gray-700">
                          ৳{t.min}
                        </td>

                        <td className="whitespace-nowrap px-5 py-4 text-right font-medium text-gray-700">
                          ৳{t.max}
                        </td>

                        <td className="whitespace-nowrap px-5 py-4 text-right font-bold text-green-700">
                          ৳{((t.min + t.max) / 2).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-100 bg-gray-50 px-5 py-3 sm:px-6">
                <p className="text-xs text-gray-500">
                  * গড় দাম সর্বনিম্ন ও সর্বাধিক দামের গড় হিসেবে হিসাব করা হয়েছে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

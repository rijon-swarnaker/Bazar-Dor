import ItemsSortList from "@/components/SortBy/SortBy";
import { CardItemsType } from "@/Types/CardItemType";
import { notFound } from "next/navigation";

import React from "react";
interface CategoryPageProps {
  params: Promise<{ id: string }>;
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { id } = await params;
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${id}`,
  );
  const data: CardItemsType[] = await res.json();
  if (!data || data.length === 0) {
    notFound();
  }
  const p = data[0];

  return (
    <div className="bg-[#F0F5F0] py-5">
      <div className="container mx-auto px-3 lg:px-0 ">
        <div className="flex items-center gap-3  bg-white py-4 rounded-2xl">
          {/* img */}
          <div>
            <span className="text-5xl p-2 ">{p?.categoryIcon}</span>
          </div>
          {/* text */}

          <div>
            <span className="text-2xl font-bold">{p?.categoryNameBn}</span>
            <p className="font-light">
              {data.length}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>
        <div className="items-center pt-5">
          <span>মোট {data.length}টি পণ্য দেখানো হচ্ছে</span>
          <ItemsSortList data={data} />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;

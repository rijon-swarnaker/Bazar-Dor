
"use client";

import { useState } from "react";
import { CardItemsType } from "@/Types/CardItemType";

import Link from "next/link";
import ItemsCard from "../ItemsCard/ItemsCard";

interface ItemsSortListProps {
  data: CardItemsType[];
}

const ItemsSortList = ({ data }: ItemsSortListProps) => {
  const [sort, setSort] = useState("default");

  const sortedData = [...data].sort((a, b) => {
    if (sort === "price-low") {
      return Number(a.today) - Number(b.today);
    }

    if (sort === "price-high") {
      return Number(b.today) - Number(a.today);
    }

    return 0;
  });

  return (
    <div className="w-full px-3 lg:px-0">
      {/* Sorting */}
      <div className="mb-5 flex items-center justify-end gap-3">
        <p className="text-[18px]">সাজান</p>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-xl border px-3 py-2"
        >
          <option value="default">ডিফল্ট</option>
          <option value="price-low">
            দাম: কম থেকে বেশি
          </option>
          <option value="price-high">
            দাম: বেশি থেকে কম
          </option>
        </select>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {sortedData.map((card) => (
          <Link key={card.id} href={`/products/${card.id}`}>
            <ItemsCard card={card} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemsSortList;


import React from "react";
import ItemsCard from "../ItemsCard/ItemsCard";
import { CardItemsType } from "@/Types/CardItemType";
import Link from "next/link";

const DecreaseItems = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
  if (!res.ok) {
    throw new Error("Failed to fetch api data");
  }
  const data: CardItemsType[] = await res.json();

  const increase = data
    .filter((items) => items.change.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);
  return (
    <div>
      <div className="flex gap-2 items-center mt-8 mb-8 px-3 lg:px-0">
        <span className="text-green-600 text-2xl">▼</span>
        <h2 className="text-2xl font-bold">আজ দাম কমেছে</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {increase.map((card) => (
          <Link key={card.id} href={`/products/${card.id}`}>
            <ItemsCard card={card} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DecreaseItems;

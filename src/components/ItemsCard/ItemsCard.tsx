import React from "react";
import { CardItemsType } from "@/Types/CardItemType";

interface ItemsCardProps {
  card: CardItemsType;
}

const ItemsCard = ({ card }: ItemsCardProps) => {
  return (
    <div className="bg-[#FAFCFA] p-4 rounded-2xl">
      <div className="flex  gap-4 items-center pb-5">
        {/* card img */}
        <div>
          <span className="text-4xl px-1 rounded-2xl bg-[#F0F5F0]">
            {card.image}
          </span>
        </div>
        {/* Card Name */}
        <div>
          <p className="text-[20px] font-bold">{card.nameBn}</p>
          <span className="font-light text-sm text-[#818d81] ">
            {card.unit === "kg"
              ? "প্রতি কেজি"
              : card.unit === "litre"
                ? "প্রতি লিটার"
                : card.unit === "dozen"
                  ? "প্রতি ডজন"
                  : card.unit}{" "}
          </span>
        </div>
      </div>
      {/* items price or pct */}
      <div>
        <p className="text-sm text-[#818d81] pt-2">আজকের দাম</p>
        <div className="flex justify-between items-center">
          <div>
            <h3>
              <span className="text-[20px] font-bold">{card.today}</span> টাকা
            </h3>
          </div>
          <div>
            <span className="px-1.5 bg-[#F0F5F0] rounded-2xl">
              {card.change.dir === "up" ? (
                <span className="text-red-600">
                  ▲ {Number(card.change.pct).toFixed(1)}%
                </span>
              ) : card.change.dir==='down' ? (
                <span className="text-green-600">
                  ▼ {Math.abs(Number(card.change.pct)).toFixed(1)}%
                </span>
              ):<span>
                — {Math.abs(Number(card.change.pct)).toFixed(1)}%
                </span>}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;

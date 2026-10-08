import React from "react";
import ItemsCard from "../ItemsCard/ItemsCard";
export interface DecreaseItemsProps{
    id:string,
    nameBn:string,
    unit:string,
    image:string,
    today:string,
    change:{
        dir:string,
        pct:number
    }

}

const DecreaseItems = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products",
  );
  if (!res.ok) {
    throw new Error("Failed to fetch api data");
  }
  const data:DecreaseItemsProps[] = await res.json();
  console.log(data);

  const increase = data.filter((items)=> items.change.dir ==='down')
  .sort((a,b)=> a.change.pct-b.change.pct)
  .slice(0, 6)
 return (
    <div>
      <div>
        <div>
          <div className="flex gap-2 items-center mt-8 mb-8">
            <span className="text-green-600 text-2xl">▼</span>
            <h2 className="text-2xl font-bold">আজ দাম কমেছে</h2>
          </div>
          <div className="grid grid-cols-3 gap-4 ">
            {
                increase.map((card)=> <ItemsCard key={card.id} card={card}/>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecreaseItems;

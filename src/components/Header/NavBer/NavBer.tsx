import Link from "next/link";
import React from "react";

interface NavBerProps {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const NavBer = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories",{next:{revalidate:3600}}
  ) ;
  if (!res.ok) {
    throw new Error("Failed to fetch api data");
  }
  const data: NavBerProps[] = await res.json();
//   console.log(data);

  return (
    <div className="py-1.5 border-b border-base-300 bg-[#FAFCFA]">
      <div className="container mx-auto flex items-center gap-2 overflow-x-auto whitespace-nowrap px-3  sm:gap-4 sm:px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {data.map((i) => (
          <Link href={`/category/${i.slug}`} key={i.id}>
            <div className="flex shrink-0 items-center gap-1 rounded-lg px-3  text-base transition-colors hover:bg-base-300 sm:text-lg ">
              <span>{i.icon}</span>
              <h3>{i.nameBn}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBer;

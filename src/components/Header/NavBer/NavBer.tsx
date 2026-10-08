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
      <div className="flex gap-4 container mx-auto ">
        {data.map((i) => (
          <Link href={i.slug} key={i.id}>
            <div className="flex hover:bg-base-300 px-1.5 py-1 rounded-[10px]">
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

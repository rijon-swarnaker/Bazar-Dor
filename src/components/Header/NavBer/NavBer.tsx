
import React from "react";
import ActiveNavLink from "./ActiveNavLink";

interface NavBerProps {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const NavBer = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",{next:{revalidate:3600}}
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
          <ActiveNavLink key={i.id} i={i} />

        ))}
      </div>
    </div>
  );
};

export default NavBer;

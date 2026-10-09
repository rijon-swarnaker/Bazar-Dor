
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ActiveNavLinkProps {
  i: { id: string; slug: string; nameBn: string; icon: string; };
}

const ActiveNavLink = ({i}: ActiveNavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === `/category/${i.slug}`;

  return (
    <Link href={`/category/${i.slug}`}>
      <div
        className={`flex items-center gap-2 rounded-2xl px-4 py-1.5 transition-all duration-200 ${
          isActive
            ? "bg-[#047F39] font-semibold text-white shadow-sm"
            : "text-gray-700 hover:bg-[#F0F5F0] hover:text-[#C10007]"
        }`}
      >
        <span>{i.icon}</span>
        <h3>{i.nameBn}</h3>
      </div>
    </Link>
  );
};

export default ActiveNavLink;


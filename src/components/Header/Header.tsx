"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import webLogo from "/public/logo-icon.png";
import Link from "next/link";
import UserInfoPage from "./UserInfo";

const HeaderPage = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const formattedDate = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
      });
      setDate(formattedDate);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#F9FBF9] pt-2 border-b border-base-300 pb-2 px-3 lg:px-0">
      <div className=" container mx-auto flex justify-between items-center ">
        {/* Website logo  */}
        <Link href={"/"}>
          <div className="flex items-center gap-3">
            <Image
              src={webLogo}
              alt="BazarLogo"
              height={1000}
              width={1000}
              className="h-12 w-12 bg-[#05893E] p-1 rounded-2xl object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold -mb-1.25">বাজার দর</h1>
              <span className="text-sm text-gray-500">
                {date || "লোড হচ্ছে..."}
              </span>
            </div>
          </div>
        </Link>

        {/* My profile / sign-in sign-up */}
        <UserInfoPage/>
      </div>
    </div>
  );
};

export default HeaderPage;

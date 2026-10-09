import ClockPage from "@/components/Header/Clock/clock";
import Image from "next/image";
import Link from "next/link";
import heroImg from "/public/bazar-hero.png";
import { Suspense } from "react";

import DecreaseItems from "@/components/HomeItemsSection/DecreaseItems";
import IncreaseItems from "@/components/HomeItemsSection/IncreaseItems";
import AllItemsPage from "@/components/HomeItemsSection/AllItems";
import CardSkeleton from "@/components/Skeleton/Skeleton";

export default  function Home() {
  

  return (
    <div className="bg-[#F0F5F0] pt-8 pb-8 px-3 lg:px-0">
      {/* Hero Section */}
      <div className="container mx-auto bg-[#FAFCFA] rounded-2xl p-3 pt-5">
        <div className="md:flex justify-between items-center ">
          {/* Hero Text */}
          <div>
            <span>
              <ClockPage />
            </span>
            <h1 className="text-5xl font-bold py-4 ">
              আজকের বাজারের দাম এক <br /> নজরে
            </h1>
            <p className="text-[20px] pb-8">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
              বিস্তারিত, গড়, <br /> সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক
              জায়গায়।
            </p>
            <Link href={'#all-items'}>
              <button  className="btn bg-[#05893E] text-white font-bold rounded-2xl px-6 py-5 ">
                সব পণ্য দেখুন
              </button>
            </Link>
          </div>
          {/* Hero Img */}
          <div>
            <Image
              src={heroImg}
              alt="Hero Img"
              height={900}
              width={900}
              className="h-90 w-95"
            />
          </div>
        </div>
      </div>
      {/* Hero section end */}

      {/* Increase card section  */}
      <div className="container mx-auto">
        <Suspense fallback={<CardSkeleton/>}>
          <IncreaseItems/>
          <DecreaseItems/>
          <AllItemsPage/>
        </Suspense>
      </div>
    </div>
  );
}

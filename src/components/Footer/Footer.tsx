
import React from "react";

const FooterPage = () => {
  return (
    <div className="border-t border border-base-300 bg-gray-50 px-4 py-5 sm:px-6 sm:py-6">
      <div className="container mx-auto space-y-2 text-center sm:text-left md:flex justify-between items-center">
        <p className=" font-semibold leading-6 text-gray-800 sm:text-base">
          <span className="text-green-700">বাজার দর</span> — প্রয়োজনীয়
          পণ্যের দাম এক নজরে।
        </p>

        <p className=" leading-6 text-gray-500 sm:text-sm">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </div>
  );
};

export default FooterPage;


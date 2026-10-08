'use client'

import React, { useEffect, useState } from 'react';

const ClockPage = () => {
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
        <div>
            <span className=" bg-[#05893E]/20  py-0.5 px-3 rounded-2xl text-[#05893E]">{date || "লোড হচ্ছে..."}</span>
        </div>
    );
};

export default ClockPage;
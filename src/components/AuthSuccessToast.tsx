"use client";

import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export default function AuthSuccessToast() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const shown = useRef(false);

  useEffect(() => {
    if (
      searchParams.get("auth") === "success" &&
      !shown.current
    ) {
      shown.current = true;

      toast.success("সফলভাবে লগইন হয়েছে। স্বাগতম!");

      router.replace("/");
    }
  }, [searchParams, router]);

  return null;
}
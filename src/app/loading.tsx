"use client";

import Loader from "@/components/Layout/Loader";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Loading() {
  const searchParams = useSearchParams();

  const location = searchParams.get("search");

  useEffect(() => {}, [location]);
  // Or a custom loading skeleton component
  return (
    <div className="min-h-screen w-full items-center">
      <Loader />
    </div>
  );
}

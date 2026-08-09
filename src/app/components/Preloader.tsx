"use client";

import { useEffect, useState } from "react";
import { BobbingDots } from "@/app/components/loading-ui/bobbing-dots";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0d1224]">
      <BobbingDots className="w-16 text-violet-500" />
    </div>
  );
}
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
      <div className="flex flex-col items-center gap-5">
        <BobbingDots className="w-16 text-violet-500" />

        <p className="text-sm tracking-[0.3em] text-slate-400 uppercase">
          Loading
        </p>
      </div>
    </div>
  );
}
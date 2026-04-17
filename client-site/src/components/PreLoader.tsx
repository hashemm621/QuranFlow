"use client";
import { useEffect, useState } from "react";

export default function PreLoader() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted || !loading) return null;

  return (
    <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#F8FAF9]">
      <div className="absolute w-64 h-64 bg-green-500/10 rounded-full blur-[100px] animate-pulse"></div>

      <div className="relative flex flex-col items-center">
        <div className="relative w-24 h-24 mb-6">
          <div className="absolute inset-0 border-4 border-dashed border-green-200 rounded-full animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute inset-0 border-t-4 border-green-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl animate-bounce">🍃</span>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-[#0F3D2E] tracking-tight mb-2">
          Quran<span className="text-green-600">Flow</span>
        </h1>

        <div className="w-48 h-1.5 bg-gray-100 rounded-full overflow-hidden border border-gray-50">
          <div className="h-full bg-green-600 rounded-full animate-loading-bar"></div>
        </div>

        <p className="mt-4 text-xs font-medium text-gray-400 uppercase tracking-[0.2em] animate-pulse">
          Loading Blessings...
        </p>
      </div>

      <style
        jsx
        global>{`
        @keyframes loading-bar {
          0% {
            width: 0%;
            transform: translateX(-100%);
          }
          50% {
            width: 70%;
            transform: translateX(20%);
          }
          100% {
            width: 100%;
            transform: translateX(110%);
          }
        }
        .animate-loading-bar {
          animation: loading-bar 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

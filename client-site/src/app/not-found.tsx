"use client";
import Link from "next/link";
import { MoveLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8FAF9] flex items-center justify-center px-6 overflow-hidden relative">
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-green-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-md w-full text-center relative z-10">
        <div className="relative mb-8">
          <h1 className="text-[12rem] font-black text-green-600/10 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-6 rounded-3xl shadow-xl shadow-green-900/5 border border-green-50">
              <span className="text-5xl">🍃</span>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-10 leading-relaxed">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-[#0F3D2E] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#0a2b21] transition-all shadow-lg shadow-green-900/20 active:scale-95">
            <Home size={20} />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all active:scale-95">
            <MoveLeft size={20} />
            Go Back
          </button>
        </div>

        <p className="mt-12 text-sm text-gray-400 font-medium">
          Error Code: <span className="text-green-600">NULL_ROUTE_404</span>
        </p>
      </div>

      <div className="absolute top-10 right-10 opacity-[0.03] rotate-12 pointer-events-none">
        <svg
          width="200"
          height="200"
          viewBox="0 0 100 100">
          <path
            d="M50 0 L100 50 L50 100 L0 50 Z"
            fill="currentColor"
            className="text-green-900"
          />
        </svg>
      </div>
    </div>
  );
}

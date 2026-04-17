"use client";
import { useState } from "react";
import Link from "next/link";
import SettingsSidebar from "./SettingsSidebar";
import { Settings } from "lucide-react";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50 px-6 py-3 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          {/* Hamburger Menu (Mobile Only) */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}>
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-green-200">
              <Link href="/">Q</Link>
            </div>
            <h1 className="text-xl font-extrabold text-gray-900 tracking-tight hidden sm:block">
              Quran<span className="text-green-600">Flow</span>
            </h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Juz", "Surah", "About"].map(item => (
            <Link
              key={item}
              href={`/${item === "Home" ? "" : ""}`}
              className="text-sm font-semibold text-gray-600 hover:text-green-600 transition-colors">
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-xs font-bold hover:bg-green-600 hover:text-white transition-all flex items-center gap-2 shadow-sm">
            <Settings />
            Settings
          </button>
        </div>
      </header>

      {(isMobileMenuOpen || isDrawerOpen) && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-60 transition-opacity duration-300"
          onClick={() => {
            setIsMobileMenuOpen(false);
            setIsDrawerOpen(false);
          }}
        />
      )}

      {/* --- MOBILE NAV DRAWER (Left Side) --- */}
      <aside
        className={`fixed top-0 left-0 z-70 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-6 flex justify-between items-center border-b">
          <span className="font-bold text-gray-800">Menu</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-400 hover:text-gray-600 text-xl">
            ✕
          </button>
        </div>
        <div className="p-6 flex flex-col gap-6">
          {["Home", "Juz", "Surah", "About"].map(item => (
            <Link
              key={item}
              href="/"
              className="text-lg font-semibold text-gray-700 hover:text-green-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}>
              {item}
            </Link>
          ))}
        </div>
      </aside>

      {/* --- SETTINGS DRAWER (Right Side) --- */}
      <aside
        className={`fixed top-0 right-0 z-70 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-6 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            Display Settings
          </h2>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors text-gray-500">
            ✕
          </button>
        </div>

        <div className="p-6 overflow-y-auto h-[calc(100%-80px)]">
          <SettingsSidebar />
          <div className="mt-10 p-4 bg-green-50 rounded-2xl border border-green-100">
            <p className="text-[10px] text-green-700 font-bold uppercase tracking-widest mb-1">
              Tip
            </p>
            <p className="text-xs text-green-600/80 leading-relaxed">
              Adjust the font sizes to your comfort for a better reading
              experience.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

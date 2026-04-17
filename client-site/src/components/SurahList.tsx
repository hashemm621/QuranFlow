"use client";
import { useState } from "react";
import SurahCard from "./SurahCard";

interface Surah {
  number: number;
  name: string;
  englishName: string;
  revelationType: string;
  numberOfAyahs: number;
}

export default function SurahList({ initialSurahs }: { initialSurahs: Surah[] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSurahs = initialSurahs.filter((surah) =>
    surah.englishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    surah.name.includes(searchTerm)
  );

  return (
    <div className="w-full">
      <div className="max-w-xl mx-auto relative group -mt-10 mb-16 z-30">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-gray-400 group-focus-within:text-green-500 transition-colors" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <input 
            type="text" 
            placeholder="Search Surah by name (e.g. Al-Fatiha)..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-4 pl-12 pr-6 rounded-2xl bg-white border border-gray-200 text-gray-900 outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all shadow-xl"
          />
        </div>
      </div>

      {/* Surah Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredSurahs.length > 0 ? (
          filteredSurahs.map((surah) => (
            <SurahCard key={surah.number} surah={surah} />
          ))
        ) : (
          <div className="col-span-full text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
            <p className="text-gray-400 font-bold">No Surahs found matching: {searchTerm}</p>
          </div>
        )}
      </div>
    </div>
  );
}
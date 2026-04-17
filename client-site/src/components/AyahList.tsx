"use client";
import { useState } from "react";
import AyahCard from "./AyahCard";

interface RawAyah {
  number: number;
  text: string;
  numberInSurah: number;
  juz: number;
  manzil: number;
  page: number;
  ruku: number;
  hizbQuarter: number;
  sajda: boolean | object;
}

interface ProcessedAyah {
  numberInSurah: number;
  text: string;
  translation: string;
}

interface AyahListProps {
  arabicAyahs: RawAyah[];
  englishAyahs: RawAyah[];
}

export default function AyahList({
  arabicAyahs = [],
  englishAyahs = [],
}: AyahListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const combinedAyahs: ProcessedAyah[] = arabicAyahs.map((ayah, index) => ({
    numberInSurah: ayah.numberInSurah,
    text: ayah.text,
    translation: englishAyahs[index]?.text || "Translation not available",
  }));

  const filteredAyahs = combinedAyahs.filter(
    ayah =>
      ayah.translation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ayah.numberInSurah.toString() === searchQuery,
  );

  return (
    <div className="w-full">
      {/* Search Section */}
      <div className="sticky top-22 z-30 bg-white/80 backdrop-blur-sm py-4 mb-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <h3 className="text-xl font-bold text-gray-800">Ayahs</h3>
        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Search by meaning or Ayah no..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full py-2.5 px-4 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-600 transition-all text-sm"
          />
        </div>
      </div>

      {/* Ayahs List */}
      <div className="flex flex-col">
        {filteredAyahs.length > 0 ? (
          filteredAyahs.map(ayah => (
            <AyahCard
              key={ayah.numberInSurah}
              ayah={ayah}
              searchQuery={searchQuery}
            />
          ))
        ) : (
          <div className="text-center py-20 text-gray-400 bg-gray-50 rounded-3xl">
            No matching ayahs found.
          </div>
        )}
      </div>
    </div>
  );
}

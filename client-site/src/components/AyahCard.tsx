"use client";
import { useSettings } from "@/context/SettingsContext";

interface AyahProps {
  ayah: {
    numberInSurah: number;
    text: string;
    translation: string;
  };
  searchQuery?: string;
}

export default function AyahCard({ ayah, searchQuery = "" }: AyahProps) {
  const { arabicSize, translationSize, fontFamily } = useSettings();

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;

    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark
          key={index}
          className="bg-green-100 text-green-800 rounded px-1 border-b-2 border-green-500">
          {part}
        </mark>
      ) : (
        part
      ),
    );
  };

  return (
    <div className="py-8 border-b border-gray-100 group transition-colors hover:bg-green-50/20 px-4 rounded-2xl">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <span className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold shadow-sm">
            {ayah.numberInSurah}
          </span>
        </div>

        <p
          className={`${fontFamily} text-right leading-[2.5] text-gray-800 transition-all duration-300`}
          style={{ fontSize: `${arabicSize}px` }}>
          {ayah.text}
        </p>

        {/* Translation Text with Highlight */}
        <p
          className="text-gray-600 leading-relaxed transition-all duration-300 font-medium"
          style={{ fontSize: `${translationSize}px` }}>
          {highlightText(ayah.translation, searchQuery)}
        </p>
      </div>
    </div>
  );
}

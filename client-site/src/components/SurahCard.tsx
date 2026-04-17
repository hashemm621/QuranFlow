"use client";
import Link from "next/link";
import { useSettings } from "@/context/SettingsContext";

// ১. 'any' সরানোর জন্য ইন্টারফেস ডিফাইন করা
interface SurahProps {
  surah: {
    number: number;
    name: string;
    englishName: string;
    revelationType: string;
    numberOfAyahs: number;
  };
}

export default function SurahCard({ surah }: SurahProps) {
  // ২. arabicSize ও translationSize হুক থেকে নিয়ে আসা
  const { fontFamily, arabicSize } = useSettings();

  return (
    <Link 
      href={`/surah/${surah.number}`} 
      className="group relative bg-white p-6 rounded-3xl border border-transparent shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-green-100 hover:shadow-2xl hover:border-green-200 transition-all duration-500 flex flex-col justify-between h-40 overflow-hidden"
    >
      <div className="absolute top-0 right-0 bg-green-50 text-green-700 py-1 px-4 rounded-bl-2xl text-[10px] font-black group-hover:bg-green-600 group-hover:text-white transition-colors">
        #{surah.number}
      </div>

      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-green-50 transition-colors shrink-0">
          {/* ৩. ফন্ট সাইজ এবং ফন্ট ফ্যামিলি ইনলাইন স্টাইল ও ক্লাসের মাধ্যমে কানেক্ট করা */}
          <p 
            className={`${fontFamily} text-gray-800 group-hover:text-green-700 transition-all duration-300`}
            style={{ fontSize: `${arabicSize * 0.7}px` }} // হোম পেজে কার্ড ছোট তাই সাইজ একটু কমিয়ে (৭০%) রাখা হয়েছে
          >
            {surah.name}
          </p>
        </div>
        <div>
          <h2 className="font-bold text-gray-900 text-lg group-hover:text-green-700 transition-colors leading-tight">
            {surah.englishName}
          </h2>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-2 mt-1">
            <span className={surah.revelationType === "Meccan" ? "text-amber-500" : "text-blue-500"}>
              ● {surah.revelationType}
            </span>
            <span>• {surah.numberOfAyahs} Ayahs</span>
          </p>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-4">
        <span className="text-[11px] font-bold text-green-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
          Read Surah ➔
        </span>
      </div>
    </Link>
  );
}
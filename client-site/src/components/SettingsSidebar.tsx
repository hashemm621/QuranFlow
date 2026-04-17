"use client";
import { useSettings } from "@/context/SettingsContext";

export default function SettingsSidebar() {
  const { 
    arabicSize, setArabicSize, 
    translationSize, setTranslationSize, 
    fontFamily, setFontFamily 
  } = useSettings();

  return (
    <div className="flex flex-col gap-8">

        
      {/* Arabic Font Family */}
      <div>
        <label className="text-sm font-bold text-gray-700 mb-3 block">Arabic Font Style</label>
        <select 
          value={fontFamily}
          onChange={(e) => setFontFamily(e.target.value)}
          className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 text-sm"
        >
          <option value="font-amiri">Amiri (Classic)</option>
          <option value="font-lateef">Lateef (Thin)</option>
          <option value="font-scheherazade">Scheherazade</option>
        </select>
      </div>

      {/* Arabic Font Size */}
      <div>
        <div className="flex justify-between mb-3">
          <label className="text-sm font-bold text-gray-700">Arabic Font Size</label>
          <span className="text-green-600 font-bold text-sm">{arabicSize}px</span>
        </div>
        <input 
          type="range" min="20" max="40" step="2"
          value={arabicSize} 
          onChange={(e) => setArabicSize(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
        />
      </div>

      {/* Translation Font Size */}
      <div>
        <div className="flex justify-between mb-3">
          <label className="text-sm font-bold text-gray-700">Translation Size</label>
          <span className="text-green-600 font-bold text-sm">{translationSize}px</span>
        </div>
        <input 
          type="range" min="12" max="32" step="1"
          value={translationSize} 
          onChange={(e) => setTranslationSize(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
        />
      </div>

      {/* Live Preview Card */}
      <div className="mt-4 p-5 border border-dashed border-gray-200 rounded-2xl bg-gray-50/50 text-center">
        <p className="text-[10px] text-gray-400 mb-3 uppercase tracking-widest font-bold">Live Preview</p>
        <div className="flex flex-col gap-3">
            <p className={`${fontFamily} leading-loose transition-all`} style={{ fontSize: `${arabicSize}px` }}>
                بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
            </p>
            <p className="text-gray-600 transition-all border-t pt-2" style={{ fontSize: `${translationSize}px` }}>
                In the name of Allah, the Entirely Merciful, the Especially Merciful.
            </p>
        </div>
      </div>
    </div>
  );
}
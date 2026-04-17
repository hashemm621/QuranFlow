"use client";
import React, { createContext, useContext, useState, useEffect } from "react";


interface SettingsContextType {
  arabicSize: number;
  translationSize: number;
  fontFamily: string;
  setArabicSize: (size: number) => void;
  setTranslationSize: (size: number) => void;
  setFontFamily: (font: string) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  // ২. স্টেট ডিফাইন করা (ডিফল্ট ভ্যালুসহ)
  const [arabicSize, setArabicSize] = useState(32);
  const [translationSize, setTranslationSize] = useState(16);
  const [fontFamily, setFontFamily] = useState("font-amiri");

  // ৩. ব্রাউজার লোড হলে LocalStorage থেকে আগের সেটিংস খুঁজে বের করা
  useEffect(() => {
    const savedArabic = localStorage.getItem("arabicSize");
    const savedTrans = localStorage.getItem("translationSize");
    const savedFont = localStorage.getItem("fontFamily");

    if (savedArabic) setArabicSize(Number(savedArabic));
    if (savedTrans) setTranslationSize(Number(savedTrans));
    if (savedFont) setFontFamily(savedFont);
  }, []);

  // ৪. যখনই স্টেট চেঞ্জ হবে, LocalStorage-এ সেভ করা
  useEffect(() => {
    localStorage.setItem("arabicSize", arabicSize.toString());
    localStorage.setItem("translationSize", translationSize.toString());
    localStorage.setItem("fontFamily", fontFamily);
  }, [arabicSize, translationSize, fontFamily]);

  return (
    <SettingsContext.Provider value={{ 
      arabicSize, translationSize, fontFamily, 
      setArabicSize, setTranslationSize, setFontFamily 
    }}>
      {children}
    </SettingsContext.Provider>
  );
}

// ৫. কাস্টম হুক (যাতে অন্য কম্পোনেন্টে সহজে ব্যবহার করা যায়)
export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) throw new Error("useSettings must be used within a SettingsProvider");
  return context;
};
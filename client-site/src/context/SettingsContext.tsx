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
  
  const [arabicSize, setArabicSize] = useState(32);
  const [translationSize, setTranslationSize] = useState(16);
  const [fontFamily, setFontFamily] = useState("font-amiri");

  
  useEffect(() => {
    const savedArabic = localStorage.getItem("arabicSize");
    const savedTrans = localStorage.getItem("translationSize");
    const savedFont = localStorage.getItem("fontFamily");

    if (savedArabic) setArabicSize(Number(savedArabic));
    if (savedTrans) setTranslationSize(Number(savedTrans));
    if (savedFont) setFontFamily(savedFont);
  }, []);

  
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


export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) throw new Error("useSettings must be used within a SettingsProvider");
  return context;
};
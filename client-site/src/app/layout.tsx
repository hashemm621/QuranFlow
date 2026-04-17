import Header from "@/components/Header";
import { SettingsProvider } from "@/context/SettingsContext"; 
import "./globals.css"; 
import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#F8FAF9]">
        
        <SettingsProvider>
          <Header />
          <main>
            {children}
            <ScrollToTop />
          </main>
          <footer className="bg-white border-t pt-16 pb-8 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center text-white font-bold">Q</div>
              <h1 className="text-xl font-bold text-gray-800 tracking-tight">QuranFlow</h1>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Experience the Quran like never before. Designed for those who want to read, understand and reflect on the divine message.
            </p>
          </div>
          <div className="flex flex-col gap-3">
             <h4 className="font-bold text-gray-900 mb-2">Quick Links</h4>
             {["Surahs", "Juz", "Translations", "Privacy"].map(l => (
               <a key={l} href="#" className="text-sm text-gray-500 hover:text-green-600">{l}</a>
             ))}
          </div>
          <div>
             <h4 className="font-bold text-gray-900 mb-2">Resources</h4>
             <p className="text-sm text-gray-500 mb-4">API provided by Al-Quran Cloud</p>
             <div className="flex gap-4">

               {/* Social Icons Placeholder */}
               <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-green-100 transition-colors cursor-pointer text-gray-400 hover:text-green-600">f</div>
               <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-green-100 transition-colors cursor-pointer text-gray-400 hover:text-green-600">t</div>
             </div>
          </div>
        </div>
        <div className="text-center border-t border-gray-50 pt-8 text-gray-400 text-[11px] font-medium tracking-widest uppercase">
          © {new Date().getFullYear()} QuranFlow • Designed for Excellence
        </div>
      </footer>
        </SettingsProvider>
      </body>
    </html>
  );
}
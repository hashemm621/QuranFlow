import SurahList from "@/components/SurahList"; 

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/surahs`, {
    next: { revalidate: 3600 } 
  });
  
  const result = await res.json();
  const surahs = result.data;

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAF9]"> 
      {/* --- MODERN HERO SECTION --- */}
      <section className="relative overflow-hidden bg-[#0F3D2E] pt-20 pb-32 px-6 text-center shadow-inner">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 border-8 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 border-4 border-white rotate-45 opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 bg-green-500/20 text-green-400 text-[10px] font-bold tracking-widest uppercase rounded-full mb-4 border border-green-500/30">
            Read • Listen • Learn
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Explore the Wisdom of <br/> <span className="text-green-400">The Holy Quran</span>
          </h2>
          <p className="text-green-100/80 text-lg font-light">
            An intuitive digital experience for the word of Allah.
          </p>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <main className="container mx-auto px-6 pb-16">
       
        <div className="flex justify-between items-end mb-10 border-b border-gray-100 pb-6 pt-10">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">All Surahs</h3>
            <p className="text-sm text-gray-500 italic font-medium">114 Surahs available</p>
          </div>
        </div>

        
        <SurahList initialSurahs={surahs} />
      </main>
    </div>
  );
}
import AyahList from "@/components/AyahList";

async function getSurahData(id: string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
  try {
    const res = await fetch(`${apiUrl}/api/surah/${id}`, {
      next: { revalidate: 3600 },
    });
    return res.json();
  } catch (error) {
    return null;
  }
}

export default async function SurahPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const result = await getSurahData(id);

  if (!result || !result.data || !Array.isArray(result.data)) {
    return <div className="text-center py-20">Failed to load Surah data.</div>;
  }

  const arabicData = result.data[0]; // Arabic Uthmani
  const englishData = result.data[1]; // English Translation

  return (
    <div className="min-h-screen bg-[#F8FAF9]">
      {/* Sticky Top Header */}
      <header className="sticky top-0 z-40 bg-[#0F3D2E] text-white py-5 shadow-2xl">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">{arabicData.englishName}</h1>
            <p className="text-xs text-green-400 uppercase tracking-tighter">
              {arabicData.revelationType} • {arabicData.numberOfAyahs} Ayahs
            </p>
          </div>
          <p className="text-2xl font-amiri text-green-400">
            {arabicData.name}
          </p>
        </div>
      </header>

      <main className="container mx-auto max-w-5xl px-4 py-8">
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-6 md:p-10">
          {/* Bismillah */}
          {id !== "9" && (
            <div className="text-center py-10 mb-8 border-b border-dashed border-gray-100">
              <p className="text-4xl font-amiri text-gray-800">
                بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
              </p>
            </div>
          )}

          {/* Ayah List Component with merged data */}
          <AyahList
            arabicAyahs={arabicData.ayahs}
            englishAyahs={englishData.ayahs}
          />
        </div>
      </main>
    </div>
  );
}

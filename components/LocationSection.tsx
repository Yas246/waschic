"use client";

export default function LocationSection() {
  // 6°29'37.7"N 2°35'22.2"E en décimal
  const lat = 6.4938056;
  const lng = 2.5895;

  const openInMaps = () => {
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, "_blank");
  };

  return (
    <section className="h-[500px] relative w-full overflow-hidden">
      <iframe
        src={`https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="pointer-events-none"
      ></iframe>
      <button
        onClick={openInMaps}
        className="absolute bottom-6 right-6 z-10 bg-white dark:bg-[#13181f] px-5 py-3 rounded-lg shadow-xl flex items-center gap-2 hover:scale-105 transition-transform"
      >
        <span className="material-symbols-outlined text-[#1c385f]">open_in_new</span>
        <span className="font-bold text-sm text-slate-900 dark:text-slate-100">Ouvrir dans Maps</span>
      </button>
    </section>
  );
}

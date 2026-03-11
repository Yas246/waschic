export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/60 to-transparent z-10"></div>
        <img
          className="w-full h-full object-cover grayscale opacity-50"
          data-alt="Premium construction materials and architectural tools in high contrast"
          src="/hero-bg.jpg"
          alt=""
        />
        <div className="absolute top-1/4 right-0 w-1/3 h-2/3 border-l border-t border-accent/20 z-0 pointer-events-none"></div>
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-end lg:items-center">
          <div className="lg:w-2/3">
            <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase mb-6 rounded">
              L&apos;excellence du matériel
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter mb-8 uppercase text-slate-100">
              Des prix <span className="text-accent">chics</span> pour des
              clients{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-500">
                chics
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed mb-10 font-light italic">
              Élevez vos standards avec nos matériaux de construction premium et
              notre outillage de haute précision.
            </p>
          </div>
          <div className="hidden lg:block lg:w-1/3 relative">
            <div className="aspect-[3/4] border border-primary/30 p-4 rounded-lg bg-surface-dark/40 backdrop-blur-sm">
              <img
                className="w-full h-full object-cover rounded shadow-2xl"
                data-alt="Architectural concrete slab textures"
                src="/hero-overlay.jpg"
                alt=""
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-accent p-6 rounded shadow-2xl">
              <p className="text-primary font-black text-4xl">Une Expertise</p>
              <p className="text-primary text-xs font-bold uppercase tracking-tight">
                assurée
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

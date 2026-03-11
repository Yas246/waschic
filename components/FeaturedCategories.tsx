export default function FeaturedCategories() {
  return (
    <section id="specialites" className="py-32 px-6 bg-slate-50 dark:bg-background-dark/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-primary dark:text-slate-100">
              Nos <span className="text-accent">Spécialités</span>
            </h2>
            <div className="h-1.5 w-32 bg-accent rounded-full"></div>
          </div>
          <p className="max-w-md text-slate-500 dark:text-slate-400 font-light">
            Une sélection rigoureuse des meilleures marques internationales pour garantir la pérennité de vos
            ouvrages.
          </p>
        </div>
        <div className="asymmetric-grid">
          <div className="grid-item-1 relative group overflow-hidden rounded-xl cursor-pointer">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              data-alt="Modern high-end plumbing fixtures and copper pipes"
              src="/plomberie.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-10">
              <span className="text-accent font-bold text-sm tracking-widest uppercase mb-2">Expertise</span>
              <h3 className="text-white text-4xl font-black uppercase italic tracking-tighter">Plomberie</h3>
            </div>
          </div>
          <div className="grid-item-2 relative group overflow-hidden rounded-xl cursor-pointer">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              data-alt="Professional grade power tools and hand tools"
              src="/outillage.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-3xl font-black uppercase italic tracking-tighter">
                Outillage de Précision
              </h3>
            </div>
          </div>
          <div className="grid-item-3 relative group overflow-hidden rounded-xl cursor-pointer">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              data-alt="Artistic paint texture and premium brushes"
              src="/peinture.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-bold uppercase tracking-tight">Peinture</h3>
            </div>
          </div>
          <div className="grid-item-4 relative group overflow-hidden rounded-xl cursor-pointer">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              data-alt="Surveying equipment and high precision sensors"
              src="/topographie.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-bold uppercase tracking-tight">Topographie</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

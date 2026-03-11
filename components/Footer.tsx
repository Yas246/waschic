export default function Footer() {
  return (
    <footer className="bg-background-dark text-slate-400 py-20 px-6 border-t border-primary/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <a className="flex items-center gap-2" href="#">
            <img
              src="/favicon.svg"
              alt="Was Chic et Fils"
              className="size-10"
            />
            <span className="text-white font-black uppercase tracking-tighter">
              Was Chic <span className="text-accent">et Fils</span>
            </span>
          </a>
          <p className="text-sm text-center">
            L&apos;élégance technique au service de vos ambitions
            architecturales.
          </p>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em]">
            © 2026 WAS CHIC ET FILS. TOUS DROITS RÉSERVÉS.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest">
            <a className="hover:text-white transition-colors" href="#">
              Confidentialité
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Mentions Légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

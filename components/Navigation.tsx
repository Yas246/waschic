export default function Navigation() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#0a0d12]/80 backdrop-blur-md border-b border-slate-200 dark:border-[#1c385f]/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a className="flex items-center gap-2 group" href="#">
            <img
              src="/favicon.svg"
              alt="Was Chic et Fils"
              className="size-35"
            />
            <span className="hidden md:block text-xl font-black tracking-tighter uppercase text-slate-900 dark:text-slate-100">
              Was Chic <span className="text-[#5DA9DD]">et Fils</span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}

import { Home, LogIn } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 p-1.5 rounded-lg text-white">
            <Home size={22} />
          </div>
          <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
            PG<span className="text-indigo-600">Scout</span>
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#" className="hover:text-indigo-600 transition">
            Explore
          </a>
          {/* <a href="#" className="hover:text-indigo-600 transition">
            Verify PG
          </a> */}
          <a href="#" className="hover:text-indigo-600 transition">
            Support
          </a>
        </nav>

        <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-indigo-600 transition-all duration-300 shadow-sm text-sm font-semibold">
          <LogIn size={16} />
          <span>Sign In</span>
        </button>
      </div>
    </header>
  );
}

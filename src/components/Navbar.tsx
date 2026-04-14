import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/tiply_logo_oficial.png" 
              alt="Tiply Logo" 
              className="w-10 h-10 object-contain" 
              referrerPolicy="no-referrer" 
            />
            <span className="text-2xl font-bold font-display tracking-tight">Tiply</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/como-funciona" className="text-sm font-medium text-gray-600 hover:text-brand-green transition-colors">Cómo funciona</Link>
            <Link to="/tienda" className="text-sm font-medium text-gray-600 hover:text-brand-green transition-colors">Tienda</Link>
            <a href="/#solutions" className="text-sm font-medium text-gray-600 hover:text-brand-green transition-colors">Soluciones</a>
            <a href="/#pricing" className="text-sm font-medium text-gray-600 hover:text-brand-green transition-colors">Precios</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-gray-700 hover:text-brand-green">Login</button>
            <button className="bg-brand-green text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all shadow-lg shadow-brand-green/20">
              Empezar ahora
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-4 py-6 flex flex-col gap-4"
        >
          <Link to="/como-funciona" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-600">Cómo funciona</Link>
          <a href="/#solutions" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-600">Soluciones</a>
          <a href="/#pricing" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-600">Precios</a>
          <button className="bg-brand-green text-white px-6 py-3 rounded-full font-semibold">Empezar ahora</button>
        </motion.div>
      )}
    </nav>
  );
};

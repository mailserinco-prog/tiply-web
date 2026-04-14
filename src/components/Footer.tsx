import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/tiply_logo_oficial.png" 
                alt="Tiply Logo" 
                className="w-8 h-8 object-contain" 
                referrerPolicy="no-referrer" 
              />
              <span className="text-xl font-bold font-display">Tiply</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Liderando la revolución de los pagos digitales en el sector servicios. Seguro, rápido y justo.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-gray-400">Producto</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link to="/como-funciona" className="hover:text-brand-green">Cómo funciona</Link></li>
              <li><Link to="/tienda" className="hover:text-brand-green">Tienda</Link></li>
              <li><a href="#" className="hover:text-brand-green">Dashboard</a></li>
              <li><a href="#" className="hover:text-brand-green">Seguridad</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-gray-400">Empresa</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-brand-green">Sobre nosotros</a></li>
              <li><a href="#" className="hover:text-brand-green">Contacto</a></li>
              <li><a href="#" className="hover:text-brand-green">Carreras</a></li>
              <li><a href="#" className="hover:text-brand-green">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-gray-400">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-brand-green">Privacidad</a></li>
              <li><a href="#" className="hover:text-brand-green">Términos</a></li>
              <li><a href="#" className="hover:text-brand-green">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-100 gap-6">
          <div className="text-gray-400 text-xs">
            © 2024 Tiply Inc. Todos los derechos reservados.
          </div>
          <div className="flex gap-8 text-gray-400 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-brand-green">LinkedIn</a>
            <a href="#" className="hover:text-brand-green">Twitter</a>
            <a href="#" className="hover:text-brand-green">Instagram</a>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full border border-gray-100">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Sistema Operativo</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

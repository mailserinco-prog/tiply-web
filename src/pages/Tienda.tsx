import { motion } from "motion/react";
import { 
  Smartphone, 
  Zap, 
  CheckCircle2, 
  ShieldCheck, 
  ShoppingBag, 
  Users, 
  CreditCard, 
  Droplets,
  ChevronDown,
  Plus,
  Minus,
  ArrowRight,
  TrendingUp,
  Award,
  Clock,
  PlusCircle
} from "lucide-react";
import { useState } from "react";

const FAQItem = ({ q, a }: { q: string, a: string }) => {
  return (
    <details className="group bg-white rounded-2xl border border-gray-100 p-6 cursor-pointer hover:border-brand-green/30 transition-colors">
      <summary className="flex justify-between items-center list-none">
        <span className="font-semibold text-gray-800">{q}</span>
        <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
      </summary>
      <div className="mt-4 text-gray-600 text-sm leading-relaxed whitespace-pre-line">
        {a}
      </div>
    </details>
  );
};

const ProductCard = ({ title, price, description, items, badge }: { title: string, price: string, description: string, items: string[], badge?: string }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-white rounded-[40px] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col h-full relative group">
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-green text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest z-10 shadow-lg shadow-brand-green/20">
          {badge}
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-brand-green transition-colors">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-display font-black text-brand-dark">{price}</span>
        </div>
        <span className="text-gray-400 text-[10px] uppercase font-bold tracking-tighter">IVA incluido • Envío gratuito</span>
      </div>
      <ul className="space-y-3 mb-8 flex-grow">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
            <div className="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-3 h-3 text-brand-green" />
            </div>
            {item}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between mb-6 bg-gray-50 p-2 rounded-2xl border border-gray-100">
        <button 
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors border border-gray-100"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="font-bold text-lg">{quantity}</span>
        <button 
          onClick={() => setQuantity(quantity + 1)}
          className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors border border-gray-100"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
      <button className="w-full bg-brand-green text-white py-5 rounded-full font-display font-extrabold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-brand-green/20">
        <ShoppingBag className="w-5 h-5" />
        Comprar ahora
      </button>
    </div>
  );
};

export default function Tienda() {
  return (
    <div className="pt-20 bg-white">
      {/* 2. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter leading-[0.9] mb-6">
              La pulsera que convierte un gesto en una <span className="text-brand-green italic">propina.</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800 mb-4">
              Cada servicio puede ser una propina. Solo necesitas hacerlo fácil.
            </h2>
            <p className="text-xl text-gray-600 max-w-xl leading-relaxed mb-10">
              Tus clientes solo acercan el móvil y dejan propina en segundos. Sin apps, sin efectivo y sin fricción.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#comprar" className="bg-brand-green text-white px-12 py-5 rounded-full font-display font-extrabold text-xl hover:scale-105 transition-all shadow-2xl shadow-brand-green/30 text-center">
                Comprar ahora
              </a>
              <a href="#comprar" className="bg-gray-100 text-brand-dark px-12 py-5 rounded-full font-display font-extrabold text-xl hover:bg-gray-200 transition-all text-center">
                Ver packs para equipos
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-[80px] overflow-hidden bg-gray-50 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-100">
              <img 
                src="/tiply-packaging.jpg" 
                alt="Tiply Packaging" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. STORYTELLING SECTION (CRITICAL) */}
      <section className="py-32 px-4 bg-brand-light overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-center mb-16 tracking-tight">
            De no recibir propinas… a no parar de recibirlas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { 
                img: "/ya_casi_nadie_lleva_efectivo.png", 
                text: "Ya casi nadie lleva efectivo…",
                alt: "Camarero frustrado revisando cuenta sin propina"
              },
              { 
                img: "/conoces_tiply.png", 
                text: "¿No conoces Tiply?",
                alt: "Camarero mostrando la pulsera Tiply a otro camarero"
              },
              { img: "/en_minutos.png", text: "En minutos, lo tenía listo" },
              { img: "/pidelo_ahora.png", text: "Pídelo ahora mismo" },
              { img: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=400&h=500&q=80", text: "Ahora las propinas llegan solas" }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative group aspect-[4/5] rounded-[32px] overflow-hidden shadow-lg"
              >
                <img 
                  src={card.img} 
                  alt={card.alt || card.text} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <p className="text-white font-display font-bold text-lg leading-tight">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VALUE SECTION */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-12 tracking-tight">Más propinas, sin pedirlas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Clock className="w-8 h-8 text-brand-green" />, text: "Clientes dejan propina en segundos" },
              { icon: <CreditCard className="w-8 h-8 text-brand-green" />, text: "Sin depender del efectivo" },
              { icon: <TrendingUp className="w-8 h-8 text-brand-green" />, text: "Más oportunidades en cada servicio" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center p-8 rounded-[32px] bg-gray-50 border border-gray-100">
                <div className="mb-4">{item.icon}</div>
                <p className="font-display font-bold text-gray-800">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRODUCT / PRICING SECTION */}
      <section id="comprar" className="py-32 px-4 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-6 tracking-tighter">Elige tu equipamiento.</h2>
            <p className="text-brand-green font-display font-bold text-xl mb-4">Se amortiza con solo unas pocas propinas al día</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ProductCard 
              title="Pulsera individual"
              price="19.99€"
              description="Ideal para uso personal y autónomos."
              items={["1 Pulsera Tiply NFC", "Perfil personalizado", "Dashboard básico", "Soporte estándar"]}
            />
            <ProductCard 
              title="Pack equipo"
              price="79€"
              description="Para equipos pequeños de sala (5 pulseras)."
              items={["5 Pulseras Tiply NFC", "Gestión de equipo", "Dashboard avanzado", "Ahorro del 20%"]}
              badge="Más popular"
            />
            <ProductCard 
              title="Pack business"
              price="249€"
              description="Para plantillas completas y eventos (20 pulseras)."
              items={["20 Pulseras Tiply NFC", "Multi-establecimiento", "Account Manager", "Ahorro del 35%"]}
            />
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS SECTION */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight">Así de simple</h2>
            <p className="text-gray-500 mt-4 text-xl font-medium">Todo en menos de 5 segundos</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-50 -translate-y-1/2 hidden lg:block -z-10"></div>
            {[
              { icon: <Users />, title: "1. Lleva", desc: "El camarero lleva la pulsera Tiply." },
              { icon: <Smartphone />, title: "2. Acerca", desc: "El cliente acerca su móvil a la pulsera." },
              { icon: <Zap />, title: "3. Abre", desc: "La página de propina se abre al instante." },
              { icon: <CreditCard />, title: "4. Elige", desc: "El cliente selecciona el importe." },
              { icon: <CheckCircle2 />, title: "5. Confirma", desc: "Pago confirmado. Propina registrada." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-[30px] bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-6 group-hover:bg-brand-green group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-brand-green/20">
                  <div className="text-brand-green group-hover:text-white transition-colors">
                    {step.icon}
                  </div>
                </div>
                <h4 className="font-display font-bold text-lg mb-2">{step.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECURITY SECTION */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-5xl mx-auto bg-brand-dark rounded-[60px] p-12 md:p-24 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold">El cliente paga como siempre. Tú recibes más.</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-white/70 leading-relaxed">
                  La seguridad es nuestra prioridad. Tiply no es un sistema de cobro automático; es una pasarela de pago intencionada.
                </p>
                <ul className="space-y-4">
                  {[
                    "El cliente usa sus métodos de pago habituales (Apple/Google Pay).",
                    "No requiere introducir datos bancarios en sitios desconocidos.",
                    "Cada transacción requiere confirmación manual del cliente."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                      <CheckCircle2 className="w-4 h-4 text-brand-green mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 p-8 rounded-[40px] border border-white/10">
                <h4 className="font-bold mb-4 font-display">Proceso 100% Intencionado</h4>
                <p className="text-sm text-white/50 leading-relaxed">
                  Acercar el móvil solo abre la página de propinas. El cliente debe seleccionar el importe y validar el pago con su biometría o código. No hay cargos accidentales ni suscripciones ocultas.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-4 bg-brand-light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-center mb-16">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            <FAQItem 
              q="¿Necesita batería la pulsera?" 
              a="No. La pulsera Tiply utiliza tecnología NFC pasiva. Se activa mediante el campo electromagnético del móvil del cliente, por lo que nunca necesita carga." 
            />
            <FAQItem 
              q="¿Funciona con cualquier móvil?" 
              a="Funciona con cualquier smartphone moderno con NFC (iPhone 7+ y la mayoría de Android recientes)." 
            />
            <FAQItem 
              q="¿El cliente necesita una app?" 
              a="Absolutamente no. Al acercar el móvil, se abre una página web segura en el navegador nativo del cliente." 
            />
            <FAQItem 
              q="¿Es seguro para el cliente?" 
              a="Totalmente. El cliente utiliza Apple Pay o Google Pay a través de una pasarela de pago segura y encriptada." 
            />
            <FAQItem 
              q="¿Cómo se registra la propina?" 
              a="Una vez confirmada, la propina se registra en tu cuenta Tiply al instante y puedes verla en tu dashboard." 
            />
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto bg-brand-green rounded-[60px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-green/40">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-display font-extrabold mb-8 tracking-tighter">Empieza a recibir más propinas hoy</h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Únete a la nueva era de la hostelería digital. Sin fricción, sin esperas, solo agradecimiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#comprar" className="bg-white text-brand-green px-12 py-5 rounded-full font-display font-extrabold text-xl hover:scale-105 transition-all shadow-xl">
                Pedir mis pulseras
              </a>
              <button className="bg-brand-green border border-white/30 text-white px-12 py-5 rounded-full font-display font-extrabold text-xl hover:bg-white/10 transition-all">
                Contactar Ventas
              </button>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
        </div>
      </section>
    </div>
  );
}

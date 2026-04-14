import { motion } from "motion/react";
import { 
  Smartphone, 
  Zap, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  UserCheck, 
  Droplets,
  ArrowRight
} from "lucide-react";

export default function ComoFunciona() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter leading-none mb-6">
              De la pulsera a tu cuenta en <span className="text-brand-green italic">segundos.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-xl leading-relaxed">
              Tecnología NFC de alta fidelidad integrada en un diseño táctil. Sin aplicaciones, sin fricción, solo energía financiera fluida.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-[40px] overflow-hidden bg-gray-100 shadow-2xl">
              <img 
                src="/Tiply-bracelet.jpeg" 
                alt="Tiply Bracelet" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-green/10 blur-3xl rounded-full -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Process Grid */}
      <section className="py-32 px-4 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-brand-green font-bold tracking-widest uppercase text-sm">El Proceso Core</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold mt-2">Tres gestos, una transacción.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "1. Acercar y Escanear",
                desc: "El cliente simplemente acerca su móvil a tu pulsera Tiply. Sin necesidad de descargar aplicaciones ni registrarse en portales lentos."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "2. Elegir Importe",
                desc: "Se despliega tu perfil personalizado. El cliente selecciona entre tus sugerencias rápidas: 1€, 2€ o 5€, o introduce un importe libre.",
                offset: "md:mt-12"
              },
              {
                icon: <CheckCircle2 className="w-8 h-8" />,
                title: "3. Pago y Éxito",
                desc: "Confirmación instantánea con Apple Pay o Google Pay. Un sonido de éxito refuerza la transacción táctil y auditiva.",
                offset: "md:mt-24"
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className={`bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 group hover:bg-brand-green transition-all duration-500 ${step.offset || ""}`}
              >
                <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors text-brand-green group-hover:text-white">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-white transition-colors">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed group-hover:text-white/80 transition-colors">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Visual Demonstration Video */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto rounded-[40px] overflow-hidden shadow-2xl bg-brand-dark aspect-video group"
          >
            <video 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
              autoPlay 
              muted 
              loop 
              playsInline
            >
              <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27dbed3012736990684656633733c29560f1fb3&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8 bg-gradient-to-t from-brand-dark/60 to-transparent">
              <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mb-4 shadow-lg shadow-brand-green/40">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">Experiencia sin fricción</h3>
              <p className="text-white/70 max-w-md">Mira lo fácil que es para tus clientes mostrar su agradecimiento en menos de 5 segundos.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security & Transparency */}
      <section className="py-32 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="bg-brand-dark p-12 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8">
                <ShieldCheck className="w-16 h-16 text-brand-green opacity-20" />
              </div>
              <h3 className="text-3xl font-display font-extrabold mb-8">Informes listos para tu gestor.</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <FileText className="w-6 h-6 text-brand-green" />
                  <div>
                    <p className="font-bold">Resumen Trimestral Q4</p>
                    <p className="text-sm text-white/40">PDF • 1.2 MB • Generado ayer</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <UserCheck className="w-6 h-6 text-brand-green" />
                  <div>
                    <p className="font-bold">KYC Verificado</p>
                    <p className="text-sm text-white/40">Cumplimiento total con normativa europea</p>
                  </div>
                </div>
              </div>
            </div>
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="absolute -bottom-10 -right-10 bg-brand-green p-8 rounded-3xl shadow-xl hidden md:block max-w-xs text-white"
            >
              <p className="font-display font-bold text-lg mb-2">Transparencia Total</p>
              <p className="text-white/80 text-sm">Monitorea cada céntimo en tiempo real con nuestra infraestructura segura.</p>
            </motion.div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight mb-8">Seguridad de grado bancario, simplicidad de humano.</h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              No solo facilitamos el pago; protegemos tu carrera. Con nuestro módulo de informes fiscales y verificación KYC, tus ingresos son legítimos, transparentes y están listos para tu declaración anual.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="block text-3xl font-display font-black text-brand-green">100%</span>
                <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">Cumplimiento Legal</span>
              </div>
              <div>
                <span className="block text-3xl font-display font-black text-brand-green">SSL</span>
                <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">Encriptación de Datos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Section */}
      <section className="py-32 px-4 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-6">Empoderamiento Real</span>
          <h2 className="text-5xl md:text-7xl font-display font-extrabold mb-12 tracking-tighter">Hardware que resiste tu ritmo.</h2>
          <div className="relative w-full max-w-4xl aspect-[21/9] rounded-[40px] overflow-hidden mb-16">
            <img 
              src="https://picsum.photos/seed/hardware/1200/600?blur=2" 
              alt="Hardware durability" 
              className="w-full h-full object-cover opacity-40"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-8">
                <Droplets className="w-16 h-16 text-brand-green mx-auto mb-4" />
                <p className="text-2xl font-display font-bold">Resistente al agua e impactos.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left max-w-5xl">
            <div>
              <h4 className="text-xl font-display font-bold mb-3 text-brand-green tracking-tight">Carga Infinita</h4>
              <p className="text-white/50">La tecnología NFC pasiva no requiere baterías. Tu pulsera siempre está lista para recibir, sin cables.</p>
            </div>
            <div>
              <h4 className="text-xl font-display font-bold mb-3 text-brand-green tracking-tight">Ergonomía Fluida</h4>
              <p className="text-white/50">Diseñada para ser olvidada. Su peso pluma y textura hipoalergénica permiten un uso diario cómodo.</p>
            </div>
            <div>
              <h4 className="text-xl font-display font-bold mb-3 text-brand-green tracking-tight">Ecosistema Abierto</h4>
              <p className="text-white/50">Funciona con cualquier smartphone moderno. Es el puente universal entre el mundo físico y el digital.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto bg-brand-green rounded-[40px] p-12 md:p-20 text-center shadow-2xl shadow-brand-green/20 relative overflow-hidden text-white">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 tracking-tighter relative z-10">¿Listo para transformar tu flujo de ingresos?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button className="bg-white text-brand-green px-10 py-4 rounded-full font-display font-extrabold text-lg hover:scale-105 transition-all">
              Únete a Tiply
            </button>
            <button className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-full font-display font-extrabold text-lg hover:bg-white/20 transition-all">
              Ver planes de hardware
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

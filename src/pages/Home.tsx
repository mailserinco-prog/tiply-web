import { motion } from "motion/react";
import { 
  Smartphone, 
  CreditCard, 
  CheckCircle2, 
  ChevronDown, 
  Zap 
} from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider mb-6">
            El futuro de la hostelería
          </span>
          <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
            Propinas al instante. <span className="text-brand-green">Sin efectivo.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            La solución de propinas digitales para la hostelería moderna. Empodera a tu equipo y deleita a tus clientes con tecnología NFC sin fricciones.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-brand-green text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-brand-green/20">
              Empezar ahora
            </button>
            <button className="bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors">
              Para negocios
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-8 border-t border-gray-100 pt-8">
            <div>
              <div className="text-3xl font-bold text-brand-green">+30%</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-widest">Incremento medio</div>
            </div>
            <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
              <span className="font-bold text-sm tracking-tighter italic">GRILL & CO</span>
              <span className="font-bold text-sm tracking-tighter italic">LUMIÈRE</span>
              <span className="font-bold text-sm tracking-tighter italic">NOMAD</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl bg-black">
            <img 
              src="/Tiply-bracelet.jpeg" 
              alt="Tiply bracelet" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-8">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 flex items-center gap-4 w-full">
                <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center shadow-lg">
                  <Smartphone className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Listo para escanear</div>
                  <div className="text-white/70 text-xs">Acerca tu móvil a la pulsera</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const steps = [
    {
      icon: <Smartphone className="w-6 h-6 text-brand-green" />,
      title: "Sin apps. Sin pasos. Solo acerca.",
      desc: "Acerca el móvil a la pulsera y la página de propina se abre automáticamente. Así de simple."
    },
    {
      icon: <Zap className="w-6 h-6 text-brand-green" />,
      title: "Elegir Importe",
      desc: "Se abre una elegante página web. El cliente selecciona una cantidad predefinida o personalizada."
    },
    {
      icon: <CreditCard className="w-6 h-6 text-brand-green" />,
      title: "Pagar al Instante",
      desc: "Pago rápido y seguro con Apple Pay, Google Pay o tarjeta. Sin necesidad de descargar ninguna app."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Fácil y rápido</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tres pasos sencillos para transformar la experiencia de tus clientes y motivar a tu equipo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 font-display">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Solutions = () => {
  return (
    <section id="solutions" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-display font-bold mb-4">Diseñado para los héroes del servicio</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="order-2 lg:order-1">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 block">Para trabajadores</span>
            <h3 className="text-3xl font-display font-bold mb-6">Empoderamiento real</h3>
            <ul className="space-y-6">
              {[
                "Recibe propinas al instante directamente en tu cuenta",
                "Control en tiempo real de tus ingresos",
                "Sin necesidad de efectivo"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="/Tiply-tips.png" 
                alt="Waiter using Tiply" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl">
                <div className="text-brand-green font-bold text-xl">+45%</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">Retención</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="relative bg-brand-dark rounded-[40px] p-12 text-white overflow-hidden">
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <div className="text-brand-green text-2xl font-bold">+45%</div>
                    <div className="text-[10px] text-white/50 font-bold uppercase">Retención</div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <div className="text-brand-green text-2xl font-bold">2.4x</div>
                    <div className="text-[10px] text-white/50 font-bold uppercase">Propinas</div>
                  </div>
                </div>
                <div className="bg-brand-green p-6 rounded-2xl">
                  <div className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1">Satisfacción del staff</div>
                  <div className="text-2xl font-bold">Máximo Nivel</div>
                </div>
              </div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-green/20 rounded-full blur-3xl" />
            </div>
          </div>
          <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 block">Para negocios</span>
            <h3 className="text-3xl font-display font-bold mb-6">Gestión sin complicaciones</h3>
            <ul className="space-y-6">
              {[
                "Mejora la retención y el ánimo del equipo",
                "Incremento en el volumen de propinas registradas",
                "Sin carga administrativa para el equipo de RRHH"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { 
      q: "¿Es seguro para los clientes?", 
      a: "Sí. Tiply utiliza los mismos métodos de pago que el cliente ya usa en su día a día, como Apple Pay, Google Pay o tarjeta bancaria.\n\nNo requiere configuraciones adicionales ni introducir datos nuevos, lo que garantiza una experiencia familiar y segura.\n\nAdemás, al acercar el móvil a la pulsera, simplemente se abre una página en su dispositivo. El cliente debe seleccionar la propina y confirmar el pago manualmente, asegurando un proceso totalmente intencionado.\n\nNo hay cargos automáticos ni acciones involuntarias: cada pago requiere una confirmación explícita por parte del cliente." 
    },
    { 
      q: "¿Cuáles son las comisiones?" 
    },
    { 
      q: "¿Qué tan rápidos son los pagos?", 
      a: "El pago se realiza al instante, como cualquier otro pago digital.\n\nUna vez completado, el importe queda registrado automáticamente.\n\nPosteriormente, el camarero puede transferir el total acumulado a su cuenta de forma sencilla al finalizar su turno o jornada." 
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-brand-light">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-display font-bold text-center mb-12">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            faq.a ? (
              <details key={i} className="group bg-white rounded-2xl border border-gray-100 p-6 cursor-pointer hover:border-brand-green/30 transition-colors">
                <summary className="flex justify-between items-center list-none">
                  <span className="font-semibold text-gray-800">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="mt-4 text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                  {faq.a}
                </div>
              </details>
            ) : (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 flex justify-between items-center transition-colors">
                <span className="font-semibold text-gray-800">{faq.q}</span>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-8 leading-tight">
          Empieza a recibir propinas <br /> digitales hoy.
        </h2>
        <div className="flex flex-col items-center gap-6">
          <button className="bg-brand-green text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-brand-green/40">
            Unirse a la plataforma
          </button>
          <p className="text-white/50 text-sm font-medium">Más de 2,000 establecimientos ya usan Tiply</p>
        </div>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,133,51,0.15)_0%,transparent_70%)]" />
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Solutions />
      <FAQ />
      <CTA />
    </>
  );
}

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Smartphone, Database, Palette, Rocket, Headphones } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sviluppo Web",
    description: "Siti web e web app moderne, responsive e ottimizzate per le performance.",
  },
  {
    icon: Smartphone,
    title: "App Mobile",
    description: "Applicazioni native e cross-platform per iOS e Android.",
  },
  {
    icon: Database,
    title: "Backend & API",
    description: "Architetture scalabili, database design e integrazioni API.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Interface intuitive e design system coerenti per il tuo brand.",
  },
  {
    icon: Rocket,
    title: "MVP Development",
    description: "Dal concept al lancio, sviluppo rapido per validare la tua idea.",
  },
  {
    icon: Headphones,
    title: "Consulenza",
    description: "Supporto tecnico, code review e ottimizzazione di progetti esistenti.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servizi" className="py-24 md:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display font-semibold text-sm tracking-wider uppercase mb-4 block">
            Servizi
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Come posso <span className="text-gradient">aiutarti</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Offro una gamma completa di servizi per trasformare la tua idea in un prodotto digitale di successo.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div className="h-full p-6 md:p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

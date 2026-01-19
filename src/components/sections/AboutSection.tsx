import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Target, Rocket, Coffee } from 'lucide-react';

const stats = [
  { icon: Zap, value: '3+', label: 'Anni di esperienza' },
  { icon: Target, value: '10+', label: 'Progetti completati' },
  { icon: Coffee, value: '∞', label: 'Caffè bevuti' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="chi-sono" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Profile photo container */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-card border border-border overflow-hidden">
                {/* Photo placeholder - replace src with your photo */}
                <img
                  src="ProfileImage.png"
                  alt="Antonio Moscato - Developer"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background/90 to-transparent" />

                {/* Name overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Antonio Moscato
                  </h3>
                  <p className="text-primary font-medium">
                    Freelance Developer
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm shadow-lg"
              >
                <Rocket className="w-4 h-4 inline mr-2" />
                Open to work
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-display font-semibold text-sm tracking-wider uppercase mb-4 block">
              Chi sono
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Sviluppatore con
              <span className="text-gradient"> passione</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-body text-lg leading-relaxed">
              <p>
                Ciao! Sono un freelance developer specializzato nella creazione
                di applicazioni web e mobile moderne. Ogni progetto è
                un'opportunità per creare qualcosa di unico e funzionale.
              </p>
              <p>
                Il mio approccio combina design accattivante, codice pulito e
                un'attenzione maniacale ai dettagli. Lavoro a stretto contatto
                con i clienti per trasformare le loro visioni in realtà
                digitali.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-display text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

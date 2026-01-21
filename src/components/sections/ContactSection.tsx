import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Send, ArrowUpRight } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const socialLinks = [
  // {
  //   icon: Mail,
  //   label: 'Email',
  //   href: 'mailto:ciao@tuodominio.com',
  //   username: '',
  // },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/antonio-moscato/',
    username: '',
  },
  // { icon: Github, label: "GitHub", href: "https://github.com/tuoprofilo", username: "@tuoprofilo" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // honeypot
    if ((e.target as HTMLFormElement).company?.value) return;

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success('Messaggio inviato con successo 🚀');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.log(error);
      toast.error('Errore durante l’invio. Riprova.');
    }
  };

  return (
    <section id="contatti" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />

      <div className="container px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display font-semibold text-sm tracking-wider uppercase mb-4 block">
            Contatti
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Iniziamo a <span className="text-gradient">collaborare</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hai un progetto in mente? Parliamone! Sono sempre aperto a nuove
            opportunità.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 font-display">
                  Nome
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body"
                  placeholder="Il tuo nome"
                  required
                />
                <input
                  type="text"
                  name="company"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 font-display">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body"
                  placeholder="la.tua@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 font-display">
                  Messaggio
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body resize-none"
                  placeholder="Raccontami del tuo progetto..."
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="w-4 h-4" />
                Invia messaggio
              </Button>
            </form>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-display text-2xl font-bold mb-6">
              Oppure contattami direttamente
            </h3>
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <link.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-display font-semibold">
                      {link.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {link.username}
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

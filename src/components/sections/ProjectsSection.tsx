import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Piattaforma e-commerce completa con gestione ordini, pagamenti e dashboard admin.',
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    color: 'from-orange-500/20 to-red-500/20',
    image: '🛒',
  },
  {
    title: 'SaaS Dashboard',
    description:
      'Dashboard analytics per startup con grafici real-time e gestione utenti.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Charts'],
    color: 'from-blue-500/20 to-cyan-500/20',
    image: '📊',
  },
  {
    title: 'Mobile App',
    description:
      'Applicazione mobile cross-platform per prenotazioni e gestione appuntamenti.',
    tags: ['React Native', 'Firebase', 'Push Notifications'],
    color: 'from-green-500/20 to-emerald-500/20',
    image: '📱',
  },
  {
    title: 'Portfolio Creativo',
    description:
      'Sito portfolio per agenzia creativa con animazioni avanzate e CMS.',
    tags: ['Gatsby', 'GSAP', 'Contentful', 'Netlify'],
    color: 'from-purple-500/20 to-pink-500/20',
    image: '🎨',
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="card-elevated rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-elevated">
        {/* Card gradient background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        <div className="relative p-6 md:p-8">
          {/* Project icon */}
          <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
            {project.image}
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground mb-6 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          {/* <div className="flex gap-3">
            <Button variant="ghost" size="sm" className="gap-2">
              <ExternalLink className="w-4 h-4" />
              Demo
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Github className="w-4 h-4" />
              Code
            </Button>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="progetti" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display font-semibold text-sm tracking-wider uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Progetti <span className="text-gradient">selezionati</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Una selezione dei miei lavori più recenti e significativi.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

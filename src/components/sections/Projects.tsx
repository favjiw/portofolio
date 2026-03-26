import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "MARCHA",
    context: "U.ID Hackathon PANDI (Aug 2022)",
    description: "A multi-platform mobile application designed to simplify split bill payments among friends. Features a clean, intuitive UI tailored for both Android and iOS.",
    features: [
      "Real-time database synchronization",
      "Secure user authentication",
      "Seamless bill calculation logic"
    ],
    tech: ["Flutter", "Dart", "Firebase", "Figma", "GitHub"],
    icon: "💸",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-cyan-500/50"
  },
  {
    title: "REWINT",
    context: "KomodoHacks 1.0 (Jul 2022)",
    description: "An interactive educational mobile app aimed at teaching children handwriting and fundamental math concepts through gamification.",
    features: [
      "Intuitive drawing interface using Flutter canvas",
      "Interactive math mini-games",
      "Vibrant, child-friendly UX design"
    ],
    tech: ["Flutter", "ML Kit", "Dart", "Firebase", "Figma"],
    icon: "🎨",
    color: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50"
  },
  {
    title: "NUTRIMAMA",
    context: "Genetic 24 (May 2024)",
    description: "A specialized health tracking application for pregnant mothers to monitor nutritional intake and prevent stunting through data-driven insights.",
    features: [
      "Daily food logging & nutrient breakdown",
      "Personalized daily reminders",
      "Curated educational content integration"
    ],
    tech: ["Flutter", "Dart", "Firebase", "Figma"],
    icon: "🤰",
    color: "from-emerald-500/20 to-green-500/20",
    border: "group-hover:border-emerald-500/50"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Selected works from hackathons and independent research, showcasing mobile development expertise.</p>
          <div className="w-24 h-1 bg-primary/50 mx-auto rounded-full mt-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card rounded-3xl overflow-hidden flex flex-col h-full group transition-all duration-300 hover:-translate-y-2 ${project.border}`}
            >
              {/* Project Header visual area */}
              <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
                <span className="text-6xl relative z-10 drop-shadow-xl transform group-hover:scale-110 transition-transform duration-500">{project.icon}</span>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-2">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{project.context}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-display">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="space-y-4 mb-6">
                  <h4 className="text-sm font-semibold text-white/80 flex items-center gap-2">
                    <Layers size={16} /> Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="glass" className="bg-white/5 hover:bg-white/10">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

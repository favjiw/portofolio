import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Abstract geometric background" 
          className="w-full h-full object-cover opacity-30 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          <span className="text-sm font-medium text-muted-foreground">Available for opportunities</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight mb-6 max-w-4xl"
        >
          Hi, I'm <br className="md:hidden" />
          <span className="text-gradient">Muhammad Favian</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl font-light"
        >
          Mobile & Web Developer | Computer Science Student
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12"
        >
          <a href="#projects">
            <Button size="lg" className="w-full sm:w-auto group">
              View My Work
            </Button>
          </a>
          <a href="#contact">
            <Button size="lg" variant="glass" className="w-full sm:w-auto">
              Get In Touch
            </Button>
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-6"
        >
          <a href="https://github.com/mfavianj" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/mfavianj" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
            <Linkedin size={24} />
          </a>
          <a href="mailto:mfavianj@gmail.com" className="text-muted-foreground hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
            <Mail size={24} />
          </a>
          <div className="flex items-center gap-2 text-muted-foreground ml-4 pl-6 border-l border-white/10">
            <MapPin size={20} className="text-primary" />
            <span className="text-sm">Bandung, Indonesia</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}

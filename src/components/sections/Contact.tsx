import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-black/40 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 text-primary rounded-2xl mb-6 border border-primary/20">
            <Send size={32} />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Let's build something <span className="text-gradient">amazing.</span></h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
            I'm currently open to new opportunities, collaborations, and interesting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-16"
        >
          <a href="mailto:mfavianj@gmail.com" className="group">
            <div className="glass-card p-6 rounded-2xl flex flex-col items-center gap-3 hover:bg-primary/5 hover:border-primary/30 transition-all">
              <Mail className="text-primary group-hover:scale-110 transition-transform" size={28} />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email Me At</p>
                <p className="text-lg font-medium text-white">mfavianj@gmail.com</p>
              </div>
            </div>
          </a>
          <a href="tel:+6282117778311" className="group">
            <div className="glass-card p-6 rounded-2xl flex flex-col items-center gap-3 hover:bg-primary/5 hover:border-primary/30 transition-all">
              <Phone className="text-primary group-hover:scale-110 transition-transform" size={28} />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Call Me At</p>
                <p className="text-lg font-medium text-white">+62 821-1777-8311</p>
              </div>
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <a href="https://linkedin.com/in/mfavianj" target="_blank" rel="noreferrer">
              <Button variant="glass" size="icon" className="rounded-full w-14 h-14">
                <Linkedin size={24} />
              </Button>
            </a>
            <a href="https://github.com/mfavianj" target="_blank" rel="noreferrer">
              <Button variant="glass" size="icon" className="rounded-full w-14 h-14">
                <Github size={24} />
              </Button>
            </a>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin size={18} className="text-primary" />
            <span>Based in Bandung, Indonesia</span>
          </div>
        </motion.div>
      </div>
      
      {/* Footer minimal */}
      <div className="absolute bottom-0 left-0 right-0 py-6 text-center border-t border-white/5 mt-20">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Muhammad Favian Jiwani. All rights reserved.
        </p>
      </div>
    </section>
  );
}

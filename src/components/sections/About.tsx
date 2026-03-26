import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Code2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-24 h-1 bg-primary/50 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a passionate <strong className="text-white font-medium">Computer Science student</strong> at Universitas Komputer Indonesia (UNIKOM) with a deep interest in software development, particularly in creating seamless mobile and web experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a strong foundation in <strong className="text-white font-medium">Flutter and Laravel</strong>, I've transformed ideas into award-winning applications at national hackathons. I don't just write code; I strive to build intuitive, user-centric products that solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond development, I actively mentor junior programmers, fostering a collaborative learning environment and continuously expanding my technical horizons.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid gap-6"
          >
            <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <GraduationCap size={64} />
              </div>
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="p-3 bg-primary/20 text-primary rounded-xl">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Education</h3>
                  <p className="text-sm text-primary">Oct 2027 (Expected)</p>
                </div>
              </div>
              <div className="relative z-10">
                <h4 className="font-semibold text-lg">Universitas Komputer Indonesia (UNIKOM)</h4>
                <p className="text-muted-foreground">Bachelor of Computer Science</p>
                <div className="mt-4 inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
                  <span className="text-sm text-muted-foreground">Current GPA:</span>
                  <span className="font-bold text-white">3.68 / 4.0</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent/20 text-accent rounded-xl">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Relevant Coursework</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Algorithms", "Data Structures", "Software Engineering", "OOP", "Clean Architecture", "Mobile App Dev"].map((course) => (
                  <span key={course} className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-lg border border-white/5">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

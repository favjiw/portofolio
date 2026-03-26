import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Mobile Programmer",
    company: "UNIKOM Codelabs",
    type: "Student Activity",
    period: "Jan 2025 – Present",
    description: "Member of Mobile Programming Research.",
    highlights: [
      "Learned and practiced advanced mobile development using Flutter",
      "Focused on UI/UX design integration with Figma",
      "Participated in active research and development projects"
    ]
  },
  {
    role: "Website Programmer Intern",
    company: "PT Webhade Mandiri Digital Solusi",
    type: "Internship",
    period: "Apr 2022 – Aug 2022",
    description: "Developed front-end websites and internal tools.",
    highlights: [
      "Developed responsive front-end websites using HTML, CSS, JS, and Laravel",
      "Mentored by industry experts on web programming, design patterns, and Git flow",
      "Developed a comprehensive website for internal company use",
      "Facilitated agile development processes using Scrum methodology (Trello)",
      "Ensured code integrity through branching and peer code reviews via GitHub"
    ]
  },
  {
    role: "Flutter Teacher",
    company: "ORBIT",
    type: "Student Activity",
    period: "Jun 2020 – Jan 2022",
    description: "Instructor in the Desktop Programming Division.",
    highlights: [
      "Mentored junior members on fundamental software development concepts (C++, Python)",
      "Taught specialized classes on Flutter and Firebase integration",
      "Organized and led internal workshops and intensive coding sessions",
      "Strengthened public speaking, leadership, and technical teaching skills",
      "Guided teams to compete and win in multiple national-level hackathons"
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Professional <span className="text-gradient">Experience</span></h2>
          <div className="w-24 h-1 bg-primary/50 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-8 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute w-10 h-10 bg-background border-4 border-primary rounded-full -left-[21px] top-0 flex items-center justify-center shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                <Briefcase size={16} className="text-primary" />
              </div>

              <div className="glass-card p-6 md:p-8 rounded-2xl hover:border-primary/30 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-lg font-medium text-muted-foreground">{exp.company}</span>
                      <span className="px-2 py-0.5 rounded text-xs bg-white/10 text-white/70">{exp.type}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-primary/80 bg-primary/10 px-4 py-2 rounded-lg whitespace-nowrap w-fit">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                </div>

                <p className="text-white/80 mb-6 italic border-l-2 border-white/20 pl-4 py-1">
                  {exp.description}
                </p>

                <ul className="space-y-3">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

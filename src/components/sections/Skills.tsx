import { motion } from "framer-motion";
import { Code2, Smartphone, Globe, PenTool, Database, Lightbulb, Languages } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Dart", "Python", "PHP", "JavaScript", "C++", "SQL"]
  },
  {
    title: "Mobile Frameworks",
    icon: Smartphone,
    skills: ["Flutter"]
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["Laravel", "React", "Next.js", "HTML/CSS"]
  },
  {
    title: "Design & Prototyping",
    icon: PenTool,
    skills: ["Figma", "UI/UX Design"]
  },
  {
    title: "Tools & Infrastructure",
    icon: Database,
    skills: ["Git", "GitHub", "GitLab", "Firebase", "Notion", "Trello", "ClickUp"]
  },
  {
    title: "Soft Skills",
    icon: Lightbulb,
    skills: ["Leadership", "Communication", "Collaboration", "Problem-Solving", "Project Management", "Mentoring"]
  },
  {
    title: "Languages",
    icon: Languages,
    skills: ["Indonesian (Native)", "English (Proficient)"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
          <div className="w-24 h-1 bg-primary/50 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-3xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/5 rounded-xl text-primary border border-white/10">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-sm text-muted-foreground hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Award, Trophy, Star, Medal } from "lucide-react";

const awards = [
  { title: "Best Team Software Engineering Academy", org: "Universitas Indonesia Compfest 17", year: "2025", icon: Trophy, color: "text-yellow-400" },
  { title: "2nd Winner Innovation System", org: "Genetic USM", year: "2024", icon: Medal, color: "text-slate-300" },
  { title: "1st Winner Web Design Category", org: "Smart Inotek", year: "2022", icon: Award, color: "text-yellow-400" },
  { title: "1st Winner U.ID Hackathon", org: "PANDI", year: "2022", icon: Trophy, color: "text-yellow-400" },
  { title: "2nd Winner Student Welfare Track & Fan Favorite", org: "Komodhacks 1.0", year: "2022", icon: Star, color: "text-slate-300" },
  { title: "2nd Winner Application Development", org: "Mage 8 ITS", year: "2022", icon: Medal, color: "text-slate-300" },
  { title: "2nd Winner Youth Preneur", org: "Permata", year: "2022", icon: Medal, color: "text-slate-300" },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Awards & <span className="text-gradient">Achievements</span></h2>
          <div className="w-24 h-1 bg-primary/50 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card p-5 rounded-2xl flex items-center gap-5 hover:bg-white/5 transition-colors border border-white/5 hover:border-white/10"
              >
                <div className={`p-4 rounded-xl bg-white/5 shrink-0 ${award.color} shadow-inner`}>
                  <Icon size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight mb-1">{award.title}</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">{award.org}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                    <span className="text-primary font-medium">{award.year}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

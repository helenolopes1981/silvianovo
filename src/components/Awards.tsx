import { motion } from "motion/react";
import { mockData } from "../data/mockData";
import { Award, Star, Trophy } from "lucide-react";

const icons = [Award, Star, Trophy];

export const Awards = () => {
  return (
    <section id="prêmios" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-4"
            >
              Reconhecimento de Uma Trajetória Brilhante
            </motion.h2>
          </div>
          <div className="text-blood font-display italic text-xl">
            Excelência comprovada em cada nota.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockData.awards.map((award, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-dark p-10 rounded-3xl border border-white/5 hover:border-blood/30 transition-all group"
              >
                <div className="w-14 h-14 bg-blood/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blood group-hover:text-white transition-colors text-blood">
                  <Icon size={28} />
                </div>
                <div className="text-blood font-bold text-sm mb-2 tracking-widest uppercase">
                  {award.year}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">
                  {award.title}
                </h3>
                <p className="text-white/40 text-sm">
                  {award.organization}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

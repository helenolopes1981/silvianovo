import { motion } from "motion/react";
import { mockData } from "../data/mockData";

export const About = () => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              {mockData.about.title}
            </h2>
            <article className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>{mockData.about.content}</p>
              <p>
                Nossa missão é elevar a imagem do seu evento através de uma performance que combina técnica, carisma e um repertório cuidadosamente selecionado para o seu público.
              </p>
            </article>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="glass p-6 rounded-2xl">
                <div className="text-2xl font-bold text-blood mb-1">Profissionalismo</div>
                <div className="text-sm text-white/50">Equipamentos de ponta e pontualidade.</div>
              </div>
              <div className="glass p-6 rounded-2xl">
                <div className="text-2xl font-bold text-blood mb-1">Versatilidade</div>
                <div className="text-sm text-white/50">Do acústico ao show completo.</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 relative"
          >
            <div className="aspect-square rounded-full overflow-hidden border-8 border-white/5 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1514525253361-bee8718a74a2?auto=format&fit=crop&q=80&w=800" 
                alt="Sílvia em Performance" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blood/10 rounded-full blur-[100px] z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import { motion } from "motion/react";
import { mockData } from "../data/mockData";
import { MessageCircle, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blood/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blood/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            {mockData.hero.title.split(":").map((part, i) => (
              <span key={i} className={i === 1 ? "text-blood block" : "block"}>
                {part}{i === 0 ? ":" : ""}
              </span>
            ))}
          </h1>
          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
            {mockData.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={mockData.hero.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blood hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blood/20"
            >
              <MessageCircle size={20} />
              <span>{mockData.hero.cta}</span>
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projetos"
              className="glass hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <span>Ver Projetos</span>
              <ArrowRight size={20} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden glass p-2">
            <img 
              src={mockData.about.image} 
              alt="Sílvia Banda Enigma" 
              className="w-full h-full object-cover rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Stats Card */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-6 -left-6 glass-dark p-6 rounded-2xl border border-white/10"
          >
            <div className="text-3xl font-display font-bold text-blood">25+</div>
            <div className="text-xs uppercase tracking-widest text-white/50">Anos de Carreira</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

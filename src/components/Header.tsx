import { motion } from "motion/react";
import { mockData } from "../data/mockData";
import { MessageCircle } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-3">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-display font-bold text-white"
        >
          Sílvia <span className="text-blood">Banda Enigma</span>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8">
          {["Home", "Sobre", "Projetos", "Prêmios", "Contato"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={mockData.hero.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blood hover:bg-red-700 text-white px-5 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 transition-colors"
        >
          <MessageCircle size={18} />
          <span>Orçamento</span>
        </motion.a>
      </nav>
    </header>
  );
};

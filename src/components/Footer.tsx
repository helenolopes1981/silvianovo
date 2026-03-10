import { mockData } from "../data/mockData";
import { Instagram, Facebook, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-display font-bold mb-2">
              Sílvia <span className="text-blood">Banda Enigma</span>
            </div>
            <p className="text-white/40 text-sm">
              Copyright © 2026 Sílvia Banda Enigma. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href={mockData.social.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/60 hover:text-blood hover:border-blood transition-all"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href={mockData.social.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/60 hover:text-blood hover:border-blood transition-all"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a 
              href={mockData.social.youtube} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/60 hover:text-blood hover:border-blood transition-all"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

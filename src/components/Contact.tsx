import { motion } from "motion/react";
import { mockData } from "../data/mockData";
import { Send, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import React, { useState } from "react";

export const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! (Mock)");
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Vamos Criar Momentos Inesquecíveis Juntos!
            </h2>
            <p className="text-white/60 text-lg mb-12">
              Seja para um evento corporativo, casamento ou branding de marca, estamos prontos para entregar a melhor experiência musical.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-blood">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-white/40 uppercase tracking-widest">Telefone</div>
                  <div className="text-lg font-medium">+55 (00) 00000-0000</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-blood">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-white/40 uppercase tracking-widest">E-mail</div>
                  <div className="text-lg font-medium">contato@silviabandaenigma.com.br</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-blood">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-white/40 uppercase tracking-widest">Localização</div>
                  <div className="text-lg font-medium">São Paulo, SP - Atendemos todo o Brasil</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-dark p-8 md:p-12 rounded-3xl border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-2">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blood transition-colors"
                  placeholder="Seu nome aqui"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">E-mail Corporativo</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blood transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-2">Detalhes do Evento</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blood transition-colors resize-none"
                  placeholder="Conte-nos sobre seu evento..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blood hover:bg-red-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blood/20"
              >
                <Send size={20} />
                <span>Enviar Solicitação</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={mockData.hero.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl z-50"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={32} />
      </motion.a>
    </section>
  );
};

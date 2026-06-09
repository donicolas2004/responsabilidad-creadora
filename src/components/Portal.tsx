/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { WisdomEyeLogo, SymmetricalLockIcon } from './Icons';
import { AppRoute } from '../types';

interface PortalProps {
  onNavigate: (route: AppRoute) => void;
}

export const Portal: React.FC<PortalProps> = ({ onNavigate }) => {
  return (
    <div id="portal-root" className="min-h-screen w-full relative overflow-hidden bg-radial-glow flex flex-col justify-between p-6 md:p-12">
      
      {/* Background ambient lighting effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-blue/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-gold/10 blur-[120px] pointer-events-none" />

      {/* TOP: Name branding */}
      <header className="w-full flex justify-center py-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center flex flex-col items-center"
        >
          <span className="text-sm md:text-md font-semibold tracking-[0.4em] md:tracking-[0.6em] text-white/90 uppercase opacity-90 block font-sans">
            N I C O L Á S &nbsp; O S O R I O
          </span>
          <a
            id="cta-whatsapp-portal"
            href="https://wa.me/32492363935?text=Hola%20Nicol%C3%A1s%2C%20vengo%20de%20tu%20web%20y%20quiero%20ponerme%20en%20contacto%20contigo."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2 mt-4 border border-white/10 hover:border-brand-blue/60 bg-white/5 hover:bg-brand-blue/5 text-[10px] md:text-xs font-semibold tracking-wider text-white/90 hover:text-white rounded-full transition-all duration-300 font-sans"
          >
            Ponte en contacto conmigo vía WhatsApp
          </a>
        </motion.div>
      </header>

      {/* CENTER: Dual-Option Selector */}
      <main className="flex-grow flex items-center justify-center py-8 z-10 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
          
          {/* CUBE 1: CÓDIGO EXPANSIÓN CONSCIENTE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <div 
              id="cube-cec-portal"
              className="glass-cube flex-grow flex flex-col justify-between p-8 md:p-12 rounded-2xl cursor-pointer select-none relative overflow-hidden group border-brand-blue/25 hover:border-brand-gold/80 hover:shadow-[0_0_35px_rgba(255,210,48,0.15)]"
              onClick={() => onNavigate('cec')}
            >
              {/* Subtle background highlight on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div>
                {/* Header label */}
                <div className="text-xs uppercase font-semibold tracking-[0.3em] text-brand-blue mb-6 group-hover:text-brand-gold transition-colors duration-500 font-sans">
                  MEMBRESÍA & COMUNIDAD
                </div>

                {/* Vector Logo Section */}
                <div className="my-8 md:my-12 flex justify-center items-center">
                  <div className="relative flex items-center justify-center w-[160px] h-[160px]">
                    <WisdomEyeLogo size={140} className="transform group-hover:scale-110 transition-transform duration-700 z-10 flex items-center justify-center" />
                    {/* Glowing effect inside eye iris */}
                    <div className="absolute inset-0 rounded-full blur-xl bg-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3.5xl font-black tracking-tighter text-white mb-4 uppercase leading-tight font-sans">
                  CÓDIGO EXPANSIÓN<br />CONSCIENTE
                </h2>

                {/* Subtitle / Paragraph */}
                <p className="text-sm text-text-secondary leading-relaxed font-normal group-hover:text-white/90 transition-colors duration-500 font-sans">
                  Rompe tus patrones inconscientes, recupera claridad y construye una vida alineada contigo.
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-8 pt-6 border-t border-brand-blue/15 flex justify-between items-center group-hover:border-brand-gold/35 transition-colors duration-500">
                <span className="text-xs font-bold tracking-[0.2em] text-white font-sans uppercase">
                  Descúbrelo
                </span>
                <motion.span 
                  className="text-brand-blue font-bold text-lg group-hover:translate-x-2 group-hover:text-brand-gold transition-all duration-300"
                >
                  →
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* CUBE 2: EXPANSIÓN EXTREMA */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <div 
              id="cube-ee-portal"
              className="glass-cube flex-grow flex flex-col justify-between p-8 md:p-12 rounded-2xl cursor-pointer select-none relative overflow-hidden group border-brand-blue/25 hover:border-brand-gold/80 hover:shadow-[0_0_35px_rgba(255,210,48,0.15)]"
              onClick={() => onNavigate('expansion-extrema')}
            >
              {/* Subtle background highlight on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div>
                {/* Header label */}
                <div className="text-xs uppercase font-semibold tracking-[0.3em] text-brand-gold mb-6 group-hover:text-brand-blue transition-colors duration-500 font-sans">
                  ACOMPAÑAMIENTO PRIVADO 1:1
                </div>

                {/* Vector Logo Section */}
                <div className="my-8 md:my-12 flex justify-center items-center">
                  <div className="relative flex items-center justify-center w-[160px] h-[160px]">
                    <SymmetricalLockIcon size={140} className="transform group-hover:scale-110 transition-transform duration-700 z-10 flex items-center justify-center" />
                    {/* Glowing effect inside lock */}
                    <div className="absolute inset-0 rounded-full blur-xl bg-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3.5xl font-black tracking-tighter text-white mb-4 uppercase leading-tight font-sans">
                  EXPANSIÓN<br />EXTREMA
                </h2>

                {/* Subtitle / Paragraph */}
                <p className="text-sm text-text-secondary leading-relaxed font-normal group-hover:text-white/90 transition-colors duration-500 font-sans">
                  Acompañamiento privado para transformar tu mente, tus decisiones y tu realidad desde la raíz.
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-8 pt-6 border-t border-brand-blue/15 flex justify-between items-center group-hover:border-brand-gold/35 transition-colors duration-500">
                <span className="text-xs font-bold tracking-[0.2em] text-white font-sans uppercase">
                  Descúbrelo
                </span>
                <motion.span 
                  className="text-brand-gold font-bold text-lg group-hover:translate-x-2 group-hover:text-brand-blue transition-all duration-300"
                >
                  →
                </motion.span>
              </div>
            </div>
          </motion.div>

        </div>
      </main>

      {/* BOTTOM: Social Icons & Copyright */}
      <footer className="w-full flex flex-col md:flex-row justify-between items-center gap-4 pt-4 md:pt-0 z-10 border-t border-white/5 opacity-80">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="text-[10px] tracking-wider text-text-secondary text-center md:text-left font-sans font-semibold"
        >
          © Nicolás Osorio. Todos los derechos reservados.
        </motion.div>

        {/* Fixed/Sticky style social links display */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex space-x-6 md:space-x-8 text-xs font-semibold tracking-widest text-text-secondary font-sans"
        >
          <a
            id="link-instagram-portal"
            href="https://www.instagram.com/donicolasosorio/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-blue transition-colors duration-300 relative group py-1"
          >
            Instagram
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-blue transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            id="link-youtube-portal"
            href="https://youtube.com/@donicolasosorio?si=2JOnj0ZvUKxZ7i1-"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-gold transition-colors duration-300 relative group py-1"
          >
            YouTube
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-gold transition-all duration-300 group-hover:w-full" />
          </a>
        </motion.div>
      </footer>
    </div>
  );
};

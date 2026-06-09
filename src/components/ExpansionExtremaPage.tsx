/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SymmetricalLockIcon } from './Icons';
import { AppRoute, FAQItem } from '../types';
import { ArrowLeft, ChevronDown, Check, ShieldAlert, Zap, Compass, Users } from 'lucide-react';

interface ExpansionExtremaPageProps {
  onNavigate: (route: AppRoute) => void;
}

export const ExpansionExtremaPage: React.FC<ExpansionExtremaPageProps> = ({ onNavigate }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Back to top on screen change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const benefits11 = [
    {
      title: "Sesiones Privadas",
      description: "Sesiones de alto impacto. Estructura personalizada combinando psicoterapia profunda, PNL neurobiológica y desprogramación profunda de tu sistema de creencias limitantes.",
      icon: <Zap className="text-brand-gold" size={20} />
    },
    {
      title: "Seguimiento Diario Continuo",
      description: "Contacto diario íntimo y directo vía WhatsApp. No estás solo ante las decisiones difíciles o bloqueos emocionales; Nicolás te acompaña en tiempo real.",
      icon: <Users className="text-brand-gold" size={20} />
    },
    {
      title: "Planeación de Acción Quirúrgica",
      description: "Plan de dirección de vida y negocio milimétrico. Trazado estratégico adaptado íntegramente a tus ambiciones de negocio y paz mental existencial.",
      icon: <Compass className="text-brand-gold" size={20} />
    },
    {
      title: "Mentalidad Corporativa & Liderazgo",
      description: "Integración estratégica de alto rendimiento. Para sostener el crecimiento de tu negocio mediante la reconstrucción absoluta de tu identidad ejecutiva.",
      icon: <ShieldAlert className="text-brand-gold" size={20} />
    }
  ];

  const faqs11: FAQItem[] = [
    {
      question: "¿A quién va dirigido este programa?",
      answer: "A empresarios, fundadores, freelancers y ejecutivos de alto rendimiento que ya facturan, que ya comprenden 'lo que tienen que hacer', pero perciben una barrera interna invisible (estrés recurrente, procrastinación inteligente, dudas de liderazgo) que está deteniendo la escala de su impacto."
    },
    {
      question: "¿Cómo funciona el proceso de entrevista de selección?",
      answer: "No puedes acceder directamente pagando. Para unirte, debes agendar una llamada de claridad conmigo por WhatsApp. Conversaremos a fondo sobre tus retos de identidad actuales y verificaremos recíprocamente si el acelerador es el adecuado para ti."
    },
    {
      question: "¿Cuál es la duración exacta y el nivel de compromiso?",
      answer: "La duración es de 3 meses de acompañamiento absoluto. Requiere que estés dispuesto a mirar tus puntos débiles emocionales con total honestez racional y mantener una conversación directa con feedback continuo."
    },
    {
      question: "¿Qué nivel de disponibilidad tengo con Nicolás?",
      answer: "Máxima prioridad de respuesta. Tienes acceso personal vía chat y notas de voz durante las semanas hábiles para solventar crisis mentales de toma de decisiones en tu día a día de manera ágil."
    }
  ];

  // Configured with Spanish formatting for luxury WhatsApp contact funnel
  const whatsappUrl = `https://wa.me/32492363935?text=Hola%20Nicol%C3%A1s%2C%20quiero%20aplicar%20al%20acompa%C3%B1amiento%201%3A1%20de%20Expansi%C3%B3n%20Extrema.`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#01040a] via-dark-bg to-[#030814] relative overflow-x-hidden text-white pb-24">
      
      {/* Absolute Dark atmospheric background particles */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-brand-gold/5 via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute middle-0 left-[-15%] w-[50%] h-[50%] rounded-full bg-brand-gold/3 blur-[180px] pointer-events-none" />

      {/* STICKY BAR */}
      <nav id="nav-expansion-subpage" className="sticky top-0 w-full z-40 bg-[#01040a]/80 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between">
        <button
          id="btn-back-to-portal-ee"
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-2.5 text-xs font-bold tracking-[0.2em] uppercase text-text-secondary hover:text-white transition-colors duration-300 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1.5 transition-transform duration-300" />
          <span>PORTAL PRINCIPAL</span>
        </button>
        <span className="text-[10px] tracking-[0.4em] font-semibold text-brand-gold/70 hidden sm:inline">
          NICOLÁS OSORIO — EXPANSIÓN EXTREMA 1:1
        </span>
        <a
          id="btn-nav-apply-ee"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[9px] font-extrabold tracking-[0.25em] bg-brand-gold/10 hover:bg-brand-gold hover:text-dark-bg text-brand-gold border border-brand-gold/30 px-4 py-1.5 rounded-full transition-all duration-300 uppercase animate-pulse"
        >
          APLICAR DIRECTO
        </a>
      </nav>

      {/* ==================================================
          SECTION 1: HERO
          ================================================== */}
      <section className="relative pt-20 pb-16 md:py-32 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto z-10 font-sans">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex items-center justify-center w-[170px] h-[170px] relative rounded-full border border-brand-gold/30 shadow-[0_0_25px_rgba(255,210,48,0.15)] bg-dark-bg/60 mx-auto"
        >
          <SymmetricalLockIcon size={110} className="flex items-center justify-center text-brand-gold" />
          <div className="absolute inset-0 rounded-full blur bg-brand-gold/5 pointer-events-none" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-xs font-semibold tracking-[0.42em] text-brand-gold uppercase block mb-6">
            CONTRAL CONTEXTO DE ÉLITE
          </span>
          
          <h1 className="text-3xl sm:text-5xl md:text-6.5xl font-black tracking-tight uppercase max-w-4xl mx-auto leading-[1.05] text-white">
            PARA QUIENES YA NO QUIEREN <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-white">ENTENDER MÁS</span>.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 mb-8"
        >
          <h2 className="text-xl sm:text-3xl font-black tracking-widest text-brand-gold uppercase glow-gold">
            QUIEREN TRANSFORMARSE.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-sm sm:text-lg text-text-secondary max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Acompañamiento privado 1:1 del más alto estándar durante 3 meses con Nicolás Osorio. 
          <br />
          <span className="text-white font-semibold mt-2 block">Capacidad máxima estructural: 10 personas simultáneas.</span>
        </motion.p>
      </section>

      {/* ==================================================
          SECTION 2: EL ACOMPAÑAMIENTO (GRID OF BLOCKS)
          ================================================== */}
      <section className="py-16 md:py-24 max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-xs font-bold tracking-[0.3em] text-brand-gold uppercase block mb-3">LOS PILARES DE CONTENCIÓN</span>
          <h2 className="text-2xl md:text-4.5xl font-black tracking-tighter uppercase text-white">
            ESTRUCTURALMENTE ESTÁS PROTEGIDO
          </h2>
          <p className="text-sm text-text-secondary mt-3 max-w-md mx-auto">
            Cuatro dimensiones exclusivas diseñadas para desprogramar tu identidad limitante y reprogramar tu escala.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits11.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="glass-cube p-8 md:p-10 rounded-2xl border-brand-gold/15 hover:border-brand-gold/100 hover:shadow-[0_0_25px_rgba(255,210,48,0.15)] transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {benefit.icon}
                </div>
                
                <h3 className="text-lg md:text-xl font-black tracking-tight text-white mb-4 uppercase group-focus:text-brand-gold group-hover:text-brand-gold transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-normal">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 text-[9px] font-bold tracking-widest text-[#FFD230]/70 uppercase">
                EXCLUSIVO 1:1 ACELERADOR
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==================================================
          SECTION 3: PREGUNTAS FRECUENTES (Accordions)
          ================================================== */}
      <section className="py-16 md:py-24 max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-brand-gold uppercase block mb-3">CRITERIOS DE SELECCIÓN</span>
          <h2 className="text-2xl md:text-4.5xl font-black tracking-tighter uppercase text-white">
            RESOLVIENDO LO MÁS CRÍTICO
          </h2>
          <p className="text-sm text-text-secondary mt-3">
            El verdadero 1:1 requiere un alineamiento absoluto. Despeja el proceso.
          </p>
        </div>

        <div className="space-y-4">
          {faqs11.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div 
                key={index} 
                className="glass-cube rounded-lg border-white/5 overflow-hidden"
              >
                <button
                  id={`btn-faq-ee-${index}`}
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full text-left p-5 md:p-6 flex justify-between items-center transition-all focus:outline-none group"
                >
                  <span className="text-xs md:text-sm uppercase font-extrabold tracking-wider text-white group-hover:text-brand-gold transition-colors duration-300">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    size={18} 
                    className={`text-brand-gold transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-blue' : ''}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 md:px-6 md:pb-8 text-xs md:text-sm text-text-secondary leading-relaxed font-medium border-t border-white/5 pt-4 bg-brand-gold/3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================================================
          SECTION 4: THE PRIVATE GATEWAY
          ================================================== */}
      <section className="py-12 md:py-24 max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="glass-cube p-8 md:p-12 rounded-3xl border-brand-gold/60 bg-gradient-to-b from-[#0b0f19] to-[#010307] text-center relative"
        >
          {/* Subtle design features */}
          <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 bg-brand-gold text-dark-bg text-[10px] font-black tracking-[0.3em] uppercase py-1.5 px-6 rounded-full shadow-xl">
            Requisitos para acceder al acelerador
          </div>

          <h3 className="text-2xl md:text-3.5xl font-black uppercase text-white mb-6 tracking-tight mt-4">
            ENTRADA BAJO FILTRO DIRECTO
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto mb-10 pt-4 border-y border-white/5 py-8 text-xs text-text-secondary">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <Check size={14} className="text-brand-gold" />
                <span className="font-extrabold text-white">REQUISITO 1</span>
              </div>
              <p className="leading-relaxed">Compromiso radical para confrontar y reescribir tu propia identidad limitante sin rodeos.</p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <Check size={14} className="text-brand-gold" />
                <span className="font-extrabold text-white">REQUISITO 2</span>
              </div>
              <p className="leading-relaxed">Suficiencia financiera para invertir en ti mismo en un acelerador premium de alta velocidad.</p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <Check size={14} className="text-brand-gold" />
                <span className="font-extrabold text-white">REQUISITO 3</span>
              </div>
              <p className="leading-relaxed">Asumir el 100% de la responsabilidad existencial sobre tus decisiones de vida y negocio.</p>
            </div>
          </div>

          <p className="text-xs text-text-secondary max-w-md mx-auto mb-8 leading-relaxed font-medium">
            Si cumples las tres condiciones precedentes, puedes solicitar tu entrevista personal con Nicolás para valorar tu idoneidad técnica.
          </p>

          <a
            id="btn-apply-whatsapp-ee"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto px-10 py-5 bg-brand-gold hover:bg-white text-dark-bg transition-colors duration-300 font-extrabold text-xs tracking-[0.25em] rounded-xl items-center justify-center space-x-3 shadow-[0_5px_30px_rgba(255,210,48,0.2)] uppercase"
          >
            <span>SOLICITAR MI ACOMPAÑAMIENTO 1:1</span>
            <span className="text-lg">→</span>
          </a>

          <div className="text-[10px] text-brand-gold/60 mt-4 tracking-widest font-semibold uppercase">
            REDIRECCIÓN DIRECTA A WHATSAPP PRIVADO DE NICOLÁS
          </div>
        </motion.div>
      </section>

    </div>
  );
};

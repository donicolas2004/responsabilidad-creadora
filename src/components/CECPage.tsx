/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { WisdomEyeLogo } from './Icons';
import { AppRoute, TimelineStep, EcosystemCard, FAQItem, PricingPlan } from '../types';
import { ArrowLeft, Check, Sparkles, AlertCircle, HelpCircle, ChevronDown, Award } from 'lucide-react';

interface CECPageProps {
  onNavigate: (route: AppRoute) => void;
}

// Custom word-by-word scroll highlighting component using Intersection Observer
const ScrollHighlightText: React.FC<{ text: string }> = ({ text }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollFraction, setScrollFraction] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how close the center of the text is to the center of the viewport
      const centerOfText = rect.top + rect.height / 2;
      const centerOfViewport = viewportHeight / 2;
      
      // Target range: starts fading in at bottom 80% and completes at middle 50%
      const startFade = viewportHeight * 0.85;
      const endFade = viewportHeight * 0.45;
      
      let fraction = (startFade - rect.top) / (startFade - endFade);
      fraction = Math.max(0, Math.min(1, fraction));
      setScrollFraction(fraction);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger initial calculation
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const words = text.split(' ');

  return (
    <div ref={containerRef} className="inline-block transition-all duration-300">
      {words.map((word, index) => {
        // Calculate factor threshold for individual word highlighting
        const wordThreshold = index / words.length;
        const isHighlighted = scrollFraction > wordThreshold;
        
        return (
          <span
            key={index}
            className="inline-block mr-1.5 transition-all duration-500 ease-out"
            style={{
              opacity: isHighlighted ? 1 : 0.15,
              color: isHighlighted ? '#FFFFFF' : '#A0A0A0',
              textShadow: isHighlighted ? '0 0 12px rgba(255, 255, 255, 0.45)' : 'none',
              transform: isHighlighted ? 'scale(1.02)' : 'scale(1)',
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

export const CECPage: React.FC<CECPageProps> = ({ onNavigate }) => {
  // Timeline path drawing state based on containing section scroll
  const timelineSectionRef = useRef<HTMLDivElement>(null);
  const [timelineProgress, setTimelineProgress] = useState(0);

  // States for accordions
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Live scroll listener for timeline SVG height
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineSectionRef.current) return;
      const rect = timelineSectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Compute progress: begins when the top of timeline section crosses viewport middle,
      // completes when the bottom of timeline section crosses viewport middle.
      const totalHeight = rect.height;
      const entryPoint = viewportHeight / 2;
      const scrolled = entryPoint - rect.top;
      
      let progress = scrolled / totalHeight;
      progress = Math.max(0, Math.min(1, progress));
      setTimelineProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Back to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // DATA DEFINITIONS

  const steps: TimelineStep[] = [
    {
      id: 'step1',
      stepNumber: 'Paso 1.',
      title: 'RECONOCE.',
      glowColor: 'blue',
      content: 'Haz consciente aquello que lleva años dirigiendo tu vida desde las sombras. Aprenderás a identificar:',
      bullets: [
        "✓ Patrones inconscientes",
        "✓ Heridas emocionales",
        "✓ Creencias limitantes",
        "✓ Mecanismos de auto sabotaje",
        "✓ Relaciones que drenan tu energía"
      ]
    },
    {
      id: 'step2',
      stepNumber: 'Paso 2.',
      title: 'REPROGRAMA.',
      glowColor: 'gold',
      content: 'Transforma la identidad que te mantiene atrapado por una que impulse tu crecimiento. Aprenderás a:',
      bullets: [
        "✓ Fortalecer tu mentalidad",
        "✓ Construir hábitos sólidos",
        "✓ Desarrollar amor propio real",
        "✓ Elevar tu liderazgo interno",
        "✓ Crear una relación sana con la abundancia"
      ]
    },
    {
      id: 'step3',
      stepNumber: 'Paso 3.',
      title: 'RESPONDE.',
      glowColor: 'blue',
      content: 'Deja de reaccionar a la vida y empieza a dirigirla conscientemente. Aprenderás a:',
      bullets: [
        "✓ Tomar decisiones alineadas",
        "✓ Dejar atrás las excusas",
        "✓ Encontrar dirección y propósito",
        "✓ Actuar con coherencia",
        "✓ Crear una vida en expansión constante"
      ]
    }
  ];

  const ecosystem: EcosystemCard[] = [
    {
      title: "01. MÉTODO 3R COMPLETO.",
      description: "La ruta paso a paso para reconocer, reprogramar y responder desde una nueva identidad.",
      iconName: "1",
      bullets: [
        "✓ Más de 10 módulos de transformación.",
        "✓ Ejercicios prácticos de integración.",
        "✓ Herramientas aplicables a tu día a día.",
        "✓ Evolución estructurada de principio a fin."
      ]
    },
    {
      title: "02. MENTORÍAS GRUPALES EN DIRECTO.",
      description: "Para acompañarte y sostener tu evolución durante todo el proceso.",
      iconName: "2",
      bullets: [
        "✓ Sesiones de Claridad semanales (miércoles 20:30h España) con Nicolás.",
        "✓ Resolución directa de bloqueos e interrogantes.",
        "✓ Espacio seguro para compartir tus procesos reales.",
        "✓ Integración y claridad práctica del contenido."
      ]
    },
    {
      title: "03. COMUNIDAD PRIVADA.",
      description: "Rodéate de un entorno y personas comprometidas con su crecimiento constante.",
      iconName: "3",
      bullets: [
        "✓ Plataforma Skool interactiva libre de ruido.",
        "✓ Conversaciones e interacciones conscientes.",
        "✓ Apoyo constante del círculo de alta vibración.",
        "✓ Sinergias alineadas estrictamente con tu camino."
      ]
    },
    {
      title: "04. RECURSOS DE REPROGRAMACIÓN.",
      description: "Herramientas de acción rápida para pasar de entender a transformar.",
      iconName: "4",
      bullets: [
        "✓ Retos semanales y dinámicas guiadas.",
        "✓ Ejercicios de integración prácticos.",
        "✓ Meditaciones y audios de frecuencia.",
        "✓ Recursos y PDFs de aplicación diaria."
      ]
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: "¿Es para mí si estoy empezando en el desarrollo personal?",
      answer: "Sí. Aunque gran parte de nuestros miembros ya han consumido contenido de crecimiento personal, el sistema de CEC está diseñado paso a paso para cualquier persona comprometida con su evolución real."
    },
    {
      question: "¿Necesito experiencia previa?",
      answer: "No. Solo requieres de apertura, honestidad radical contigo mismo y verdadero compromiso con tu proceso de transformación."
    },
    {
      question: "¿Cuánto tiempo necesito dedicarle?",
      answer: "El avance dependerá enteramente de tu propio ritmo de vida. Recuerda que aquí lo importante no es consumir de manera pasiva más contenido, sino integrar lo aprendido en tus acciones."
    },
    {
      question: "¿Tendré acompañamiento real?",
      answer: "Sí. Las mentorías de claridad en vivo y la interacción dentro de la comunidad privada están estructuradas precisamente para sostener tu evolución y darte dirección."
    }
  ];

  return (
    <div className="min-h-screen bg-radial-glow relative overflow-x-hidden text-white pb-20">
      
      {/* Decorative Blur Spheres */}
      <div className="absolute top-0 right-[-10%] w-[60%] h-[40%] rounded-full bg-brand-blue/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-[35%] left-[-15%] w-[60%] h-[50%] rounded-full bg-brand-gold/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[45%] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

      {/* STICKY TOP NAVIGATION BAR */}
      <nav id="nav-cec-subpage" className="sticky top-0 w-full z-40 bg-dark-bg/80 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between">
        <button
          id="btn-back-to-portal-cec"
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-2.5 text-xs font-bold tracking-[0.2em] uppercase text-text-secondary hover:text-white transition-colors duration-300 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1.5 transition-transform duration-300" />
          <span>PORTAL PRINCIPAL</span>
        </button>
        <span className="text-[10px] tracking-[0.4em] font-semibold text-white/50 hidden sm:inline">
          NICOLÁS OSORIO — EDICIÓN CEC
        </span>
        <button
          id="btn-nav-pricing-cec"
          onClick={() => {
            const pricingSec = document.getElementById('pricing-plans-section');
            if (pricingSec) pricingSec.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-[10px] font-extrabold tracking-[0.25em] bg-brand-blue/15 hover:bg-brand-blue hover:text-white text-brand-blue border border-brand-blue/30 px-4 py-1.5 rounded-full transition-all duration-300"
        >
          UNIRSE AHORA
        </button>
      </nav>

      {/* ==================================================
          SECTION 1: HERO
          ================================================== */}
      <section className="relative pt-16 pb-20 md:py-32 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex items-center justify-center w-[170px] h-[170px] relative rounded-full border border-brand-blue/30 shadow-[0_0_25px_rgba(0,102,252,0.15)] bg-dark-bg/60 mx-auto"
        >
          <WisdomEyeLogo size={120} className="flex items-center justify-center" />
          <div className="absolute inset-0 rounded-full blur bg-brand-blue/5 pointer-events-none" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-xs font-extrabold tracking-[0.4em] text-brand-blue uppercase bg-brand-blue/10 px-4 py-1.5 rounded-full mb-6 inline-block font-sans">
            EL PUNTO DE INFLEXIÓN MENTAL
          </span>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase max-w-4xl mx-auto text-white leading-[1.1] mb-6 font-sans">
            CÓDIGO EXPANSIÓN<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-gold to-brand-blue bg-300 animate-gradient-flow">CONSCIENTE</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-md sm:text-xl text-text-secondary max-w-3xl mx-auto font-medium leading-relaxed mb-10 font-sans"
        >
          Rompe los patrones que te mantienen estancado y construye una vida con claridad, dirección y propósito.
        </motion.p>

        {/* Scroll down animated prompt */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-300 mt-6"
          onClick={() => {
            const timelineSec = document.getElementById('timeline-progression-section');
            if (timelineSec) timelineSec.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[9px] tracking-[0.3em] font-bold text-brand-gold mb-2">SCROLL DOWN PARA DESCUBRIR EL PROCESO</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13L12 18L17 13" stroke="#FFD230" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 6V18" stroke="#FFD230" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </motion.div>
      </section>

      {/* ==================================================
          SECTION 2: PROCESO DE TRANSFORMACIÓN (TIMELINE)
          ================================================== */}
      <section 
        id="timeline-progression-section" 
        ref={timelineSectionRef} 
        className="py-16 md:py-32 max-w-5xl mx-auto px-4 relative z-10"
      >
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs font-bold tracking-[0.3em] text-brand-gold uppercase block mb-3 font-sans">EL MÉTODO 3R</span>
          <h2 className="text-2xl md:text-4.5xl font-black tracking-tighter uppercase text-white font-sans">
            PROCESO DE TRANSFORMACIÓN
          </h2>
          <p className="text-sm text-text-secondary mt-3 max-w-xl mx-auto font-sans">
            El camino secuencial diseñado para desprogramar tus automatismos mentales y expandirte.
          </p>
        </div>

        {/* Vertical Timeline container */}
        <div className="relative mt-12 md:mt-20">
          
          {/* Timeline Center line (drawn dynamically on scroll progress) */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-24 w-[2px] bg-white/10 -translate-x-1/2" />
          
          {/* Animated active path */}
          <div 
            className="absolute left-4 md:left-1/2 top-4 w-[2.5px] bg-gradient-to-b from-brand-blue via-brand-gold to-brand-blue -translate-x-1/2 transition-all duration-300 ease-out origin-top"
            style={{ height: `${timelineProgress * 100}%` }}
          />

          {/* Map Steps */}
          <div className="space-y-16 md:space-y-28">
            {steps.map((step, index) => {
              const isEven = index % 2 === 1;
              const isActive = timelineProgress >= (index / steps.length) * 0.9;

              return (
                <div 
                  key={step.id} 
                  className={`flex flex-col md:flex-row relative items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline indicator node */}
                  <div 
                    className={`absolute left-4 md:left-1/2 top-1.5 w-7 h-7 rounded-full -translate-x-1/2 z-10 flex items-center justify-center transition-all duration-700 pointer-events-none text-[10px] font-black ${
                      isActive 
                        ? step.glowColor === 'blue' 
                          ? 'bg-brand-blue text-white shadow-[0_0_15px_#0066FC]' 
                          : 'bg-brand-gold text-dark-bg shadow-[0_0_15px_#FFD230]' 
                        : 'bg-dark-bg border border-white/20 text-white/50'
                    }`}
                  >
                    {index + 1}
                  </div>

                  {/* Left spacer block for desktop */}
                  <div className="w-full md:w-1/2 hidden md:block" />

                  {/* Right interactive card block */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-16 pr-4">
                    <motion.div
                      style={{
                        opacity: isActive ? 1 : 0.25,
                        scale: isActive ? 1 : 0.95,
                        y: isActive ? 0 : 30,
                      }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className={`glass-cube p-6 md:p-8 rounded-xl relative overflow-hidden flex flex-col justify-between ${
                        isActive 
                          ? step.glowColor === 'blue' 
                            ? 'border-brand-blue/60 shadow-[0_0_20px_rgba(0,102,252,0.15)]' 
                            : 'border-brand-gold/60 shadow-[0_0_20px_rgba(255,210,48,0.15)]' 
                          : 'border-white/10'
                      }`}
                    >
                      <div>
                        {/* Step tag */}
                        <div className={`text-[10px] font-bold tracking-[0.25em] mb-2 font-sans ${
                          step.glowColor === 'blue' ? 'text-brand-blue' : 'text-brand-gold'
                        }`}>
                          {step.stepNumber}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-black tracking-tight text-white mb-4 uppercase font-sans">
                          {step.title}
                        </h3>

                        {/* High-end text highlighting */}
                        <div className="text-sm md:text-md text-text-secondary leading-relaxed font-semibold font-sans mb-4">
                          <ScrollHighlightText text={step.content} />
                        </div>

                        {step.bullets && (
                          <ul className="mt-4 space-y-2.5 pt-3 border-t border-white/5">
                            {step.bullets.map((bullet, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-xs md:text-sm">
                                <span className={step.glowColor === 'blue' ? 'text-brand-blue font-bold shrink-0' : 'text-brand-gold font-bold shrink-0'}>
                                  ✓
                                </span>
                                <span className="font-sans font-medium text-white/90">{bullet.replace("✓", "").trim()}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {/* Small arrow decor */}
                      <div className="mt-6 flex justify-end">
                        <span className={`text-[9px] font-bold tracking-[0.1em] font-sans ${step.glowColor === 'blue' ? 'text-brand-blue/60' : 'text-brand-gold/60'}`}>
                          ● PROCESO ACTIVADO
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Centered FINAL objective/goal cube (drawn centered on timeline finish) */}
          <div className="mt-24 md:mt-32 w-full flex justify-center px-4 relative">
            <div 
              className={`absolute left-4 md:left-1/2 top-0 h-24 md:h-32 w-[2px] bg-white/5 -translate-x-1/2 -z-10`} 
              style={{ display: timelineProgress > 0.8 / steps.length ? 'block' : 'none' }}
            />
            
            <motion.div
              style={{
                opacity: timelineProgress >= 0.9 ? 1 : 0.15,
                scale: timelineProgress >= 0.9 ? 1 : 0.93,
                y: timelineProgress >= 0.9 ? 0 : 40,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="glass-cube max-w-xl w-full p-8 rounded-2xl border-brand-gold bg-gradient-to-b from-[#0e1628]/80 to-[#040b19]/80 shadow-[0_0_30px_rgba(255,210,48,0.2)] text-center relative"
            >
              <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 bg-brand-gold text-dark-bg text-[10px] font-extrabold tracking-[0.3em] uppercase py-1 px-4 rounded-full shadow-lg font-sans">
                Objetivo final.
              </div>

              <div className="flex justify-center mb-4 mt-2 text-brand-gold">
                <Award size={36} className="animate-pulse" />
              </div>

              <h3 className="text-lg md:text-2xl font-black tracking-tighter uppercase text-white mb-4 font-sans">
                EL OBJETIVO FINAL
              </h3>

              <p className="text-sm md:text-md text-text-secondary leading-relaxed font-semibold max-w-md mx-auto font-sans">
                Convertirte en la persona capaz de construir la vida que desea sin seguir peleando consigo misma.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ==================================================
          SECTION 3: ¿QUÉ INCLUYE? (Grid)
          ================================================== */}
      <section className="py-16 md:py-28 bg-[#040b19]/40 border-y border-white/5 relative z-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <span className="text-xs font-bold tracking-[0.3em] text-brand-blue uppercase block mb-3 font-sans">CONSTRUCCIÓN DEL CONTEXTO</span>
            <h2 className="text-2xl md:text-4.5xl font-black tracking-tighter uppercase text-white font-sans">
              ¿QUÉ INCLUYE?
            </h2>
            <p className="text-sm text-text-secondary mt-3 max-w-xl mx-auto font-sans">
              Todo lo que incluye la membresía de Nicolás Osorio para sostener tu proceso diario.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {ecosystem.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="glass-cube p-6 md:p-8 rounded-xl flex flex-col justify-between border-brand-blue/15 hover:border-brand-blue/60 group cursor-default relative overflow-hidden"
              >
                <div>
                  {/* Decorative big index number */}
                  <div className="text-3xl font-black tracking-tighter text-brand-blue/20 mb-4 group-hover:text-brand-blue/80 transition-colors duration-500 font-mono">
                    0{item.iconName}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide group-hover:text-brand-gold transition-colors duration-500 font-sans">
                    {item.title}
                  </h3>

                  <p className="text-xs text-text-secondary leading-relaxed font-semibold font-sans mb-4 group-hover:text-white/80 transition-colors duration-500">
                    {item.description}
                  </p>

                  {item.bullets && (
                    <ul className="mt-4 space-y-2 pt-3 border-t border-white/5">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-[11px] md:text-xs">
                          <Check size={10} className="text-brand-blue shrink-0" />
                          <span className="font-sans font-medium text-white/90">{bullet.replace("✓", "").trim()}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between opacity-45 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[9px] font-bold tracking-[0.2em] text-white font-sans">CEC INCLUIDO</span>
                  <Check size={12} className="text-brand-blue" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 4: PREGUNTAS FRECUENTES (Accordions)
          ================================================== */}
      <section className="py-16 md:py-28 max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-brand-gold uppercase block mb-3">PREGUNTAS COMUNES</span>
          <h2 className="text-2xl md:text-4.5xl font-black tracking-tighter uppercase text-white">
            DESPEJA TUS DUDAS
          </h2>
          <p className="text-sm text-text-secondary mt-3">
            Todo lo que necesitas saber antes de dar el paso decisivo.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div 
                key={index} 
                className="glass-cube rounded-lg border-white/10 overflow-hidden"
              >
                <button
                  id={`btn-faq-cec-${index}`}
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full text-left p-5 md:p-6 flex justify-between items-center transition-all focus:outline-none focus:ring-1 focus:ring-brand-blue group"
                >
                  <span className="text-sm md:text-md uppercase font-bold tracking-wider text-white group-hover:text-brand-blue transition-colors duration-300">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    size={18} 
                    className={`text-brand-blue transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-gold' : ''}`}
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
                      <div className="px-5 pb-6 md:px-6 md:pb-8 text-xs md:text-sm text-text-secondary leading-relaxed font-medium border-t border-white/5 pt-4 bg-brand-blue/5">
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
          SECTION 5: PLAN SELECTOR (The Conversion Close)
          ================================================== */}
      <section 
        id="pricing-plans-section" 
        className="py-16 md:py-28 bg-gradient-to-t from-dark-bg/80 via-dark-bg/30 to-transparent relative z-10 px-4"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-xs font-bold tracking-[0.3em] text-brand-blue uppercase block mb-3 font-sans">ELIGE TU FORMATO</span>
            <h2 className="text-2xl md:text-4.5xl font-black tracking-tighter uppercase text-white font-sans">
              CÓDIGO EXPANSIÓN CONSCIENTE
            </h2>
            <p className="text-sm text-text-secondary mt-3 font-sans">
              Únete hoy, comienza ahora. Elige el ritmo de tu propia evolución.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            
            {/* PLAN A: ACCESO MENSUAL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-cube p-8 md:p-10 rounded-2xl flex flex-col justify-between border-brand-blue/20 hover:border-brand-blue/60 hover:shadow-[0_0_25px_rgba(0,102,252,0.1)] relative"
            >
              <div>
                <span className="text-[10px] font-bold tracking-[0.3em] text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full uppercase mb-4 inline-block font-sans">
                  PLAN MENSUAL
                </span>
                
                <h3 className="text-xl md:text-2xl font-black uppercase text-white mt-1 font-sans">
                  EVOLUCIÓN CONSTANTE
                </h3>
                <p className="text-xs text-text-secondary mt-1 font-sans">
                  Ideal para comprometerte mes a mes con flexibilidad.
                </p>

                {/* PRICING BLOCK */}
                <div className="my-6 md:my-8">
                  <span className="text-3xl md:text-4xl font-black text-white font-sans">39 USD</span>
                  <span className="text-xs text-text-secondary font-medium tracking-wide font-sans"> / mes</span>
                  <div className="text-[10px] text-text-secondary uppercase tracking-widest mt-1.5 font-sans font-bold text-brand-blue">
                    (Cancela cuando quieras)
                  </div>
                </div>

                {/* BENEFITS */}
                <ul className="space-y-4 pt-6 border-t border-white/5 text-xs text-text-secondary">
                  {[
                    "Acceso completo a todos los Módulos CEC.",
                    "Sesiones de Claridad grupales en directo (Zoom).",
                    "Comunidad privada exclusiva en Skool.",
                    "+30 dinámicas prácticas de introspección.",
                    "Ejercicios diarios y blueprints descargables.",
                    "Soporte dentro de la comunidad."
                  ].map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start space-x-2.5">
                      <Check size={14} className="text-brand-blue shrink-0 mt-0.5" />
                      <span className="font-sans font-medium text-white/90">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* BUTTON REDIRECT */}
              <div className="mt-10">
                <a
                  id="link-checkout-monthly-cec"
                  href="https://www.skool.com/codigo-expansion-consciente-3823/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-4 bg-brand-blue hover:bg-white text-white hover:text-dark-bg font-extrabold text-xs tracking-[0.15em] rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 font-sans uppercase shadow-[0_4px_20px_rgba(0,102,252,0.15)]"
                >
                  <span>ÚNETE A CÓDIGO EXPANSIÓN CONSCIENTE</span>
                  <span>→</span>
                </a>
              </div>
            </motion.div>

            {/* PLAN B: ACCESO ANUAL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="glass-cube p-8 md:p-10 rounded-2xl flex flex-col justify-between border-brand-gold bg-gradient-to-b from-[#10192e] to-dark-bg/90 hover:shadow-[0_0_35px_rgba(255,210,48,0.25)] relative"
            >
              {/* Highlight badge */}
              <div className="absolute top-[-18px] right-6 bg-brand-gold text-dark-bg text-[9px] font-black tracking-[0.3em] uppercase py-1 px-4 rounded-full shadow-lg font-sans">
                ⭐ MÁS RECOMENDADO
              </div>

              <div>
                <span className="text-[10px] font-bold tracking-[0.3em] text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full uppercase mb-4 inline-block font-sans">
                  PLAN ANUAL
                </span>
                
                <h3 className="text-xl md:text-2xl font-black uppercase text-white mt-1 font-sans">
                  COMPROMISO ABSOLUTO
                </h3>
                <p className="text-xs text-text-secondary mt-1 font-sans">
                  Para quienes deciden sostener su evolución a largo plazo.
                </p>

                {/* PRICING BLOCK */}
                <div className="my-6 md:my-8">
                  <span className="text-3xl md:text-4xl font-black text-brand-gold font-sans">380 USD</span>
                  <span className="text-xs text-brand-gold font-bold tracking-wide font-sans"> / año</span>
                  <div className="text-[10px] text-brand-gold font-bold uppercase tracking-widest mt-1.5 font-sans">
                    Ahorra más de un 18% (2 meses gratis).
                  </div>
                </div>

                {/* BENEFITS */}
                <ul className="space-y-4 pt-6 border-t border-brand-gold/15 text-xs text-text-secondary">
                  {[
                    "Acceso completo durante todo el año.",
                    "Acceso completo ilimitado por 12 meses.",
                    "Todo lo incluido en el plan mensual ordinario.",
                    "Propuestas/consultas prioritarias en directos.",
                    "Soporte uno a uno en inicio de setup en Skool.",
                    "Acceso a todas las actualizaciones formativas futuras."
                  ].map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start space-x-2.5">
                      <Check size={14} className="text-brand-gold shrink-0 mt-0.5" />
                      <span className="text-white/95 font-sans font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* SPECIAL GIFT VALUE BLOCK */}
                <div className="mt-6 p-4 rounded-xl border border-brand-gold/30 bg-brand-gold/5 text-xs text-brand-gold leading-relaxed font-sans font-semibold shadow-[0_0_15px_rgba(255,210,48,0.05)]">
                  🎁 <span className="font-bold underline text-white">REGALO ESPECIAL (Valorado en 100€):</span> Sesión 1:1 completamente personalizada conmigo donde diseñaremos tu mapa de ruta definitivo para tu vida y tu negocio, asegurando que aproveches la formación al máximo.
                </div>
              </div>

              {/* BUTTON REDIRECT */}
              <div className="mt-10">
                <a
                  id="link-checkout-annual-cec"
                  href="https://www.skool.com/codigo-expansion-consciente-3823/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-4 bg-brand-gold hover:bg-white text-dark-bg font-extrabold text-xs tracking-[0.15em] rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 font-sans uppercase shadow-[0_4px_20px_rgba(255,210,48,0.25)]"
                >
                  <span>ÚNETE A CÓDIGO EXPANSIÓN CONSCIENTE</span>
                  <span>→</span>
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

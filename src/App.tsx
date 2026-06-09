/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AppRoute } from './types';
import { Portal } from './components/Portal';
import { CECPage } from './components/CECPage';
import { ExpansionExtremaPage } from './components/ExpansionExtremaPage';

export default function App() {
  const [route, setRoute] = useState<AppRoute>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/cec' || hash === '#cec') {
        setRoute('cec');
      } else if (hash === '#/expansion-extrema' || hash === '#expansion-extrema') {
        setRoute('expansion-extrema');
      } else {
        setRoute('home');
      }
    };

    // Run on mount to catch active path
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigateTo = (newRoute: AppRoute) => {
    setRoute(newRoute);
    if (newRoute === 'home') {
      window.location.hash = '#/';
    } else {
      window.location.hash = `#/${newRoute}`;
    }
    
    // Smooth scroll transition to top
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div className="bg-dark-bg min-h-screen text-white font-sans overflow-x-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={route}
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.01 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full min-h-screen"
        >
          {route === 'home' && <Portal onNavigate={navigateTo} />}
          {route === 'cec' && <CECPage onNavigate={navigateTo} />}
          {route === 'expansion-extrema' && <ExpansionExtremaPage onNavigate={navigateTo} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

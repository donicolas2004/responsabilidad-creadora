/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface IconProps {
  className?: string;
  size?: number | string;
}

export const WisdomEyeLogo: React.FC<IconProps> = ({ className = '', size = 120 }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer subtle glow backing */}
      <div 
        className="absolute w-2/3 h-2/3 rounded-full blur-2xl opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0066FC 0%, transparent 70%)' }}
      />
      <div 
        className="absolute w-1/3 h-1/3 rounded-full blur-xl opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FFD230 0%, transparent 70%)' }}
      />
      
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-700 hover:scale-105"
      >
        <defs>
          <linearGradient id="eyeBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0066FC" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#00E5FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#0066FC" stopOpacity="0.4" />
          </linearGradient>
          <radialGradient id="sunGoldGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF275" />
            <stop offset="60%" stopColor="#FFD230" />
            <stop offset="100%" stopColor="#D4A017" />
          </radialGradient>
          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Dynamic decorative radar rings */}
        <circle 
          cx="100" 
          cy="100" 
          r="88" 
          stroke="#0066FC" 
          strokeOpacity="0.1" 
          strokeWidth="1" 
          strokeDasharray="4 8"
        />
        <circle 
          cx="100" 
          cy="100" 
          r="80" 
          stroke="#FFD230" 
          strokeOpacity="0.15" 
          strokeWidth="1.5" 
        />

        {/* Abstract Sacred Geometry - Triangular mental focus lines */}
        <path 
          d="M 100,10 L 178,145 L 22,145 Z" 
          stroke="#0066FC" 
          strokeWidth="1.2" 
          strokeOpacity="0.1" 
        />
        
        {/* UPPER EYE LID */}
        <path
          d="M 20,100 C 60,40, 140,40, 180,100"
          stroke="url(#eyeBlueGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#glowFilter)"
        />

        {/* LOWER EYE LID */}
        <path
          d="M 20,100 C 60,160, 140,160, 180,100"
          stroke="url(#eyeBlueGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#glowFilter)"
          strokeOpacity="0.8"
        />

        {/* EYE LASH/SACRED GEOMETRY DETAILS */}
        <line x1="100" y1="20" x2="100" y2="35" stroke="#0066FC" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <line x1="50" y1="52" x2="60" y2="62" stroke="#0066FC" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <line x1="150" y1="52" x2="140" y2="62" stroke="#0066FC" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <line x1="100" y1="180" x2="100" y2="165" stroke="#0066FC" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

        {/* GLOWING CENTER SUN (IRIS) */}
        <circle
          cx="100"
          cy="100"
          r="26"
          fill="url(#sunGoldGrad)"
          filter="url(#glowFilter)"
        />

        {/* SUN RAY DETAIL LINES (12 rays of consciousness) */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = 100 + Math.cos(angle) * 26;
          const y1 = 100 + Math.sin(angle) * 26;
          const x2 = 100 + Math.cos(angle) * 36;
          const y2 = 100 + Math.sin(angle) * 36;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#FFD230"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.9"
            />
          );
        })}

        {/* Inner core - Pupil portal */}
        <circle cx="100" cy="100" r="10" fill="#020610" />
        <circle cx="100" cy="100" r="4" fill="#FFFFFF" opacity="0.9" />
      </svg>
    </div>
  );
};

export const SymmetricalLockIcon: React.FC<IconProps> = ({ className = '', size = 120 }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Background warm gold glow backing */}
      <div 
        className="absolute w-2/3 h-2/3 rounded-full blur-2xl opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FFD230 0%, transparent 70%)' }}
      />
      <div 
        className="absolute w-1/3 h-1/3 rounded-full blur-xl opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0066FC 0%, transparent 70%)' }}
      />
      
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-700 hover:rotate-3"
      >
        <defs>
          <linearGradient id="lockGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD230" />
            <stop offset="50%" stopColor="#FFF275" />
            <stop offset="100%" stopColor="#D4A017" />
          </linearGradient>
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Concentric subtle background rings indicating exclusivity */}
        <circle cx="100" cy="100" r="85" stroke="#FFD230" strokeWidth="0.8" strokeOpacity="0.1" />
        <circle cx="100" cy="100" r="75" stroke="#0066FC" strokeWidth="0.8" strokeOpacity="0.08" strokeDasharray="3 6" />

        {/* LOCK SHACKLE, BASE, AND KEYHOLE GROUP - shifted up 7.5px to center precisely at Y=100 */}
        <g transform="translate(0, -7.5)">
          {/* LOCK SHACKLE */}
          <path
            d="M 65,100 V 70 C 65,45, 135,45, 135,70 V 100"
            stroke="url(#lockGoldGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="url(#goldGlow)"
          />

          {/* SECURE LINES FLANKING THE SHACKLE */}
          <line x1="65" y1="80" x2="65" y2="100" stroke="#FFD230" strokeWidth="3" strokeOpacity="0.5" />
          <line x1="135" y1="80" x2="135" y2="100" stroke="#FFD230" strokeWidth="3" strokeOpacity="0.5" />

          {/* BASE OF LOCK (Premium Octagonal glassmorphic representation) */}
          <path
            d="M 50,100 H 150 L 165,115 V 155 L 150,170 H 50 L 35,155 V 115 Z"
            fill="rgba(4, 11, 25, 0.75)"
            stroke="url(#lockGoldGrad)"
            strokeWidth="3"
            filter="url(#goldGlow)"
          />

          {/* CENTRAL KEYHOLE & INTERNAL RAY */}
          {/* Core circle */}
          <circle cx="100" cy="125" r="9" fill="url(#lockGoldGrad)" />
          {/* Keyhole wedge */}
          <path
            d="M 97,125 L 94,148 H 106 L 103,125 Z"
            fill="url(#lockGoldGrad)"
          />

          {/* Dynamic horizontal light rays representing 'Expansion' passing through the lock */}
          <line x1="20" y1="135" x2="45" y2="135" stroke="#0066FC" strokeWidth="1.5" strokeOpacity="0.4" />
          <line x1="155" y1="135" x2="180" y2="135" stroke="#0066FC" strokeWidth="1.5" strokeOpacity="0.4" />
          
          {/* Small glowing white lock accent */}
          <circle cx="100" cy="125" r="3" fill="#FFFFFF" />
        </g>
      </svg>
    </div>
  );
};

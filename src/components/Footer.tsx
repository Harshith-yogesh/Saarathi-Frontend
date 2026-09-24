import React from 'react';
import { translations } from '../data/i18n';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <footer className="mt-16 border-t border-sand-200/80 pt-10 pb-8 text-center text-xs text-gray-500">
      <div className="max-w-4xl mx-auto px-4">
        <div className="w-9 h-9 rounded-2xl bg-forest text-white mx-auto flex items-center justify-center mb-3 shadow-xs">
          <span className="font-serif font-bold text-base select-none">स</span>
        </div>
        <p className="font-medium text-forest-800 text-sm mb-1.5">
          {t.footerTag}
        </p>
        <p className="text-[12px] text-gray-500 mb-2">
          {t.footerAddress}
        </p>
        <p className="text-[11px] text-gray-400">
          Built with React 19, Grounded AI Context Ranking, Session Adaptation & Bilingual Indian Traveler Intent Comprehension.
        </p>
      </div>
    </footer>
  );
};

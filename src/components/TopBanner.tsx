import React from 'react';
import { translations } from '../data/i18n';
import { Language } from '../types';

interface TopBannerProps {
  lang: Language;
}

export const TopBanner: React.FC<TopBannerProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <div className="bg-forest-900 text-sand-100 text-xs py-2 px-4 border-b border-forest-800/80">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-medium tracking-wide">
            {t.liveEngineStatus}
          </span>
        </div>
        <div className="flex items-center space-x-4 text-sand-200/80 text-[11px] sm:text-xs">
          <span>{t.nlpLabel}</span>
          <span className="opacity-40">•</span>
          <span>{t.groundedAiLabel}</span>
        </div>
      </div>
    </div>
  );
};

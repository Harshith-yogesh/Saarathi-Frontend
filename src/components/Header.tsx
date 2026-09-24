import React from 'react';
import { Sliders } from 'lucide-react';
import { translations } from '../data/i18n';
import { Language } from '../types';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenPreferences: () => void;
  onLogoClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onLanguageChange,
  onOpenPreferences,
  onLogoClick
}) => {
  const t = translations[lang];

  return (
    <header className="sticky top-0 z-40 bg-sand-50/95 backdrop-blur-md border-b border-sand-200/80 px-4 sm:px-6 lg:px-8 py-3.5 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo & Tag */}
        <div
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={onLogoClick}
          title="Return to default discovery"
        >
          <div className="w-10 h-10 rounded-2xl bg-forest text-white flex items-center justify-center shadow-md shadow-forest/20 transition-transform group-hover:scale-105">
            <span className="font-serif text-2xl font-bold tracking-tight text-sand-50 select-none">
              स
            </span>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-serif font-bold text-forest tracking-tight">
                {t.appName}
              </span>
              <span className="text-[10px] uppercase tracking-wider font-bold bg-terracotta/10 text-terracotta-700 px-2 py-0.5 rounded-full border border-terracotta/20">
                Beta
              </span>
            </div>
            <p className="text-xs text-forest-700/80 hidden sm:block font-medium">
              {t.tagline}
            </p>
          </div>
        </div>

        {/* Right Controls: Preferences Button & Language Toggle */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenPreferences}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-forest-50 hover:bg-forest-100 text-forest border border-forest-200 transition cursor-pointer active:scale-95"
            title="Edit travel preferences"
          >
            <Sliders className="w-3.5 h-3.5 text-forest" />
            <span className="hidden sm:inline">
              {t.preferencesBtn}
            </span>
          </button>

          {/* Language Switcher Toggle */}
          <div className="flex items-center bg-sand-200/70 p-1 rounded-xl border border-sand-300/60">
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                lang === 'en'
                  ? 'bg-forest text-white shadow-sm'
                  : 'text-forest-800 hover:text-forest'
              }`}
            >
              English
            </button>
            <button
              onClick={() => onLanguageChange('hi')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                lang === 'hi'
                  ? 'bg-forest text-white shadow-sm'
                  : 'text-forest-800 hover:text-forest'
              }`}
            >
              हिन्दी
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

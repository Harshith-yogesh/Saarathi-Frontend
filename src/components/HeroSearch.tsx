import React from 'react';
import { Search, ArrowRight, Sparkles, Loader2 } from 'lucide-react';
import { translations } from '../data/i18n';
import { Language } from '../types';

interface HeroSearchProps {
  lang: Language;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onSearch: (q?: string) => void;
  isSearching: boolean;
  placeholderText: string;
}

export const HeroSearch: React.FC<HeroSearchProps> = ({
  lang,
  searchQuery,
  setSearchQuery,
  onSearch,
  isSearching,
  placeholderText
}) => {
  const t = translations[lang];

  const suggestionChips = lang === 'hi' ? [
    "मुन्नार के पास 5000 के अंदर कोई शांत जगह",
    "चाय बागानों के बीच नदी किनारे शांत स्टे",
    "पारंपरिक केरल साध्या भोजन वाला कॉटेज"
  ] : [
    "peaceful stay near Munnar under 5000",
    "misty tea plantation with river stream",
    "quiet cabin with home-cooked sadhya"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <section className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#E7EFE9] via-[#FAF8F5] to-[#FAF8F5] border border-forest-100 p-6 sm:p-10 mb-8 shadow-sm">
      {/* Decorative Subtle Fog Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-sage-200/40 via-emerald-100/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-forest/5 border border-forest/15 text-forest text-xs font-medium mb-3">
          <Sparkles className="w-3.5 h-3.5 text-terracotta" />
          <span>{t.heroBadge}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest tracking-tight leading-tight mb-3">
          {t.heroTitle}
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
          {t.heroSub}
        </p>

        {/* Search Input Bar */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-2 sm:p-2.5 rounded-2xl shadow-lg border border-forest-100 flex flex-col md:flex-row items-stretch md:items-center gap-2"
        >
          <div className="flex-1 flex items-center px-3 gap-3">
            <Search className="w-5 h-5 text-forest-600 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={placeholderText}
              className="w-full text-sm sm:text-base bg-transparent border-none focus:outline-none text-gray-800 placeholder-gray-400 font-normal py-2"
            />
          </div>
          <button
            type="submit"
            disabled={isSearching}
            className="bg-forest hover:bg-forest-600 active:scale-[0.99] text-white px-6 py-3.5 rounded-xl font-medium text-sm flex items-center justify-center space-x-2 transition shadow-sm shrink-0 cursor-pointer disabled:opacity-80"
          >
            {isSearching ? (
              <span className="inline-flex items-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>{lang === 'hi' ? 'तैयार कर रहे हैं...' : 'Ranking stays...'}</span>
              </span>
            ) : (
              <>
                <span>{t.searchBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Quick Suggestion Chips */}
        <div className="mt-3.5 flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <span className="font-medium text-gray-700">{t.tryPrompt}</span>
          {suggestionChips.map((chip, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setSearchQuery(chip);
                onSearch(chip);
              }}
              className="bg-white/90 hover:bg-white text-forest-700 px-3 py-1 rounded-lg border border-sand-200 text-xs transition hover:border-forest/40 cursor-pointer shadow-xs"
            >
              “{chip}”
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

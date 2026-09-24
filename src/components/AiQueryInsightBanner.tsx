import React from 'react';
import { Sparkles, Compass, Mountain, Thermometer, Brain } from 'lucide-react';
import { Language } from '../types';

export interface AiIntentInsight {
  detectedMood: string;
  recommendedAltitude: string;
  weatherPreference: string;
  oneLineInsight: string;
}

interface AiQueryInsightBannerProps {
  insight: AiIntentInsight | null;
  lang: Language;
  onRefresh: () => void;
  isLoading: boolean;
}

export const AiQueryInsightBanner: React.FC<AiQueryInsightBannerProps> = ({
  insight,
  lang,
  onRefresh,
  isLoading
}) => {
  if (!insight && !isLoading) return null;

  return (
    <div className="mb-6 p-4 rounded-3xl bg-gradient-to-r from-forest-50 via-sand-50 to-[#EBF3ED] border border-forest-200/70 shadow-sm relative overflow-hidden animate-in fade-in duration-300">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start space-x-3.5">
          <div className="w-10 h-10 rounded-2xl bg-forest text-sand-50 flex items-center justify-center shrink-0 shadow-xs">
            <Brain className="w-5 h-5 text-emerald-300" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold uppercase tracking-wider text-forest">
                {lang === 'hi' ? 'सारथी एआई इच्छा परख (Intent Synthesis)' : 'Sarathi AI Intent Comprehension'}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-terracotta/15 text-terracotta-700 font-semibold border border-terracotta/20">
                Gemini 3.8 Flash
              </span>
            </div>

            {isLoading ? (
              <p className="text-xs text-forest-700/80 mt-1 animate-pulse">
                {lang === 'hi'
                  ? 'आपकी खोज के आंतरिक भाव और मौसम अनुकूलता का विश्लेषण जारी...'
                  : 'Analyzing the emotional rhythm and microclimate affinity of your query...'}
              </p>
            ) : insight ? (
              <p className="text-xs sm:text-sm text-gray-700 mt-1 font-serif italic">
                “{insight.oneLineInsight}”
              </p>
            ) : null}
          </div>
        </div>

        {/* Breakdown chips */}
        {insight && !isLoading && (
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-white/90 border border-sand-300/80 text-xs text-forest-800 shadow-2xs font-medium">
              <Compass className="w-3.5 h-3.5 text-terracotta" />
              <span>{insight.detectedMood}</span>
            </div>
            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-white/90 border border-sand-300/80 text-xs text-forest-800 shadow-2xs font-medium">
              <Mountain className="w-3.5 h-3.5 text-emerald-700" />
              <span>{insight.recommendedAltitude}</span>
            </div>
            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-white/90 border border-sand-300/80 text-xs text-forest-800 shadow-2xs font-medium">
              <Thermometer className="w-3.5 h-3.5 text-amber-600" />
              <span>{insight.weatherPreference}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

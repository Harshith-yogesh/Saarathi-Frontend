import React, { useState } from 'react';
import {
  MapPin,
  Star,
  Sparkles,
  Info,
  Heart,
  X
} from 'lucide-react';
import { translations } from '../data/i18n';
import { Language, Stay } from '../types';
import { WeatherForecastWidget } from './WeatherForecastWidget';
import { AiConciergeNote } from './AiConciergeNote';

interface StayCardProps {
  stay: Stay;
  index: number;
  lang: Language;
  searchQuery: string;
  isSaved: boolean;
  onSave: (stay: Stay) => void;
  onDismiss: (stayId: string) => void;
  onViewDetails: (stay: Stay) => void;
}

export const StayCard: React.FC<StayCardProps> = ({
  stay,
  index,
  lang,
  searchQuery,
  isSaved,
  onSave,
  onDismiss,
  onViewDetails
}) => {
  const t = translations[lang];
  const [imgSrc, setImgSrc] = useState(stay.image);

  return (
    <article
      className={`group bg-white rounded-3xl p-5 sm:p-6 border transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden ${
        isSaved
          ? 'border-terracotta/40 bg-[#FCFAF7]'
          : 'border-sand-200 hover:border-forest-200'
      }`}
    >
      {/* Top Match Ribbon for first item */}
      {index === 0 && (
        <div className="absolute top-0 left-0 bg-forest text-sand-50 text-[11px] font-bold tracking-wider uppercase px-4 py-1 rounded-br-2xl flex items-center space-x-1 shadow-sm z-10">
          <Sparkles className="w-3 h-3 text-amber-300" />
          <span>{t.topMatchBadge}</span>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Image Container */}
        <div className="relative w-full lg:w-72 h-60 lg:h-auto rounded-2xl overflow-hidden shrink-0 bg-sand-100 min-h-[220px]">
          <img
            src={imgSrc}
            alt={stay.name}
            onError={() => setImgSrc(stay.fallbackImage)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

          {/* Rating Badge */}
          <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-lg flex items-center space-x-1 text-xs font-bold text-gray-900 shadow-sm">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span className="tabular-nums">{stay.rating}</span>
            <span className="text-gray-400 font-normal">
              ({stay.reviewsCount})
            </span>
          </div>

          {/* Category Chip */}
          <div className="absolute top-3 right-3 bg-forest-900/80 backdrop-blur-sm text-sand-50 text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
            {t.tagsTranslation[stay.tags[1]] || stay.tags[1] || stay.tags[0]}
          </div>
        </div>

        {/* Right: Content, Weather Forecast Widget & Grounded Reasoning */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            {/* Location & Tags */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
              <div className="flex items-center space-x-1.5 text-xs text-forest-700 font-medium">
                <MapPin className="w-3.5 h-3.5 text-terracotta shrink-0" />
                <span>{stay.location}</span>
              </div>
              <div className="flex items-center space-x-1.5 text-[11px] text-gray-500 font-medium">
                {stay.tags.map((tag, i) => (
                  <React.Fragment key={tag}>
                    {i > 0 && <span className="text-gray-300">·</span>}
                    <span>{t.tagsTranslation[tag] || tag}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Stay Title */}
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-forest tracking-tight mb-2 group-hover:text-forest-600 transition">
              {stay.name}
            </h3>

            {/* WEATHER FORECAST WIDGET */}
            <WeatherForecastWidget
              weather={stay.weather}
              lang={lang}
              elevation={stay.elevation}
            />

            {/* "WHY THIS PICK FOR YOU?" Grounded Reasoning Box */}
            <div className="my-3 p-4 rounded-2xl bg-gradient-to-br from-forest-50/70 to-sand-100/50 border border-forest-100 text-xs sm:text-sm text-gray-700 leading-relaxed relative">
              <div className="flex items-center space-x-1.5 font-bold text-forest text-xs mb-1 uppercase tracking-wide">
                <Info className="w-3.5 h-3.5 text-terracotta shrink-0" />
                <span>{t.whyThisPick}</span>
              </div>
              <p className="italic text-gray-700 font-serif leading-relaxed">
                “{stay.explanation[lang]}”
              </p>

              {/* Highlight Bullets */}
              <div className="mt-2.5 pt-2 border-t border-forest-200/40 flex flex-wrap items-center gap-3 text-xs text-forest-800 font-medium">
                {stay.highlights[lang].map((highlight, i) => (
                  <span key={i} className="inline-flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta"></span>
                    <span>{highlight}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* AI FEATURE: Personalized Mindful Traveler Advice */}
            <AiConciergeNote
              stay={stay}
              lang={lang}
              searchQuery={searchQuery}
            />
          </div>

          {/* Pricing & Interactive Action Row */}
          <div className="pt-3.5 mt-2 border-t border-sand-200 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-serif font-bold text-forest tabular-nums">
                  ₹{stay.price.toLocaleString('en-IN')}
                </span>
                {stay.originalPrice && (
                  <span className="text-xs text-gray-400 line-through tabular-nums">
                    ₹{stay.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-xs text-gray-500 font-medium">
                  {t.pricePerNight}
                </span>
              </div>
              <span className="text-[11px] text-emerald-700 font-medium flex items-center space-x-1 mt-0.5">
                <span>✓ {t.inclusiveTaxes}</span>
              </span>
            </div>

            {/* Actions: Dismiss, Save, View Stay */}
            <div className="flex items-center space-x-2">
              {/* Dismiss Button */}
              <button
                type="button"
                onClick={() => onDismiss(stay.id)}
                title={t.dismissBtn}
                className="p-2.5 rounded-xl border border-sand-300 text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition cursor-pointer active:scale-95"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Save Button */}
              <button
                type="button"
                onClick={() => onSave(stay)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center space-x-1.5 border transition cursor-pointer active:scale-95 ${
                  isSaved
                    ? 'bg-terracotta text-white border-terracotta shadow-xs'
                    : 'bg-white border-sand-300 text-gray-700 hover:border-terracotta hover:text-terracotta'
                }`}
              >
                <Heart
                  className={`w-4 h-4 ${
                    isSaved ? 'text-white fill-white' : 'text-terracotta'
                  }`}
                />
                <span>{isSaved ? t.savedBtn : t.saveBtn}</span>
              </button>

              {/* View Stay Details Button */}
              <button
                type="button"
                onClick={() => onViewDetails(stay)}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-forest text-white hover:bg-forest-600 transition shadow-xs cursor-pointer active:scale-95"
              >
                {t.detailsBtn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

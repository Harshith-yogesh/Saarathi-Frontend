import React, { useState } from 'react';
import {
  X,
  MapPin,
  Star,
  Sparkles,
  Check,
  Heart,
  Calendar,
  Users,
  Compass,
  CheckCircle2
} from 'lucide-react';
import { translations } from '../data/i18n';
import { Language, Stay } from '../types';
import { WeatherForecastWidget } from './WeatherForecastWidget';
import { AiConciergeNote } from './AiConciergeNote';

interface StayDetailModalProps {
  stay: Stay | null;
  lang: Language;
  searchQuery?: string;
  isSaved: boolean;
  onSave: (stay: Stay) => void;
  onClose: () => void;
  onConfirmBooking: (stayName: string) => void;
}

export const StayDetailModal: React.FC<StayDetailModalProps> = ({
  stay,
  lang,
  searchQuery = '',
  isSaved,
  onSave,
  onClose,
  onConfirmBooking
}) => {
  if (!stay) return null;

  const t = translations[lang];
  const [guests, setGuests] = useState(2);
  const [nights, setNights] = useState(2);
  const [isBooked, setIsBooked] = useState(false);

  const totalPrice = stay.price * nights;

  const handleBooking = () => {
    setIsBooked(true);
    setTimeout(() => {
      onConfirmBooking(stay.name);
      onClose();
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-forest-100 max-h-[90vh] overflow-y-auto custom-scrollbar relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-sand-100 text-gray-500 hover:text-gray-800 transition cursor-pointer"
          title="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 bg-sand-100 relative">
          <img
            src={stay.image}
            alt={stay.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-3 left-3 bg-forest-900/80 backdrop-blur-sm text-sand-50 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            {stay.elevation} • {stay.distance}
          </div>
        </div>

        {/* Location & Title */}
        <div className="flex items-center space-x-1.5 text-xs text-forest-700 font-semibold mb-1">
          <MapPin className="w-4 h-4 text-terracotta shrink-0" />
          <span>{stay.location}</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-forest mb-2">
          {stay.name}
        </h3>

        {/* Price & Rating Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-2xl font-serif font-bold text-forest tabular-nums">
            ₹{stay.price.toLocaleString('en-IN')}
          </span>
          <span className="text-xs text-gray-500">{t.pricePerNight}</span>
          <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold flex items-center space-x-1">
            <Star className="w-3 h-3 fill-emerald-600 text-emerald-600" />
            <span className="tabular-nums">{stay.rating}</span>
            <span className="text-emerald-600/70">
              ({stay.reviewsCount} {lang === 'hi' ? 'समीक्षाएं' : 'reviews'})
            </span>
          </span>
        </div>

        {/* Live Weather Forecast Widget */}
        <div className="mb-5">
          <WeatherForecastWidget
            weather={stay.weather}
            lang={lang}
            elevation={stay.elevation}
          />
        </div>

        {/* Grounded Rationale Breakdown */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-forest-50/70 to-sand-100/50 border border-forest-100 mb-5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-terracotta mb-2 flex items-center space-x-1.5">
            <Sparkles className="w-4 h-4" />
            <span>{t.rationaleLabel}</span>
          </h4>
          <p className="text-sm text-gray-700 leading-relaxed font-serif italic">
            “{stay.explanation[lang]}”
          </p>
        </div>

        {/* AI Concierge Advice Note */}
        <div className="mb-6">
          <AiConciergeNote
            stay={stay}
            lang={lang}
            searchQuery={searchQuery}
          />
        </div>

        {/* Description & Sanctuary Philosophy */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-forest mb-2">
            {t.hostStory}
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            {stay.description[lang]}
          </p>
        </div>

        {/* Key Highlights */}
        <div className="space-y-2 mb-6">
          <h5 className="text-xs font-bold text-forest uppercase tracking-wider">
            {t.amenitiesLabel}
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {stay.amenities[lang].map((amenity, i) => (
              <div
                key={i}
                className="flex items-center space-x-2 text-xs text-gray-700 bg-forest-50/50 p-2.5 rounded-xl border border-forest-100/60"
              >
                <Check className="w-3.5 h-3.5 text-forest shrink-0" />
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Booking / Reservation Panel */}
        <div className="p-4 rounded-2xl bg-sand-100/70 border border-sand-200 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-xs text-gray-700">
                <Calendar className="w-4 h-4 text-forest" />
                <span className="font-medium">
                  {lang === 'hi' ? 'रातें:' : 'Duration:'}
                </span>
                <select
                  value={nights}
                  onChange={(e) => setNights(Number(e.target.value))}
                  className="bg-white border border-sand-300 rounded-lg px-2 py-1 text-xs font-medium cursor-pointer"
                >
                  <option value={1}>1 night</option>
                  <option value={2}>2 nights (Recommended)</option>
                  <option value={3}>3 nights</option>
                  <option value={5}>5 nights (Full Retreat)</option>
                </select>
              </div>

              <div className="flex items-center space-x-2 text-xs text-gray-700">
                <Users className="w-4 h-4 text-forest" />
                <span className="font-medium">
                  {lang === 'hi' ? 'यात्री:' : 'Guests:'}
                </span>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="bg-white border border-sand-300 rounded-lg px-2 py-1 text-xs font-medium cursor-pointer"
                >
                  <option value={1}>1 guest</option>
                  <option value={2}>2 guests</option>
                  <option value={3}>3 guests</option>
                  <option value={4}>4 guests</option>
                </select>
              </div>
            </div>

            <div className="text-right">
              <span className="text-xs text-gray-500 block">
                {lang === 'hi' ? 'कुल राशि:' : 'Total estimation:'}
              </span>
              <span className="text-lg font-serif font-bold text-forest tabular-nums">
                ₹{totalPrice.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
          <p className="text-[11px] text-gray-500 italic">
            ✓ {t.inclusiveTaxes} • {lang === 'hi' ? 'निःशुल्क रद्दीकरण आगमन से 48 घंटे पहले' : 'Free cancellation up to 48 hours before check-in'}
          </p>
        </div>

        {/* Modal Action Row */}
        <div className="flex items-center justify-end space-x-3 pt-3 border-t border-sand-200">
          <button
            type="button"
            onClick={() => onSave(stay)}
            className={`px-5 py-2.5 rounded-xl border text-xs font-semibold transition cursor-pointer flex items-center space-x-1.5 ${
              isSaved
                ? 'bg-terracotta text-white border-terracotta'
                : 'bg-white border-sand-300 text-gray-700 hover:border-terracotta hover:text-terracotta'
            }`}
          >
            <Heart
              className={`w-3.5 h-3.5 ${
                isSaved ? 'text-white fill-white' : 'text-terracotta'
              }`}
            />
            <span>{isSaved ? t.savedBtn : t.saveBtn}</span>
          </button>

          <button
            type="button"
            disabled={isBooked}
            onClick={handleBooking}
            className="px-6 py-2.5 rounded-xl bg-forest text-white text-xs font-semibold hover:bg-forest-600 transition shadow-sm cursor-pointer disabled:bg-emerald-700 flex items-center space-x-2"
          >
            {isBooked ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>{lang === 'hi' ? 'अनुरोध भेजा गया!' : 'Requested!'}</span>
              </>
            ) : (
              <span>{t.reserveStay}</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

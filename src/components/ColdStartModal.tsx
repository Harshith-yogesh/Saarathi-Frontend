import React from 'react';
import {
  Trees,
  Compass,
  Landmark,
  Sparkles,
  Wallet,
  BadgePercent,
  Gem,
  Coffee,
  Sun,
  Footprints,
  Check,
  ArrowRight,
  X
} from 'lucide-react';
import { translations } from '../data/i18n';
import { BudgetTier, Language, TravelPace, TravelStyle, UserPreferences } from '../types';

interface ColdStartModalProps {
  isOpen: boolean;
  lang: Language;
  userPrefs: UserPreferences;
  setUserPrefs: React.Dispatch<React.SetStateAction<UserPreferences>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  onComplete: () => void;
  onSkip: () => void;
  onClose: () => void;
}

export const ColdStartModal: React.FC<ColdStartModalProps> = ({
  isOpen,
  lang,
  userPrefs,
  setUserPrefs,
  step,
  setStep,
  onComplete,
  onSkip,
  onClose
}) => {
  if (!isOpen) return null;

  const t = translations[lang];

  const getStyleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trees':
        return <Trees className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Wallet':
        return <Wallet className="w-5 h-5" />;
      case 'BadgePercent':
        return <BadgePercent className="w-5 h-5" />;
      case 'Gem':
        return <Gem className="w-5 h-5" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5" />;
      case 'Sun':
        return <Sun className="w-5 h-5" />;
      case 'Footprints':
        return <Footprints className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-forest-100 relative overflow-hidden transition-all">
        
        {/* Progress bar line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-sand-200">
          <div
            className="h-full bg-terracotta transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {/* Modal Close Icon in corner */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-700 rounded-full hover:bg-sand-100 transition cursor-pointer"
          title="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mt-2 mb-6">
          <div className="flex items-center justify-between text-xs font-bold text-terracotta uppercase tracking-wider mb-1 pr-6">
            <span>
              {lang === 'hi' ? `चरण ${step} / 3` : `STEP ${step} OF 3`}
            </span>
            <button
              type="button"
              onClick={onSkip}
              className="text-gray-400 hover:text-gray-600 font-medium normal-case underline cursor-pointer"
            >
              {t.skipForNow}
            </button>
          </div>
          <h3 className="text-2xl font-serif font-bold text-forest">
            {step === 1 && t.step1Title}
            {step === 2 && t.step2Title}
            {step === 3 && t.step3Title}
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            {t.coldStartSubtitle}
          </p>
        </div>

        {/* STEP 1: TRAVEL STYLE (2x2 Grid) */}
        {step === 1 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {t.travelStyles.map((style) => {
              const isSelected = userPrefs.travelStyle === style.id;
              return (
                <div
                  key={style.id}
                  onClick={() =>
                    setUserPrefs((prev) => ({
                      ...prev,
                      travelStyle: style.id as TravelStyle
                    }))
                  }
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between select-none ${
                    isSelected
                      ? 'border-forest bg-forest-50/60 shadow-xs'
                      : 'border-sand-200 hover:border-sand-300 bg-white hover:bg-sand-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`p-2 rounded-xl transition-colors ${
                        isSelected
                          ? 'bg-forest text-white'
                          : 'bg-sand-100 text-forest'
                      }`}
                    >
                      {getStyleIcon(style.icon)}
                    </div>
                    {isSelected && (
                      <Check className="w-4 h-4 text-forest font-bold" />
                    )}
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-forest">
                      {style.label}
                    </h5>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                      {style.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* STEP 2: BUDGET SENSITIVITY */}
        {step === 2 && (
          <div className="space-y-3 mb-6">
            {t.budgets.map((b) => {
              const isSelected = userPrefs.budget === b.id;
              return (
                <div
                  key={b.id}
                  onClick={() =>
                    setUserPrefs((prev) => ({
                      ...prev,
                      budget: b.id as BudgetTier
                    }))
                  }
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition flex items-center justify-between select-none ${
                    isSelected
                      ? 'border-forest bg-forest-50/60 shadow-xs'
                      : 'border-sand-200 hover:border-sand-300 bg-white'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-2.5 rounded-xl ${
                        isSelected
                          ? 'bg-forest text-white'
                          : 'bg-sand-100 text-forest'
                      }`}
                    >
                      {getStyleIcon(b.icon)}
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-forest">{b.label}</h5>
                      <p className="text-xs text-gray-500">{b.desc}</p>
                    </div>
                  </div>
                  {isSelected && <Check className="w-5 h-5 text-forest" />}
                </div>
              );
            })}
          </div>
        )}

        {/* STEP 3: TRAVEL PACE */}
        {step === 3 && (
          <div className="space-y-3 mb-6">
            {t.paces.map((p) => {
              const isSelected = userPrefs.pace === p.id;
              return (
                <div
                  key={p.id}
                  onClick={() =>
                    setUserPrefs((prev) => ({
                      ...prev,
                      pace: p.id as TravelPace
                    }))
                  }
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition flex items-center justify-between select-none ${
                    isSelected
                      ? 'border-forest bg-forest-50/60 shadow-xs'
                      : 'border-sand-200 hover:border-sand-300 bg-white'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-2.5 rounded-xl ${
                        isSelected
                          ? 'bg-forest text-white'
                          : 'bg-sand-100 text-forest'
                      }`}
                    >
                      {getStyleIcon(p.icon)}
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-forest">{p.label}</h5>
                      <p className="text-xs text-gray-500">{p.desc}</p>
                    </div>
                  </div>
                  {isSelected && <Check className="w-5 h-5 text-forest" />}
                </div>
              );
            })}
          </div>
        )}

        {/* Modal Navigation Buttons */}
        <div className="flex items-center justify-between pt-3 border-t border-sand-200">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              {t.backBtn}
            </button>
          ) : (
            <button
              type="button"
              onClick={onSkip}
              className="text-xs font-semibold text-gray-500 hover:text-forest cursor-pointer"
            >
              {t.skipForNow}
            </button>
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s + 1)}
              className="px-6 py-2.5 bg-forest text-white rounded-xl text-xs font-semibold hover:bg-forest-600 transition flex items-center space-x-1.5 cursor-pointer shadow-xs active:scale-95"
            >
              <span>{t.continueBtn}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={onComplete}
              className="px-6 py-2.5 bg-terracotta text-white rounded-xl text-xs font-semibold hover:bg-terracotta-600 transition shadow-sm flex items-center space-x-1.5 cursor-pointer active:scale-95"
            >
              <Check className="w-3.5 h-3.5" />
              <span>{t.finishPrefs}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

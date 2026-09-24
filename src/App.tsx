import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Sparkles,
  Check,
  Sliders,
  RotateCcw,
  Heart,
  Trees,
  Loader2,
  CheckCircle2
} from 'lucide-react';
import { TopBanner } from './components/TopBanner';
import { Header } from './components/Header';
import { HeroSearch } from './components/HeroSearch';
import { StayCard } from './components/StayCard';
import { ColdStartModal } from './components/ColdStartModal';
import { StayDetailModal } from './components/StayDetailModal';
import { AiQueryInsightBanner, AiIntentInsight } from './components/AiQueryInsightBanner';
import { Footer } from './components/Footer';
import { INITIAL_STAYS } from './data/staysData';
import { translations } from './data/i18n';
import { Language, Stay, UserPreferences } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  // Search state
  const defaultQuery = "I want somewhere peaceful near Munnar, not too pricey and close to nature";
  const [searchQuery, setSearchQuery] = useState(defaultQuery);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isSearching, setIsSearching] = useState(false);

  // AI Intent Insight state
  const [aiInsight, setAiInsight] = useState<AiIntentInsight | null>({
    detectedMood: "Solitary & Nature Seeking",
    recommendedAltitude: "5,400 - 6,200 ft",
    weatherPreference: "Misty & Crisp Mornings (13-17°C)",
    oneLineInsight: "Seeking quiet retreat from urban friction amidst organic tea canopies and valley streams."
  });
  const [isAiSynthesizing, setIsAiSynthesizing] = useState(false);

  // Cold Start Modal State (Opened by default as shown in user's screenshot!)
  const [showColdStart, setShowColdStart] = useState(true);
  const [coldStartStep, setColdStartStep] = useState(1);
  const [userPrefs, setUserPrefs] = useState<UserPreferences>({
    travelStyle: 'peaceful',
    budget: 'budget',
    pace: 'slow'
  });

  // Session interaction memory
  const [savedStayIds, setSavedStayIds] = useState<string[]>(['stay-01']); // stay-01 is favored in the screenshot
  const [dismissedStayIds, setDismissedStayIds] = useState<string[]>([]);
  const [activeToast, setActiveToast] = useState<{ message: string; type: 'save' | 'dismiss' | 'booking' } | null>(null);
  const [selectedStayModal, setSelectedStayModal] = useState<Stay | null>(null);
  const [hasFeedbackAdapted, setHasFeedbackAdapted] = useState(false);

  // Rotate sample query placeholder gently
  useEffect(() => {
    const timer = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % t.placeholderRotations.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [t.placeholderRotations.length]);

  // Toast auto-dismiss
  useEffect(() => {
    if (activeToast) {
      const timer = setTimeout(() => setActiveToast(null), 3800);
      return () => clearTimeout(timer);
    }
  }, [activeToast]);

  // Function to call AI to interpret query
  const interpretUserQueryWithAi = useCallback(async (query: string) => {
    setIsAiSynthesizing(true);
    try {
      const res = await fetch('/api/ai/interpret-query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userQuery: query, lang })
      });
      const data = await res.json();
      if (data.success && data.insight) {
        setAiInsight(data.insight);
      }
    } catch (err) {
      console.warn('AI query interpretation fallback:', err);
      // Fallback intent synthesis
      setAiInsight({
        detectedMood: lang === 'hi' ? 'शांति व प्रकृति अन्वेषण' : 'Solitary & Nature Seeking',
        recommendedAltitude: '5,400 - 6,200 ft',
        weatherPreference: lang === 'hi' ? 'धुंध और सुहावनी ठंडक' : 'Misty & Crisp Mornings (13-17°C)',
        oneLineInsight: lang === 'hi'
          ? 'शहरी कोलाहल से दूर जैविक चाय बागानों और पहाड़ी जलधाराओं के बीच मानसिक शांति की खोज।'
          : 'Seeking quiet solace amidst organic tea slopes and fresh mountain stream air.'
      });
    } finally {
      setIsAiSynthesizing(false);
    }
  }, [lang]);

  // Compute rankings based on query, preferences, session feedback, and weather affinity
  const filteredAndRankedStays = useMemo(() => {
    let list = INITIAL_STAYS.filter((item) => !dismissedStayIds.includes(item.id));

    const queryLower = searchQuery.toLowerCase();

    // Query text match filtering if user typed specific keywords
    if (queryLower.includes('waterfall') || queryLower.includes('river') || queryLower.includes('stream')) {
      list.sort((a, b) => (b.tags.includes('Waterfall') ? 1 : 0) - (a.tags.includes('Waterfall') ? 1 : 0));
    }

    // Rank adjustment based on user preferences and saved items
    const hasSavedNature = savedStayIds.some(
      (id) => id === 'stay-01' || id === 'stay-02' || id === 'stay-03'
    );

    return [...list].sort((a, b) => {
      let scoreA = a.affinityScore;
      let scoreB = b.affinityScore;

      // Saved stays get priority
      if (savedStayIds.includes(a.id)) scoreA += 15;
      if (savedStayIds.includes(b.id)) scoreB += 15;

      // Travel style affinity
      if (userPrefs.travelStyle === 'peaceful' && a.tags.includes('Peaceful')) {
        scoreA += 10;
      }
      if (userPrefs.travelStyle === 'peaceful' && b.tags.includes('Peaceful')) {
        scoreB += 10;
      }

      // Budget affinity
      if (userPrefs.budget === 'budget') {
        if (a.price <= 5000) scoreA += 12;
        if (b.price <= 5000) scoreB += 12;
      } else if (userPrefs.budget === 'luxury') {
        if (a.price > 6000) scoreA += 15;
        if (b.price > 6000) scoreB += 15;
      }

      // Live feedback affinity
      if (hasSavedNature && a.category === 'nature_peace') {
        scoreA += 10;
      }
      if (hasSavedNature && b.category === 'nature_peace') {
        scoreB += 10;
      }

      return scoreB - scoreA;
    });
  }, [searchQuery, dismissedStayIds, savedStayIds, userPrefs]);

  // Handle Search Execution
  const handleSearch = (customQuery?: string) => {
    const q = customQuery !== undefined ? customQuery : searchQuery;
    setIsSearching(true);
    if (customQuery) {
      setSearchQuery(customQuery);
    }
    interpretUserQueryWithAi(q);
    setTimeout(() => {
      setIsSearching(false);
      setHasFeedbackAdapted(savedStayIds.length > 0);
    }, 550);
  };

  // Handle Save / Favorite
  const handleSave = (stay: Stay) => {
    const isAlreadySaved = savedStayIds.includes(stay.id);
    const updated = isAlreadySaved
      ? savedStayIds.filter((id) => id !== stay.id)
      : [...savedStayIds, stay.id];

    setSavedStayIds(updated);
    setHasFeedbackAdapted(updated.length > 0);

    setActiveToast({
      type: 'save',
      message: isAlreadySaved
        ? (lang === 'hi' ? `हटाया गया: ${stay.name}` : `Removed from saved stays`)
        : (lang === 'hi'
            ? `सारथी ने आपकी पसंद समझी! ${stay.name} सहेजा गया`
            : `Sarathi learned your taste! Saved & ranking adapted.`)
    });
  };

  // Handle Dismiss
  const handleDismiss = (stayId: string) => {
    setDismissedStayIds((prev) => [...prev, stayId]);
    setActiveToast({
      type: 'dismiss',
      message:
        lang === 'hi'
          ? 'स्थान हटा दिया गया। सारथी इसे दोबारा नहीं दिखाएगा।'
          : "Stay dismissed. Sarathi won't suggest similar properties."
    });
  };

  // Handle Reset Filters
  const handleResetFilters = () => {
    setDismissedStayIds([]);
    setSavedStayIds([]);
    setHasFeedbackAdapted(false);
    setSearchQuery(defaultQuery);
    interpretUserQueryWithAi(defaultQuery);
  };

  return (
    <div className="relative min-h-screen flex flex-col font-sans text-[#222B27]">
      {/* 1. TOP NOTIFICATION BAR */}
      <TopBanner lang={lang} />

      {/* 2. NAVIGATION HEADER */}
      <Header
        lang={lang}
        onLanguageChange={(newLang) => {
          setLang(newLang);
        }}
        onOpenPreferences={() => {
          setColdStartStep(1);
          setShowColdStart(true);
        }}
        onLogoClick={() => {
          setSearchQuery(defaultQuery);
          handleSearch(defaultQuery);
        }}
      />

      {/* 3. MAIN CONTENT CONTAINER */}
      <main className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 flex-1">
        
        {/* HERO SECTION WITH NATURAL LANGUAGE QUERY BAR */}
        <HeroSearch
          lang={lang}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSearch}
          isSearching={isSearching}
          placeholderText={t.placeholderRotations[placeholderIndex]}
        />

        {/* AI QUERY INTENT & MICROCLIMATE SYNTHESIS BANNER */}
        <AiQueryInsightBanner
          insight={aiInsight}
          lang={lang}
          isLoading={isAiSynthesizing}
          onRefresh={() => interpretUserQueryWithAi(searchQuery)}
        />

        {/* SESSION ADAPTATION BANNER (Shows when session adaptation is active) */}
        {hasFeedbackAdapted && savedStayIds.length > 0 && (
          <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-terracotta-50 via-sand-50 to-emerald-50 border border-terracotta-100 flex items-center justify-between gap-4 shadow-xs">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-terracotta/10 text-terracotta-600 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-terracotta" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-forest">
                  {t.adaptiveHeading}
                </h4>
                <p className="text-xs text-gray-600">
                  {t.adaptiveSub}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setSavedStayIds([]);
                setHasFeedbackAdapted(false);
              }}
              className="text-xs font-semibold text-terracotta-700 hover:text-terracotta underline shrink-0 flex items-center space-x-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.resetSession}</span>
            </button>
          </div>
        )}

        {/* RESULTS HEADER & GROUNDED RANKING FACTORS */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-forest">
                {lang === 'hi' ? 'सारथी द्वारा चुनी गई अनुशंसाएं' : 'Curated Recommendations'}
              </h2>
              <span className="text-xs font-semibold bg-forest/10 text-forest px-2.5 py-0.5 rounded-full tabular-nums">
                {filteredAndRankedStays.length} {t.staysCount}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-0.5">
              {lang === 'hi' ? 'खोज:' : 'Query:'} “{searchQuery}” · {lang === 'hi' ? 'भाषा: हिन्दी' : 'Lang: English'}
            </p>
          </div>

          {/* Rerank Criteria Badges (Reflecting user's live constraints) */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mr-1">
              {t.rankingBasedOn}
            </span>
            <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs bg-forest-50 text-forest-800 border border-forest-200">
              <Check className="w-3 h-3 text-forest" />
              <span>{t.queryMatch}</span>
            </span>
            <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs bg-sand-100 text-gray-700 border border-sand-300">
              <Sliders className="w-3 h-3 text-terracotta" />
              <span>
                {userPrefs.travelStyle} · {userPrefs.budget}
              </span>
            </span>
            {savedStayIds.length > 0 && (
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs bg-terracotta-50 text-terracotta-700 border border-terracotta-200">
                <Heart className="w-3 h-3 text-terracotta fill-terracotta" />
                <span className="tabular-nums">
                  {savedStayIds.length} {t.savedCount}
                </span>
              </span>
            )}
          </div>
        </div>

        {/* RESULTS LIST / SKELETON / EMPTY STATE */}
        {isSearching ? (
          <div className="space-y-6">
            <div className="p-4 rounded-2xl bg-white border border-forest-100 shadow-xs flex items-center space-x-3 text-sm text-forest animate-pulse">
              <Loader2 className="w-5 h-5 text-terracotta animate-spin shrink-0" />
              <span>
                {lang === 'hi'
                  ? 'सारथी आपकी खोज का विश्लेषण कर रहा है और मौसम अनुकूल कारण तैयार कर रहा है...'
                  : 'Synthesizing natural language intent and curating peaceful stays with local microclimate...'}
              </span>
            </div>
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="bg-white rounded-3xl p-6 border border-sand-200 shadow-xs animate-pulse flex flex-col md:flex-row gap-6"
              >
                <div className="w-full md:w-72 h-52 bg-sand-100 rounded-2xl shrink-0"></div>
                <div className="flex-1 space-y-3">
                  <div className="h-6 bg-sand-200 rounded w-2/3"></div>
                  <div className="h-4 bg-sand-100 rounded w-1/3"></div>
                  <div className="h-20 bg-forest-50/50 rounded-2xl mt-4"></div>
                  <div className="h-8 bg-sand-100 rounded w-1/4 mt-4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredAndRankedStays.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-sand-200 shadow-sm max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-forest-50 text-forest flex items-center justify-center mx-auto mb-4">
              <Trees className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif font-bold text-forest mb-2">
              {t.emptyTitle}
            </h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              {t.emptyDesc}
            </p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2.5 bg-forest text-white rounded-xl text-sm font-medium hover:bg-forest-600 transition cursor-pointer shadow-xs"
            >
              {t.resetBtn}
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredAndRankedStays.map((stay, index) => (
              <StayCard
                key={stay.id}
                stay={stay}
                index={index}
                lang={lang}
                searchQuery={searchQuery}
                isSaved={savedStayIds.includes(stay.id)}
                onSave={handleSave}
                onDismiss={handleDismiss}
                onViewDetails={(item) => setSelectedStayModal(item)}
              />
            ))}
          </div>
        )}
      </main>

      {/* 4. COLD-START PREFERENCE QUESTIONNAIRE MODAL */}
      <ColdStartModal
        isOpen={showColdStart}
        lang={lang}
        userPrefs={userPrefs}
        setUserPrefs={setUserPrefs}
        step={coldStartStep}
        setStep={setColdStartStep}
        onComplete={() => {
          setShowColdStart(false);
          setHasFeedbackAdapted(true);
          setActiveToast({
            type: 'save',
            message:
              lang === 'hi'
                ? 'आपकी पसंद सुरक्षित कर दी गई! अनुशंसाएं अनुकूलित हैं।'
                : 'Preferences applied! Serene nature picks prioritized.'
          });
        }}
        onSkip={() => setShowColdStart(false)}
        onClose={() => setShowColdStart(false)}
      />

      {/* 5. STAY DETAIL & BOOKING MODAL */}
      <StayDetailModal
        stay={selectedStayModal}
        lang={lang}
        searchQuery={searchQuery}
        isSaved={selectedStayModal ? savedStayIds.includes(selectedStayModal.id) : false}
        onSave={handleSave}
        onClose={() => setSelectedStayModal(null)}
        onConfirmBooking={(name) => {
          setActiveToast({
            type: 'booking',
            message:
              lang === 'hi'
                ? `आरक्षण अनुरोध भेजा गया: ${name}`
                : `Booking request sent for ${name}! Host notified.`
          });
        }}
      />

      {/* 6. INTERACTIVE TOAST NOTIFICATION */}
      {activeToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-forest-900 text-sand-50 px-5 py-3.5 rounded-2xl shadow-xl border border-forest-700/80 text-xs sm:text-sm font-medium flex items-center space-x-3 animate-in slide-in-from-bottom duration-200">
          {activeToast.type === 'booking' ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          ) : (
            <Sparkles className="w-4 h-4 text-terracotta shrink-0" />
          )}
          <span>{activeToast.message}</span>
        </div>
      )}

      {/* 7. FOOTER */}
      <Footer lang={lang} />
    </div>
  );
}

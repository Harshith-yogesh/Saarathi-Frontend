export interface TranslationData {
  appName: string;
  tagline: string;
  heroTitle: string;
  heroSub: string;
  heroBadge: string;
  placeholderRotations: string[];
  searchBtn: string;
  rankingBasedOn: string;
  queryMatch: string;
  userPrefsChip: string;
  sessionAdaptChip: string;
  whyThisPick: string;
  pricePerNight: string;
  inclusiveTaxes: string;
  saveBtn: string;
  savedBtn: string;
  dismissBtn: string;
  detailsBtn: string;
  emptyTitle: string;
  emptyDesc: string;
  resetBtn: string;
  sessionNotice: string;
  coldStartSubtitle: string;
  skipForNow: string;
  continueBtn: string;
  backBtn: string;
  finishPrefs: string;
  step1Title: string;
  step2Title: string;
  step3Title: string;
  topMatchBadge: string;
  tryPrompt: string;
  savedCount: string;
  staysCount: string;
  adaptiveHeading: string;
  adaptiveSub: string;
  resetSession: string;
  footerTag: string;
  footerAddress: string;
  liveEngineStatus: string;
  nlpLabel: string;
  groundedAiLabel: string;
  preferencesBtn: string;
  reserveStay: string;
  bookModalTitle: string;
  bookModalSub: string;
  hostStory: string;
  amenitiesLabel: string;
  rationaleLabel: string;
  bookingSuccessToast: string;
  travelStyles: {
    id: string;
    label: string;
    desc: string;
    icon: string;
  }[];
  budgets: {
    id: string;
    label: string;
    desc: string;
    icon: string;
  }[];
  paces: {
    id: string;
    label: string;
    desc: string;
    icon: string;
  }[];
  tagsTranslation: Record<string, string>;
}

export const translations: Record<'en' | 'hi', TranslationData> = {
  en: {
    appName: "Sarathi",
    tagline: "Understands you. Explains itself. Learns from you.",
    heroTitle: "Travel made intuitive for the mindful Indian traveler.",
    heroSub: "Speak naturally in your words. Sarathi comprehends deep travel wishes, curates authentic stays, and explains the reason behind every pick.",
    heroBadge: "Hyper-Personalized Indian Travel Discovery",
    placeholderRotations: [
      "I want somewhere peaceful near Munnar, not too pricey and close to nature",
      "quiet stay close to nature for a weekend recharge under 5000",
      "misty tea plantation retreat away from tourist crowds",
      "authentic clay cabin with Kerala sadhya and stream walk"
    ],
    searchBtn: "Search with Sarathi",
    rankingBasedOn: "Sarathi ranking based on:",
    queryMatch: "Query intent match (Munnar Nature)",
    userPrefsChip: "Cold-start preferences",
    sessionAdaptChip: "Live feedback affinity (+Nature)",
    whyThisPick: "WHY THIS PICK FOR YOU?",
    pricePerNight: "/ night",
    inclusiveTaxes: "All taxes & fresh breakfast included",
    saveBtn: "Save",
    savedBtn: "Saved",
    dismissBtn: "Dismiss",
    detailsBtn: "View Stay",
    emptyTitle: "No matches found in this valley",
    emptyDesc: "Try adjusting your budget or searching for nearby serene spots like Suryanelli, Devikulam, Vagamon, or Wayanad.",
    resetBtn: "Reset Filter State",
    sessionNotice: "Ranking automatically adapted based on your saved places & preference history.",
    coldStartSubtitle: "Takes 20 seconds. Skippable anytime.",
    skipForNow: "Skip for now",
    continueBtn: "Next",
    backBtn: "Back",
    finishPrefs: "Save & Personalize",
    step1Title: "What is your core travel style?",
    step2Title: "What is your budget comfort zone?",
    step3Title: "What pace do you cherish?",
    topMatchBadge: "Top Match",
    tryPrompt: "Try:",
    savedCount: "saved",
    staysCount: "stays",
    adaptiveHeading: "Live Adaptive Feedback: Sarathi updated ranking based on your saves",
    adaptiveSub: "Nature-rich, tea-plantation stays with high peace ratings are now given highest priority.",
    resetSession: "Reset session",
    footerTag: "Sarathi • You speak naturally → Sarathi understands → ranks → explains → learns.",
    footerAddress: "Devikulam Valley Rd, Pallivasal PO, Chithirapuram, Idukki District, Kerala 685565 • Grounded Travel Planning",
    liveEngineStatus: "Sarathi Intelligent Engine • Live Session Adaptation Active",
    nlpLabel: "Natural Language Comprehension",
    groundedAiLabel: "Grounded Explainability",
    preferencesBtn: "Preferences",
    reserveStay: "Reserve Stay",
    bookModalTitle: "Stay Reservation & Host Request",
    bookModalSub: "Direct booking with zero commission and farm-to-table breakfast included.",
    hostStory: "Host Story & Sanctuary Philosophy",
    amenitiesLabel: "Curated Sanctuary Amenities",
    rationaleLabel: "Grounded Rationale Analysis",
    bookingSuccessToast: "Reservation request confirmed! Host will greet you with fresh cardamom tea upon arrival.",
    travelStyles: [
      { id: 'peaceful', label: 'Peaceful & Solitary', desc: 'Misty hills, birdsong, quiet plantations', icon: 'Trees' },
      { id: 'adventurous', label: 'Adventurous', desc: 'Trekking, waterfalls, jungle safari', icon: 'Compass' },
      { id: 'cultural', label: 'Cultural & Heritage', desc: 'Temples, local cuisine, spice farms', icon: 'Landmark' },
      { id: 'mixed', label: 'Balanced Mix', desc: 'A leisurely balance of nature & comfort', icon: 'Sparkles' }
    ],
    budgets: [
      { id: 'budget', label: 'Mindful Budget', desc: '₹2,000 – ₹4,500 / night', icon: 'Wallet' },
      { id: 'balanced', label: 'Balanced Comfort', desc: '₹4,500 – ₹8,500 / night', icon: 'BadgePercent' },
      { id: 'luxury', label: 'Boutique Indulgence', desc: '₹9,000+ / night', icon: 'Gem' }
    ],
    paces: [
      { id: 'slow', label: 'Slow & Unhurried', desc: 'Wake up late, sip chai, read beside streams', icon: 'Coffee' },
      { id: 'balanced', label: 'Balanced Exploration', desc: '1–2 mindful activities a day', icon: 'Sun' },
      { id: 'packed', label: 'Curated Itinerary', desc: 'Cover scenic spots, sunrise viewpoints', icon: 'Footprints' }
    ],
    tagsTranslation: {
      "Home": "Home",
      "Nature": "Nature",
      "Tea Plantation": "Tea Plantation",
      "Peaceful": "Peaceful",
      "Hill Station": "Hill Station",
      "Waterfall": "Waterfall",
      "Heritage": "Heritage",
      "Organic Food": "Organic Food",
      "All Stays": "All Stays"
    }
  },
  hi: {
    appName: "सारथी",
    tagline: "आपको समझता है। कारण समझाता है। आपसे सीखता है।",
    heroTitle: "भारतीय यात्रियों के लिए एक संवेदनशील यात्रा साथी।",
    heroSub: "अपनी स्वाभाविक भाषा में बताइए। सारथी आपकी गहरी इच्छाओं को समझकर प्रामाणिक स्थान ढूंढता है और हर विकल्प के पीछे का कारण स्पष्ट करता है।",
    heroBadge: "सहज भारतीय भाषा खोज एवं अनुशंसा इंजन",
    placeholderRotations: [
      "मुन्नार के पास 5000 के अंदर कोई शांत जगह, जो प्रकृति के करीब हो",
      "वीकेंड के लिए प्रकृति की गोद में शांतिपूर्ण स्टे 5000 के अंदर",
      "चाय बागानों के बीच शांति, जहाँ पर्यटकों की भीड़ न हो",
      "पारंपरिक मिट्टी की कुटिया जहाँ केरल साध्या भोजन मिले"
    ],
    searchBtn: "सारथी से खोजें",
    rankingBasedOn: "सारथी रैंकिंग के मुख्य आधार:",
    queryMatch: "आपकी खोज की भावना (मुन्नार + प्रकृति)",
    userPrefsChip: "आपकी प्राथमिक पसंद (Travel Style)",
    sessionAdaptChip: "हालिया इंटरैक्शन आधारित अनुकूलन (+नेचर पसंद)",
    whyThisPick: "सारथी ने यह विकल्प क्यों चुना?",
    pricePerNight: "/ रात",
    inclusiveTaxes: "सभी टैक्स एवं ताज़ा नाश्ता शामिल",
    saveBtn: "पसंद करें",
    savedBtn: "सहेजा गया",
    dismissBtn: "हटाएं",
    detailsBtn: "विवरण देखें",
    emptyTitle: "इस घाटी में कोई उपयुक्त विकल्प नहीं मिला",
    emptyDesc: "कृपया बजट सीमा थोड़ी बदलें या नजदीकी सूर्यनेल्ली, वागामोन अथवा वायनाड के विकल्प खोजें।",
    resetBtn: "पुनः रीसेट करें",
    sessionNotice: "आपकी पसंद और हालिया चयन के आधार पर रैंकिंग तुरंत अपडेट की गई है।",
    coldStartSubtitle: "सिर्फ 20 सेकंड। कभी भी छोड़ सकते हैं।",
    skipForNow: "अभी छोड़ें",
    continueBtn: "आगे बढ़ें",
    backBtn: "पीछे",
    finishPrefs: "सहेजें और अनुकूलित करें",
    step1Title: "आपकी यात्रा की मुख्य शैली क्या है?",
    step2Title: "आपका पसंदीदा बजट क्या है?",
    step3Title: "आप किस गति से यात्रा पसंद करते हैं?",
    topMatchBadge: "सर्वोत्तम मेल",
    tryPrompt: "सुझाव:",
    savedCount: "सहेजे गए",
    staysCount: "स्थान",
    adaptiveHeading: "सक्रिय अनुकूलन: सारथी ने आपकी पसंद सीख ली है",
    adaptiveSub: "प्रकृति, चाय बागान और शांत नदी के निकट वाले होमस्टे को सर्वोच्च प्राथमिकता दी गई है।",
    resetSession: "सत्र रीसेट करें",
    footerTag: "सारथी • आप सहज भाषा में बोलें → सारथी समझेगा → रैंक करेगा → कारण बताएगा → आपसे सीखेगा।",
    footerAddress: "देविकुलम वैली रोड, पल्लीवासल, चित्तिरापुरम, इडुक्की जिला, केरल 685565 • संवेदनशील यात्रा योजना",
    liveEngineStatus: "सारथी एआई इंजन • लाइव पर्सनलाइजेशन मॉडल सक्रिय",
    nlpLabel: "प्राकृतिक भाषा परख",
    groundedAiLabel: "तर्कसंगत कारण (Grounded AI)",
    preferencesBtn: "मेरी पसंद",
    reserveStay: "आरक्षण करें",
    bookModalTitle: "स्थान आरक्षण एवं मेज़बान से संपर्क",
    bookModalSub: "शून्य कमीशन सीधा बुकिंग और घर का बना सात्विक नाश्ता शामिल।",
    hostStory: "मेज़बान की कहानी एवं आश्रम दर्शन",
    amenitiesLabel: "विशिष्ट प्राकृतिक सुविधाएं",
    rationaleLabel: "सारथी की गहरी अंतर्दृष्टि",
    bookingSuccessToast: "आरक्षण अनुरोध स्वीकृत! आगमन पर आपका स्वागत ताज़ी इलायची चाय से किया जाएगा।",
    travelStyles: [
      { id: 'peaceful', label: 'शांत और एकांत प्रिय', desc: 'धुंधली पहाड़ियां, चाय बागान, पक्षियों का कलरव', icon: 'Trees' },
      { id: 'adventurous', label: 'रोमांचक (Adventurous)', desc: 'ट्रेकिंग, झरने, जंगल सफारी', icon: 'Compass' },
      { id: 'cultural', label: 'सांस्कृतिक एवं धरोहर', desc: 'प्राचीन मंदिर, स्थानीय भोजन, मसाले के बागान', icon: 'Landmark' },
      { id: 'mixed', label: 'संतुलित अनुभव (Balanced)', desc: 'प्रकृति और आराम का खूबसूरत मेल', icon: 'Sparkles' }
    ],
    budgets: [
      { id: 'budget', label: 'किफायती बजट', desc: '₹2,000 – ₹4,500 / रात', icon: 'Wallet' },
      { id: 'balanced', label: 'संतुलित आराम', desc: '₹4,500 – ₹8,500 / रात', icon: 'BadgePercent' },
      { id: 'luxury', label: 'प्रीमियम स्टे', desc: '₹9,000+ / रात', icon: 'Gem' }
    ],
    paces: [
      { id: 'slow', label: 'धीमी और सुकून भरी', desc: 'देर से उठना, चाय की चुस्कियां, झरने किनारे आराम', icon: 'Coffee' },
      { id: 'balanced', label: 'संतुलित सैर', desc: 'दिन में 1-2 चुनिंदा खूबसूरत जगहें', icon: 'Sun' },
      { id: 'packed', label: 'पूरी सैर (Curated)', desc: 'सूर्योदय बिंदु, ट्रेक, सभी प्रमुख दर्शनीय स्थल', icon: 'Footprints' }
    ],
    tagsTranslation: {
      "Home": "होमस्टे",
      "Nature": "प्रकृति",
      "Tea Plantation": "चाय बागान",
      "Peaceful": "शांत वातावरण",
      "Hill Station": "हिल स्टेशन",
      "Waterfall": "झरना",
      "Heritage": "धरोहर",
      "Organic Food": "शुद्ध भोजन",
      "All Stays": "सभी स्थान"
    }
  }
};

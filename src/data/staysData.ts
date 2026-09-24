import { Stay } from '../types';

export const INITIAL_STAYS: Stay[] = [
  {
    id: "stay-01",
    name: "Eucalyptus Mint Heritage Plantation",
    location: "Devikulam Valley, 7km from Munnar Town",
    price: 4600,
    originalPrice: 5800,
    rating: 4.88,
    reviewsCount: 142,
    tags: ["Home", "Tea Plantation", "Peaceful"],
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    affinityScore: 98,
    category: "nature_peace",
    distance: "7 km from Munnar town center",
    elevation: "5,400 ft altitude",
    weather: {
      temperatureC: 17,
      condition: "Misty & Crisp",
      conditionHindi: "धुंध और हल्की ठंड",
      humidity: 78,
      windSpeedKm: 8,
      iconType: "mist",
      forecastNote: {
        en: "Morning tea mist rolls across the slope from 6:30 AM; clears into warm sunshine by 11 AM.",
        hi: "सुबह 6:30 बजे से ढलान पर चाय की धुंध छाई रहती है; 11 बजे तक खिली धूप निकल आती है।"
      }
    },
    explanation: {
      en: "Directly satisfies 'peaceful & close to nature': located within 22 acres of private organic tea slopes, entirely insulated from tourist jeep corridors. At ₹4,600, it stays right within your mindful threshold while serving traditional Kerala sadhya.",
      hi: "आपकी 'शांत और प्रकृति के निकट' की मांग पर बिल्कुल खरा: 22 एकड़ के निजी जैविक चाय बागानों के बीच स्थित, जहां जीपों के शोर-शराबे की कोई आवाज नहीं आती। ₹4,600 के बजट में यह पारंपरिक केरल साध्या भोजन भी उपलब्ध कराता है।"
    },
    highlights: {
      en: ["Private stream walk", "Fireplace in rooms", "Organic home-cooked meals"],
      hi: ["निजी प्राकृतिक झरना", "कमरे में फायरप्लेस", "घर जैसा सात्विक भोजन"]
    },
    description: {
      en: "Restored from an early 20th-century planters lodge, Eucalyptus Mint sits sheltered amidst undulating emerald slopes. Mornings begin with birdsong from Malabar whistling thrushes and hand-plucked silver needle white tea.",
      hi: "20वीं सदी की शुरुआत के प्लांटर्स लॉज से पुनर्निर्मित, नीलगिरि के पहाड़ों और चाय ढलानों के बीच बसा एक शांत आश्रय। सुबह की शुरुआत पक्षियों की चहचहाहट और ताज़ी चाय के साथ होती है।"
    },
    amenities: {
      en: ["100% Organic Farm Kitchen", "Cardamom Trail Guide", "Solar Heated Rainshowers", "Reading Library with Valley View"],
      hi: ["100% जैविक रसोई", "इलायची ट्रेक गाइड", "सौर ऊर्जा गर्म पानी", "घाटी के दृश्य वाला पुस्तकालय"]
    }
  },
  {
    id: "stay-02",
    name: "Cloud Valley Eco Mud Cabins",
    location: "Suryanelli Ridge, Near Kolukkumalai",
    price: 3850,
    originalPrice: 4500,
    rating: 4.92,
    reviewsCount: 98,
    tags: ["Home", "Peaceful", "Hill Station"],
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1000&q=80",
    affinityScore: 94,
    category: "nature_peace",
    distance: "18 km from Munnar (High Ridge)",
    elevation: "6,200 ft altitude",
    weather: {
      temperatureC: 13,
      condition: "Chilly High Ridge Breeze",
      conditionHindi: "पहाड़ी ठंडी हवाएं",
      humidity: 65,
      windSpeedKm: 14,
      iconType: "wind",
      forecastNote: {
        en: "Brisk mountain ridge breezes. Night drops to 11°C—perfect for cozy bonfires and stargazing.",
        hi: "तेज पहाड़ी हवाएं। रात में तापमान 11°C तक गिर जाता है—अलाव और तारों को देखने के लिए उत्तम।"
      }
    },
    explanation: {
      en: "Ranked high for extreme quietude. Handcrafted clay cottages situated at 6,200 ft with zero vehicular noise. 100% solar powered, with natural mist rolling into your veranda every dawn at an unbeatable ₹3,850.",
      hi: "अत्यंत शांति और सुकून के लिए शीर्ष रैंक। 6,200 फीट की ऊंचाई पर मिट्टी से बने प्राकृतिक कॉटेज, जहां वाहनों का शोर बिल्कुल नहीं है। प्रति रात ₹3,850 में हर सुबह बरामदे में उतरती धुंध का मनमोहक अनुभव।"
    },
    highlights: {
      en: ["Panoramic sunrise viewpoint", "Zero plastic campus", "Fresh farm honey tasting"],
      hi: ["शानदार सूर्योदय दृश्य", "प्लास्टिक-मुक्त परिसर", "ताज़ा प्राकृतिक शहद"]
    },
    description: {
      en: "Built using vernacular rammed earth and lime plaster, these insulated cottages breathe naturally with mountain temperatures. Designed for digital detox, mindfulness, and starlit night skies without light pollution.",
      hi: "मिट्टी और चूने से बने प्राकृतिक कॉटेज जो पहाड़ी ठंडक को संतुलित रखते हैं। शहर की भागदौड़ से दूर, तारों भरे आसमान और सुकून के लिए आदर्श।"
    },
    amenities: {
      en: ["Campfire on Chilly Evenings", "Kolukkumalai Sunrise Trek Access", "Clay Oven Baking", "Pure Spring Water"],
      hi: ["शाम का अलाव", "सूर्योदय ट्रेक मार्ग", "मिट्टी के ओवन की ताज़ा रोटी", "प्राकृतिक झरने का जल"]
    }
  },
  {
    id: "stay-03",
    name: "Ripple Brook Plantation Villa",
    location: "Pallivasal Falls Path, Munnar",
    price: 4950,
    originalPrice: 6200,
    rating: 4.76,
    reviewsCount: 215,
    tags: ["Waterfall", "Tea Plantation", "Peaceful"],
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1000&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    affinityScore: 91,
    category: "nature_water",
    distance: "5 km from Munnar Headworks",
    elevation: "5,100 ft altitude",
    weather: {
      temperatureC: 18,
      condition: "Pleasant & Humid Stream Air",
      conditionHindi: "सुहावना व जलधारा की ठंडक",
      humidity: 82,
      windSpeedKm: 6,
      iconType: "cloudy-sun",
      forecastNote: {
        en: "Gentle mountain sun with stream spray keeping afternoons pleasantly cool at 20°C.",
        hi: "हल्की धूप और झरने की फुहार से दोपहर का मौसम 20°C पर बेहद सुहावना रहता है।"
      }
    },
    explanation: {
      en: "Combines river sounds with cardamom fragrance. It sits beside a perennial tributary where guests can meditate or sit by the rocks. Highly rated by solo and slow travelers seeking quiet headspace under ₹5,000.",
      hi: "कल-कल बहती नदी और इलायची के बागानों की महक का अद्भुत संगम। एक बारहमासी जलधारा के किनारे बसा, जहां आप पत्थरों पर बैठकर ध्यान या चाय का आनंद ले सकते हैं। ₹5,000 के भीतर शांत वातावरण के लिए सराहा गया।"
    },
    highlights: {
      en: ["Riverbank seating benches", "Cardamom picking tour", "High-speed Wi-Fi if needed"],
      hi: ["नदी किनारे बैठने की व्यवस्था", "इलायची बागान की सैर", "शांत वातावरण"]
    },
    description: {
      en: "A stone cottage situated right beside the upper Pallivasal brook. Listen to water crashing over pebbles as you sip freshly brewed single-estate tea on the cedar deck.",
      hi: "पल्लीवासल झरने की जलधारा के ठीक बगल में स्थित सुंदर पत्थरों का कॉटेज। देवदार की लकड़ी के डेक पर बैठकर पानी की कलकल और ताज़ी चाय का आनंद लें।"
    },
    amenities: {
      en: ["Private Natural Water Pool", "Locally Sourced Meals", "Hammocks Under Silver Oaks", "Botanical Herb Garden"],
      hi: ["प्राकृतिक जलकुंड", "स्थानीय पारंपरिक भोजन", "पेड़ों के नीचे झूले", "औषधीय हर्बल बगीचा"]
    }
  },
  {
    id: "stay-04",
    name: "The Planters Colonial Bungalow",
    location: "Old Munnar British Road",
    price: 7200,
    originalPrice: 8500,
    rating: 4.81,
    reviewsCount: 310,
    tags: ["Heritage", "Tea Plantation", "Hill Station"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
    affinityScore: 84,
    category: "heritage_luxury",
    distance: "3 km from Old Munnar Church",
    elevation: "5,600 ft altitude",
    weather: {
      temperatureC: 16,
      condition: "Mild Sun & Valley Mist",
      conditionHindi: "हल्की धूप एवं घाटी की धुंध",
      humidity: 72,
      windSpeedKm: 7,
      iconType: "cloudy-sun",
      forecastNote: {
        en: "Clear blue skies in early afternoon; gentle evening fog ideal for high tea on the lawn.",
        hi: "दोपहर में साफ नीला आसमान; शाम को हल्की धुंध जो लॉन पर चाय पीने के लिए बेहतरीन है।"
      }
    },
    explanation: {
      en: "Ranked slightly lower on price constraint (above ₹5,000 threshold), but prioritized because of its authentic 1930s colonial architecture, private teak-wood library, and panoramic tea valley lawn.",
      hi: "₹5,000 की बजट सीमा से थोड़ा ऊपर होने के कारण इसे थोड़ा नीचे रखा गया है, लेकिन इसके 1930 के ब्रिटिश कालीन स्थापत्य, सागौन की लकड़ी की लाइब्रेरी और चाय घाटी के दृश्यों के कारण यह विशेष स्थान रखता है।"
    },
    highlights: {
      en: ["Antique colonial furnishings", "High-tea lawn service", "Curated book collection"],
      hi: ["विंटेज ब्रिटिश शैली", "लॉन में हाई-टी सेवा", "पुस्तकालय संग्रह"]
    },
    description: {
      en: "Preserving 90 years of plantation heritage, the bungalow boasts high wood-raftered ceilings, vintage brass fittings, and sprawling lawns looking out to Anamudi peak.",
      hi: "90 वर्षों की विरासत को संजोए हुए, ऊँची छतें, पीतल की कलाकृतियाँ और अनामुडी चोटी की ओर मुख किए हुए विस्तृत हरे-भरे लॉन।"
    },
    amenities: {
      en: ["Afternoon High Tea with Scones", "Fireplace in Each Suite", "Curator-Led Tea Tasting", "Butler Service"],
      hi: ["दोपहर की चाय और स्नैक्स", "प्रत्येक सुइट में फायरप्लेस", "चाय चखने का सत्र", "निजी सेवा परिचारक"]
    }
  },
  {
    id: "stay-05",
    name: "Whispering Pines Valley Homestay",
    location: "Lockhart Gap, Munnar",
    price: 3400,
    originalPrice: 4200,
    rating: 4.85,
    reviewsCount: 88,
    tags: ["Home", "Peaceful", "Hill Station"],
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1000&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80",
    affinityScore: 89,
    category: "nature_peace",
    distance: "12 km from Munnar town",
    elevation: "5,800 ft altitude",
    weather: {
      temperatureC: 15,
      condition: "Valley Fog Passing",
      conditionHindi: "घाटी से गुजरती धुंध",
      humidity: 76,
      windSpeedKm: 11,
      iconType: "mist",
      forecastNote: {
        en: "Dramatic clouds sweeping through the valley gap in early twilight. Moderate breeze.",
        hi: "शाम ढलते ही घाटी से होकर गुजरते बादलों का खूबसूरत नजारा। सुहानी मध्यम हवाएं।"
      }
    },
    explanation: {
      en: "Family-run homestay situated right on the edge of Lockhart gap where clouds sweep through the windows in the afternoon. Offers authentic Syrian Christian home cooking and peaceful trail access.",
      hi: "लॉकहार्ट गैप के किनारे बसा पारिवारिक होमस्टे जहाँ दोपहर में खिड़कियों से बादल अंदर आते हैं। प्रामाणिक घर का भोजन और शांत पहाड़ी पगडंडियाँ।"
    },
    highlights: {
      en: ["Gap viewpoint terrace", "Home-cooked Kerala appams", "Birdwatching hideout"],
      hi: ["पहाड़ी दृश्य वाली छत", "घर के बने केरल अप्पम", "पक्षी दर्शन स्थल"]
    },
    description: {
      en: "Run by George and Mary, a retired botanist couple who cultivate rare native orchids and welcome travelers seeking calm conversations and wholesome forest walks.",
      hi: "जॉर्ज और मैरी द्वारा संचालित, जो दुर्लभ आर्किड पौधों की खेती करते हैं और शांत वार्तालाप व जंगल की सैर के शौकीन यात्रियों का स्वागत करते हैं।"
    },
    amenities: {
      en: ["Botanical Garden Tour", "Fresh Cow Milk & Chai", "Private Balcony", "Trek Maps Provided"],
      hi: ["वनस्पति उद्यान भ्रमण", "ताज़ा दूध और चाय", "निजी बालकनी", "ट्रेकिंग नक्शे"]
    }
  },
  {
    id: "stay-06",
    name: "Spice Mist Cardamom Cottage",
    location: "Vattavada Valley Border",
    price: 4100,
    originalPrice: 4900,
    rating: 4.79,
    reviewsCount: 104,
    tags: ["Organic Food", "Nature", "Peaceful"],
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80",
    affinityScore: 87,
    category: "nature_peace",
    distance: "24 km from Munnar (Vegetable Terraces)",
    elevation: "6,000 ft altitude",
    weather: {
      temperatureC: 14,
      condition: "Crisp & Sunny Microclimate",
      conditionHindi: "ठंडी धूप व साफ मौसम",
      humidity: 60,
      windSpeedKm: 9,
      iconType: "sun",
      forecastNote: {
        en: "Rain shadow area with higher sunshine hours than Munnar town. Crisp dry cold at night.",
        hi: "मुन्नार शहर की तुलना में अधिक धूप वाला क्षेत्र। रात में साफ ठंडी और सुहानी हवा।"
      }
    },
    explanation: {
      en: "Tucked inside an organic spice grove where pepper vines climb silver oaks. 100% pesticide-free vegetable terrace farming with crisp winter night temperatures.",
      hi: "जैविक मसालों के बागान के भीतर स्थित जहाँ काली मिर्च की बेलें ओक के पेड़ों पर चढ़ती हैं। ताज़ी जैविक सब्जियों की खेती और रात की सुहानी ठंडक।"
    },
    highlights: {
      en: ["Farm-to-table dinner included", "Cardamom curing shed visit", "Wood fire hearth"],
      hi: ["खेत से सीधे ताज़ा रात का भोजन", "इलायची प्रसंस्करण की समझ", "पारंपरिक चूल्हा"]
    },
    description: {
      en: "Experience authentic rural Kerala agriculture in Vattavada. Stay in stone cottages built from local granite and enjoy starry skies devoid of ambient city lights.",
      hi: "वट्टावडा की प्रामाणिक ग्रामीण जीवनशैली का अनुभव। स्थानीय पत्थरों से बने कॉटेज और प्रदूषण-मुक्त तारों भरा नीला आकाश।"
    },
    amenities: {
      en: ["Organic Farm Tour", "Traditional Cooking Class", "Campfire", "Free Mountain Bicycles"],
      hi: ["जैविक फार्म भ्रमण", "पारंपरिक पाक कला सत्र", "अलाव", "निःशुल्क माउंटेन साइकिल"]
    }
  }
];

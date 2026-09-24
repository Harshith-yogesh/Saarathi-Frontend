export type Language = 'en' | 'hi';

export type TravelStyle = 'peaceful' | 'adventurous' | 'cultural' | 'mixed';
export type BudgetTier = 'budget' | 'balanced' | 'luxury';
export type TravelPace = 'slow' | 'balanced' | 'packed';

export interface UserPreferences {
  travelStyle: TravelStyle;
  budget: BudgetTier;
  pace: TravelPace;
}

export interface WeatherInfo {
  temperatureC: number;
  condition: string;
  conditionHindi: string;
  humidity: number;
  windSpeedKm: number;
  iconType: 'cloudy-sun' | 'mist' | 'rain' | 'sun' | 'wind';
  forecastNote: {
    en: string;
    hi: string;
  };
}

export interface Stay {
  id: string;
  name: string;
  location: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  tags: string[];
  image: string;
  fallbackImage: string;
  affinityScore: number;
  category: string;
  weather: WeatherInfo;
  explanation: {
    en: string;
    hi: string;
  };
  highlights: {
    en: string[];
    hi: string[];
  };
  description: {
    en: string;
    hi: string;
  };
  amenities: {
    en: string[];
    hi: string[];
  };
  distance: string;
  elevation: string;
}

export interface SearchFilterState {
  query: string;
  activeCategory?: string;
  maxBudget?: number;
  tags: string[];
}

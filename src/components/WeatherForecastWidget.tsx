import React from 'react';
import { CloudFog, CloudSun, Sun, Wind, CloudRain, Droplets } from 'lucide-react';
import { WeatherInfo, Language } from '../types';

interface WeatherForecastWidgetProps {
  weather: WeatherInfo;
  lang: Language;
  elevation?: string;
}

export const WeatherForecastWidget: React.FC<WeatherForecastWidgetProps> = ({
  weather,
  lang,
  elevation
}) => {
  const getWeatherIcon = (type: WeatherInfo['iconType']) => {
    switch (type) {
      case 'mist':
        return <CloudFog className="w-4 h-4 text-emerald-700" />;
      case 'cloudy-sun':
        return <CloudSun className="w-4 h-4 text-amber-600" />;
      case 'wind':
        return <Wind className="w-4 h-4 text-sky-700" />;
      case 'rain':
        return <CloudRain className="w-4 h-4 text-blue-600" />;
      case 'sun':
        return <Sun className="w-4 h-4 text-amber-500" />;
      default:
        return <CloudSun className="w-4 h-4 text-emerald-700" />;
    }
  };

  const conditionText = lang === 'hi' ? weather.conditionHindi : weather.condition;
  const forecastText = weather.forecastNote[lang] || weather.forecastNote.en;

  return (
    <div className="my-2.5 p-3 rounded-2xl bg-[#F3F7F4]/90 border border-emerald-900/10 shadow-2xs transition-all hover:bg-[#EEF5F0]">
      {/* Top row: Live temperature, condition, metrics */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-xl bg-white shadow-xs flex items-center justify-center border border-emerald-100/80">
            {getWeatherIcon(weather.iconType)}
          </div>
          <div>
            <div className="flex items-baseline space-x-1.5">
              <span className="text-base font-serif font-bold text-forest tabular-nums">
                {weather.temperatureC}°C
              </span>
              <span className="text-xs font-semibold text-forest-700">
                {conditionText}
              </span>
            </div>
            {elevation && (
              <span className="text-[10px] text-gray-400 block -mt-0.5">
                {elevation}
              </span>
            )}
          </div>
        </div>

        {/* Humidity & Wind metrics */}
        <div className="flex items-center space-x-3 text-[11px] text-forest-800/80 font-medium">
          <span className="inline-flex items-center space-x-1" title="Local humidity">
            <Droplets className="w-3 h-3 text-emerald-600" />
            <span className="tabular-nums">{weather.humidity}%</span>
          </span>
          <span className="inline-flex items-center space-x-1" title="Mountain wind speed">
            <Wind className="w-3 h-3 text-emerald-600" />
            <span className="tabular-nums">{weather.windSpeedKm} km/h</span>
          </span>
        </div>
      </div>

      {/* Mindful weather note */}
      <p className="mt-1.5 text-[11px] text-forest-900/75 leading-relaxed font-sans border-t border-forest-100/60 pt-1.5">
        <span className="font-semibold text-forest-800">
          {lang === 'hi' ? 'मौसम संकेत: ' : 'Microclimate: '}
        </span>
        {forecastText}
      </p>
    </div>
  );
};

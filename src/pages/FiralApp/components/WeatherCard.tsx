import React, { useEffect, useState } from 'react';
import styles from '../styles/WeatherCard.module.css';
import { FiSun, FiCloud, FiCloudRain, FiDroplet, FiWind, FiEye } from 'react-icons/fi';

interface WeatherData {
  location: string;
  currentTemp: number;
  condition: string;
  highTemp: number;
  lowTemp: number;
  precipitation: number;
  humidity: number;
  windSpeed: number;
  visibility: number;
  forecast: {
    date: string;
    temp: number;
    icon: React.ReactNode;
  }[];
}

const WeatherCard: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getWeatherIcon = (weatherCode: number) => {
    // WMO Weather interpretation codes: https://open-meteo.com/en/docs
    if (weatherCode <= 3) {
      return <FiSun size={50} />; // Clear or partly cloudy
    } else if (weatherCode <= 48) {
      return <FiCloud size={50} />; // Foggy or cloudy
    } else {
      return <FiCloudRain size={50} />; // Rain, snow, or thunderstorm
    }
  };

  const getWeatherCondition = (weatherCode: number): string => {
    if (weatherCode <= 3) {
      return 'Assolellat';
    } else if (weatherCode <= 48) {
      return 'Ennuvolat';
    } else if (weatherCode <= 67) {
      return 'Plujós';
    } else if (weatherCode <= 77) {
      return 'Neu';
    } else {
      return 'Tempesta';
    }
  };

  const getDayName = (dateStr: string) => {
    const date = new Date(dateStr);
    const days = ['Dg', 'Dl', 'Dt', 'Dm', 'Dj', 'Dv', 'Ds'];
    return days[date.getDay()];
  };

  useEffect(() => {
    const fetchWeatherData = async (lat: number, lon: number) => {
      try {
        // Get location name using OpenStreetMap Nominatim API (free)
        const geoResponse = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
        );
        const geoData = await geoResponse.json();
        const locationName =
          geoData.address.city || geoData.address.town || geoData.address.village || 'Desconegut';

        // Get weather data from OpenMeteo API (free)
        const weatherResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,precipitation_probability,weather_code,wind_speed_10m,visibility&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto`
        );

        if (!weatherResponse.ok) {
          throw new Error('Error fetching weather data');
        }

        const weatherData = await weatherResponse.json();

        const processedData: WeatherData = {
          location: locationName,
          currentTemp: Math.round(weatherData.current.temperature_2m),
          condition: getWeatherCondition(weatherData.current.weather_code),
          highTemp: Math.round(weatherData.daily.temperature_2m_max[0]),
          lowTemp: Math.round(weatherData.daily.temperature_2m_min[0]),
          precipitation: weatherData.current.precipitation_probability || 0,
          humidity: weatherData.current.relative_humidity_2m,
          windSpeed: Math.round(weatherData.current.wind_speed_10m),
          visibility: Math.round(weatherData.current.visibility / 1000),
          forecast: weatherData.daily.weather_code
            .slice(1, 6)
            .map((code: number, index: number) => ({
              date: getDayName(weatherData.daily.time[index + 1]),
              temp: Math.round(
                (weatherData.daily.temperature_2m_max[index + 1] +
                  weatherData.daily.temperature_2m_min[index + 1]) /
                  2
              ),
              icon: getWeatherIcon(code),
            })),
        };

        setWeatherData(processedData);
        setLoading(false);
      } catch (err) {
        setError('Error loading weather data');
        setLoading(false);
      }
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            fetchWeatherData(position.coords.latitude, position.coords.longitude);
          },
          () => {
            // Default coordinates for Barcelona if geolocation fails
            fetchWeatherData(41.3874, 2.1686);
          }
        );
      } else {
        // Default coordinates for Barcelona if geolocation is not supported
        fetchWeatherData(41.3874, 2.1686);
      }
    };

    getLocation();
  }, []);

  if (loading) {
    return (
      <div className={styles['weather-card']}>
        <div className={styles['loading']}>Carregant dades meteorològiques...</div>
      </div>
    );
  }

  if (error || !weatherData) {
    return (
      <div className={styles['weather-card']}>
        <div className={styles['error']}>No s'han pogut carregar les dades meteorològiques</div>
      </div>
    );
  }

  return (
    <div className={styles['weather-card']}>
      <div className={styles['weather-header']}>
        <h3>{weatherData.location}</h3>
        <div className={styles['date-selector']}>
          <span>Avui</span>
        </div>
      </div>

      <div className={styles['current-weather']}>
        <div className={styles['temperature-info']}>
          <p className={styles['current-temp']}>{weatherData.currentTemp}°</p>
          <p className={styles['weather-condition']}>{weatherData.condition}</p>
          <p className={styles['high-low']}>
            Màx: {weatherData.highTemp}° Mín: {weatherData.lowTemp}°
          </p>
        </div>
        <div className={styles['weather-icon']}>{getWeatherIcon(weatherData.currentTemp)}</div>
      </div>

      <div className={styles['weather-details']}>
        <div className={styles['detail-item']}>
          <span className={styles['detail-label']}>Precipitació</span>
          <span className={styles['detail-value']}>{weatherData.precipitation}%</span>
        </div>
        <div className={styles['detail-item']}>
          <span className={styles['detail-label']}>Humitat</span>
          <span className={styles['detail-value']}>{weatherData.humidity}%</span>
        </div>
        <div className={styles['detail-item']}>
          <span className={styles['detail-label']}>Vent</span>
          <span className={styles['detail-value']}>{weatherData.windSpeed} km/h</span>
        </div>
        <div className={styles['detail-item']}>
          <span className={styles['detail-label']}>Visibilitat</span>
          <span className={styles['detail-value']}>{weatherData.visibility} km</span>
        </div>
      </div>

      <div className={styles['weather-forecast']}>
        {weatherData.forecast.map((day, index) => (
          <div key={index} className={styles['forecast-day']}>
            <span className={styles['forecast-date']}>{day.date}</span>
            <div className={styles['forecast-icon']}>{day.icon}</div>
            <span className={styles['forecast-temp']}>{day.temp}°</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherCard;

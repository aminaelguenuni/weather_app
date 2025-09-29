export default function WeatherCard({ weather }) {
  if (!weather) return null;
  if (weather.error) return <p className="error">{weather.error}</p>;

  return (
    <div className="weather-card">
      <h2>{weather.city}</h2>
      <p>{weather.temperature}°C</p>
      <p>{weather.description}</p>
      <p>Humidity: {weather.humidity}%</p>
    </div>
  );
}

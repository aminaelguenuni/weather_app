// src/WeatherCard.jsx
export default function WeatherCard({ weather }) {
  if (!weather) return null; // nothing to show yet
  if (weather.error) return <p className="text-red-500">{weather.error}</p>;

  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <h2 className="text-xl font-bold">{weather.city}</h2>
      <p>{weather.temperature}°C</p>
      <p>{weather.description}</p>
      <p>Humidity: {weather.humidity}%</p>
    </div>
  );
}

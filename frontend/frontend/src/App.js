import { useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard'; // direct import from src/

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/weather?city=${city}`);
      setWeather(res.data);
    } catch {
      setWeather({ error: 'City not found' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Weather App</h1>
      <input
        className="p-2 border rounded mb-2"
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={getWeather}
      >
        Search
      </button>

      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;

import { useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import "./App.css"; // import the CSS

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    if (!city) return;
    try {
      const res = await axios.get(
        `http://localhost:5000/api/weather?city=${city}`
      );
      setWeather(res.data);
    } catch {
      setWeather({ error: "City not found" });
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="city-input"
      />
      <button onClick={getWeather} className="search-btn">
        Search
      </button>

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;

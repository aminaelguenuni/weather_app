const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const API_KEY = 'yourkey'; 

app.get('/api/weather', async (req, res) => {
  const city = req.query.city;
  if (!city) return res.json({ error: 'Please provide a city' });

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    const data = response.data;
    res.json({
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity
    });
  } catch (err) {
    res.json({ error: 'City not found' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));

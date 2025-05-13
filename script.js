function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "38c5d9aedc87725089c8b3a891967128";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        const weatherInfo = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
          <p><strong>Weather:</strong> ${data.weather[0].description}</p>
          <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
          <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;
        document.getElementById("weather-result").innerHTML = weatherInfo;
      } else {
        document.getElementById("weather-result").innerHTML = `<p>City not found.</p>`;
      }
    })
    .catch(error => {
      console.error("Error:", error);
      document.getElementById("weather-result").innerHTML = `<p>Error fetching weather.</p>`;
    });
}

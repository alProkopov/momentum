// https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=7768ad9d50219c13c18aa3a342850856&units=metric
// https://api.openweathermap.org/data/2.5/weather?q=%D0%9C%D0%B8%D0%BD%D1%81%D0%BA&lang=ru&appid=cb776da96964ccf9c3b04f57d3e794af&units=metric
const cityFragment = document.querySelector(".city");
const weatherIcon = document.querySelector(".weather-icon");
const tempFragment = document.querySelector(".temperature");
const descriptFragment = document.querySelector(".weather-description");
const windFragment = document.querySelector(".wind");
const humidityFragment = document.querySelector(".humidity");

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityFragment.value}&lang=en&appid=cb776da96964ccf9c3b04f57d3e794af&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  weatherIcon.className = "weather-icon owf";
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  tempFragment.textContent = `${Math.round(data.main.temp)}°C`;
  descriptFragment.textContent = data.weather[0].description;
  windFragment.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
  humidityFragment.textContent = `Humidity: ${data.main.humidity}%`;
}
cityFragment.addEventListener("change", getWeather);
getWeather();

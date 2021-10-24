import hash from "./modules/translation.js";

const cityFragment = document.querySelector(".city");
const weatherIcon = document.querySelector(".weather-icon");
const tempFragment = document.querySelector(".temperature");
const descriptFragment = document.querySelector(".weather-description");
const windFragment = document.querySelector(".wind");
const humidityFragment = document.querySelector(".humidity");
const errorFragment = document.querySelector(".weather-error");

const translation = {
  WindSpeed: { ru: "Скорость ветра", en: "Wind speed" },
  Humidity: { ru: "Влажность", en: "Humidity" },
  ms: { ru: "м/c", en: "m/s" },
};

async function getWeather() {
  const selectLanguage = document.querySelector(".language");
  let newHash = selectLanguage.value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityFragment.value}&lang=${newHash}&appid=cb776da96964ccf9c3b04f57d3e794af&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  data.cod == 200
    ? errorFragment.classList.remove("opacityForm")
    : errorFragment.classList.add("opacityForm");
  weatherIcon.className = "weather-icon owf";
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  tempFragment.textContent = `${Math.round(data.main.temp)}°C`;
  descriptFragment.textContent = data.weather[0].description;
  windFragment.textContent = `${
    translation.WindSpeed[`${newHash}`]
  }: ${Math.round(data.wind.speed)} ${translation.ms[`${newHash}`]}`;
  humidityFragment.textContent = `${translation.Humidity[`${newHash}`]}: ${
    data.main.humidity
  }%`;
}

function setLocalStorage(params) {
  const cityFragment = document.querySelector(".city");
  localStorage.setItem("city", cityFragment.value);
}

function getLocalStorage(params) {
  if (localStorage.getItem("city")) {
    cityFragment.value = localStorage.getItem("city");
  }
}

window.addEventListener("beforeunload", setLocalStorage);
window.addEventListener("load", getLocalStorage);
cityFragment.addEventListener("change", getWeather);
getWeather();

export default getWeather;

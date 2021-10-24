import getQuotes from "../quote.js";
import getWeather from "../weather.js";
import showGreeting from "./showGreeting.js";
import showTime from "../timeAndGreeting.js";

const selectLanguage = document.querySelector(".language");
const allLanguages = ["en", "ru"];

//смена плейсхолдера
const cityPlace = document.querySelector(".city");
const namePlace = document.querySelector(".name");

const translatePlaceholder = {
  name: { ru: "[Введите имя]", en: "[Enter name]" },
  city: { ru: "[Введите город]", en: "[Enter city]" },
};

selectLanguage.addEventListener("change", changeURL);
selectLanguage.addEventListener("change", changeLanguage);

function changeURL() {
  let lang = selectLanguage.value;
  location.href = window.location.pathname + "#" + lang;
  // location.reload();
}

function changeLanguage(params) {
  let hash = window.location.hash.substr(1);

  if (!allLanguages.includes(hash)) {
    location.href = window.location.pathname + "#en";
    // location.reload();
  }
  selectLanguage.value = hash;

  //смена плейсхолдера
  namePlace.placeholder = translatePlaceholder.name[hash];
  cityPlace.placeholder = translatePlaceholder.city[hash];
  //вызов функций
  getQuotes();
  getWeather();
  showGreeting();
  showTime();
}
changeLanguage();

const hash = selectLanguage.value;
export default hash;

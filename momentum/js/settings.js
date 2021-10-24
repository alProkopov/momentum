const uiPlayer = document.querySelector(".ui-player");
const uiDate = document.querySelector(".ui-date");
const uiTime = document.querySelector(".ui-time");
const uiGreeting = document.querySelector(".ui-greetings");
const uiQuote = document.querySelector(".ui-quoter");
const uiWeather = document.querySelector(".ui-weather");

const settingButton = document.querySelector(".app-settings");
const settingContainer = document.querySelector(".settings-container");

const state = {
  language: "en",
  photoSource: "github",
  UI: {
    [".player"]: true,
    [".date"]: true,
    [".time"]: true,
    [".greetings"]: true,
    [".quoter"]: true,
    [".weather"]: true,
    // [".todolist"]: true,
  },
};

function toggleInterface(e) {
  this.classList.toggle("toggleUiButton");
  this.interface = document.querySelector(this.value);
  this.interface.classList.toggle("toggleInterface");

  state.UI[this.value] = !state.UI[this.value];
  // localStorage.setItem(this.value, state.UI[this.value]);
}

function setLocalStorage() {
  for (let key in state.UI) {
    localStorage.setItem(key, state.UI[key]);
  }
}

function getLocalStorage(params) {
  for (let key in state.UI) {
    const isTrue = JSON.parse(localStorage.getItem(key));
    console.log(isTrue);
    this.interface = document.querySelector(key);
    const button = document.querySelector(".ui-" + key.substr(1));
    console.log(button.classList);
    console.log(state.UI[key]);
    if (isTrue) {
      state.UI[key] = true;
      button.classList.remove("toggleUiButton");
      this.interface.classList.remove("toggleInterface");
    }
    if (!isTrue) {
      state.UI[key] = false;
      button.classList.add("toggleUiButton");
      this.interface.classList.add("toggleInterface");
    }
    // if (localStorage.getItem(key)) console.log(localStorage.getItem(key));
  }
}

window.addEventListener("beforeunload", setLocalStorage);
window.addEventListener("load", getLocalStorage);

uiPlayer.addEventListener("click", toggleInterface);
uiDate.addEventListener("click", toggleInterface);
uiPlayer.addEventListener("click", toggleInterface);
uiTime.addEventListener("click", toggleInterface);
uiGreeting.addEventListener("click", toggleInterface);
uiQuote.addEventListener("click", toggleInterface);
uiWeather.addEventListener("click", toggleInterface);

settingButton.addEventListener("click", toggleContainer);

function toggleContainer() {
  settingContainer.classList.toggle("toggleInterface");
}

//перевод
const uiTranslate = document.querySelector(".uiSettings p");
const langTranslate = document.querySelector(".language-setting span");
const sourceTranslate = document.querySelector(".api-setting span");
const keyWordTranslate = document.querySelector(".tag-setting span");

const translation = {
  SelectUI: { ru: "Интерфейс", en: "Select UI" },
  Language: { ru: "Язык", en: "Language" },
  PhotoSource: { ru: "Фото-ресурс", en: "Photo source" },
  KeyWord: { ru: "тэг", en: "Key word" },
};

function settingsTranslation() {
  const selectLanguage = document.querySelector(".language");
  let newHash = selectLanguage.value;

  uiTranslate.textContent = translation.SelectUI[newHash];
  langTranslate.textContent = translation.Language[newHash];
  sourceTranslate.textContent = translation.PhotoSource[newHash];
  keyWordTranslate.textContent = translation.KeyWord[newHash];
}

settingsTranslation();

export default settingsTranslation;

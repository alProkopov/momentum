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
  const interface = document.querySelector(this.value);
  interface.classList.toggle("toggleInterface");

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

    const interface = document.querySelector(key);
    const button = document.querySelector(".ui-" + key.substr(1));

    if (isTrue) {
      state.UI[key] = true;
      button.classList.remove("toggleUiButton");
      interface.classList.remove("toggleInterface");
    }
    if (!isTrue) {
      state.UI[key] = false;
      button.classList.add("toggleUiButton");
      interface.classList.add("toggleInterface");
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

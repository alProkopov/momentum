const listForm = document.querySelector(".link-list");
const createForm = document.querySelector(".link-add-containter");
const linkContainer = document.querySelector(".link-inner-container");

const linksButton = document.querySelector(".link-button");
let addNewLink = document.querySelector(".link-list .link-new-link");
const prevButton = document.querySelector(".link-prev-button");

const nameInput = document.querySelector(".new-title");
const linksInput = document.querySelector(".new-url");
const createLinkButton = document.querySelector(".create-link");

const invalid = document.querySelector(".link-invalid");

//select Language
const selectLanguage = document.querySelector(".language");
let newHash = selectLanguage.value;

//translate
const nameTranslate = document.querySelector(".input-group label");
const LINKSTranslate = document.querySelector(".input-url label");
const NewLinkTranslate = document.querySelector(".link-list .link-new-link");
const createTranslate = document.querySelector(".create-link");
const invalidTranslate = document.querySelector(".link-invalid");

const translation = {
  Name: { ru: "Название", en: "Name" },
  LINKS: { ru: "Ссылка", en: "LINKS" },
  NewLink: { ru: "+ Добавить ссылку", en: "+ New Link" },
  Create: { ru: "Создать", en: "Create" },
  invalid: {
    ru: "Введите 'Название' и 'Ссылку'",
    en: "Enter 'Name' and 'LINKS'",
  },
};

function linksTranslation() {
  const NewLinkTranslate = document.querySelector(".link-list .link-new-link");

  const selectLanguage = document.querySelector(".language");
  let newHash = selectLanguage.value;

  nameTranslate.textContent = translation.Name[newHash];
  LINKSTranslate.textContent = translation.LINKS[newHash];
  NewLinkTranslate.textContent = translation.NewLink[newHash];
  createTranslate.textContent = translation.Create[newHash];
  invalidTranslate.textContent = translation.invalid[newHash];
}

linksTranslation();

function toggleForm() {
  createForm.classList.toggle("toggleForm");
  listForm.classList.toggle("opacityFormOff");
}
function toggleContainer(params) {
  linkContainer.classList.toggle("opacityForm");
}
function opacityFormToggle(params) {
  listForm.classList.toggle("opacityForm");
}

function removeToggle(params) {
  if (createForm.classList.contains("toggleForm")) {
    createForm.classList.remove("toggleForm");
    listForm.classList.remove("opacityFormOff");
  }
}

function createNewLi(params) {
  if (!linksInput.value) {
    invalid.classList.add("opacityForm");
  }
  if (!nameInput.value) {
    invalid.classList.add("opacityForm");
  }
  if (linksInput.value && nameInput.value) {
    const ulList = document.querySelector(".link-list");
    const newLi = document.createElement("li");
    const string = `<li class='link-item'><a href="https://${linksInput.value}">${nameInput.value}</a><p class = 'link-item-delete'>×</p></li>`;
    linksInput.value = "";
    nameInput.value = "";
    ulList.insertAdjacentHTML("afterbegin", string);
    invalid.classList.remove("opacityForm");

    toggleForm();
  }
}

function setLocalStorage(params) {
  const listLink = document.querySelector(".link-list");
  localStorage.setItem("link-list", listLink.innerHTML);
}

function getLocalStorage(params) {
  if (localStorage.getItem("link-list")) {
    listForm.innerHTML = localStorage.getItem("link-list");
  }
  addNewLink = document.querySelector(".link-new-link");
  addNewLink.addEventListener("click", toggleForm);
}

function deleteLink(e) {
  if (e.target.classList.contains("link-item-delete"))
    e.target.parentElement.remove();
}

window.addEventListener("beforeunload", setLocalStorage);
window.addEventListener("load", getLocalStorage);

//слушатели на появление формы
linksButton.addEventListener("click", toggleContainer);
linksButton.addEventListener("click", removeToggle);
addNewLink.addEventListener("click", toggleForm);
prevButton.addEventListener("click", toggleForm);

//создание новой ссылки

createLinkButton.addEventListener("click", createNewLi);

//удаление ссылки
listForm.addEventListener("click", deleteLink);

export default linksTranslation;

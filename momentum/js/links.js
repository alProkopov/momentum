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
    const string = `<li class='link-item'><a href="https://${linksInput.value}">${nameInput.value}</a><p class = 'link-item-delete'>Delete</p></li>`;
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

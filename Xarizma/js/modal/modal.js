// Imports
import { error as err, warn } from "../error-code.js";

// Variables -
const modal = document.querySelector(".modal");
const modalWindows = Array.from(document.querySelectorAll(".modal__window"));
const BODY = document.querySelector("body");

// Fnction

function changeClass(elementName, string) {
  elementName.classList.remove(string);
  elementName.classList.add(string);
}

// Main code

export const modalMain = document.addEventListener("click", function (e) {
  
  const button = e.target.closest("[data-modal-button]");
  const closeButton = e.target.closest("[data-modal-close]");
  if (button) {
    const itemValue = button.dataset.modalButton;
    const modalWindowDataSet = modalWindows.filter((window) => window.dataset.modalWindow === itemValue);
    modal.classList.add("modal--open");
    modalWindowDataSet.forEach((window) => window.classList.add("modal__window--open"));
    BODY.classList.add("no-scroll");
  } else if (closeButton || e.target.matches(".modal--open")) {
    modal.classList.remove("modal--open");
    modalWindows.forEach((window) => window.classList.remove("modal__window--open"));
    BODY.classList.remove("no-scroll");
  }
});

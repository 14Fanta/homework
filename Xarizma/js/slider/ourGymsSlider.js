// Imports
import { error as err, warn } from "../error-code.js";

// Variables

const numbers = Array.from(document.querySelectorAll(".our__gyms-accent"));
const wrapperBtns = Array.from(document.querySelectorAll(".swiper-buttons"));
const toolBars = Array.from(document.querySelectorAll(".our__gyms-information-list"));
const allSlidesNumber = Array.from(document.querySelectorAll(".our-gyms__all-slides"));
const switchBtns = Array.from(document.querySelectorAll(".our__gyms-halls__text"));
const wrapperImgs = Array.from(document.querySelectorAll(".our__gyms-swiper__wrapper"));
const btnsArrowSwitch = Array.from(document.querySelectorAll(".swiper-buttons"));
let activeSlide = 0;

// functions

function setActiveSlidePlus(index) {
  activeSlide = index;
  activeSlide < wrapperImgs.length - 1 ? ++activeSlide : (activeSlide = 0);
  updateAllViews();
}

function setActiveSlideMinus(index) {
  activeSlide = index;
  activeSlide > 0 ? --activeSlide : (activeSlide = wrapperImgs.length - 1);
  updateAllViews();
}

function bindButtonsToIndices() {
  const buttons = Array.from(document.querySelectorAll(".swiper-buttons"));
  buttons.forEach((e, i) => {
    e.addEventListener("click", (e) => {
      e.stopPropagation();
      if (e.target.matches(".buttons-swiper__btn_left")) {
        setActiveSlideMinus(i);
      } else if (e.target.classList.contains("buttons-swiper__btn_right")) {
        setActiveSlidePlus(i);
      }
    });
  });
}

const setId = (elements) => elements.forEach((e, i) => (e.dataset.id = i + 1));

function setDataIdlLittileImgWrapper(e) {
  e.forEach((wrapper) => {
    const pictures = wrapper.querySelectorAll(".our-gyms__other-picture");
    pictures.forEach((pictures, i) => {
      pictures.dataset.id = i + 1;
    });
  });
}

function changeClassHallsText(index) {
  activeSlide = index;
  switchBtns.forEach((e) => {
    e.classList.remove("our__gyms-halls__text-selected");
  });
  switchBtns[activeSlide - 1].classList.add("our__gyms-halls__text-selected");
}

function changeClassById(list, index, className) {
  activeSlide = index;
  list.forEach((e) => {
    e.classList.remove(className);
  });
  list[activeSlide - 1].classList.add(className);
}

function changeClassButton(index) {
  changeClassById(wrapperImgs, index, "our__gyms-swiper__wrapper--active");
  changeClassById(numbers, index, "num-active");
  changeClassById(btnsArrowSwitch, index, "buttons-swiper--active");
  changeClassById(toolBars, index, "our__gyms-information-list--active");
}

function allSlidesNumberFunc() {
  allSlidesNumber.forEach((e) => (e.textContent = String(wrapperImgs.length)));
}

function changeClassNumbers(list, index, className) {
  list.forEach((e) => {
    e.classList.remove(className);
  });
  list[index - 1].classList.add(className);
}

function activateElement(list, index, className) {
  if (!list || list.length === 0) return;

  list.forEach((el) => el.classList.remove(className));
  index;
  if (index >= 0 && index < list.length) {
    list[index].classList.add(className);
  } else {
    err(
      `Попытка активировать индекс ${index}, но длина списка ${list.length}. Проверьте соответствие количества элементов в HTML.`,
    );
  }
  return index;
}

const updateAllViews = () => {
  activateElement(wrapperImgs, activeSlide, "our__gyms-swiper__wrapper--active");
  activateElement(numbers, activeSlide, "num-active");
  activateElement(wrapperBtns, activeSlide, "buttons-swiper--active");
  activateElement(toolBars, activeSlide, "our__gyms-information-list--active");
  allSlidesNumberFunc();
};

// Main code

if (wrapperImgs.length > 0) {
  updateAllViews();
} else {
  warn("Слайды не найдены! Проверьте селектор .our__gyms-swiper__wrapper");
}

function switchSlideContinue() {
  if (wrapperImgs.length === 0) return;
  bindButtonsToIndices();
  updateAllViews();
}

function switchSlideBack() {
  if (wrapperImgs.length === 0) return;
  bindButtonsToIndices();
  updateAllViews();
}

export {
  setDataIdlLittileImgWrapper,
  changeClassHallsText as changeClass,
  changeClassById,
  changeClassButton,
  allSlidesNumberFunc,
  changeClassNumbers,
  setId,
  switchBtns,
  wrapperImgs,
  btnsArrowSwitch,
  switchSlideContinue,
  switchSlideBack,
  activeSlide,
};

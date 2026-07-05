// Imports
import { errorFuncId, error, warn } from "../error-code.js";
import {
  setDataIdlLittileImgWrapper,
  changeClass,
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
} from "./ourGymsSlider.js";

// Functions - Функции

setId(switchBtns);
setId(wrapperImgs);
setId(btnsArrowSwitch);
setDataIdlLittileImgWrapper(wrapperImgs);

// Main part - Главная часть кода

export const mainEventListener = document.addEventListener("click", ({ target }) => {
  try {
    const btnId = +target.dataset.id;
    if (target.matches(".our__gyms-halls__text")) {
      changeClass(btnId);
      changeClassButton(btnId);
    } else if (target.closest(".our-gyms__other-picture")) {
      changeClassButton(btnId);
    } else if (target.closest(".buttons-swiper__btn_right")) {
      switchSlideContinue();
    } else if (target.closest(".buttons-swiper__btn_left")) {
      switchSlideBack();
    }
  } catch (err) {
    warn(`Ошбика: ${err}`);
  }
});

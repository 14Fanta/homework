// IMPORTS

import { error as err } from "../error-code.js";

// MAIN CODE
export const initCode = () => {
  const WRAPPER = document.querySelector(".how-to-buy__wrapper");
  const SWIPER_WRAPPER = document.querySelector(".swiper-wrapper");
  const swiperSlides = Array.from(document.querySelectorAll(".how-to-buy__swiper-slide"));
  const activeNumber = document.querySelector("#swiper__activeNumber");
  const ALL_SLIDES = document.querySelector("#swiper__allSlides");
  const numberNotActive = Array.from(document.querySelectorAll(".how-to-buy__swiper-number"));
  const BODY = document.querySelector(".page__body");

  if (!WRAPPER || !SWIPER_WRAPPER || !activeNumber || !ALL_SLIDES) {
    console.warn("how-to-buy slider: не найдены обязательные элементы");
    return;
  }

  let activeSlideIndex = 2;

  activeNumber.textContent = activeSlideIndex + 1;
  ALL_SLIDES.textContent = swiperSlides.length;
  updateActiveClasses();

  function recalculateAndCenter() {
    if (swiperSlides.length === 0 || !WRAPPER || !SWIPER_WRAPPER) return;
    let widthWrapper = WRAPPER.offsetWidth;

    if (widthWrapper > 902) {
      const slide = swiperSlides[0];
      const style = window.getComputedStyle(slide);
      const marginRight = parseFloat(style.marginRight) || 0;
      const slideWidth = slide.offsetWidth;
      const containerWidth = WRAPPER.offsetWidth;

      let offset = 0;

      const step = slideWidth + marginRight;
      offset = containerWidth / 2 - slideWidth / 2 - activeSlideIndex * step;

      SWIPER_WRAPPER.style.transform = `translateX(${offset}px)`;
    } else {
      SWIPER_WRAPPER.style.transform = `none`;
    }
  }

  function updateActiveClasses() {
    swiperSlides.forEach((el) => el.classList.remove("how-to-buy__swiper-slide--active"));
    numberNotActive.forEach((el) => el.classList.remove("how-to-buy__swiper-number--active"));

    if (swiperSlides[activeSlideIndex]) {
      swiperSlides[activeSlideIndex].classList.add("how-to-buy__swiper-slide--active");
    }
    if (numberNotActive[activeSlideIndex]) {
      numberNotActive[activeSlideIndex].classList.add("how-to-buy__swiper-number--active");
    }
  }

  function slideNext() {
    if (swiperSlides.length === 0) return err("Ошибка: нет слайдов!!!");

    activeSlideIndex++;
    if (activeSlideIndex >= swiperSlides.length) {
      activeSlideIndex = 0;
    }

    activeNumber.textContent = activeSlideIndex + 1;
    updateActiveClasses();

    recalculateAndCenter();
  }

  function slidePrev() {
    if (swiperSlides.length === 0) return err("Ошибка: нет слайдов!!!");

    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = swiperSlides.length - 1;
    }

    activeNumber.textContent = activeSlideIndex + 1;
    updateActiveClasses();
    recalculateAndCenter();
  }

  WRAPPER.addEventListener("click", ({ target }) => {
    const isNext =
      target.classList.contains("how-to-buy__slider__btn-next") || target.closest(".how-to-buy__slider__btn-next");
    const isPrev =
      target.classList.contains("how-to-buy__slider__btn-prev") || target.closest(".how-to-buy__slider__btn-prev");

    if (isNext) {
      slideNext();
    } else if (isPrev) {
      slidePrev();
    }
  });

  window.addEventListener("resize", recalculateAndCenter);
  recalculateAndCenter();
};
initCode();

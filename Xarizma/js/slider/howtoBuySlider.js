import { error as err } from "../error-code.js";

export const initCode = () => {
  const wrapper = document.querySelector(".how-to-buy__wrapper");
  const track = document.querySelector(".swiper-wrapper.how-to-buy__swiper-wrapper");
  const slides = Array.from(document.querySelectorAll(".swiper-slide.how-to-buy__swiper-slide"));
  const numbers = Array.from(document.querySelectorAll(".how-to-buy__swiper-number"));
  const activeNumberEl = document.querySelector("#swiper__activeNumber");
  const allSlidesEl = document.querySelector("#swiper__allSlides");
  const btnPrev = document.querySelector(".how-to-buy__btn--prev");
  const btnNext = document.querySelector(".how-to-buy__btn--next");

  let startX = 0;
  let currentX = 0;
  let isDragging = false;
  let isMouseDown = false;

  // Размеры для расчёта
  let slideWidth = 0;
  let marginRight = 0;

  function measure() {
    const firstSlide = slides[0];
    if (!firstSlide) return;
    const style = window.getComputedStyle(firstSlide);
    slideWidth = firstSlide.offsetWidth;
    marginRight = parseFloat(style.marginRight) || 0;
  }
  measure();
  window.addEventListener("resize", measure);

  // Считаем, к какому слайду «прилипнуть»
  function getNearestIndex(offset) {
    const step = slideWidth + marginRight;
    const positions = slides.map((_, i) => -(i * step));

    let nearestIndex = 0;
    let minDiff = Infinity;

    positions.forEach((pos, i) => {
      const diff = Math.abs(pos - offset);
      if (diff < minDiff) {
        minDiff = diff;
        nearestIndex = i;
      }
    });

    return nearestIndex;
  }

  // Применяем позицию и обновляем активный класс
  function setPosition(index) {
    const step = slideWidth + marginRight;
    const offset = -(index * step);

    track.style.transform = `translateX(${offset}px)`;

    slides.forEach((slide, i) => {
      slide.classList.toggle("how-to-buy__swiper-slide--active", i === index);
    });
  }

  // Плавное «прилипание» к ближайшему слайду
  function snapToNearest() {
    const currentTransform = window.getComputedStyle(track).transform;
    const matrix = new DOMMatrix(currentTransform);
    const currentOffset = matrix.m41; // translateX

    const nearestIndex = getNearestIndex(currentOffset);
    setPosition(nearestIndex);
  }

  // --- Свайп (touch) ---
  track.addEventListener(
    "touchstart",
    (e) => {
      isDragging = true;
      startX = e.touches[0].clientX;
      currentX = window.getComputedStyle(track).transform
        ? new DOMMatrix(window.getComputedStyle(track).transform).m41
        : 0;
    },
    { passive: false },
  );

  track.addEventListener(
    "touchmove",
    (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.touches[0].clientX;
      const diff = x - startX;
      track.style.transform = `translateX(${currentX + diff}px)`;
    },
    { passive: false },
  );

  track.addEventListener("touchend", () => {
    isDragging = false;
    snapToNearest();
  });

  // --- Drag мышью ---
  track.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    startX = e.clientX;
    currentX = window.getComputedStyle(track).transform
      ? new DOMMatrix(window.getComputedStyle(track).transform).m41
      : 0;
  });

  document.addEventListener("mousemove", (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.clientX;
    const diff = x - startX;
    track.style.transform = `translateX(${currentX + diff}px)`;
  });

  document.addEventListener("mouseup", () => {
    isMouseDown = false;
    snapToNearest();
  });

  // --- Кнопки ---
  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      const currentTransform = window.getComputedStyle(track).transform;
      const matrix = new DOMatrix(currentTransform);
      const currentOffset = matrix.m41;
      const step = slideWidth + marginRight;

      let currentIndex = 0;
      slides.forEach((_, i) => {
        const pos = -(i * step);
        if (Math.abs(pos - currentOffset) < 1) currentIndex = i;
      });

      const nextIndex = Math.max(0, currentIndex - 1);
      setPosition(nextIndex);
    });
  }

  if (btnNext) {
    btnNext.addEventListener("click", () => {
      const currentTransform = window.getComputedStyle(track).transform;
      const matrix = new DOMatrix(currentTransform);
      const currentOffset = matrix.m41;
      const step = slideWidth + marginRight;

      let currentIndex = 0;
      slides.forEach((_, i) => {
        const pos = -(i * step);
        if (Math.abs(pos - currentOffset) < 1) currentIndex = i;
      });

      const nextIndex = Math.min(slides.length - 1, currentIndex + 1);
      setPosition(nextIndex);
    });
  }

  if (!wrapper || !track || slides.length === 0) {
    console.warn("Слайдер не инициализирован: не найдены элементы.");
    return;
  }

  let currentIndex = 2;

  if (activeNumberEl) activeNumberEl.textContent = currentIndex + 1;
  if (allSlidesEl) allSlidesEl.textContent = slides.length;

  function recalculateAndCenter() {
    const firstSlide = slides[0];
    const style = window.getComputedStyle(firstSlide);
    const marginRight = parseFloat(style.marginRight) || 0;
    const slideWidth = firstSlide.offsetWidth;
    const containerWidth = wrapper.offsetWidth;

    const step = slideWidth + marginRight;

    const offset = containerWidth / 2 - slideWidth / 2 - currentIndex * step;

    track.style.transform = `translateX(${offset}px)`;
  }

  function updateActiveClasses() {
    slides.forEach((slider) => slider.classList.remove("how-to-buy__swiper-slide--active"));
    numbers.forEach((number) => number.classList.remove("how-to-buy__swiper-number--active"));

    if (slides[currentIndex]) slides[currentIndex].classList.add("how-to-buy__swiper-slide--active");

    if (numbers[currentIndex]) numbers[currentIndex].classList.add("how-to-buy__swiper-number--active");

    if (activeNumberEl) activeNumberEl.textContent = currentIndex + 1;
  }

  function slideNext() {
    currentIndex++;
    if (currentIndex >= slides.length) currentIndex = 0;
    updateActiveClasses();
    recalculateAndCenter();
  }

  function slidePrev() {
    currentIndex--;
    if (currentIndex < 0) currentIndex = slides.length - 1;
    updateActiveClasses();
    recalculateAndCenter();
  }

  wrapper.addEventListener("click", ({ target: t }) => {
    if (t.classList.contains("how-to-buy__slider__btn-next") || t.closest(".how-to-buy__slider__btn-next")) {
      slideNext();
    } else if (t.classList.contains("how-to-buy__slider__btn-prev") || t.closest(".how-to-buy__slider__btn-prev")) slidePrev();
  });

  window.addEventListener("resize", recalculateAndCenter);
  window.addEventListener("load", recalculateAndCenter);

  recalculateAndCenter();
};

initCode();

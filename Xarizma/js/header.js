export const headerFixed = () => {
  const HEADER = document.querySelector(".header");
  const CONTAINER = document.querySelector(".header__container");
  
  document.addEventListener("scroll", () => {
    const HEIGHT = window.scrollY;
    if (HEIGHT > 0) {
      HEADER.classList.add("header--shadow");
    } else {
      HEADER.classList.remove("header--shadow");
    }
  });
};

headerFixed();

export function innitCode() {
  const WRAPPER = document.querySelector(".burger-menu__wrapper");
  const MENU = document.querySelector(".burger-menu");
  const CROSS = document.querySelector(".burger__menu-cross");
  const HEADER_INFO = document.querySelector(".header__info");
  const HEADER_CONTAINER = document.querySelector(".header__container");
  const headerBtnBuy = document.querySelector(".header__button-buy");
  const headerBtnRooms = document.querySelector(".header__button-rooms");
  const headerBtnLocation = document.querySelector(".header__location-btn");
  const headerBtnPhone = document.querySelector(".header__phone-link");
  const HEADER_BUTTONS_WRAPPER = document.querySelector(".header__buttons-wrapper");
  const headerBtnLocationText = document.querySelector(".header__location-text");
  const headerLogoLink = document.querySelector(".header__logo-link");
  const HEADER = document.querySelector(".header");
  const BODY = document.querySelector("body");

  function initProggram() {
    changeClass(WRAPPER, "burger-menu__wrapper--open");
    changeClass(MENU, "burger__menu--open");
    changeClass(CROSS, "burger__menu-cross--open");
    changeClass(HEADER_INFO, "header__info--open");
    changeClass(HEADER_BUTTONS_WRAPPER, "header__buttons-wrapper--open");
    changeClass(HEADER_CONTAINER, "header__container--open");
    changeClass(HEADER, "header--open");
    changeClass(BODY, "no-scroll");
    changeClass(headerBtnBuy, "header__button-buy--open");
    changeClass(headerBtnRooms, "header__button-rooms--open");
    changeClass(headerBtnLocation, "header__location-btn--open");
    changeClass(headerBtnPhone, "header__phone-link--open");
    changeClass(headerBtnLocationText, "header__location-text--open");
    changeClass(headerLogoLink, "header__logo-link--open");
  }

  const deleteClassName = () => {
    WRAPPER.classList.remove("burger-menu__wrapper--open");
    MENU.classList.remove("burger__menu--open");
    CROSS.classList.remove("burger__menu-cross--open");
    HEADER_INFO.classList.remove("header__info--open");
    HEADER_BUTTONS_WRAPPER.classList.remove("header__buttons-wrapper--open");
    HEADER_CONTAINER.classList.remove("header__container--open");
    HEADER.classList.remove("header--open");
    BODY.classList.remove("no-scroll");
    headerBtnBuy.classList.remove("header__button-buy--open");
    headerBtnRooms.classList.remove("header__button-rooms--open");
    headerBtnLocation.classList.remove("header__location-btn--open");
    headerBtnPhone.classList.remove("header__phone-link--open");
    headerBtnLocationText.classList.remove("header__location-text--open");
    headerLogoLink.classList.remove("header__logo-link--open");
  };

  function changeClass(elementName, string) {
    elementName.classList.remove(string);
    elementName.classList.add(string);
  }

  document.addEventListener("click", ({ target }) => {
    if (target.classList.contains("burger-menu")) {
      initProggram()
    } else if (target.matches(".burger__menu-cross--open") || target.matches('.header--open')) {
      deleteClassName();
    }
  });
}

innitCode();

function fixedFooterUp() {
  const footerUp = document.querySelector(".footer__up");
  const footerUpWrapper = document.querySelector(".footer__up-wrapper");
  const rect = footerUp.getBoundingClientRect();
  const scrollHeight = Math.max(
    document.documentElement.scrollHeight,
  );
  const halfPage = scrollHeight / 3.2;
  const scrollY = window.scrollY

  if (halfPage < scrollY) {
    footerUpWrapper.classList.add("footer__up-wrapper--active");
  } else {
    footerUpWrapper.classList.remove("footer__up-wrapper--active");
  }
}

window.addEventListener("scroll", fixedFooterUp);
window.addEventListener("resize", fixedFooterUp);

fixedFooterUp();

export { fixedFooterUp };

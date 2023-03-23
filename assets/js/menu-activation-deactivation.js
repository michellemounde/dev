document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector("#hamburger-menu");
  const nav = document.querySelector("#navbar");

  menu.onclick = function () {
    nav.classList.toggle("active");
  };
})

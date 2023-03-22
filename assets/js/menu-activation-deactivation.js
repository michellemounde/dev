document.addEventListener("DOMContentLoaded", () => {
  let menu = document.querySelector("#hamburger-menu");
  let nav = document.querySelector("#navbar");

  menu.onclick = function () {
    nav.classList.toggle("active");
  };
})

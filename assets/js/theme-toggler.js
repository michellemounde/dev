document.addEventListener("DOMContentLoaded", () => {
  const themeToggler = document.querySelector(".theme-toggle");
  const lightTheme = document.querySelector("div.light");
  const darkTheme = document.querySelector("div.dark");
  const html = document.querySelector("html");
  const buttons = document.querySelectorAll("a.button");


  lightTheme.onclick = function () {
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
    }

    html.classList.add("light");

    buttons.forEach(button => {
      button.classList.add("primary")
    });

    themeToggler.ariaLabel = "Change to dark mode";
    themeToggler.title = "Change to dark mode";
  };


  darkTheme.onclick = function () {
    html.classList.remove("light");
    html.classList.add("dark");

    buttons.forEach(button => {
      button.classList.remove("primary");

    });

    themeToggler.ariaLabel = "Change to light mode";
    themeToggler.title = "Change to light mode";
  };

})

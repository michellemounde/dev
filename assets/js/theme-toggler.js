document.addEventListener("DOMContentLoaded", () => {
  const themeToggler = document.querySelector(".theme-toggle");
  const lightTheme = document.querySelector("div.light");
  const darkTheme = document.querySelector("div.dark");

  lightTheme.onclick = function () {
    darkTheme.classList.remove("active");
    lightTheme.classList.add("active");

    document.querySelectorAll("a.button").forEach(button => {
      button.classList.add("primary")
      button.style.backgroundColor = "#00252E"
    });
    document.querySelector("a.top svg").style.color = "#47D3E5"

    document.querySelector("#wrapper").style.backgroundColor = "white"
    document.querySelector("#wrapper").style.color = "#4B4D4F"

    document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(heading => {
      heading.style.color = "black"
    });

    document.querySelectorAll("nav, footer").forEach(section => {
      section.style.color = "black"
    });

    document.querySelector(".name").style.color = "black"

    document.querySelector("footer").style.backgroundColor = "#EBEAEA"

    document.querySelectorAll("a").forEach(link => {
      link.style.color = "black"
    });

    themeToggler.ariaLabel = "Change to dark mode";
    themeToggler.title = "Change to dark mode";
  };

  darkTheme.onclick = function () {
    lightTheme.classList.remove("active");
    darkTheme.classList.add("active");

    document.querySelectorAll("a.button").forEach(button => {
      button.classList.remove("primary");
      button.style.backgroundColor = "#B1C1C4"
    });
    document.querySelector("a.top svg").style.color = "black"


    document.querySelector("#wrapper").style.backgroundColor = "#00252E"
    document.querySelector("#wrapper").style.color = "#E8E8E8"

    document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(heading => {
      heading.style.color = "#FCFCFC"
    });

    document.querySelectorAll("nav, footer").forEach(section => {
      section.style.color = "#FCFCFC"
    });

    document.querySelector(".name").style.color = "#FCFCFC"

    document.querySelector("footer").style.backgroundColor = "#004252"

    document.querySelectorAll("a").forEach(link => {
      link.style.color = "#FCFCFC"
    });

    themeToggler.ariaLabel = "Change to light mode";
    themeToggler.title = "Change to light mode";
  };

})

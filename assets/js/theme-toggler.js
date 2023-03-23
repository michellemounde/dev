document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".theme-toggle");
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
    document.querySelector("#wrapper").style.color = "black"

    document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(heading => {
      heading.style.color = "black"
    });

    document.querySelectorAll("nav, footer").forEach(section => {
      section.style.color = "black"
    });

    document.querySelectorAll("a").forEach(link => {
      link.style.color = "black"
    });


  };

  darkTheme.onclick = function () {
    lightTheme.classList.remove("active");
    darkTheme.classList.add("active");

    document.querySelectorAll("a.button").forEach(button => {
      button.classList.remove("primary");
      button.style.backgroundColor = "#E6FBFF"
    });
    document.querySelector("a.top svg").style.color = "black"


    document.querySelector("#wrapper").style.backgroundColor = "#00252E"
    document.querySelector("#wrapper").style.color = "white"

    document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(heading => {
      heading.style.color = "white"
    });

    document.querySelectorAll("nav, footer").forEach(section => {
      section.style.color = "white"
    });

    document.querySelectorAll("a").forEach(link => {
      link.style.color = "white"
    });

  };
})

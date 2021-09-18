/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

// Global var
var sectionNum = 4;

// Build the nav

for (let i = 1; i <= 4; i++) {
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.textContent = `Section ${i}`;
  li.appendChild(link);
  document.querySelector("ul").appendChild(li);
  link.classList.add("menu__link");
  /* link.setAttribute("href",`#section${i}`);   this line if i want use href instead of data*-   */
  link.setAttribute("data-nav", `section${i}`);
}

// Global var

var links = document.querySelectorAll(".menu__link");

// Scroll into section

links.forEach(function (link) {
  link.addEventListener("click", function () {
    const el = document.getElementById(link.getAttribute("data-nav"));
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

// Active section and navbar

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function (event) {
  let current = "";

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 300) {
      current = section.getAttribute("id");
    }
  });

  links.forEach(function (link) {
    link.classList.remove("active");

    if (link.getAttribute("data-nav") === current) {
      link.classList.add("active");
    }
  });

  sections.forEach(function (section) {
    section.classList.remove("active");

    if (section.id === current) {
      section.classList.add("active");
    }
  });
});

// Hide fixed navigation bar while not scrolling

window.addEventListener("scroll", function (event) {
  // method 1 without setTimeout

  /*  
     let lastScrollY = window.scrollY;
    if(lastScrollY < window.scrollY ){
      document.querySelector(".navbar__menu").style.display = "none";
  }
  else {
    document.querySelector(".navbar__menu").style.display = "block";
  }

  lastScrollY = window.scrollY; */

  // method 2 with setTimeout
  event.preventDefault();
  document.querySelector(".navbar__menu").style.display = "block";

  setTimeout(function () {
    document.querySelector(".navbar__menu").style.display = "none";
  }, 7000);
});

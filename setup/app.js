// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");

date.innerHTML = new Date().getFullYear();
// ********** close links ************

const navbarBtn = document.querySelector(".navbar-btn");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navbarBtn.addEventListener("click", () => {
  // linksContainer.classList.toggle("show-links");
  const conteinerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (conteinerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************

const navbar = document.querySelector(".navbar");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  // console.log(scrollHeight);
  const navbarHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navbarHeight) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }

  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const id = e.currentTarget.getAttribute("href").slice(1);
    console.log(id);
    const element = document.getElementById(id);
    console.log(element);

    // chek navheight

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const navFixed = navbar.classList.contains("navbar-fixed");

    let position = element.offsetTop - navHeight;
    console.log(position);

    if (!navFixed) {
      position = position - navHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close

    linksContainer.style.height = 0;
  });
});
// select links

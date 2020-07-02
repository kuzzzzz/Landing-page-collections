const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  burger.addEventListener("click", () => {
      //toggles nav
    nav.classList.toggle("nav-active");
    navLinks.forEach((item, index) => {
        //animate links
      if (item.style.animation) {
        item.style.animation = "";
      } else {
        item.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          .7}s`;
      }
    });
//burger animation
burger.classList.toggle('toggle')
  });
};
navSlide();

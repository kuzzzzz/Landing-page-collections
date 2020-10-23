const card = document.querySelector(".card");
const container = document.querySelector(".container");

// Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelectorAll(".price-button");
const button = [...sizes];


// Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerWidth / 2 - e.pageY) / 25;

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = ".2s ease";
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
  sneaker.style.transition = "all 0.5s ease";
});

// Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  title.style.transform = "translateZ(0px)";
});

button.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("active");
  });
});

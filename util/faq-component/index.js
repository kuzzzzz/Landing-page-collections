// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

const accordionItem = document.querySelectorAll(".accordion-item");

accordionItem.forEach((el) =>
  el.addEventListener("click", () => {
    if (el.classList.contains("active")) {
      el.classList.remove("active");
    } else {
      accordionItem.forEach((el2) => el2.classList.remove("active"));
      el.classList.add("active");
    }
  })
);




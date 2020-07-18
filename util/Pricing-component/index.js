const toggle = document.getElementById("toggle");
const priceContainer = document.getElementById("price-container");

toggle.addEventListener('click',e=>{
    priceContainer.classList.toggle('show-monthly');
})
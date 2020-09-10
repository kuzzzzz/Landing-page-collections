const hamburger = document.getElementById('Hamburger');
const {body} =document;

hamburger.addEventListener('click', e =>{
    body.classList.toggle('show-nav');
})


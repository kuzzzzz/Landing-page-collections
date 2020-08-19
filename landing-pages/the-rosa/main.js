//Select element function

const selectElment = function(elm) {
    return document.querySelector(elm)
}

let menuToggler = selectElment('.menu-toggle')
let body = selectElment('body')

menuToggler.addEventListener('click', function () {
  body.classList.toggle('open');  
})
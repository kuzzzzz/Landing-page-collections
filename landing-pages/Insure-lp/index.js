const hambugger = document.getElementById('hambugger');
const menu = document.getElementById('menu');

hambugger.addEventListener('click',()=>{
    hambugger.classList.toggle('show');
    menu.classList.toggle('show');
})
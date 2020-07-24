//JavaScript

const selectelm = (e) => document.querySelector(e);
selectelm('.mobile-menu').addEventListener('click',() =>{
  selectelm('header').classList.toggle('active')
})
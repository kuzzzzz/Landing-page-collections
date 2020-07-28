var acc = document.getElementsByClassName('fas');
var i;

for(i=0;i<acc.length; i++){
  acc[i].addEventListener('click',function(){
    this.classList.toggle('faq-content')
  })
}

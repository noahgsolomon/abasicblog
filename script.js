const formButton = document.querySelector('.newsletter--button--open');
const popup = document.querySelector('.newsletter--container');
const close = document.querySelector('.newsletter--close');
const body = document.querySelector('body');
const img = document.querySelector('.img--container')
const navBar = document.querySelector('.nav--container')

formButton.addEventListener('click', function(e){
    popup.style.display = 'flex';
    body.style.background = 'rgba(0, 0, 0, 0.3)';
    img.style.background = 'rgba(0, 0, 0, 0.0)';
    navBar.style.background = 'rgba(0, 0, 0, 0)';
    e.preventDefault();
   });

   close.addEventListener('click', function(e) {
    popup.style.display = 'none';
    body.style.backgroundColor = '#f5f3ec';
    img.style.background = '#f5f3ec';
    e.preventDefault();
});




   
   

   
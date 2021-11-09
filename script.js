const formButton = document.querySelector('.newsletter--button--open');
const popup = document.querySelector('.newsletter--container');
const close = document.querySelector('.newsletter--close');
const body = document.querySelector('body')

formButton.addEventListener('click', function(e){
    popup.style.display = 'flex';
    body.style.background = 'rgba(0, 0, 0, 0.5)';
    e.preventDefault();
   });

   close.addEventListener('click', function() {
    popup.style.display = 'none'
})

   
   

   
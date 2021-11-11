const formButton = document.querySelector('.newsletter--button--open');
const close = document.querySelector('.newsletter--close');
const html = document.querySelector('html')
const popup = document.querySelector('.newsletter--container');
const body = document.querySelector('body');

formButton.addEventListener('click', function(e){
    popup.style.display = 'flex';
    html.style.overflowY = 'hidden';
    body.style.background = 'rgba(0, 0, 0, 0.3)';;
    e.preventDefault();
    e.stopPropagation();
   });

   close.addEventListener('click', function(e) {
    popup.style.display = 'none';
    html.style.overflowY = 'visible';
    body.style.backgroundColor = '#f5f3ec';
    e.preventDefault();
    e.stopPropagation();
});

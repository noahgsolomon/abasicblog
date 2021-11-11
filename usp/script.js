const html = document.querySelector('html')
const formButton = document.querySelector('.newsletter--button--open');
const popup = document.querySelector('.newsletter--container');
const close = document.querySelector('.newsletter--close');
const body = document.querySelector('body');
const img = document.querySelector('.img--container')
const navBarContainer = document.querySelector('.nav--container')
const navBar = document.querySelector('.nav--bar')

formButton.addEventListener('click', function(e){
    popup.style.display = 'flex';
    html.style.overflowY = 'hidden';
    body.style.background = 'rgba(0, 0, 0, 0.3)';
    img.style.background = 'rgba(0, 0, 0, 0.0)';
    navBarContainer.style.background = 'rgba(0, 0, 0, 0)';
    navBar.style.background = 'rgba(0, 0, 0, 0)';
    e.preventDefault();
    e.stopPropagation();
   });

   close.addEventListener('click', function(e) {
    popup.style.display = 'none';
    html.style.overflowY = 'visible';
    body.style.backgroundColor = '#f5f3ec';
    img.style.background = '#f5f3ec';
    navBarContainer.style.background = '#f5f3ec';
    navBar.style.background = '#f5f3ec';
    e.preventDefault();
    e.stopPropagation();
});

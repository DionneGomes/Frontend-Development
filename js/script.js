
var hamburgerMenuImg = document.querySelector('#menu');
var verborgenMenu = document.querySelector('#verborgenmenu');
var bodyElement = document.querySelector('body');

function showMenu() {
  bodyElement.classList.toggle('menu');
}

hamburgerMenuImg.addEventListener('click', showMenu);

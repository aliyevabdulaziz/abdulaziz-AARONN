const hamburger = document.querySelector('.hamburger-btn');
const navMenu = document.getElementById('nav-menu');
const elBody = document.querySelector('body');
hamburger.addEventListener('click', function () {
	navMenu.classList.toggle('active');
});

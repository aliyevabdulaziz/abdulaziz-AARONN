const hamburger = document.querySelector('.hamburger-btn');
const navMenu = document.querySelector('.list-media');
const elBody = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const item = document.querySelector('.media-item');
hamburger.addEventListener('click', function () {
	navMenu.classList.toggle('active');
	overlay.classList.toggle('active');
	elBody.classList.toggle('no-scroll');
});

// Agar foydalanuvchi overlay-ga bossachi? Yopamiz:
overlay.addEventListener('click', function () {
	navMenu.classList.remove('active');
	overlay.classList.remove('active');
	elBody.classList.remove('no-scroll');
});


item.addEventListener(('click'), function(){
  	navMenu.classList.toggle('active');
    overlay.classList.remove('active');
	elBody.classList.remove('no-scroll');
})


lightGallery(document.getElementById('static-thumbnails'), {
	animateThumb: false,
	zoomFromOrigin: false,
	allowMediaOverlap: true,
	toggleThumb: true,
});

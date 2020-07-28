const lightbox = new SimpleLightbox('.gallery a');
const nav = document.getElementById('head');
const navlist = document.querySelector('.nav-list');
const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const navlink = document.querySelectorAll('.nav-link');
const readMoreButton = document.querySelector('.btn');
const modal = document.getElementById("modalId");
const closeModal = document.querySelector(".close-modal");

readMoreButton.onclick = function() {
  modal.style.display = "block";
}

closeModal.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let lastScrollTop = 0;
window.addEventListener(
	'scroll',
	function() {
		let st = window.pageYOffset || document.documentElement.scrollTop;
		if (st > 50) {
			body.setAttribute('class', 'make-space');
			nav.setAttribute('class', 'nav-wrapper-scroll');
			navlist.setAttribute('class', 'nav-list-scroll');
			logo.setAttribute('class', 'logo-remove');
			for (var i = 0; i < navlink.length; i++) {
				navlink[i].setAttribute('class', 'nav-link-scroll');
			}
		}
		if (st < 50) {
			body.removeAttribute('class', 'make-space');
			nav.setAttribute('class', 'nav-wrapper');
			navlist.setAttribute('class', 'nav-list');
			logo.setAttribute('class', 'logo');
			for (var i = 0; i < navlink.length; i++) {
				navlink[i].setAttribute('class', 'nav-link');
			}
		}
		lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
	},
	false
);

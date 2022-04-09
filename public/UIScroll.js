menu.addEventListener('click', () => {
	navbar.style.display = navbar.style.display === 'block' ? 'none' : 'block';	
	menu.classList.toggle("close");
});

scrollToId = (hash) => {
	hash = hash.charAt(0)==='#' ? hash.substring(1) : hash;
	let top = document.getElementById(hash).offsetTop;
	if (window.innerWidth < 850) {
		top = top - 220;
	}
	window.scroll({
	  top: top,
	  behavior: 'smooth'
	});
}
Array.from(navbar.children).forEach(div => {
	div.addEventListener('click', (e) => {
		if(e.target.tagName.toUpperCase() == 'DIV')
			scrollToId(e.target.firstChild.getAttribute('href'));
	});
	div.firstChild.addEventListener('click', (e, item) => {
		e.preventDefault();
		scrollToId(e.target.getAttribute('href'));
	});
});

const navIds = {};
Array.from(navbar.children).forEach(div => {
	let hrefId = div.firstChild.getAttribute('href');
	hrefId = hrefId.charAt(0)==='#' ? hrefId.substring(1) : hrefId;
	navIds[hrefId] = {val: document.getElementById(hrefId).offsetTop, nav: div};
});
document.addEventListener('scroll', function (event) {
	let selectedNav;
	Object.values(navIds).forEach(value => {
		value.nav.classList.remove("active");
		if(window.scrollY >= (value.val-20)) {
			selectedNav = value.nav;
		}
	});
	if(selectedNav)
		selectedNav.classList.add("active");
}, true);

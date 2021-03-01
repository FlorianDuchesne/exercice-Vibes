// Look for .hamburger
const hamburger = document.querySelector('.hamburger');
// On click
hamburger.addEventListener('click', function () {
	// Toggle class "is-active"
	hamburger.classList.toggle('is-active');
	// Faire apparaitre notre nav
	document.querySelector('header nav').classList.toggle('active');
});

/*** ACCORDION ***/
const titles = document.querySelectorAll('.accordion h3'); //Crée un tableau d'éléments HTML

// Pour chaque titre
for (let title of titles) {
	console.log(title);
	// Quand je clique sur mon titre
	title.addEventListener('click', function () {
		//Je dois faire glisser le reste de l'accordeon vers le bas
		//Je fais apparaitre l'élément voulu
		this.parentElement.classList.toggle('panel-active');
	});
}



const filterBox = document.querySelectorAll('.works-img');

document.querySelector('nav.works-nav').addEventListener('click', event => {
	if (event.target.tagName !== 'LI') return false;
	let filterClass = event.target.dataset['f'];

	console.log(filterClass);

	filterBox.forEach(elem => {
		elem.classList.remove('hide');
		if (!elem.classList.contains(filterClass) && filterClass != 'all') {
			elem.classList.add('hide');
		}
	});

});
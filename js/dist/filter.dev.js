"use strict";

var filterBox = document.querySelectorAll('.works-img');
document.querySelector('nav.works-nav').addEventListener('click', function (event) {
  if (event.target.tagName !== 'LI') return false;
  var filterClass = event.target.dataset['f'];
  console.log(filterClass);
  filterBox.forEach(function (elem) {
    elem.classList.remove('hide');

    if (!elem.classList.contains(filterClass) && filterClass != 'all') {
      elem.classList.add('hide');
    }
  });
});
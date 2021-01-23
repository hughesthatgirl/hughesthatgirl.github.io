const date = new Date();
const year = date.getFullYear();
const footerYear = document.querySelector('#year');

footerYear.textContent = year;
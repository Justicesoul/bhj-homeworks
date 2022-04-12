const dropdownValue = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const links = document.querySelectorAll('.dropdown__link');

dropdownValue.addEventListener('click', () => {
  list.classList.toggle('dropdown__list_active');
});

const rename = (e) => {
  e.preventDefault();
  dropdownValue.textContent = e.target.textContent;
  list.className = 'dropdown__list';
};

links.forEach((link) => {
  link.addEventListener('click', rename);
});

const tabs = Array.from(document.querySelectorAll('.tab'));
const content = Array.from(document.querySelectorAll('.tab__content'));

const setActiveMenu = (e) => {
  document.querySelector('.tab_active').classList.remove('tab_active');
  document
    .querySelector('.tab__content_active')
    .classList.remove('tab__content_active');
  e.currentTarget.classList.add('tab_active');
  content[tabs.indexOf(e.currentTarget)].classList.add('tab__content_active');
};

tabs.forEach((tab) => tab.addEventListener('click', setActiveMenu));

const links = document.querySelectorAll('.has-tooltip');
const div = document.querySelector('div.tooltip');

const createDiv = (link) => {
  const newDiv = document.createElement('div');
  newDiv.textContent = link.title;
  newDiv.classList.add('tooltip');

  const rectLinks = link.getBoundingClientRect();
  newDiv.style.left = rectLinks.left + 'px';
  newDiv.style.top = rectLinks.bottom + 'px';
  newDiv.style.display = 'block';
  link.insertAdjacentElement('afterEnd', newDiv);
};

links.forEach((item) => {
  item.onclick = () => {
    const div = document.querySelector('div.tooltip');
    if (div) {
      div.remove();
      if (item.title !== div.innerHTML) {
        createDiv(item);
      }
    } else {
      createDiv(item);
    }
    return false;
  };

  window.onscroll = () => {
    if (document.querySelector('div.tooltip')) {
      document.querySelector('div.tooltip').remove();
    }
  };
});

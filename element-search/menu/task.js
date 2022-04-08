const menuLink = document.querySelectorAll('.menu__link');

for (let i = 0; i < menuLink.length; i++) {
  const link = menuLink[i];

  link.onclick = () => {
    if (link.nextElementSibling) {
      link.nextElementSibling.classList.toggle('menu_active');
      return false;
    }
  };
}

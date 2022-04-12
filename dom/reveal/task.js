const reveal = document.querySelectorAll('.reveal');

reveal.forEach((item) => {
  document.addEventListener('scroll', () => {
    if (
      item.getBoundingClientRect().top < window.innerHeight &&
      item.getBoundingClientRect().top + item.getBoundingClientRect().height > 0
    ) {
      item.classList.add('reveal_active');
    } else {
      item.classList.remove('reveal_active');
    }
  });
});

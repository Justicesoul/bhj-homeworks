const fontSize = Array.from(document.querySelectorAll('.font-size'));
const book = document.getElementById('book');

fontSize.forEach((value) => {
  value.addEventListener('click', (e) => {
    e.preventDefault();
    document
      .querySelector('.font-size_active')
      .classList.remove('font-size_active');
    value.classList.add('font-size_active');

    if (
      book.classList.contains('book_fs-small') ||
      book.classList.contains('book_fs-big')
    ) {
      book.classList.remove('book_fs-small', 'book_fs-big');
    }

    if (value.classList.contains('font-size_small')) {
      book.classList.add('book_fs-small');
    } else if (value.classList.contains('font-size_big')) {
      book.classList.add('book_fs-big');
    }
  });
});

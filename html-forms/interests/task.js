const checkboxes = document.querySelectorAll('.interest__check');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', () => {
    const parentBox = checkbox.closest('.interest');
    const childBoxes = parentBox.querySelectorAll('.interest__check');
    childBoxes.forEach((box) => (box.checked = checkbox.checked));
  });
});

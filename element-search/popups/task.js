const modalMain = document.querySelector('#modal_main');
const showSuccess = document.querySelector('#modal_success');
const modalClose = document.querySelectorAll('.modal__close');

modalMain.classList.add('modal_active');

for (let i = 0; i < modalClose.length; i++) {
  modalClose[i].onclick = () => {
    if (modalClose[i].classList.contains('show-success')) {
      showSuccess.classList.add('modal_active');
      modalMain.classList.remove('modal_active');
    }
    modalClose[i].closest('.modal_active').classList.remove('modal_active');
  };
}

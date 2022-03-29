const clicker = document.querySelector('#clicker__counter');
const cookie = document.querySelector('#cookie');

cookie.onclick = () => {
  clicker.textContent++;
  cookie.width === 200 ? (cookie.width = 250) : (cookie.width = 200);
};

const dead = document.querySelector('#dead');
const lost = document.querySelector('#lost');
const getHole = (index) => document.querySelector(`#hole${index}`);

const clear = () => {
  dead.textContent = 0;
  lost.textContent = 0;
};

for (let i = 1; i < 10; i++) {
  getHole(i).onclick = () => {
    if (getHole(i).className.includes('hole_has-mole')) dead.textContent++;
    else lost.textContent++;
    if (dead.textContent == 10) {
      alert('Вы выиграли!');
      clear();
    }
    if (lost.textContent == 5) {
      alert('Вы проиграли');
      clear();
    }
  };
}

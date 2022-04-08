const leftArrow = document.querySelector('.slider__arrow_prev');
const rightArrow = document.querySelector('.slider__arrow_next');
const sliders = document.querySelectorAll('.slider__item');
const sliderDots = document.querySelectorAll('.slider__dot');

let sliderNumber = 0;
sliderDots[sliderNumber].classList.add('slider__dot_active');

function sliderActive(num) {
  sliders.forEach((el) => el.classList.remove('slider__item_active'));
  sliders[num].classList.add('slider__item_active');

  sliderDots.forEach((el) => el.classList.remove('slider__dot_active'));
  sliderDots[num].classList.add('slider__dot_active');
}

leftArrow.onclick = () => {
  if (sliderNumber === 0) {
    sliderNumber = sliders.length - 1;
  }
  sliderNumber--;
  sliderActive(sliderNumber);
};

rightArrow.onclick = () => {
  if (sliderNumber === sliders.length - 1) {
    sliderNumber = 0;
  }
  sliderNumber++;
  sliderActive(sliderNumber);
};

for (let i = 0; i < sliderDots.length; i++) {
  sliderDots[i].onclick = () => {
    sliderActive(i);
    sliderNumber = i;
  };
}

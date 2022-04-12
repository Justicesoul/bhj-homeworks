const spansEl = document.querySelectorAll('.rotator__case');
const spans = Array.from(spansEl);

const rotation = () => {
  for (let span of spans) {
    if (spans[spans.length - 1].classList.contains('rotator__case_active')) {
      spans[spans.length - 1].classList.remove('rotator__case_active');
      spans[0].classList.add('rotator__case_active');
      break;
    } else if (span.classList.contains('rotator__case_active')) {
      span.classList.remove('rotator__case_active');
      span.nextElementSibling.classList.add('rotator__case_active');
      break;
    }
  }
};
setInterval(rotation, 1000);

const elements = document.querySelectorAll('.rotator__case')

let activeIndex = 0;

function switchActiveElement() {
  elements[activeIndex].classList.remove('rotator__case_active');

  activeIndex++;

  if (activeIndex >= elements.length) {
    activeIndex = 0
    console.log(elements[activeIndex])
  }

  elements[activeIndex].classList.add('rotator__case_active');
}

  setInterval(switchActiveElement, 1000);

const has_tooltip = [...document.querySelectorAll('.has-tooltip')];

has_tooltip.forEach(elem => {
  elem.addEventListener('click', (el) => {
    el.preventDefault();

    const tooltipContainer = document.createElement('div');
    tooltipContainer.classList.add('tooltip_container');

    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltips');
    tooltip.textContent = elem.getAttribute('title');
    tooltip.classList.add('tooltip_active');

    const remove_text = elem.querySelector('.tooltip_active')
    if(remove_text) {
        remove_text.remove();
        return;
    }
    
    elem.appendChild(tooltip);

  });
});

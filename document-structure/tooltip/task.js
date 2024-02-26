const hasTooltip = [...document.querySelectorAll('.has-tooltip')];
const maxActiveTooltipCount = 1;

hasTooltip.forEach(elem => {
  elem.addEventListener('click', (el) => {
    el.preventDefault();

    const tooltipContainer = document.createElement('div');
    tooltipContainer.classList.add('tooltip_container');

    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = elem.getAttribute('title');
    tooltip.classList.add('tooltip_active');

    const removeText = elem.querySelector('.tooltip_active')
    if(removeText) {
      removeText.remove();
        return;
    }

    const openedTooltips = document.querySelectorAll('.tooltip');
        if (openedTooltips.length >= maxActiveTooltipCount) {
        openedTooltips[0].remove();
    }

    const coordinates = elem.getBoundingClientRect();
    const coordinatesTop = coordinates.top + window.pageYOffset;
    const coordinatesLeft = coordinates.left + window.pageXOffset;

    tooltip.style.top = coordinatesTop + coordinates.height + 'px';
    tooltip.style.left = coordinatesLeft + 'px';
    
    elem.appendChild(tooltip);

  });
});

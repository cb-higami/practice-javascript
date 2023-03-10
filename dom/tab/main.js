'use strict';

{
  const tabLabels = document.querySelectorAll('.tab__label a')
  const tabContetns = document.querySelectorAll('.tab__content')

  tabLabels.forEach( clickedLabel => {
    clickedLabel.addEventListener('click', e => {
      e.preventDefault;

      tabLabels.forEach(label => {
        label.classList.remove('active');
      })

      tabContetns.forEach(content => {
        content.classList.remove('active')
      })

      clickedLabel.classList.add('active')
      document.getElementById(clickedLabel.dataset.id).classList.add('active')

    })
  })

}
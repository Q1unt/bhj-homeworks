 const tab = [...document.querySelectorAll('.tab')]
 const tab_content = [...document.querySelectorAll('.tab__content')]

 console.log(tab)

tab.forEach((elem, index) => {
   elem.addEventListener('click', (el) => {
      tab.forEach(ellem => {
         ellem.classList.remove('tab_active')
      });
      elem.classList.add('tab_active')
      tab_content.forEach(content => {
         if(content.classList.contains('tab__content_active')){
            content.classList.remove('tab__content_active')
         }
         const tab_click = tab_content[index];
         tab_click.classList.add('tab__content_active')
      })
   })
})
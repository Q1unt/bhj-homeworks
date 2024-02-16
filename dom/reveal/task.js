const reveal = document.querySelectorAll('.reveal')

document.addEventListener('wheel', () => {
    for (let i = 0; i < reveal.length; i++) {
        let reveal_document = reveal[i];
    
        function isVisible(el) {
            const {top, bottom} = el.getBoundingClientRect()
            if (bottom < 0 || top > window.innerHeight) {
                return false
            } 
            return true
        }
        const inVisible = () => {
            if (!isVisible(reveal_document)) {
                reveal_document.classList.remove('reveal_active')
            }
            else{
                reveal_document.classList.add('reveal_active')
            };
        };
    
        inVisible();
    
            setInterval(() => {
                console.log(isVisible(reveal_document))
            }, 1000);
        };
        }
    );

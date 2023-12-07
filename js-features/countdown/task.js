const p = document.getElementById('timer')

 setInterval(() => {
        p.textContent = Number(p.textContent) - 1
        if (p.textContent == -1){
            alert('Вы победили в конкурсе!')
            location.reload()
        }
    }, 1000);

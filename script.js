const panels = document.querySelectorAll('.panels');

panels.forEach((panel) =>{
    panel.addEventListener('click', () =>{
        panel.classList.toggle('active');
    })
})

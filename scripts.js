document.querySelectorAll('.concluir-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const li = event.target.parentElement; // Pega o item <li> pai do botão
        li.classList.toggle('concluido'); // Adiciona ou remove a classe 'concluido'
        if (li.classList.contains('concluido')) {
            event.target.textContent = 'Desmarcar'; // Muda o texto do botão
        } else {
            event.target.textContent = 'Concluir'; // Restaura o texto original
        }
    });
});

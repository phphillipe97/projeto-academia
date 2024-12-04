// Função para mostrar o conteúdo ao clicar no menu
function showContent(treino) {
    // Esconde todos os conteúdos
    const todosConteudos = document.querySelectorAll('.treino-content');
    todosConteudos.forEach(content => {
        content.style.display = 'none';
        content.style.opacity = 0;
    });

    // Mostra o conteúdo específico baseado no treino selecionado
    const treinoSelecionado = document.getElementById(treino);
    treinoSelecionado.style.display = 'block';
    setTimeout(() => {
        treinoSelecionado.style.opacity = 1;
    }, 50); // Animação de fade-in
}

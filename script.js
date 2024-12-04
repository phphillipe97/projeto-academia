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

// Função para verificar se passou 12 horas desde a última marcação
function checkExerciseStatus() {
    // Obtemos todos os checkboxes de exercícios
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        const exerciseId = checkbox.id; // ID único do exercício
        const lastCheckedTime = localStorage.getItem(exerciseId); // Recupera a última hora de marcação
        
        if (lastCheckedTime) {
            const timeElapsed = Date.now() - lastCheckedTime; // Tempo decorrido desde a última marcação
            const twelveHours = 12 * 60 * 60 * 1000; // 12 horas em milissegundos
            
            if (timeElapsed >= twelveHours) {
                // Se passaram 12 horas ou mais, desmarcamos o checkbox
                checkbox.checked = false;
                localStorage.removeItem(exerciseId); // Remove o tempo de marcação
            }
        }
    });
}

// Função para salvar a hora de marcação do exercício
function saveExerciseStatus(event) {
    const checkbox = event.target;
    const exerciseId = checkbox.id; // ID único do exercício

    if (checkbox.checked) {
        const currentTime = Date.now(); // Hora atual
        localStorage.setItem(exerciseId, currentTime); // Armazenamos a hora de marcação no localStorage
    } else {
        localStorage.removeItem(exerciseId); // Se desmarcar, removemos a hora do localStorage
    }
}

// Adicionando o evento para monitorar os checkboxes
document.addEventListener('DOMContentLoaded', () => {
    // Verifica se algum exercício já ultrapassou as 12 horas ao carregar a página
    checkExerciseStatus();

    // Monitorar o evento de alteração nos checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', saveExerciseStatus);
    });
});

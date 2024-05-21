const logoutBtn = document.getElementById('logoutBtn');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
const cancelBtn = document.getElementById('cancelBtn');
const confirmBtn = document.getElementById('confirmBtn');

// Abre o modal quando o botão de sair é clicado
logoutBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Fecha o modal quando o usuário clicar no botão 'X'
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fecha o modal quando o usuário clicar no botão 'Cancelar'
cancelBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Lógica para confirmar a saída do aplicativo
confirmBtn.addEventListener('click', () => {
  // Coloque sua lógica de saída do aplicativo aqui
  // Por exemplo: window.close();
});

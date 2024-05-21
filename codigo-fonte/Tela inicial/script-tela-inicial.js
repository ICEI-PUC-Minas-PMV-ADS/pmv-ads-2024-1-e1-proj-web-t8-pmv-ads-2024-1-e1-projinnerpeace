const logoutBtn = document.getElementById('logoutBtn');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
const cancelBtn = document.getElementById('cancelBtn');
const confirmBtn = document.getElementById('confirmBtn');

logoutBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

cancelBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

confirmBtn.addEventListener('click', () => {
  // Ainda precisa colocar a lógica de saída do aplicativo aqui
  // ex: window.close();
});

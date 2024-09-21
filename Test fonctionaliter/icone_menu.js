// Sélection des éléments
const menuIcon = document.getElementById('menuIcon');
const menuModal = document.getElementById('menuModal');

// Ouvrir le menu lorsqu'on clique sur l'icône
menuIcon.addEventListener('click', function() {
  menuModal.classList.add('active');
});

// Fermer le menu lorsqu'on clique à l'extérieur du contenu
menuModal.addEventListener('click', function(event) {
  if (event.target === menuModal) {
    menuModal.classList.remove('active');
  }
});

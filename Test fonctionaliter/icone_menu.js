// Sélection des éléments
const menuIcon = document.getElementById('menuIcon');
const menuModal = document.getElementById('menuModal');

// Ouvrir le menu lorsqu'on clique sur l'icône
menuIcon.addEventListener('click', function() {
    menuModal.classList.add('active');
});

// Fermer le menu lorsqu'on clique à l'extérieur du contenu du menu
document.addEventListener('click', function(event) {
    // Vérifier si le clic est à l'extérieur de la modale et de l'icône du menu
    const isClickInsideMenu = menuModal.contains(event.target);
    const isClickOnIcon = menuIcon.contains(event.target);

    if (!isClickInsideMenu && !isClickOnIcon) {
        // Si le clic est en dehors du menu et de l'icône, on ferme le menu
        menuModal.classList.remove('active');
    }
});
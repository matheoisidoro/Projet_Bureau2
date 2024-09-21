// Sélectionne les éléments du menu et le bouton de fermeture
const menu = document.getElementById('menu');
const menuToggle = document.querySelector('.menu-icon');
const closeMenu = document.querySelector('a.close');

// Événement pour alerter lorsque l'icône du menu est cliquée
menuToggle.addEventListener('click', () => {
    alert('Menu icon clicked!');
    document.body.classList.add('is-menu-visible'); // Ouvre le menu
});

// Ferme le menu
closeMenu.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.classList.remove('is-menu-visible');
});

// Optionnel : ferme le menu si on clique en dehors
document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
        document.body.classList.remove('is-menu-visible');
    }
});

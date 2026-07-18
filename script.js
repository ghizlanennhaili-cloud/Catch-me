const phrases = [
    "Can you catch me? 😜",
    "Attrape-moi ! 🏃‍♀️",
    "Trop lent ! 😏",
    "Essaye encore ! 😮",
    "Mel..... lo..... 😉",
    "Tu m'auras pas ! 😝",
    "Rateeeer ! 😆",
    "😂🤣"
];

const textElement = document.getElementById('catch-text');

// --- Partie 1 : Changement de phrase automatique ---
function changePhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    textElement.innerText = phrases[randomIndex];
}

// Change de phrase toutes les 3 secondes pour le fun
setInterval(changePhrase, 3000);


// --- Partie 2 : Le jeu de "l'évitement" ---
textElement.addEventListener('mouseover', () => {
    // 1. Grossit le texte
    textElement.classList.add('big');

    // 2. Calcule des positions aléatoires sur l'écran
    const maxX = window.innerWidth - textElement.offsetWidth - 50;
    const maxY = window.innerHeight - textElement.offsetHeight - 50;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // 3. Applique les nouvelles positions
    textElement.style.left = `${randomX}px`;
    textElement.style.top = `${randomY}px`;
});

// Quand la souris quitte le texte, il redevient normal
textElement.addEventListener('mouseout', () => {
    textElement.classList.remove('big');
});
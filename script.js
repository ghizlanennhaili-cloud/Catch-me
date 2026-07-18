// On sélectionne l'élément HTML avec l'ID 'target'
const target = document.getElementById('target');

// Variables pour gérer la taille et la croissance
let currentSize = 50; // Taille de départ en pixels
let growing = false;  // État : grandit ou rétrécit ?

// On ajoute un écouteur d'événement au survol de la souris
target.addEventListener('mouseover', () => {
    
    // 1. Déplacer vers une position aléatoire
    // On soustrait 100 et 50 pour que le texte reste dans la fenêtre
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;

    // 2. Logique pour changer la taille
    if (growing) {
        currentSize += 8; // Augmente la taille
        if (currentSize >= 80) growing = false; // Inverse quand il devient grand
    } else {
        currentSize -= 8; // Réduit la taille
        if (currentSize <= 15) growing = true; // Inverse quand il devient petit
    }

    // Appliquer la nouvelle taille
    target.style.fontSize = `${currentSize}px`;
});
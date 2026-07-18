const phrases = [
    "Can you catch me? 😜",
    "catch me 💪",
    "catch me 😊",
    "catch me 😄",
    "catch me 🤗",
     "catch me 😊",
    "you can't catch me 😏",
    "too close😮",
    "catch me 😁",
    "catch me 😄",
    "catch me 😆",
    "catch me 😂",
    "catch me🏃‍♀️",
    "catch me 🤣"
];

const textElement = document.getElementById('catch-text');

// Changement de texte toutes les 2 secondes
setInterval(() => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    textElement.innerText = phrases[randomIndex];
}, 2000);

// Traînée de cœurs au mouvement de la souris
document.addEventListener('mousemove', (event) => {
    const heart = document.createElement('span');
    heart.innerText = '💖';
    heart.classList.add('heart-trail');
    heart.style.left = event.pageX + 'px';
    heart.style.top = event.pageY + 'px';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
});
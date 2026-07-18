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

function changeText() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    textElement.innerText = phrases[randomIndex];
}

// Change le texte toutes les 2 secondes
setInterval(changeText, 2000);
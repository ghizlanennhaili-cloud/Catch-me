const phrases = [
    "Catch me? 😜", "Faster! 🏃‍♀️", "Too slow! 😏", "Try again! 😮", 
    "You can't catch me! 💪", "I'm here! 😊", "Catch me if you can!😜",
    "So close... 🤏", "Nice try! 😉", "Keep running! 🏃‍♂️", 
    "Almost got me! 😝", "Still here! 🍭",, "Where are you? 🧐", "Getting closer! 🥵", "Too fast for you! 😎", 
    "Catch me! 😆", "Can't touch this! 💅", "Try harder! 🔥", 
    "Oops! Missed me! 😅", "Still chasing? 😆", "Look at me! 😏", "Give up! 🏳️",
    "Never catch me! 😈"
];

const textElement = document.getElementById('catch-text');
const container = document.getElementById('animations-container');

// Liste des emojis animés
const emojiUrls = [
    "https://images.emojiterra.com/google/noto-emoji/animated-emoji/1f496.gif",
    "https://images.emojiterra.com/google/noto-emoji/animated-emoji/2728.gif",
    "https://images.emojiterra.com/google/noto-emoji/animated-emoji/1f98b.gif"
];

// Créer des emojis flottants
function createEmoji() {
    const img = document.createElement('img');
    img.src = emojiUrls[Math.floor(Math.random() * emojiUrls.length)];
    img.className = 'emoji-floating';
    img.style.left = Math.random() * 100 + 'vw';
    img.style.animationDuration = (Math.random() * 5 + 5) + 's';
    container.appendChild(img);
    setTimeout(() => img.remove(), 10000);
}
setInterval(createEmoji, 2000);

// Interaction : le texte s'enfuit quand on l'approche
textElement.addEventListener('mouseover', () => {
    const randomX = Math.random() * (window.innerWidth - 150);
    const randomY = Math.random() * (window.innerHeight - 50);
    textElement.style.left = randomX + 'px';
    textElement.style.top = randomY + 'px';
    
    // Change la phrase
    textElement.innerText = phrases[Math.floor(Math.random() * phrases.length)];
});
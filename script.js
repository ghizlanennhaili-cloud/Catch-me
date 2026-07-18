const phrases = [
    "Catch me? 😜", "Faster! 🏃‍♀️", "Too slow! 😏", "Try again! 😮", 
    "You can't catch me! 💪", "I'm here! 😊", "Catch me if you can! 😜",
    "So close... 🤏", "Nice try! 😉", "Keep running! 🏃‍♂️", 
    "Almost got me! 😝", "Still here! 🍭", "Where are you? 🧐", 
    "Getting closer! 🥵", "Too fast for you! 😎", "Catch me! 😆", 
    "Can't touch this! 💅", "Try harder! 🔥", "Oops! Missed me! 😅", 
    "Still chasing? 😆", "Look at me! 😏", "Give up! 🏳️", "Never catch me! 😈"
];

const textElement = document.getElementById('catch-text');
const container = document.getElementById('animations-container');

let currentSize = 24; // Taille de départ
let shrinking = true;  // Sens du changement (diminue ou augmente)

// 1. Emojis flottants
const emojiUrls = ["https://images.emojiterra.com/google/noto-emoji/animated-emoji/1f496.gif", "https://images.emojiterra.com/google/noto-emoji/animated-emoji/2728.gif", "https://images.emojiterra.com/google/noto-emoji/animated-emoji/1f98b.gif"];

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

// 2. Clic : Changement de taille progressif
textElement.addEventListener('click', () => {
    // Logique de taille : 24, 22, 20... jusqu'à 6, puis remonte
    if (shrinking) {
        currentSize -= 2;
        if (currentSize <= 6) shrinking = false;
    } else {
        currentSize += 2;
        if (currentSize >= 24) shrinking = true;
    }
    
    textElement.style.fontSize = currentSize + 'px';
});

// 3. Fuite quand curseur proche
document.addEventListener('mousemove', (e) => {
    const rect = textElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2));

    if (distance < 50) {
        textElement.style.left = (Math.random() * (window.innerWidth - 100)) + 'px';
        textElement.style.top = (Math.random() * (window.innerHeight - 50)) + 'px';
        textElement.innerText = phrases[Math.floor(Math.random() * phrases.length)];
    }
});
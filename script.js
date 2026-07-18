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

// Interaction : Rétrécissement à l'approche et fuite au contact
document.addEventListener('mousemove', (e) => {
    const rect = textElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2));

    // Si la souris est proche (moins de 200px), on réduit la taille
    if (distance < 200) {
        textElement.classList.add('text-small');
    } else {
        textElement.classList.remove('text-small');
    }

    // Si on est vraiment très près (moins de 50px), le texte "s'enfuit"
    if (distance < 50) {
        const randomX = Math.random() * (window.innerWidth - 150);
        const randomY = Math.random() * (window.innerHeight - 50);
        textElement.style.left = randomX + 'px';
        textElement.style.top = randomY + 'px';
        textElement.innerText = phrases[Math.floor(Math.random() * phrases.length)];
    }
});
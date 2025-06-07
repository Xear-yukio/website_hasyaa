// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Backsound toggle (manual play on click)
const backsound = document.getElementById("backsound");
const toggleBtn = document.getElementById("sound-toggle");
let isPlaying = false;

toggleBtn.addEventListener("click", () => {
  if (!isPlaying) {
    backsound.play();
    toggleBtn.textContent = "🔊";
  } else {
    backsound.pause();
    toggleBtn.textContent = "🔈";
  }
  isPlaying = !isPlaying;
});
// Kutipan Inspiratif
const quotes = [
  "Jadilah cahaya bahkan ketika dunia gelap 🌙",
  "Berani mencoba adalah langkah pertama menuju keajaiban 💫",
  "Kamu bisa lebih dari yang kamu kira 🌼",
  "Karya yang tulus akan menyentuh hati seseorang 🎨",
  "Teknologi tanpa hati hanya sekumpulan kode ❤️",
  "Semua yang kamu butuhkan sudah ada dalam dirimu 💖"
];

const quoteText = document.getElementById("quote-text");
if (quoteText) {
  quoteText.textContent = quotes[Math.floor(Math.random() * quotes.length)];
}

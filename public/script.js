const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.nav-link');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
});

const navLinks = document.querySelectorAll('.nav-link a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    });
});

const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');
const musicIcon = musicBtn.querySelector('i');

musicBtn.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        musicBtn.classList.add('playing');
        musicIcon.classList.replace('fa-music', 'fa-pause');
    } else {
        music.pause();
        musicBtn.classList.remove('playing');
        musicIcon.classList.replace('fa-pause', 'fa-music');
    }
});

// sakura
const canvas = document.getElementById("sakura");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const petals = [];
const petalCount = 40;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

class Petal {
  constructor() {
    this.x = random(0, canvas.width);
    this.y = random(-canvas.height, 0);
    this.radius = random(6, 10);
    this.speedY = random(1, 3);
    this.speedX = random(-1, 1);
    this.opacity = random(0.5, 1);
  }

  update() {
    this.y += this.speedY;
    this.x += this.speedX;

    if (this.y > canvas.height) {
      this.y = -10;
      this.x = random(0, canvas.width);
    }
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 182, 193, ${this.opacity})`;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

for (let i = 0; i < petalCount; i++) {
  petals.push(new Petal());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  petals.forEach(petal => {
    petal.update();
    petal.draw();
  });
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

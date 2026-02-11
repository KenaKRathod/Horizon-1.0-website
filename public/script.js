// Countdown Timer
const countdownDate = new Date("Oct 14, 2025 10:00:00").getTime();
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.innerText = days.toString().padStart(2, "0");
  hoursEl.innerText = hours.toString().padStart(2, "0");
  minutesEl.innerText = minutes.toString().padStart(2, "0");
  secondsEl.innerText = seconds.toString().padStart(2, "0");
}, 1000);

// Initialize particles.js with hover disabled
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#00d4ff" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 2, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00d4ff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false }, // hover disabled
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});
// Animate timeline cards on scroll
document.addEventListener("DOMContentLoaded", function () {
  const lefts = document.querySelectorAll(".animate-fade-in-left");
  const rights = document.querySelectorAll(".animate-fade-in-right");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  lefts.forEach((el) => {
    el.style.animationPlayState = "paused";
    observer.observe(el);
  });
  rights.forEach((el) => {
    el.style.animationPlayState = "paused";
    observer.observe(el);
  });
});

// Desktop vs Mobile Navigation
// Hamburger Toggle
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("mobile-sidebar");
const closeBtn = document.getElementById("sidebar-close");

if (hamburger && sidebar && closeBtn) {
  hamburger.addEventListener("click", () => {
    sidebar.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
}

// ===== Initialize Swiper for Event Section =====
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// FAQ Accordion Functionality
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', function () {
    const answer = this.nextElementSibling;
    const toggle = this.querySelector('.faq-toggle');
    if (answer.classList.contains('hidden')) {
      answer.classList.remove('hidden');
      toggle.textContent = '−';
    } else {
      answer.classList.add('hidden');
      toggle.textContent = '+';
    }
  });
});
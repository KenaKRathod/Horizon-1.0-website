// Countdown Timer for IEEE Fest
const eventDate = new Date("Feb 20, 2026 00:00:00").getTime();

const circles = {
  days: document.getElementById("days-circle"),
  hours: document.getElementById("hours-circle"),
  minutes: document.getElementById("minutes-circle"),
  seconds: document.getElementById("seconds-circle")
};

const radius = 60;
const circumference = 2 * Math.PI * radius;

function setProgress(circle, value, max) {
  const offset = circumference - (value / max) * circumference;
  circle.style.strokeDashoffset = offset;
}

setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  setProgress(circles.days, days % 365, 365);
  setProgress(circles.hours, hours, 24);
  setProgress(circles.minutes, minutes, 60);
  setProgress(circles.seconds, seconds, 60);

}, 1000);


// Initialize particles.js with Horizon New Dawn theme
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ff6b00" }, // Orange from New Dawn palette
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#8a2be2", // Purple from New Dawn palette
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
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
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      speed: 1000,
      loop: true,
      grabCursor: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        480: {
          slidesPerView: 1.5,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 25
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    });

    

// FAQ Accordion Functionality
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  const toggle = item.querySelector(".faq-toggle");

  question.addEventListener("click", () => {
    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      toggle.textContent = "−";
    } else {
      toggle.textContent = "+";
    }
  });
});

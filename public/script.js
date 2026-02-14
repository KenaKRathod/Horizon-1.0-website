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

// ===== Team Swiper Initialization =====
var teamSwiper = new Swiper(".teamSwiper", {
  effect: "creative", // One-sided slide effect
  grabCursor: true,
  initialSlide: 0,
  speed: 800,
  loop: true,
  mousewheel: {
    invert: false,
  },
  creativeEffect: {
    limitProgress: 2, // Limit stack visibility
    prev: {
      shadow: true,
      translate: ["-120%", 0, -500], // Move previous slide far left/back
      opacity: 0, // Fade out previous slide
    },
    next: {
      translate: ["100%", 0, 0], // Next slide enters from right
    },
  },
});

// Update Name and Role on Slide Change
const teamNameEl = document.getElementById("team-member-name");
const teamRoleEl = document.getElementById("team-member-role");

teamSwiper.on('slideChange', function () {
  const activeSlide = teamSwiper.slides[teamSwiper.activeIndex];
  const name = activeSlide.getAttribute("data-name");
  const role = activeSlide.getAttribute("data-role");

  // Simple fade out/in effect for text
  teamNameEl.style.opacity = 0;
  teamRoleEl.style.opacity = 0;

  setTimeout(() => {
    teamNameEl.innerText = name || "Member Name";
    teamRoleEl.innerText = role || "Role";
    teamNameEl.style.opacity = 1;
    teamRoleEl.style.opacity = 1;
  }, 200);
});

// Custom Navigation Buttons
const prevBtn = document.querySelector(".team-prev");
const nextBtn = document.querySelector(".team-next");

if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => {
    teamSwiper.slidePrev();
  });
  nextBtn.addEventListener("click", () => {
    teamSwiper.slideNext();
  });
}

// ===== Team Details Modal Logic =====
const teamModal = document.getElementById('team-modal');
const modalCloseBtn = document.getElementById('modal-close');
const modalBackdrop = document.getElementById('modal-backdrop');

// Modal Elements to Populate
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalRole = document.getElementById('modal-role');
const modalBio = document.getElementById('modal-bio');

function openTeamModal(slide) {
  // Extract Data
  const name = slide.getAttribute('data-name');
  const role = slide.getAttribute('data-role');
  const img = slide.getAttribute('data-image') || slide.querySelector('img').src;
  const bio = slide.getAttribute('data-bio');

  // Populate Data
  modalName.innerText = name;
  modalRole.innerText = role;
  modalImg.src = img;
  modalBio.innerText = bio;

  // Show Modal
  teamModal.classList.remove('hidden');
  // Small delay to allow display:block to apply before opacity transition
  setTimeout(() => {
    teamModal.classList.remove('opacity-0');
    teamModal.querySelector('#modal-content').classList.remove('scale-95');
    teamModal.querySelector('#modal-content').classList.remove('pointer-events-none');
    teamModal.querySelector('#modal-content').classList.add('scale-100');
  }, 10);

  // Disable Body Scroll
  document.body.style.overflow = 'hidden';
}

function closeTeamModal() {
  // Hide Modal
  teamModal.classList.add('opacity-0');
  teamModal.querySelector('#modal-content').classList.remove('scale-100');
  teamModal.querySelector('#modal-content').classList.add('scale-95');
  teamModal.querySelector('#modal-content').classList.add('pointer-events-none');

  setTimeout(() => {
    teamModal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scroll
  }, 500); // Match transition duration
}

// Add Click Listeners to Slides
// We need to delegate or add listeners to all slides
document.querySelectorAll('.team-slide').forEach(slide => {
  slide.addEventListener('click', () => {
    openTeamModal(slide);
  });
});

// Close Listeners
if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeTeamModal);
if (modalBackdrop) modalBackdrop.addEventListener('click', closeTeamModal);

// Close on Escape Key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !teamModal.classList.contains('hidden')) {
    closeTeamModal();
  }
});


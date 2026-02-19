// ==================== COUNTDOWN TIMER ====================
const eventDate = new Date("Feb 20, 2026 00:00:00").getTime();

const circles = {
  days: document.getElementById("days-circle"),
  hours: document.getElementById("hours-circle"),
  minutes: document.getElementById("minutes-circle"),
  seconds: document.getElementById("seconds-circle"),
};

const radius = 70;
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

  document.getElementById("days").innerText = days.toString().padStart(2, "0");
  document.getElementById("hours").innerText = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").innerText = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").innerText = seconds
    .toString()
    .padStart(2, "0");

  setProgress(circles.days, days % 365, 365);
  setProgress(circles.hours, hours, 24);
  setProgress(circles.minutes, minutes, 60);
  setProgress(circles.seconds, seconds, 60);
}, 1000);

// ==================== PARTICLES.JS INITIALIZATION ====================
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ff6b00" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#8a2be2",
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
      onhover: { enable: false },
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

// ==================== TIMELINE ANIMATION ====================
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
    { threshold: 0.2 },
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

// ==================== MOBILE NAVIGATION ====================
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

// Auto-close mobile sidebar when clicking a link
const sidebarLinks = document.querySelectorAll(".sidebar-link");
sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (sidebar) {
      sidebar.classList.remove("active");
    }
  });
});

// ==================== EVENTS SWIPER ====================
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
  speed: 100,
  loop: true,
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// ==================== EVENT DETAILS MODAL ====================
const eventDetails = {
  huntathon: {
    title: "HUNT-A-THON",
    time: "9:00 AM - 10:30 PM",
    location: "VGEC Campus(A-Block)",
    team: "Teams of 4",
    description:
      "The ultimate treasure hunt experience! Navigate through challenging clues, solve exciting puzzles, and race against time...",
    rules: [
      "Teams must consist of exactly 4 members",
      "Registration fee: ₹100 per team",
      "All team members must be present at the start",
      "No use of external help or digital tools for solving clues",
      "Follow the designated paths and respect campus property",
      "Time limit will be strictly enforced",
      "First team to complete all challenges wins",
    ],
    rulebook: {
      text: "HUNT-A-THON Rulebook",
      link: "./rulebooks/huntathon.pdf",
    },
    prizes: "Winner & Runner Up prizes and Certificates",
    prizeHeading: "Prizes & Recognition",
    registrationLink: "https://surveymars.com/q/itfn9Zs9C",
    showRegistration: true,
  },
  techtalk: {
    title: "Tech Talk - DRDO Expert Session",
    time: "11:00 AM - 1:00 PM",
    location: "A-Block Auditorium",
    team: "Individual",
    description:
      "Discover the world of intelligence gathering with DRDO expert TATSAT THAKORE in 'Mapping the Invisible: Geospatial OSINT.'' Learn how open-source intelligence and geospatial technologies reveal hidden patterns and extract actionable insights from publicly available data. Explore cutting-edge techniques that transform satellite imagery, digital footprints, and location data into powerful investigative tools used by defense and intelligence professionals. Perfect for anyone interested in cybersecurity, defense technology, or intelligence analysis. Join this interactive session for a rare glimpse into methods that uncover what's hidden in plain sight!",
    rules: [
      "Free entry for all students",
      "Register in advance to reserve your seat",
      "Maintain silence during presentations",
      "Q&A session after each talk",
      "No recording without permission",
      "Certificate of attendance provided to all participants",
    ],
    prizes: "Knowledge + Networking Opportunities + Certificates",
    prizeHeading: "What You'll Gain",
    registrationLink: "https://surveymars.com/q/iM9Cfnlks",
    showRegistration: true,
  },
  stalls: {
    title: "Food & Non-Food Stalls",
    time: "1:00 PM - 3:00 PM",
    location: "M & N Block",
    team: "Open to All",
    description:
      "Explore a variety of delicious food options and exciting merchandise! From traditional snacks to modern cuisines, tech gadgets to custom merchandise - find everything you need to make your fest experience complete.",
    rules: [
      "Valid college ID required for entry",
      "Cash and digital payments accepted",
      "Maintain cleanliness in the stall area",
      "Follow queue discipline",
      "Report any issues to the organizing committee",
      "Vendors must comply with health and safety standards",
    ],
    prizes: "Great Food + Cool Merchandise + Memories",
    prizeHeading: "Register to set up a stall.",
    registrationLink: "https://forms.gle/2vqVdxHhLuXEHs1s8",
    showRegistration: true,
  },
  gamesgala: {
    title: "GAME GALA",
    time: "1:00 PM - 3:00 PM",
    location: "M & N Block",
    team: "Individual & team",
    description: "Fast-paced, fun-filled minute to win it games...",
    rules: [
      "Attention : One single pass (₹50) gives you access to BOTH ThinkBits (tech games) and Game Gala (stall games)! 🎮🔥",
      "Individual participation in most games",
      "Free entry for all registered participants",
      "Each game has a specific time limit",
      "No retries unless specified",
      "Follow game-specific rules",
      "Winners based on points or time",
    ],
    rulebook: {
      text: "GAME GALA Rulebook",
      link: "./rulebooks/gamesgala.pdf",
    },
    prizes: "Winners: Exciting Prizes & cute goodies | All: Fun Memories",
    prizeHeading: "Prizes & Recognition",
    registrationLink: "https://surveymars.com/q/dnhD6HmBu",
    showRegistration: true,
  },
  thinkbits: {
    title: "THINK BITS",
    time: "3:00 PM - 4:30 PM",
    location: "M-Block",
    team: "Individual/Teams",
    description: "Put your technical knowledge to the test!",
    rules: [
      "Attention : One single pass (₹50) gives you access to BOTH ThinkBits (tech games) and Game Gala (stall games)! 🎮🔥",
      "Individual or team participation",
      "No phones allowed",
      "Points based on speed & accuracy",
      "Judges decision final",
    ],
    rulebook: {
      text: "THINK BITS Rulebook",
      link: "./rulebooks/thinkbits.pdf",
    },
    prizes: "Winners: Prizes + Certificates",
    prizeHeading: "Prizes & Recognition",
    registrationLink: "https://surveymars.com/q/dnhD6HmBu",
    showRegistration: true,
  },
  cultural: {
    title: "Cultural Evening",
    time: "4:30 PM - 5:30 PM",
    location: "M & N Block",
    team: "Open to All",
    description:
      "End the fest with music, dance, and celebration! Enjoy live jamming sessions and traditional Garba. Whether you want to perform or just vibe with the crowd, this is the perfect finale to an amazing day!",
    rules: [
      "Entry with valid college ID only",
      "Wear comfortable clothes for Garba",
      "Follow event timings strictly",
      "Maintain decorum and respect cultural values",
      "Photography allowed in designated areas",
      "No inappropriate behavior will be tolerated",
    ],
    prizes: "Unstoppable Energy + Unforgettable Memories",
    prizeHeading: "What to Expect",
    registrationLink: "",
    showRegistration: false,
  },
};

function openEventModal(eventKey) {
  const modal = document.getElementById("event-modal");
  const modalContent = document.getElementById("event-modal-content");
  const event = eventDetails[eventKey];

  if (!event) return;

  modalContent.innerHTML = `
    <h2>${event.title}</h2>
    
    <div class="event-meta">
      <div class="meta-item">
        <i class="fas fa-clock"></i>
        <span>${event.time}</span>
      </div>
      <div class="meta-item">
        <i class="fas fa-map-marker-alt"></i>
        <span>${event.location}</span>
      </div>
      <div class="meta-item">
        <i class="fas fa-users"></i>
        <span>${event.team}</span>
      </div>
    </div>

    <h3>About This Event</h3>
    <p>${event.description}</p>

    <h3>Rules & Guidelines</h3>
    <ul>
      ${event.rules.map((rule) => `<li><i class="fas fa-check-circle"></i> ${rule}</li>`).join("")}
    </ul>

    ${
      event.rulebook
        ? `
        <h3>Rulebook</h3>
        <p>Find the detailed rulebook below:</p>
        <a href="${event.rulebook.link}" 
           target="_blank" 
           class="modal-register-btn">
          <span>${event.rulebook.text}</span>
          <i class="fas fa-file-pdf"></i>
        </a>
      `
        : ""
    }

    <h3>${event.prizeHeading}</h3>
    <p>${event.prizes}</p>

    ${
      event.showRegistration
        ? `
        <a href="${event.registrationLink}" target="_blank" class="modal-register-btn">
          <span>Register for this Event</span>
          <i class="fas fa-arrow-right"></i>
        </a>
      `
        : ""
    }
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeEventModal() {
  const modal = document.getElementById("event-modal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Close modal when clicking outside
document.getElementById("event-modal")?.addEventListener("click", function (e) {
  if (e.target === this) {
    closeEventModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeEventModal();
  }
});

// ==================== RULEBOOK ACCORDION ====================
function toggleRulebook(section) {
  const card = document
    .querySelector(`#toggle-${section}`)
    .closest(".rulebook-card");
  const content = document.getElementById(`content-${section}`);
  const toggle = document.getElementById(`toggle-${section}`);

  // Close all other rulebook cards
  document.querySelectorAll(".rulebook-card").forEach((otherCard) => {
    if (otherCard !== card && otherCard.classList.contains("active")) {
      otherCard.classList.remove("active");
    }
  });

  // Toggle current card
  card.classList.toggle("active");
}

// ==================== FAQ ACCORDION ====================
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const toggle = item.querySelector(".faq-toggle");

  question.addEventListener("click", () => {
    // Close all other FAQs
    faqItems.forEach((otherItem) => {
      if (otherItem !== item && otherItem.classList.contains("active")) {
        otherItem.classList.remove("active");
        otherItem.querySelector(".faq-toggle").textContent = "+";
      }
    });

    // Toggle current FAQ
    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      toggle.textContent = "−";
    } else {
      toggle.textContent = "+";
    }
  });
});

// ==================== SCROLL REVEAL ANIMATION ====================
const scrollRevealElements = document.querySelectorAll(
  ".scroll-reveal, .scroll-reveal-team",
);

const scrollReveal = () => {
  scrollRevealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight * 0.85) {
      element.classList.add("revealed");
    }
  });
};

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);
scrollReveal(); // Initial check

// ==================== SMOOTH SCROLL FOR NAVIGATION ====================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // Don't prevent default for external links or empty hrefs
    if (href === "#" || !href) return;

    e.preventDefault();
    const target = document.querySelector(href);

    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// ==================== NAVBAR SCROLL EFFECT ====================
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.style.background = "rgba(10, 10, 20, 0.98)";
    navbar.style.boxShadow = "0 4px 30px rgba(255, 107, 0, 0.4)";
  } else {
    navbar.style.background = "rgba(10, 10, 20, 0.85)";
    navbar.style.boxShadow = "0 4px 30px rgba(255, 107, 0, 0.3)";
  }

  lastScroll = currentScroll;
});

// ==================== LOADING ANIMATION ====================
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// ==================== CONSOLE EASTER EGG ====================
console.log(
  "%c🚀 Welcome to HORIZON 1.0 - New Dawn!",
  "color: #ff6b00; font-size: 24px; font-weight: bold;",
);
console.log(
  "%cBuilt with ❤️ by the IEEE VGEC Student Branch",
  "color: #8a2be2; font-size: 14px;",
);
console.log(
  "%cInterested in the code? Join our tech team!",
  "color: #ff6b00; font-size: 12px;",
);

function closePartnerPopup() {
  document.getElementById("partnerPopup").style.display = "none";
}



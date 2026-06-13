document.addEventListener('DOMContentLoaded', function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const emailBtn = document.getElementById('emailBtn');
  const hiddenEmail = 'mbhuvanesh200628@gmail.com';
  emailBtn.addEventListener('click', function () {
    window.location.href = `mailto:${hiddenEmail}?subject=${encodeURIComponent('Contact from portfolio')}`;
  });

  const cursor = document.getElementById('cursorDot');
  let mouseX = -100, mouseY = -100;
  let posX = -100, posY = -100;
  const speed = 0.15;

  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    posX += (mouseX - posX) * speed;
    posY += (mouseY - posY) * speed;
    if (cursor) {
      cursor.style.transform = `translate3d(${posX - 8}px, ${posY - 8}px, 0)`;
    }
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  const interactive = document.querySelectorAll('button, a, .stat, .skill-box, .project-box, .experience-box, .cert, .profile-img');
  interactive.forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (cursor) {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.background = 'radial-gradient(circle at 30% 30%, rgba(30,144,255,0.95), rgba(30,144,255,0.6))';
      }
    });
    el.addEventListener('mouseleave', () => {
      if (cursor) {
        cursor.style.width = '16px';
        cursor.style.height = '16px';
        cursor.style.background = 'linear-gradient(90deg,#1e90ff,#0ea5e9)';
      }
    });
  });

  const profileImg = document.getElementById('profileImg');
  if (profileImg) {
    profileImg.tabIndex = 0;
    profileImg.addEventListener('focus', () => profileImg.classList.add('focus'));
    profileImg.addEventListener('blur', () => profileImg.classList.remove('focus'));
  }

  emailBtn.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      emailBtn.click();
    }
  });

  const tooltipTargets = document.querySelectorAll('[data-tooltip]');
  tooltipTargets.forEach(t => {
    t.addEventListener('touchstart', function (ev) {
      if (t.classList.contains('touched')) {
        t.classList.remove('touched');
        t.blur();
      } else {
        t.classList.add('touched');
        setTimeout(() => t.classList.remove('touched'), 3000);
      }
    });
  });
});
window.onload = function() {
  const greeting = document.getElementById("greeting-text");
  greeting.innerText = "Greetings, welcome to Bhuvanesh's portfolio.";

  // Text-to-Speech with friendly tone
  const speech = new SpeechSynthesisUtterance(greeting.innerText);
  speech.rate = 1.0;   // normal speed (not too fast)
  speech.pitch = 1.0;  // natural pitch
  speech.volume = 1.0; // clear but not loud
  speech.lang = "en-US"; // smoother English voice

  // Choose a softer voice if available
  const voices = speechSynthesis.getVoices();
  const friendlyVoice = voices.find(v => v.name.includes("Google UK English Female") || v.name.includes("Microsoft Zira"));
  if(friendlyVoice) speech.voice = friendlyVoice;

  speechSynthesis.speak(speech);

  // Hide after few seconds
  setTimeout(() => {
    document.getElementById("jarvis-greeting").style.display = "none";
  }, 5000);
};
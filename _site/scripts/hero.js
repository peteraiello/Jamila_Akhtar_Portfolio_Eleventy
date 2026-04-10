document.addEventListener("DOMContentLoaded", () => {
  const subtitles = [...document.querySelectorAll('.hero-typewriter span')].map(el => el.textContent);
  
  if (!subtitles.length) return;

  const colours = ["primary", "secondary", "tertiary-offset"];
  let current = 0;
  let charIndex = 0;
  let isDeleting = false;
  const el = document.querySelector(".typewriter-effect");


  function applyColour() {
    el.className = "heading-xl text-" + colours[current % colours.length];
  }

  function type() {
      const word = subtitles[current];    
      if (isDeleting) {
        el.textContent = word.slice(0, --charIndex);
      } else {
        el.textContent = word.slice(0, ++charIndex);
      }      
      let delay = isDeleting ? 80 : 120;    
      if (!isDeleting && charIndex === word.length) {
        delay = 1500;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        current = (current + 1) % subtitles.length;
        applyColour();
        delay = 300;
      } 
      setTimeout(type, delay);
  }

  applyColour();
  type();
});
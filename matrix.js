document.addEventListener('DOMContentLoaded', function() {
  // Matrix animation
  const canvas = document.getElementById("matrixCanvas");
  const ctx = canvas.getContext("2d");
  const canvasWidth = window.innerWidth;
  const canvasHeight = window.innerHeight;
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  const characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  const columns = Math.floor(canvasWidth / 20);
  const yPositions = [];
  for (let i = 0; i < columns; i++) {
      yPositions[i] = Math.random() * canvasHeight;
  }
  function updateMatrix() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      ctx.fillStyle = "green";
      ctx.font = "12px timesnewroman";
      for (let i = 0; i < columns; i++) {
          const character = characters[Math.floor(Math.random() * characters.length)];
          const y = yPositions[i];
          ctx.fillText(character, i * 20, y);
          yPositions[i] += 20;
          if (yPositions[i] > canvasHeight && Math.random() > 0.98) {
              yPositions[i] = 0;
          }
      }
  }
  function renderMatrix() {
      requestAnimationFrame(renderMatrix);
      updateMatrix();
  }
  renderMatrix();

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              const headerOffset = document.querySelector('header').offsetHeight;
              const elementPosition = targetElement.offsetTop;
              const offsetPosition = elementPosition - headerOffset + (window.innerHeight - targetElement.offsetHeight) / 2;
              window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
              });
          }
      });
  });

  // Hamburger Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');

  menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      navbar.classList.toggle('active');
  });
});

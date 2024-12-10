const dot = document.querySelector('.dot');

let dotX = 0; // Aktuelle X-Position des Punkts
let dotY = 0; // Aktuelle Y-Position des Punkts

let mouseX = 0; // Ziel-X-Position (Maus)
let mouseY = 0; // Ziel-Y-Position (Maus)

// Aktualisiert die Zielposition bei Mausbewegungen
document.body.addEventListener('mousemove', (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

// Funktion für sanfte Bewegung
function animate() {
  // Interpolation für sanfte Bewegung (0.1 = Geschwindigkeit)
  dotX += (mouseX - dotX) * 0.1;
  dotY += (mouseY - dotY) * 0.1;

  // Aktualisiere die Position des Punkts
  dot.style.left = `${dotX}px`;
  dot.style.top = `${dotY}px`;

  // Animation wiederholen
  requestAnimationFrame(animate);
}

// Starte die Animation
animate();

// video wegen speed
const video = document.getElementById('background-video');
video.playbackRate = 0.8;
// Configuração básica do particles.js
particlesJS('particles-js', {
  particles: {
    number: { value: 100 },
    color: { value: '#ffffff' },
    shape: { type: 'circle' },
    opacity: { value: 0.8 },
    size: { value: 2 },
    move: { enable: true, speed: 0.5 }
  }
});

// Planetas e suas curiosidades
const planets = [
  { name: "Mercúrio", info: "Planeta mais próximo do Sol e o menor do sistema solar." },
  { name: "Vênus", info: "Chamado de 'estrela d'alva', tem temperaturas altíssimas." },
  { name: "Terra", info: "Nosso lar, o único planeta conhecido com vida." },
  { name: "Marte", info: "Conhecido como planeta vermelho, pode ter abrigado água." },
  { name: "Júpiter", info: "Maior planeta do sistema solar, com uma grande mancha vermelha." },
  { name: "Saturno", info: "Famoso por seus belos anéis." },
  { name: "Urano", info: "Planeta que gira de lado e tem cor azul-esverdeada." },
  { name: "Netuno", info: "O mais distante do Sol, com ventos fortíssimos." }
];

let currentIndex = 0;
const infoBox = document.getElementById('infoBox');

function showPlanetInfo(index) {
  const planet = planets[index];
  infoBox.innerHTML = `<b>${planet.name}</b><br>${planet.info}`;
  infoBox.classList.remove('hidden');
}

// Ocultar infoBox após 5 segundos
function hideInfo() {
  infoBox.classList.add('hidden');
}

// Detecta a tecla espaço
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    showPlanetInfo(currentIndex);
    clearTimeout(window.hideTimeout);
    window.hideTimeout = setTimeout(hideInfo, 5000);
    currentIndex = (currentIndex + 1) % planets.length;
  }
});


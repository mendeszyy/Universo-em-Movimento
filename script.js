const universe = document.getElementById("universe");
const infoPanel = document.getElementById("info-panel");
const planetName = document.getElementById("planet-name");
const planetInfo = document.getElementById("planet-info");

// Dados dos planetas
const planets = [
  { name: "Mercúrio", color: "gray", size: 10, orbit: 100, speed: 0.02, info: "O menor planeta e o mais próximo do Sol." },
  { name: "Vênus", color: "goldenrod", size: 14, orbit: 150, speed: 0.015, info: "Conhecido como a estrela d’alva, tem atmosfera tóxica." },
  { name: "Terra", color: "deepskyblue", size: 16, orbit: 200, speed: 0.01, info: "Nosso lar, o único planeta conhecido com vida." },
  { name: "Marte", color: "orangered", size: 12, orbit: 250, speed: 0.008, info: "O planeta vermelho, possível destino de futuras colônias." },
  { name: "Júpiter", color: "peru", size: 30, orbit: 320, speed: 0.006, info: "O maior planeta do Sistema Solar, com a Grande Mancha Vermelha." },
  { name: "Saturno", color: "khaki", size: 26, orbit: 400, speed: 0.005, info: "Famoso por seus anéis compostos de gelo e rochas." },
  { name: "Urano", color: "lightseagreen", size: 20, orbit: 470, speed: 0.004, info: "Um gigante gelado que gira de lado em relação ao Sol." },
  { name: "Netuno", color: "royalblue", size: 20, orbit: 540, speed: 0.003, info: "O planeta mais distante, conhecido por seus ventos fortes." }
];

// Adicionar o Sol
const sun = document.createElement("div");
sun.className = "sun";
universe.appendChild(sun);

// Criar órbitas e planetas
planets.forEach(p => {
  const orbit = document.createElement("div");
  orbit.className = "orbit";
  orbit.style.width = `${p.orbit * 2}px`;
  orbit.style.height = `${p.orbit * 2}px`;
  universe.appendChild(orbit);

  const planet = document.createElement("div");
  planet.className = "planet";
  planet.style.width = `${p.size}px`;
  planet.style.height = `${p.size}px`;
  planet.style.background = p.color;
  orbit.appendChild(planet);

  p.element = planet;
  p.angle = Math.random() * Math.PI * 2;

  // Ao clicar, mostrar informações
  planet.addEventListener("mouseenter", () => {
    planetName.textContent = p.name;
    planetInfo.textContent = p.info;
    infoPanel.classList.add("visible");
  });
  planet.addEventListener("mouseleave", () => {
    infoPanel.classList.remove("visible");
  });
});

// Animação
function animate() {
  planets.forEach(p => {
    p.angle += p.speed;
    const x = p.orbit * Math.cos(p.angle);
    const y = p.orbit * Math.sin(p.angle);
    p.element.style.transform = `translate(${x}px, ${y}px)`;
  });
  requestAnimationFrame(animate);
}

animate();

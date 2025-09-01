const planets = [
  { name: "Mercúrio", color: "gray", size: 30, orbit: 80, info: "Planeta mais próximo do Sol e o menor do sistema solar." },
  { name: "Vênus", color: "goldenrod", size: 40, orbit: 120, info: "Chamado de 'estrela d'alva', tem temperaturas altíssimas." },
  { name: "Terra", color: "blue", size: 45, orbit: 170, info: "Nosso lar, o único planeta conhecido com vida." },
  { name: "Marte", color: "red", size: 35, orbit: 220, info: "Conhecido como planeta vermelho, pode ter abrigado água." },
  { name: "Júpiter", color: "orange", size: 70, orbit: 280, info: "Maior planeta do sistema solar, com uma grande mancha vermelha." },
  { name: "Saturno", color: "khaki", size: 60, orbit: 360, info: "Famoso por seus belos anéis." },
  { name: "Urano", color: "lightblue", size: 50, orbit: 430, info: "Planeta que gira de lado e tem cor azul-esverdeada." },
  { name: "Netuno", color: "darkblue", size: 50, orbit: 500, info: "O mais distante do Sol, com ventos fortíssimos." }
];

const universe = document.getElementById("universe");
const tooltip = document.createElement("div");
tooltip.classList.add("tooltip");
document.body.appendChild(tooltip);

planets.forEach((planet, i) => {
  const div = document.createElement("div");
  div.classList.add("planet");
  div.style.width = `${planet.size}px`;
  div.style.height = `${planet.size}px`;
  div.style.background = planet.color;

  let angle = 0;

  function animate() {
    angle += 0.01 + i * 0.001;
    const x = window.innerWidth / 2 + Math.cos(angle) * planet.orbit;
    const y = window.innerHeight / 2 + Math.sin(angle) * planet.orbit;
    div.style.left = `${x}px`;
    div.style.top = `${y}px`;
    requestAnimationFrame(animate);
  }

  animate();

  div.addEventListener("mouseenter", () => {
    tooltip.style.display = "block";
    tooltip.innerHTML = `<b>${planet.name}</b><br>${planet.info}`;
  });

  div.addEventListener("mousemove", (e) => {
    tooltip.style.left = e.pageX + 15 + "px";
    tooltip.style.top = e.pageY + 15 + "px";
  });

  div.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });

  universe.appendChild(div);
});

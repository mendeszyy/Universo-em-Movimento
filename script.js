const planets = [
  { 
    name: "Mercúrio", 
    color: "#a9a9a9", 
    size: 25, 
    orbit: 80, 
    speed: 0.04, 
    info: "O planeta mais veloz do Sistema Solar. Por estar tão próximo do Sol, completa uma volta em apenas 88 dias — como se os anos passassem num piscar de olhos." 
  },
  { 
    name: "Vênus", 
    color: "#d4af37", 
    size: 35, 
    orbit: 120, 
    speed: 0.03, 
    info: "Conhecido como a 'estrela d’alva', Vênus brilha intensamente no céu. Sob sua beleza, esconde um inferno: nuvens tóxicas e calor escaldante que ultrapassa 460°C." 
  },
  { 
    name: "Terra", 
    color: "#1e90ff", 
    size: 40, 
    orbit: 170, 
    speed: 0.02, 
    info: "A joia azul do Sistema Solar. Um mundo repleto de oceanos, florestas e vida. Até hoje, é o único planeta conhecido onde o universo se contempla a si mesmo." 
  },
  { 
    name: "Marte", 
    color: "#b22222", 
    size: 30, 
    orbit: 220, 
    speed: 0.018, 
    info: "O enigmático planeta vermelho. Seus desertos guardam sinais de rios antigos e mistérios que alimentam nossa curiosidade sobre vida além da Terra." 
  },
  { 
    name: "Júpiter", 
    color: "#ff8c00", 
    size: 70, 
    orbit: 300, 
    speed: 0.01, 
    info: "O gigante majestoso. Sua tempestade eterna, a Grande Mancha Vermelha, já dura séculos. Um planeta com tamanho para abrigar mais de mil Terras." 
  },
  { 
    name: "Saturno", 
    color: "#deb887", 
    size: 60, 
    orbit: 380, 
    speed: 0.008, 
    info: "O senhor dos anéis. Estruturas feitas de gelo e rocha que formam um espetáculo único no céu, encantando astrônomos desde a antiguidade." 
  },
  { 
    name: "Urano", 
    color: "#00ced1", 
    size: 50, 
    orbit: 450, 
    speed: 0.006, 
    info: "O planeta inclinado. Seu eixo gira quase de lado, criando estações extremas que duram mais de 20 anos cada." 
  },
  { 
    name: "Netuno", 
    color: "#191970", 
    size: 50, 
    orbit: 520, 
    speed: 0.005, 
    info: "O guardião distante do Sistema Solar. Azul profundo, misterioso, e com ventos que ultrapassam 2.000 km/h — os mais rápidos já registrados." 
  }
];

const universe = document.getElementById("universe");
const tooltip = document.createElement("div");
tooltip.classList.add("tooltip");
document.body.appendChild(tooltip);

planets.forEach((planet) => {
  const div = document.createElement("div");
  div.classList.add("planet");
  div.style.width = `${planet.size}px`;
  div.style.height = `${planet.size}px`;
  div.style.background = planet.color;

  let angle = Math.random() * Math.PI * 2;

  function animate() {
    angle += planet.speed;
    const x = window.innerWidth / 2 + Math.cos(angle) * planet.orbit;
    const y = window.innerHeight / 2 + Math.sin(angle) * planet.orbit;
    div.style.left = `${x}px`;
    div.style.top = `${y}px`;
    requestAnimationFrame(animate);
  }

  animate();

  div.addEventListener("mouseenter", () => {
    tooltip.style.display = "block";
    tooltip.innerHTML = `<strong>${planet.name}</strong><br>${planet.info}`;
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

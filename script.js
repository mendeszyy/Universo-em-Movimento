const planetas = document.querySelectorAll('.planeta');
const nomePlaneta = document.getElementById('nome-planeta');
const descricaoPlaneta = document.getElementById('descricao-planeta');

const infoPlanetas = {
    Mercúrio: "Mercúrio é o planeta mais próximo do Sol e o menor do Sistema Solar. Possui temperaturas extremas e uma superfície cheia de crateras.",
    Vênus: "Vênus é o planeta mais quente do Sistema Solar, com uma atmosfera densa de dióxido de carbono e nuvens de ácido sulfúrico. É conhecido como o planeta irmão da Terra.",
    Terra: "A Terra é o único planeta conhecido que abriga vida. Possui água em estado líquido, atmosfera rica em oxigênio e uma variedade de ecossistemas.",
    Marte: "Marte é conhecido como o planeta vermelho devido ao óxido de ferro em sua superfície. Tem calotas polares e evidências de água em forma de gelo.",
    Júpiter: "Júpiter é o maior planeta do Sistema Solar. Possui uma grande mancha vermelha, que é uma tempestade gigante, e dezenas de luas.",
    Saturno: "Saturno é famoso por seus impressionantes anéis compostos de gelo e rocha. É o segundo maior planeta e possui muitas luas, incluindo Titã.",
    Urano: "Urano é um planeta gasoso com coloração azul esverdeada devido ao metano em sua atmosfera. Ele gira de lado em relação ao Sol.",
    Netuno: "Netuno é o planeta mais distante do Sol no Sistema Solar. Possui ventos extremamente fortes e uma cor azul intensa, causada pelo metano."
};

planetas.forEach(planeta => {
    planeta.addEventListener('click', () => {
        // Remove escala de todos
        planetas.forEach(p => p.style.transform = "scale(1)");
        // Aumenta o planeta clicado
        planeta.style.transform = "scale(1.5)";
        // Atualiza informações
        const nome = planeta.getAttribute('data-nome');
        nomePlaneta.textContent = nome;
        descricaoPlaneta.textContent = infoPlanetas[nome];
    });
});

/* Fundo realista da galáxia */
body, html {
  margin: 0; padding: 0; height: 100%;
  overflow: hidden;
  font-family: Arial, sans-serif;
  color: white;
  background: url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1950&q=80') no-repeat center center fixed;
  background-size: cover;
}

#particles-js {
  position: fixed;
  width: 100%; height: 100%;
  z-index: 0;
}

.conteudo {
  position: relative;
  z-index: 10;
  text-align: center;
  margin-top: 2rem;
  font-weight: bold;
  text-shadow: 0 0 10px #000;
}

#infoBox {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,0.7);
  padding: 15px 25px;
  border-radius: 10px;
  font-size: 1.1rem;
  max-width: 400px;
  box-shadow: 0 0 15px #0ff;
  z-index: 10;
}

.hidden {
  display: none;
}

let palavra;

function setup() {
  createCanvas(900, 800);

  palavra = palavraAleatoria();
  
}

function palavraAleatoria() {
  
  let palavras = ["carro", "caminhonete", "Caminha"];
  
  return random(palavras);
}

function inicializaCores() {
  background("#9C27B0");
  fill("black");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  
  inicializaCores();

  let parcial = palavraParcial(0, width);
    
  text(parcial, 200, 200);
  
}

textSize(16);
fill(color('black'));
rect(150, 10, 40, 20);
fill(255);
text(meusPontos, 170, 26);
fill(color('black'));
rect(450, 10, 40, 20);
fill(255);
text(pontosDoOponente, 470, 26);



}


function marcaPonto() {
if (xBolinha > 580) {
meusPontos += 1;
}
if (xBolinha < 10) {
pontosDoOponente += 1;
}
}



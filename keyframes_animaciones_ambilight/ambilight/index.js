// Declaración de variables
const video = document.getElementById('video');
var canvas = document.getElementById("ambilight");
var contextoCanvas = canvas.getContext("2d");
// Declaramos el intervalo fuera del evento
// para luego poder acceder desde los otros eventos.
var intervalo;

// Evento que reinicia el video cada vez que se pulsa el play
// y asigna el video al canvas situado detrás estableciendo unas
// dimensiones mayores para que sobresalga por los laterales.
video.addEventListener('play', function () {
  video.currentTime = 0;
  intervalo = window.setInterval(function () {
    contextoCanvas.drawImage(video, 0, 0, 1160, 700);
  }, 10);
});
// Evento que elimina el intervalo al pausar el video
video.addEventListener('pause', function () {
  clearInterval(intervalo);
});
// Evento que elimina el intervalo al acabar el video
video.addEventListener('ended', function () {
  clearInterval(intervalo);
});


// Array de colores para probar el canvas en los laterales
// var colors1 = ["red","blue","green","yellow","purple"]
// Array de colores para probar el canvas en la parte superior e inferior
// var colors2 = ['red', 'blue', 'green', 'yellow', 'purple', "grey", "cyan", "pink"];

// var c1 = document.getElementById("ambilight-left");
// var ctx_c1 = c1.getContext("2d");
// for(i = 0; i<5; i++){
//   ctx_c1.beginPath();
//   ctx_c1.strokeStyle = colors1[i];
//   ctx_c1.lineWidth = 100;
//   moveToY = 72*i;
//   lineToY = 72*i+72;
//   ctx_c1.moveTo(100, moveToY);
//   ctx_c1.lineTo(100, lineToY);
//   ctx_c1.stroke();
// }

// var c2 = document.getElementById('ambilight-top');
// var ctx_c2 = c2.getContext('2d');
// for(i = 0; i<8; i++){
//   ctx_c2.beginPath();
//   ctx_c2.strokeStyle = colors2[i];
//   ctx_c2.lineWidth = 60;
//   moveToX = 80 * i;
//   lineToX = 80 * i + 80;
//   ctx_c2.moveTo(moveToX, 60);
//   ctx_c2.lineTo(lineToX, 60);
//   ctx_c2.stroke();
// }

// var c3 = document.getElementById('ambilight-right');
// var ctx_c3 = c3.getContext('2d');
// for (i = 0; i < 5; i++) {
//   ctx_c3.beginPath();
//   ctx_c3.strokeStyle = colors1[i];
//   ctx_c3.lineWidth = 100;
//   moveToY = 72 * i;
//   lineToY = 72 * i + 72;
//   ctx_c3.moveTo(0, moveToY);
//   ctx_c3.lineTo(0, lineToY);
//   ctx_c3.stroke();
// }

// var c4 = document.getElementById('ambilight-bottom');
// var ctx_c4 = c4.getContext('2d');
// for (i = 0; i < 8; i++) {
//   ctx_c4.beginPath();
//   ctx_c4.strokeStyle = colors2[i];
//   ctx_c4.lineWidth = 60;
//   moveToX = 80 * i;
//   lineToX = 80 * i + 80;
//   ctx_c4.moveTo(moveToX, 0);
//   ctx_c4.lineTo(lineToX, 0);
//   ctx_c4.stroke();
// }
// Variables
const video = document.getElementById('video');

// Parar o reproducir el vídeo
function playpause_video(){
  var imgPlayPause = document.getElementById("imgPlayPause");
  if(this.video.paused || this.video.ended){
    imgPlayPause.src = 'img/pause.png';
    this.video.play();
  }else if(!this.video.paused) {
    imgPlayPause.src = 'img/play.png';
    this.video.pause();
  }
}
// Detener el vídeo por completo
function stop_video(){
  var imgPlayPause = document.getElementById('imgPlayPause');
  imgPlayPause.classList.remove("paused");
  this.video.pause();
  this.video.currentTime = 0;
}
// Activar o desactivar el sonido
function mute_toggle(){
  var imgMuteUnmute = document.getElementById('imgMuteUnmute');
  if (this.video.volume != 0) {
    if (this.video.muted) {
      imgMuteUnmute.src = 'img/unmuted.png';
      this.video.muted = false;
    } else {
      imgMuteUnmute.src = 'img/mute.png';
      this.video.muted = true;
    }
  }
}
// Aumentar o disminuir el sonido
function volume_slider(value){
  var imgMuteUnmute = document.getElementById('imgMuteUnmute');
  this.video.volume = value / 100;
  if(this.video.volume === 0){
    imgMuteUnmute.src = 'img/mute.png';
  }else if(this.video.volume != 0){
    imgMuteUnmute.src = 'img/unmuted.png';
  }
}
// Retroceder 5s el video
function backward_video(){
  this.video.currentTime = this.video.currentTime-5;
}
// Avanzar 5s el video
function forward_video() {
  this.video.currentTime = this.video.currentTime + 5;
}
// Seleccionar el formato del video
function selected_format() {
  var format = document.getElementById('format');
  var imgPlayPause = document.getElementById('imgPlayPause');
  imgPlayPause.classList.remove('paused');
  if (format.value == 'webm'){
    this.video.poster = '';
    this.video.src = 'media/stars.webm';
    this.video.load();
  } else if (format.value == 'mp4'){
    this.video.poster = 'img/poster.jpg';
    this.video.src = 'media/video.mp4';
    this.video.load();
  }
}
// Poner video a pantalla completa
function fullscreen_video(){
  if (this.video.requestFullscreen) {
    this.video.requestFullscreen();
  } else if (this.video.webkitRequestFullscreen) {
    /* Safari */
    this.video.webkitRequestFullscreen();
  } else if (this.video.msRequestFullscreen) {
    /* IE11 */
    this.video.msRequestFullscreen();
  }
}
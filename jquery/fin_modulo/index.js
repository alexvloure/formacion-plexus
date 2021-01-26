$(function () {
  // MENU Y SUBMENUS
  $('.menu-item').on('mouseenter', function () {
    if ($(this).children().is(':hidden')) {
      $('.submenu1').slideUp('fast');
      $('.submenu2').slideUp('fast');
      $('.submenu3').slideUp('fast');
      $('.submenu4').slideUp('fast');
      $(this).children().slideDown('fast');
    } else {
      $(this).children('div').slideUp('fast');
    }
  });
  $('.menu-item').on('mouseleave', function () {
    $(this).children('div').slideUp('fast');
  });

  //HAMBURGUER MENU
  $('.hamburger img').on('click', function(){
    if($('.hamburger-links').css('display') == 'none'){
      $('.hamburger-links').slideDown();
      $('.hamburger img').attr('src', 'img/elements/close.png');
      $('.hamburger img').attr('size', '19');
    }else{
      $('.hamburger-links').slideUp();
      $('.hamburger img').attr('src', 'img/elements/hamburger.png');
      $('.hamburger img').attr('size', '20');
    }
  })

  // WALLPAPER SLIDE
  var wallpapers = ['w1.jpg','w2.jpg','w3.png','w4.jpg','w5.jpg','w6.jpg','w7.png','w8.jpg','w9.jpg','w10.jpg','w11.jpg','w12.jpg',];
  var title_wallpapers = ['Vaporwave sun 1','Mountain lake','Japanese text','Mountain landscape','Pink/Blue circle','Forest landscape','Vaporwave sun 2','Suspension bridge','Skyscrapper view','Mountain view','Beach sunset','City cartoon',];

  // NUMERO DE THUMBNAISL DEPENDIENDO DEL TAMAÑO DEL NAVEGADOR
  
  var medium = window.matchMedia('(max-width: 960px)');
  var small = window.matchMedia('(max-width: 460px)');
  var max;
  if (small.matches){
    max = 2;
  }else if (medium.matches) {
    max = 3;
  }else{
    max = 5;
  }
  for (i = 0; i < max; i++) {
    var newDivItem = document.createElement('div');
    var newImg = new Image();
    newImg.src = 'img/' + wallpapers[i];
    newImg.title = title_wallpapers[i];
    newImg.alt = title_wallpapers[i];
    newImg.height = 95;
    newDivItem.append(newImg);
    var div = $('.thumbnails-list');
    div.append(newDivItem);
  }

  // CARGAR BACKGROUND
  // CLASE SELECTED EN THUMBNAIL
  // AÑADIR FLECHAS CONTROL
  $('.welcome-message').on('click', function(){
    $('.background').attr('src', "img/w1.jpg");
    $('.thumbnails-list img[src="img/w1.jpg"]').addClass('selected');
    $('.container .left').show();
    $('.container .right').show();
    $('.welcome-message').hide();
    $('.thumbnails').show();
  });

  // MOUSE MOVE
  $('.thumbnails-list').on('mousemove', function (event) {
    console.log('X: ' + event.pageX + ', Y: ' + event.pageY);
  });

  // BACKWARD
  $('.left').on('click', function () {
    var actualBg = $('.background').attr('src');
    if (!actualBg.includes(wallpapers[0])) {
      for (i = 1; i < wallpapers.length; i++) {
        if (actualBg.includes(wallpapers[i])) {
          console.log(wallpapers[i - 1]);
          //Imagen original
          var oldImg = $('.background');
          //Creamos nuevo elemento img con la imagen nueva
          var img = new Image();
          img.src = 'img/' + wallpapers[i - 1];
          img.alt = title_wallpapers[i-1];
          img.classList.add('background');
          //Ocultamos la nueva imagen y la añadimos al div .img-container
          $(img).hide();
          $('.img-container').append(img);
          //Aplicamos un difuminado y eliminamos la imagen antigua
          oldImg.fadeOut(500, function () {
            oldImg.remove();
          });
          //Mostramos la nueva imagen
          $(img).fadeIn(500);
          //Eliminamos la clase select de todos los thumbnails
          $('.thumbnails-list img').removeClass('selected');

          // ACTUALIZAR THUMBNAILS
          var medium = window.matchMedia('(max-width: 960px)');
          var small = window.matchMedia('(max-width: 460px)');
          var max;
          if (small.matches) {
            max = 2;
          } else if (medium.matches) {
            max = 3;
          } else {
            max = 5;
          }

          if (i + 1 >= max) {
            $('.thumbnails-list div').remove();
            for (z = i + 1 - max; z <= i; z++) {
              var newDivItem = document.createElement('div');
              var newImg = new Image();
              newImg.src = 'img/' + wallpapers[z];
              newImg.title = title_wallpapers[z];
              newImg.alt = title_wallpapers[z];
              newImg.height = 95;
              newDivItem.append(newImg);
              var ul = $('.thumbnails-list');
              ul.append(newDivItem);
            }
          }

          $('.thumbnails-list img[src="img/' + wallpapers[i - 1] + '"]').addClass('selected');
        }
      }
    }
  });

  // FORWARD
  $('.right').on('click', function () {
    var actualBg = $('.background').attr('src');
    if (!actualBg.includes(wallpapers[wallpapers.length-1])) {
      for (i = 0; i < wallpapers.length-1; i++) {
        if (actualBg.includes(wallpapers[i])) {
          var oldImg = $('.background');
          var img = new Image();
          img.src = 'img/' + wallpapers[i + 1];
          img.alt = title_wallpapers[i + 1];
          img.classList.add('background');
          $(img).hide();
          $('.img-container').append(img);
          oldImg.fadeOut(500, function () {
            oldImg.remove();
          });
          $(img).fadeIn(500);
          $('.thumbnails-list img').removeClass('selected');

          // ACTUALIZAR THUMBNAILS
          var medium = window.matchMedia('(max-width: 960px)');
          var small = window.matchMedia('(max-width: 460px)');
          var max;
          if (small.matches) {
            max = 2;
          } else if (medium.matches) {
            max = 3;
          } else {
            max = 5;
          }

          if (i + 1 >= max) {
            $('.thumbnails-list div').remove();
            for (z = i + 2 - max; z <= i + 1; z++) {
              var newDivItem = document.createElement('div');
              var newImg = new Image();
              newImg.src = 'img/' + wallpapers[z];
              newImg.title = title_wallpapers[z];
              newImg.alt = title_wallpapers[z];
              newImg.height = 95;
              newDivItem.append(newImg);
              var ul = $('.thumbnails-list');
              ul.append(newDivItem);
            }
          }

          $('.thumbnails-list img[src="img/' + wallpapers[i + 1] + '"]').addClass('selected');
        }
      }
    }
  });

  $('.submenu1').hide();
  $('.submenu2').hide();
  $('.submenu3').hide();
  $('.submenu4').hide();
});

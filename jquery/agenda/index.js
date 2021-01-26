$(function() {
   var tareas = [
     'Hacer la compra',
     'Cambiar aceite moto',
     'Cortar el cesped',
     'Estudiar',
     'Pagar recibos',
     'Enviar paquete',
   ];
   
   var ul = document.createElement('ul');
   $('.container').append(ul);
   for(i=0; i<tareas.length; i++){
    $('ul').append('<li>' + tareas[i] + '</li>');
   }

  $('.container ul').sortable();
  $('.container ul').disableSelection();

});
$(function() {
  $('.element-img').draggable({
    appendTo: 'body',
    helper: 'clone',
  });

  $('.sections').droppable({
    activeClass: 'dropZone',
    hoverClass: 'dropZoneHover',
    drop: function(event,ui){
      $(this).find('ul').append(ui.draggable);
    }
  });

  $('.elements').droppable({
    activeClass: 'dropZone',
    hoverClass: 'dropZoneHover',
    drop: function (event, ui) {
      $(this).append(ui.draggable);
    },
  });
});
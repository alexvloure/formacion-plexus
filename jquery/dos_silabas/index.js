$(function() {
  var s2 = ["la","to","tón","ble","be"];
  var s1 = ["ga-","ho-","ra-","nu-","ca-"];

  var container = $('.container');
  for(i=0; i<s2.length; i++){
    container.append('<span class="container-syllabe">'+s2[i]+'</span>')
  }
  var container2 = $('.container2');
  for(z=0; z<s1.length; z++){
    container2.append('<div class="drop">'+s1[z]+'</div><br></br>');
  }

  $('.container-syllabe').draggable({
    appendTo: 'body',
    helper: 'clone',
  });

  $('.drop').droppable({
    activeClass: 'dropZone',
    hoverClass: 'dropZoneHover',
    drop: function (event, ui) {
      console.log($(this).contents());
      $(this).append(ui.draggable);
    },
  });
});
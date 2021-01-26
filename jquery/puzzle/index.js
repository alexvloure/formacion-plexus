$(function() {
  $('.container').sortable();
  $('.container').disableSelection();

  $('.bike-img').mouseup(function(){
    var timerID;
    clearTimeout(timerID);
    timerID = setTimeout(function(){
      var imgIDs = $('.container').sortable('toArray');
      console.log(imgIDs);
      if (
        imgIDs[0] == 'i1' &&
        imgIDs[1] == 'i2' &&
        imgIDs[2] == 'i3' &&
        imgIDs[3] == 'i4' &&
        imgIDs[4] == 'i5' &&
        imgIDs[5] == 'i6' &&
        imgIDs[6] == 'i7' &&
        imgIDs[7] == 'i8' &&
        imgIDs[8] == 'i9'
      ) {
        alert("Congratulations! You've completed the Motorbike puzzle :D");
      }
    }, 50);
  });
});
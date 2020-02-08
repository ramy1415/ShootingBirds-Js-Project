$(function () {
  //ramy
  $("#tabs").tabs();
  function hexFromRGB(r, g, b) {
    var hex = [
      r.toString(16),
      g.toString(16),
      b.toString(16)
    ];
    $.each(hex, function (nr, val) {
      if (val.length === 1) {
        hex[nr] = "0" + val;
      }
    });
    return hex.join("").toUpperCase();
  }
  function refreshSwatch() {
    //getting difficulty value
    difficulty = $("#red").slider("value")      
    //changing difficulty bar color                                          
    hex = hexFromRGB(difficulty, 90, 0);
    $("#red .ui-slider-range").css("background-color", "#" + hex);
    //changing difficulty image
    if (difficulty < 64) {
      $("#swatch").css({ 'background-image': 'url("images/1.jpg")' })
    }
    else if (difficulty > 64 && difficulty < 128) {
      $("#swatch").css({ 'background-image': 'url("images/2.jpg")' })
    }
    else if (difficulty > 128 && difficulty < 192) {
      $("#swatch").css({ 'background-image': 'url("images/3.jpg")' })
    }
    else {
      $("#swatch").css({ 'background-image': 'url("images/4.jpg")' })
    }
  }
  $("#red").slider({
    orientation: "horizontal",
    range: "min",
    max: 255,
    value: 127,
    slide: refreshSwatch,
    change: refreshSwatch
  });
  $("#red").slider("value", 50);

  //SoundButton Changing background to on or off
  $("#soundwatch").on('click', function () {
    $(this).toggleClass('soundOn')
    $(this).toggleClass('soundOff')
  })
  //Play button getting name
  $('input[value="Play"]').on('click',function(){
    sessionStorage.setItem("name",$(':text').val())
    sessionStorage.setItem("difficulty",$("#red").slider("value"))
    location.replace("game.html")
  })
  //crosshair button getting crosshair
  $('input[type="image"]').on('click',function(){  
    $('input[type="image"]').removeClass('addBorder')
    $(this).addClass('addBorder')
    crosshair=$(this).attr('src')
  })
});
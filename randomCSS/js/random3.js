// AS SOON AS THE PAGE IS LOADED, RUN THIS JQUERY;
$( document ).ready(function() {

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  var hue = 'rgb('

  + getRandomInt(100, 255) + ','
  + getRandomInt(230, 255) + ','
  + getRandomInt(100, 255) + ')';

  $('.sec1').css("background-color",hue);

});

window.Hammer = require('../../node_modules/hammerjs/hammer');
$(document).ready(function() {
  $('.carousel.carousel-slider').carousel({ fullWidth: true });
  $('.button-collapse').sideNav();
  $('.modal').modal();
  $('select').material_select();
});

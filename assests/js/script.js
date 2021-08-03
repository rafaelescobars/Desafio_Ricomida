//Document Ready
$(document).ready(function(){
  $('#click1').on('click', function(){
      $('#toggle1').toggle();
  });
  $('#click2').on('click', function(){
      $('#toggle2').toggle();
  });
  $('#click3').on('click', function(){
    $('#toggle3').toggle();
  });
  $('.ingredientes').on('dblclick', function(){
    $('.ingredientes').css('color','red');
  });
  $('.preparacion').on('dblclick', function(){
    $('.preparacion').css('color','red');
  });
  $('#enviarCorreo').on('click', function(){
    alert('El correo fue enviado correctamente...')
  });
});

//Popover botones Header
 var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
 var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
   return new bootstrap.Popover(popoverTriggerEl)
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


//console.log("funciona"); //FUNCIONA EL LINK DE MAIN.JS



$(document).ready(function(){
    //alert("FUNCIONA"); //FUNCIONA LA LIGA DE JQUERY
    $(window).scroll(function fix_element() {
        $('#navPrincipal').css(
          $(window).scrollTop() > 40
            ? { 'position': 'fixed', 'top': '0px' }
            : { 'position': 'relative', 'top': 'auto' }
        );
        return fix_element;
      }());
});

//MODAL JQUERY CODE
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
// Mostrar y ocultar menú fijo
$(document).ready(function(){
    var fixedHeader = $('#fixedHeader');

    $(window).on('scroll', function(){
        var proyectosOffsetTop = $('#proyectos').offset().top;
        
        if($(window).scrollTop() >= proyectosOffsetTop){
            fixedHeader.css('margin-top', 0);
        }else if ($(window).scrollTop() <= proyectosOffsetTop/2){
            fixedHeader.css('margin-top', '-68px')
        }
    })
});

// Botón volver al incio
$(document).ready(function() {
    var btnVolverArriba = $('#btnVolverArriba');
  
    $(window).on('scroll', function () {
      var proyectosOffsetTop = $('#proyectos').offset().top;
  
      if ($(window).scrollTop() >= proyectosOffsetTop) {
        btnVolverArriba.css('margin-right', 0);
      }else if ($(window).scrollTop() <= proyectosOffsetTop/2) {
        btnVolverArriba.css('margin-right', '-60px');
      }
  
    })

        $('a.volver-arriba').on('click', function (e) {
        e.preventDefault();
        if ($(window).scrollTop() != 0) {
        $('html, body').animate({scrollTop: 0}, 1000);
        }
        })
  
        });
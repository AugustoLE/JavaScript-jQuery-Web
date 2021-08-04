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
  
    });
// Volver arriba, clic
  $('a.volver-arriba').on('click', function (e) {
    e.preventDefault();
      if ($(window).scrollTop() != 0) {
      $('html, body').stop().animate({scrollTop: 0}, 1000);
      }
      })
  
    });

// Los demás ítems de la página
  $('a.scroll-suave').on('click', function (e){
    var seccionOffSetTop = $($(this).attr('href')).offset().top;
    e.preventDefault();
    $('html, body').stop().animate({scrollTop: seccionOffSetTop}, 1000);
});

// AcercaDe
$('a.scroll-acercaDe').on('click', function (e){
  var seccionOffSetTop = $($(this).attr('href')).offset().top - 122;
  e.preventDefault();
  $('html, body').stop().animate({scrollTop: seccionOffSetTop}, 1000);
});

// Equipo
$('a.scroll-equipo').on('click', function (e){
  var seccionOffSetTop = $($(this).attr('href')).offset().top - 122;
  e.preventDefault();
  $('html, body').stop().animate({scrollTop: seccionOffSetTop}, 1000);
});

// Modal
$(document).ready(function () {
  $('.imagen-proyecto').on('click', function () {
    var rutaImagen = $(this).attr('src');
    var modal = '<div class="modal" id="modal"><img src="'+ rutaImagen  +'" alt=""><div class="btn-cerrar" id="btnCerrar"><i class="fa fa-times" aria-hidden="true"></i></div></div>';
    $('#proyectos').after(modal);
    $('#btnCerrar').on('click', function () {
      $('#modal').remove();
    })
  })

  $(document).on('keyup', function (e) {
    if (e.which==27) {
      $('#modal').remove();
    }
  })

});

// Slider
$(document).ready(function () {
  var slider = $('#slider');
  var btnAnterior = $('#btnAnterior');
  var btnSiguiente = $('#btnSiguiente');
  // El último slide pasa al primer lugar
  $('#slider .slide:last').insertBefore('#slider .slide:first');
  // El margen negativo se vuelve a mostrar como el primer slide
  slider.css('margin-left', '-43%');
  // Mover hacia la derecha
  function moverDerecha() {
    if (!slider.is(':animated')) {
      slider.animate({
        marginLeft: '-95.5%'
      }, 700, function () {
        $('#slider .slide:first').insertAfter('#slider .slide:last');
        slider.css('margin-left', '-43%');
        resetInterval();
      });
    }

  }

  btnSiguiente.on('click', moverDerecha);
  // Hacia la izquierda
  function moverIzquierda() {
    if (!slider.is(':animated')) {
      $('#slider .slide:last').insertBefore('#slider .slide:first');
      slider.css('margin-left', '-95.5%');
      slider.animate({
        marginLeft: '-43%'
      }, 700, function () {
        resetInterval()
      });
    }

  }

  btnAnterior.on('click', moverIzquierda);
  // Movimiento automatico
  var intervalo = setInterval(moverDerecha, 5000);
    function resetInterval(){
      clearInterval(intervalo);
      intervalo = setInterval(moverDerecha, 5000);
  }

});


// Formulario
$(document).ready(function () {

  var formulario = $('#formulario');
  var nombre = $('#nombre');
  var email = $('#email');
  var mensaje = $('#mensaje');

  function valNombre(e) {

    if (nombre.val() == '' || nombre.val() == null) {
      swal ( "Oops" ,  "Por favor, verifica los datos del formulario" ,  "error" )
      e.preventDefault();
      $('input[type="text"] + .error').css('display', 'block');
    } else {
      $('input[type="text"] + .error').css('display', 'none');
    }

  }

  function valEmail(e) {

    if (email.val() == '' || email.val() == null) {
      swal ( "Oops" ,  "Por favor, verifica los datos del formulario" ,  "error" )
      e.preventDefault();
      $('input[type="email"] + .error').css('display', 'block');
    } else {
      $('input[type="email"] + .error').css('display', 'none');
    }

  }

  function valMensaje(e) {

    if (mensaje.val() == '' || mensaje.val() == null) {
      swal ( "Oops" ,  "Por favor, verifica los datos del formulario" ,  "error" )
      e.preventDefault();
      $('textarea + .error').css('display', 'block');
    } else {
      $('textarea + .error').css('display', 'none');
    }

  }

  function validacion(e) {
    valNombre(e);
    valEmail(e);
    valMensaje(e);
  }

  formulario.on('submit', validacion);

})

// Menú Mobil
$(document).ready(function () {

  var numero = 1;

  $('#btnMenu').on('click', function (e) {

    e.preventDefault();
    if (numero == 1) {
      $('.menu-mobile .menu-principal').animate({left:0}, 300, function () {
        numero = 0;
      });
    } else {
      $('.menu-mobile .menu-principal').animate({left:'-100%'}, 300, function () {
        numero = 1;
      })
    }

  })

  $('.menu-mobile .menu-principal a').on('click', function () {

    $('.menu-mobile .menu-principal').animate({left:'-100%'}, 300, function () {
      numero = 1;
    })

  })

});


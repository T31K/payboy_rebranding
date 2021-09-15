$('body').scroll(function() {
  var scroll = $('body').scrollTop();
  var height = $('section:first-of-type').height()

  if (scroll > height) {
    $('.log_in').addClass('shake')
    $('#log_in').text('GET STARTED')
    $('#log_in').prop('href', '/register')
  } else {
    if ($('.log_in').hasClass('shake')) {
      $('.log_in').removeClass('shake')
      $('#log_in').text('LOG IN')
      $('#log_in').prop('href', '/login')
    }
  }
})

$('.news-slider').slick({
  autoWidth:false,
  dots: false,
  arrows: true,
  items: 1,
})

$('.owl-carousel').owlCarousel({
  // please dont change this class name lol
  autoWidth:false,
  dots: false,
  loop: true,
  navText : false,
  responsive:{
      0:{
          items:1,
          nav:true,
          loop: true,

      },
      600:{
          items:1,
          nav:false,
          loop: true,
      },
      1024:{
          items:1,
          nav:true,
          loop:false,
          loop: true,
      }
  }
})

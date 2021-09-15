$('#hamburger').click(function() {
  $('div.title_text').toggle()
  $('#overlay').toggleClass('open')
  $('body').toggleClass('stop-scroll')
  $('#nav .nav_logo').toggleClass('open')
  $('#nav').toggleClass('open')
  $('#nav a').toggleClass('open')
  $("#nav #nav_bottom").toggleClass('overlay_open')
})

    $('#nav #nav_top a').mouseenter(function() {
      if ($(this).attr('id') === 'solutions') {
        let isOverlayOpen = $('#overlay').hasClass('open')
        if ($('#nav #nav_top').width() > 886 && !isOverlayOpen) {
          $('#nav #nav_bottom .nav-content a').addClass('enlarge')
          $('#nav #nav_bottom').addClass('open')
        }
      } else {
        $('#nav #nav_top a').removeClass('active')
        $('#nav #nav_bottom').removeClass('open')
        setTimeout(function(){
          $('#nav #nav_bottom .nav-content a').removeClass('enlarge')
        }, 300)
      }
    })



$('#nav').mouseleave(function() {
  $('#nav #nav_top a').removeClass('active')
  $('#nav #nav_bottom').removeClass('open')
  $('#nav #nav_bottom .nav-content a').removeClass('enlarge')
})


 $('document').ready(function () {
    var trigger = $('#hamburger'),
        isClosed = true;

    trigger.click(function () {
      burgerTime();
    });

    function burgerTime() {
      if (isClosed == true) {
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;

      } else {
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
    }

  });

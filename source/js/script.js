$( document ).ready(function() { 

// open and close menu
$( ".header__menuOpenBtn").on('tap', function() {
  $('.header__menuOpenBtn span').toggleClass('active');
  $( '.header__menu--open' ).toggleClass('js-topMenu');
});

$(window).resize(function() {
  if (($(window).width()) >= 667) {
    $( '.header__menu--open' ).removeClass('js-topMenu');
    $( '.header__menuOpenBtn span' ).removeClass('active');
  }
})

// scroll to sections         
$('.js-slideToSection').on('click', function(e){
  e.preventDefault();

  var id = $(this).attr('href'), // #map
    $block = $(id);

  if ($block.length !== 0) {
    var header = $('.header').height(),
        offset = parseInt($block.offset().top - header, 10);

    $('html, body').animate({
          scrollTop: offset
    }, 1000);
  }
});


// buttons counter
var jsCounterBtn = document.querySelectorAll('.js-counterBtn');

  for (var i = 0; i < jsCounterBtn.length; i++) {       
    jsCounterBtn[i].addEventListener('click', function(){
      var action = this.dataset.action,
        parent = this.parentNode,
          counter = parent.querySelector('.js-counter');

  if (action == 'minus' && counter.value > counter.min) {
    counter.value--;
      } else if (action == 'plus') {
        counter.value++;
      }
  });
}

// google maps
  function initialize() {

    var mapProp = {
      center:new google.maps.LatLng(34.860751,-111.801868),
      zoom:8,
      zoomControl: false,
      scaleControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("map"),mapProp);
  }
  google.maps.event.addDomListener(window, 'load', initialize);

});
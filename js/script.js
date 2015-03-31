// open and close menu

$( ".header__menuOpenBtn").on('tap', function() {
  $( 'nav' ).show();
});

$( ".header__menuCloseBtn").on('tap', function() {
  $( 'nav' ).hide();
});


// scroll to sections 
$("[href=#map]").click(function() {
    $('html, body').animate({
        scrollTop: $(".sedona-map").offset().top
    }, 1000);

});

$("[href=#info]").click(function() {
    $('html, body').animate({
        scrollTop: $(".contentHeader").offset().top
    }, 1000);

});

$("[href=#photo]").click(function() {
    $('html, body').animate({
        scrollTop: $(".sedonaBridge").offset().top
    }, 1000);

});

$("[href=#hotels]").click(function() {
    $('html, body').animate({
        scrollTop: $(".sedonaHotels").offset().top
    }, 1000);

});


// buttons counter

(function() {

var
  form = document.querySelector('.sedonaHotels__book'),
  adults = document.querySelector('.form__inputField--left'),
  children = document.querySelector('.form__inputField--right'),
  plus = document.querySelectorAll('.form__counterBtn--plus'),
  minus = document.querySelectorAll('.form__counterBtn--minus'),
  counter = document.querySelectorAll('.counter-input');

  plus[0].addEventListener("click", function() {
    adults.value++;
  });

  plus[1].addEventListener("click", function() {
    children.value++;
  });

  minus[0].addEventListener("click", function() {
    if (adults.value > 1)
    adults.value--;
  });

  minus[1].addEventListener("click", function() {
    if (children.value > 0)
    children.value--;
  });

})();
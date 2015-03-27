// open and close menu

$( ".header__menuOpenBtn").click(function() {
  $( 'nav' ).show();
});

$( ".header__menuCloseBtn").click(function() {
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
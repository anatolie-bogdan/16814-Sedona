(function() {

var
  form = document.querySelector('.response'),
  travelTime = document.querySelector('.travel-time'),
  adults = document.querySelector('.people-count'),
  children = document.querySelector('.children-count'),
  plus = document.querySelectorAll('.minus'),
  minus = document.querySelectorAll('.plus'),
  counter = document.querySelectorAll('.counter-input');

  plus[0].addEventListener("click", function() {
    travelTime.value++;
  });

  plus[1].addEventListener("click", function() {
    adults.value++;
  });

  plus[2].addEventListener("click", function() {
    children.value++;
  });


  minus[0].addEventListener("click", function() {
    if (counter[0].value > 1)
    travelTime.value--;
  });

  minus[1].addEventListener("click", function() {
    if (counter[1].value > 1)
    adults.value--;
  });

  minus[2].addEventListener("click", function() {
    if (counter[2].value > 1)
    children.value--;
  });

})();
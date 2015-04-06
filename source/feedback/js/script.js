(function() {

var
  form = document.querySelector('.response'),
  travelTime = document.querySelector('.travel-time'),
  adults = document.querySelector('.people-count'),
  children = document.querySelector('.children-count'),
  plus = document.querySelectorAll('.minus'),
  minus = document.querySelectorAll('.plus'),
  counter = document.querySelectorAll('.counter-input'),
  addFormAdults = '<div class="row jrowAdults"><div class="col s-4"><label for="text8">Фамилия взрослого №1: <span>*</span></label><input type="text" id="text8"></div><div class="col s-4"><label for="text9">Имя взрослого №1: <span>*</span></label><input type="text" id="text9"></div><div class="col s-4"><label for="text10">Отчество взрослого №1</label><input type="text" id="text10"></div></div>';
  addFormChildren = '<div class="row jrowChildren"><div class="col s-4"><label for="text14">Фамилия ребенка №1: <span>*</span></label><input type="text" id="text14"></div><div class="col s-4"><label for="text15">Имя ребенка №1: <span>*</span></label><input type="text" id="text15"></div><div class="col s-4"><label for="text16">Отчество ребенка №1</label><input type="text" id="text16"></div></div>'

  plus[0].addEventListener("click", function() {
    travelTime.value++;
  });

  plus[1].addEventListener("click", function() {
    adults.value++;
    $( ".step2" ).append( addFormAdults );

  });

  plus[2].addEventListener("click", function() {
    children.value++;
    $( ".step2" ).append( addFormChildren );    
  });


  minus[0].addEventListener("click", function() {
    if (counter[0].value > 1)
    travelTime.value--;
  });

  minus[1].addEventListener("click", function() {
    if (counter[1].value > 1)
    adults.value--;
    $( ".jrowAdults" ).last().remove();
  });

  minus[2].addEventListener("click", function() {
    if (counter[2].value > 1)
    children.value--;
  $( ".jrowChildren" ).last().remove();
  });

})();
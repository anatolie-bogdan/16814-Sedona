!function ($) {

    $(document).ready(function () {
        
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

        // $('.js-counterBtn').on('click', function(e){
        //     e.preventDefault();

        //     var action = $(this).data('action'),
        //         $parent = $(this).parent(),
        //         $counter = $parent.find('.js-counter');

        //     if ($counter) {
        //         var value = parseInt($counter.val(), 10);
                
        //         value = isNaN(value) ? 0 : value;

        //         if (action == 'minus' && value > $counter.attr('min')) {
        //             $counter.val(--value);
        //         } else if (action == 'plus') {
        //             $counter.val(++value);
        //         }
        //     }
        // });

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

    });

}(window.jQuery);

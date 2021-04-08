$('document').ready(function () {
    $('#main_table_countries_today').DataTable();

    /* Scroll To Top ============ */
    var scrollTop = function () {
        'use strict';
        var scrollTop = $("button.scroltop");
        /* page scroll top on click function */
        scrollTop.on('click', function () {
            $("html, body").animate({
                scrollTop: 0
            }, 500);
            return false;
        })

        $(window).bind("scroll", function () {
            var scroll = $(window).scrollTop();
            if (scroll > 900) {
                $("button.scroltop").fadeIn(1000);
            } else {
                $("button.scroltop").fadeOut(1000);
            }
        });
        /* page scroll top on click function end*/
    }
    scrollTop()
})
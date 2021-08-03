(function($) {
    "use strict";

    // sticky

    $(window).on("scroll", function() {
        var scroll = $(window).scrollTop();
        if (scroll < 150) {
            $(".header-main-area").removeClass("scroll-header");
        } else {
            $(".header-main-area").addClass("scroll-header");
        }
    });
    // $(document).ready(function() {
    //     $(".hero-slider").owlCarousel({
    //         items: 1,
    //         dots: true,
    //         loop: true,
    //     });
    // });
    $(document).ready(function() {
        // $('.news-wrap').owlCarousel({
        //     loop: true,
        //     margin: 10,
        //     responsiveClass: true,
        //     responsive: {
        //         0: {
        //             items: 2,
        //             nav: false
        //         },
        //         600: {
        //             items: 2,
        //             nav: false
        //         },
        //         1000: {
        //             items: 3,
        //             nav: true,
        //             loop: false
        //         }
        //     }
        // })
        $('.slider-f-single-area').owlCarousel({
            loop: true,
            // margin: 0,
            responsiveClass: true,
            items: 2,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 2,
                    nav: true,
                    loop: false
                }
            }
        })
    });
    $(".mobile-search-show").click(function() {
        $(".mobile-search-box-area").show("slow");
    });
    $(".mobile-search-box-area-close").click(function() {
        $(".mobile-search-box-area").hide("slow");
    });
    $("#mobile-btn-show").click(function() {
        $("#mobil-header").slideToggle("slow");
    });
    $(".mobile-search-box-area-close").click(function() {
        $("#mobil-header").hide("slow");
    });
})(jQuery);
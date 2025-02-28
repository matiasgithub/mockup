(function ($) {
    $(document).ready(function () {

        // Desplazamiento suave para los enlaces de la barra de navegación
        $('.navbar a').on('click', function (event) {
            event.preventDefault(); // Prevenir el comportamiento por defecto
            var target = $(this).attr('href'); // Obtener el destino del enlace
            var offset = $(target).offset().top - $('.navbar').height(); // Ajustar para barra fija

            // Realizar el desplazamiento suave
            $('html, body').animate({
                scrollTop: offset
            }, 800, 'easeInOutExpo');
        });

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });

        $('.scrollup').click(function () {
            $("html, body").animate({ scrollTop: 0 }, 1000);
            return false;
        });

        // (Eliminamos localScroll y reemplazamos con el desplazamiento suave)

        // portfolio
        if ($('.isotopeWrapper').length) {

            var $container = $('.isotopeWrapper');
            var $resize = $('.isotopeWrapper').attr('id');

            // initialize isotope
            $container.isotope({
                itemSelector: '.isotopeItem',
                resizable: false, // disable normal resizing
                masonry: {
                    columnWidth: $container.width() / $resize
                }
            });

            $('#filter a').click(function () {
                $('#filter a').removeClass('current');
                $(this).addClass('current');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 1000,
                        easing: 'easeOutQuart',
                        queue: false
                    }
                });
                return false;
            });

            $(window).smartresize(function () {
                $container.isotope({
                    masonry: {
                        columnWidth: $container.width() / $resize
                    }
                });
            });

        }

        // fancybox
        jQuery(".fancybox").fancybox();

        if (Modernizr.mq("screen and (max-width:1024px)")) {
            jQuery("body").toggleClass("body");

        } else {
            var s = skrollr.init({
                mobileDeceleration: 1,
                edgeStrategy: 'set',
                forceHeight: true,
                smoothScrolling: true,
                smoothScrollingDuration: 300,
                easing: {
                    WTF: Math.random,
                    inverted: function (p) {
                        return 1 - p;
                    }
                }
            });
        }

        //scroll menu
        jQuery('.appear').appear();
        jQuery(".appear").on("appear", function (data) {
            var id = $(this).attr("id");
            jQuery('.nav li').removeClass('active');
            jQuery(".nav a[href='#" + id + "']").parent().addClass("active");
        });

        //parallax
        var isMobile = false;

        if (Modernizr.mq('only all and (max-width: 1024px)')) {
            isMobile = true;
        }

        if (isMobile == false && ($('#parallax1').length || isMobile == false && $('#parallax2').length || isMobile == false && $('#testimonials').length)) {
            $(window).stellar({
                responsive: true,
                scrollProperty: 'scroll',
                parallaxElements: false,
                horizontalScrolling: false,
                horizontalOffset: 0,
                verticalOffset: 0
            });
        }

    });
})(jQuery);

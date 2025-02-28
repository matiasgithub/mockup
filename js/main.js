(function ($) {
    $(document).ready(function () {

        // ... (Código previo que no cambia)

        $(window).scroll(function () {
            var scrollTop = $(this).scrollTop();
            
            // Ajustamos el tamaño del header y el logo según el scroll
            if (scrollTop > 100) {
                // Cambiar el tamaño del header (disminuir)
                $('.navbar').css('height', '60px');
                $('.navbar').css('line-height', '60px');

                // Reducir el tamaño del logo
                $('.logo-left').css('width', '100px');
                $('.logo-left').css('height', '60px');

                // Cambiar el color de fondo del header a negro
                $('.navbar').css('background-color', 'rgba(0,0,0,1)');
            } else {
                // Restaurar el tamaño original del header
                $('.navbar').css('height', '100px');
                $('.navbar').css('line-height', '100px');

                // Restaurar el tamaño original del logo
                $('.logo-left').css('width', '130px');
                $('.logo-left').css('height', '80px');

                // Restaurar el color de fondo del header a transparente o gris claro
                $('.navbar').css('background-color', 'rgba(0,0,0,0.3)');
            }
        });

        // ... (Resto del código)
    });
})(jQuery);

// Espera que el documento esté listo
$(document).ready(function () {

    // Manejador para el envío del formulario
    $('#contact-form').submit(function (event) {
        event.preventDefault(); // Evita el comportamiento por defecto (recarga de la página)

        // Obtén los valores del formulario
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        // Validación de campos
        if (name === '' || email === '' || message === '') {
            alert("Por favor, complete todos los campos.");
            return;
        }

        // Crea un objeto con los datos del formulario
        var formData = {
            'name': name,
            'email': email,
            'message': message
        };

        // Realiza la solicitud AJAX para enviar el formulario
        $.ajax({
            type: 'POST',
            url: 'process_form.php', // Asegúrate de que este archivo PHP esté correctamente configurado para procesar el formulario
            data: formData,
            success: function (response) {
                // Cuando el formulario se haya enviado correctamente
                $('#form-message').html('<p>¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.</p>');
                $('#contact-form')[0].reset(); // Reinicia el formulario
            },
            error: function (xhr, status, error) {
                // Si ocurre un error durante el envío
                $('#form-message').html('<p>Lo siento, ha ocurrido un error. Por favor, intente de nuevo más tarde.</p>');
            }
        });
    });
});

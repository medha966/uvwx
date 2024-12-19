$(document).ready(function() {
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault();

        $.ajax({
            url: 'process.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                $('#response').html(response).fadeIn();
            },
            error: function() {
                $('#response').html('An error occurred. Please try again.').fadeIn();
            }
        });
    });
});

$(document).ready(function() {
    $('#dropdownMenuButton').click(function() {
        $(this).toggleClass('rotate-down');
    });

    $('#dropdownMenu').on('hidden.bs.dropdown', function() {
        $('#dropdownMenuButton').removeClass('rotate-down');
    });

    $('#telefone').mask('(00) 00000-0000')


    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            }
        }
    })
});
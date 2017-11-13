$(function () {

    $('button').bind('click', function(){
        var altura = $('#altura').val();
        var peso = $('#peso').val();

        imc = peso / (altura*altura);
        $('#resultado').html(imc);
    })
   
});
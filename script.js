$(function () {

    $('button').bind('click', function(){
        var altura = $('#altura').val();
        var peso = $('#peso').val();

        altura = altura.replace(',', '.');
        peso = peso.replace(',', '.');

        imc = peso / (altura*altura);

        if(imc < 16){ 
            var traducao = ' baixo peso muito grave';
        } else if (imc >= 16 && imc < 16.99) {
            var traducao = 'baixo peso grave';
        } else if (imc >= 17 && imc < 18.99) {
            var traducao = 'baixo peso';
        } else if (imc >= 18.50 && imc < 24.99){
            var traducao = 'peso normal';
        } else if (imc >= 25 && imc < 29.99){
            var traducao = 'sobrepeso';
        } else if (imc >= 30 && imc < 34,99){
            var traducao = 'obesidade grau 1';
        } else if (imc >= 35 && imc < 39,99){
            var traducao = 'obesidade grau 2';
        } else if (imc >= 40){
            var traducao = 'obesidade grau 3';
        }
        
        $('#resultado').html('Seu IMC '+imc.toFixed(2)+' e seu status: '+traducao);
    })
   
});
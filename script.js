$(function () {

    $('button').click(function(){
        if($(this).hasClass('fundovermelho')){
            $(this).removeClass('fundovermelho')
        } else {
            $(this).addClass('fundovermelho')
        }
    })

});
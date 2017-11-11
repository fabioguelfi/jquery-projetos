$(function () {

    $('button').mouseover(function(){
        $(this).addClass('fundovermelho')
    })

    $('button').mouseout(function(){
        $(this).removeClass('fundovermelho')
    })
});
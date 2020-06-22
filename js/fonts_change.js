$(document).ready(function(){
  
    // Donde queremos cambiar el tamaño de la fuente
    var donde = $('body');
    var sizeFuenteOriginal = donde.css('font-size');

    // Resetear Font Size
    $(".resetearFont").click(function(){
        donde.css('font-size', sizeFuenteOriginal);
    });
    // Aumentar Font Size
    $(".accebility-bar-aumentarFont").click(function(){
        var sizeFuenteActual = donde.css('font-size');
        var sizeFuenteActualNum = parseFloat(sizeFuenteActual, 10);
        var sizeFuenteNuevo = sizeFuenteActualNum*1.2;
        donde.css('font-size', sizeFuenteNuevo);
        return false;
    });
    // Disminuir Font Size
    $(".accebility-bar-disminuirFont").click(function(){
        var sizeFuenteActual = donde.css('font-size');
        var sizeFuenteActualNum = parseFloat(sizeFuenteActual, 10);
        var sizeFuenteNuevo = sizeFuenteActualNum*0.8;
        donde.css('font-size', sizeFuenteNuevo);
        return false;
    });

});
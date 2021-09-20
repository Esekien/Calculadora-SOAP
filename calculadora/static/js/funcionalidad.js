var A;
var B;
var operacion;
function init() {
    //Variables
    var resultado = document.getElementById("resultado");
    var igual = document.getElementById("igual");
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var divicion = document.getElementById('Divicion');
    var multiplicacion = document.getElementById('multiplicacion');
    var reset = document.getElementById('reset');
    var uno = document.getElementById('1');
    var dos = document.getElementById('2');
    var tres = document.getElementById('3');
    var cuatro = document.getElementById('4');
    var cinco = document.getElementById('5');
    var seis = document.getElementById('6');
    var siete = document.getElementById('7');
    var ocho = document.getElementById('8');
    var nueve = document.getElementById('9');
    var cero = document.getElementById('cero');

    //eventos al presionar los botones
    uno.onclick = function (e) {
        resultado.textContent = resultado.textContent + "1";
    }

    dos.onclick = function (e) {
        resultado.textContent = resultado.textContent + "2";
    }

    tres.onclick = function (e) {
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function (e) {
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function (e) {
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function (e) {
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function (e) {
        resultado.textContent = resultado.textContent + "7";
    }

    ocho.onclick = function (e) {
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function (e) {
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function (e) {
        resultado.textContent = resultado.textContent + "0";
    }
    //limpiar 
    reset.onclick = function (e) {
        resetear();
    }
    //Funciones de operaciones, VARIABLE A Y B
    suma.onclick = function (e) {
        A = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function (e) {
        A = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    divicion.onclick = function (e) {
        A = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    multiplicacion.onclick = function (e) {
        A = resultado.textContent;
        operacion = "x";
        limpiar();
    }
    igual.onclick = function (e) {
        B = resultado.textContent;
        console.log(A)
        console.log(B)
        var data1 = {"v1":A, "v2":B, "operacion":operacion}
        $.ajax({
            url: '/',
            data : JSON.stringify(data1),
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function(post){
                console.log('bien');
                resetear();
                resultado.textContent=post;//Devuelve el resultado guardado en rest
            },
            error: function(error){
                console.log(error);
            }
        })
    }
    //Funciones de operaciones
    function limpiar() {
        resultado.textContent = "";
    }
    function resetear() {
        resultado.textContent = "";
        A = "0";
        B = "0";
        operacion = "";
    }

}

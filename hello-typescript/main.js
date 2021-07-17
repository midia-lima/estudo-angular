var minhaVar = 'minha variavel';
function minhaFun(x, y) {
    return x + y;
}
var num = 2; //let no lugar de var
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { valor * 2; });

var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());

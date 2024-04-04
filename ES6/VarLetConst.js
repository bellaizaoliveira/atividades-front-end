// Var : Escopo de Função ou Escopo Global 

var a = 10;
console.log("Valor inicial de a ",a);
if ( true ){
    var a = 20;
    console.log("Valor definido no bloco do if ",a);
}
console.log("Valor final de a  ",a);


// let : Tem escopo de bloco 
console.log("--- LET ----");
var a = 10;
console.log("Valor inicial de a ",a);
if ( true ){
    let a = 20;
    console.log("Valor definido no bloco do if ",a);
    console.log("Valor de a global ",window.a);
}
console.log("Valor final de a  ",a);
console.log("--- Constante ----");
// const - constante
const PI = 3.1415 ;
console.log("valor de pi : ",PI);
PI = 10 ; // não é possivel alterar o valor de uma constante

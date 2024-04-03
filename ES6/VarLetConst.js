// Var: Escopo de Função ou Escopo Global

var a = 10;
console.log("Valor inicial de a ", a);
if ( true ){
    var a = 20;
    console.log("Valor definido no bloco do if ", a);
}

console.log("Valor final de a ", a);

// let: Tem escopo de bloco
console.log("---LET---")
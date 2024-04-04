// while = enquanto

let x = 0 ;
while ( x <= 10){
    console.log("O valor de x é " + x);
    x++; // x = x+1
}
console.log("Final do while ...");

// for

for ( a = 0 ; a <= 10 ; a++){
    console.log("a = " + a);
}
console.log("Final do for  ...");

// while true

while ( 1 < 2 ){   // pode substituir 1 < 2 por true
    let numero = prompt("Digite um nº, para terminar digite 0");
    // a variável obtida no prompt é sempre uma string
    console.log(typeof(numero));
    // Transformando em number
    numero = Number(numero);
    console.log(typeof(numero));
    if ( numero === 0){
        break;  // sai do loop
    } else {
        console.log("o numero digitado foi "+numero)
    }
}
console.log("Final do while true  ...");





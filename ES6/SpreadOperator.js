let primeiros = [ 1 , 2 ,3 ];
let numeros = [ 4 ,5 , 6];

console.log(primeiros);
console.log(numeros);

let numeros1 = [ primeiros ,  4  , 5 , 6];
console.log(numeros1);

// usando o spreadOperator

let numeros2 = [ ...primeiros ,  4  , 5 , 6];
console.log(numeros2);

let juntos = [ ... primeiros , ...numeros ];
console.log(juntos);

// com objetos 

let pessoa = {
    nome: "Fernando",
    sobrenome: "Silva"
}

let novaPessoa = {
    ...pessoa ,
    cargo:"Professor",
    empresa:"FIEB"
}

console.log(pessoa);
console.log(novaPessoa);



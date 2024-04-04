// Variáveis tipo objeto
let pessoa = {
    nome: "Fernando",
    sobrenome: "Silva",
    idade: 50 ,
    cargo: "Professor"
}
let carro = {
    marca: "Idea",
    fabricante:"Fiat",
    anoFabricacao : 2013
}

console.log(pessoa);
console.log(carro);

console.log(pessoa.nome);
console.log(carro.anoFabricacao);

// Lista de Objetos

let lista = [ pessoa , carro ];
console.log(lista);

let usuarios = [
    { nome: "Fernando",senha:"1234"},
    {nome:"Pedro",senha:"1324"}
]
console.log(usuarios);
console.log(usuarios[0].nome);


console.log(lista[0].cargo);
console.log(lista[1].fabricante);







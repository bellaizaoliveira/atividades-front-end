// Desconstrução de Objetos
let pessoas = {
    nome: "Izabella",
    sobrenome: "Oliveira",
    empresa: "Bell²aiza Mídia",
    cargo: "Estrategista Digital",
    anoAdmissao: 2023
};

console.log( pessoa.nome );

// Desconstruindo

let { nome, cargo, empresa } = pessoa;
console.log(nome);
console.log(empresa);

let { nome: nomeFuncionario } = pessoa;
console.log("---Desconstrução de Arrays---");

let nomes = ["Fernando", "Pedro", "Maria"];

let{ [0]: nome1, [2]:nome2 } = nomes;

console.log(nome1);
console.log(nome2);
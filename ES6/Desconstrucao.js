
// Desconstrução de Objetos

let pessoa = {
    nome: "Fernando",
    sobrenome : "Silva",
    empresa: "Fieb",
    cargo: "Professor",
    anoAdmissao: 2010
};

console.log( pessoa.nome );

// Desconstruindo

let { nome , cargo , empresa } = pessoa ;
console.log(nome);
console.log(empresa);

let { nome:nomeFuncionario } = pessoa ;
console.log(" Nome do Funcionário ",nomeFuncionario);

// DEsconstrução de arrays 

console.log("--- Desconstrução de Arrays ----");

let nomes = [ "Fernando","Pedro","Maria"];

let { [0]:nome1 , [2]:nome2  } = nomes ;

console.log(nome1);
console.log(nome2);














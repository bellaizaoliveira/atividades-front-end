// Criando um novo objeto Data

let dataAtual = new Date();

// Obtendo os componentes da data

let ano = dataAtual.getFullYear();
let mes = dataAtual.getMonth();
let dia = dataAtual.getDate();

// Formatando data utilizando o "Template Literals" 
let dataFormatada = `${dia}/${mes}/${ano}`;
console.log("Data atual formatada : ",dataFormatada);
let dataFormatada2 = dia+"/"+mes+"/"+ano ;
console.log("Data atual formatada 2 : ",dataFormatada2);



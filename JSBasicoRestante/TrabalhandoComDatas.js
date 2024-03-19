let dataAtual = new Date();


let ano = dataAtual.getFullYear();
let mes = dataAtual.getMonth();
let dia = dataAtual.getDate();

let dataFormatada = `${dia}/${mes}/${ano}`
console.log("Data atual formatada :" ,dataFormatada);
let dataFormatada2 = dia+"/"+mes+"/"+ano;
console.log("Data atual formatada 2 :" ,dataFormatada2);
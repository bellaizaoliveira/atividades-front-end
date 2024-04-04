// setInterval : executar uma função repetidamente em intervalos dados

/*
function exibirMensagem(){
    console.log("Mensagem exibida a cada 2 segundos ")
}
// executa a função exibir mensagem a casa 2 segundos 
let intervalo = setInterval(exibirMensagem,2000);
*/

/*
function exibirMensagem(){
    console.log("Mensagem exibida apos 3 segundos ")
}

let timeout = setTimeout(exibirMensagem,3000);
*/


function exibirMensagem(){
    console.log("Mensagem exibida a cada 2 segundos");
}

let intervalo = setInterval(exibirMensagem,2000);

// para a execução do setInterval após 10 segundos
setTimeout(()=>{ 
    clearInterval(intervalo);
    console.log("Intervalo parado após 10 segundos ");
},10000);


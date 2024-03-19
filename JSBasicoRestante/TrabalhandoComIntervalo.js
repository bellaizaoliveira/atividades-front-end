function exibirMensagem() {
    console.log("mensagem exibida a cada 2 segundos ")
}
let intervalo = setInterval(exibirMensagem, 2000);

setTimeout(()=>{
    clearInterval(intervalo);
    console.log("Intervalo parado após 10 segundos ");
}, 10000);
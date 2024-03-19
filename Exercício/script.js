const btnIniciar = document.getElementById('btn-iniciar');
const resultado = document.getElementById('resultado');
 
btnIniciar.addEventListener('click', () => {
  const nome = prompt('Digite seu nome completo:');
  const nota1 = parseFloat(prompt('Digite a nota do 1º trimestre:'));
  const nota2 = parseFloat(prompt('Digite a nota do 2º trimestre:'));
  const nota3 = parseFloat(prompt('Digite a nota do 3º trimestre:'));
 
  const mediaPonderada = calcularMedia(nota1, nota2, nota3);
  const resultadoFinal = verificarResultado(mediaPonderada);
 
  let mensagem = `Olá ${nome}, sua média final é ${mediaPonderada.toFixed(1)}`;
  mensagem += resultadoFinal.mensagem;
 
  if (resultadoFinal.status === 'recuperacao') {
    const notaRecuperacao = parseFloat(prompt('Digite sua nota na recuperação:'));
    const resultadoRecuperacao = verificarResultadoRecuperacao(mediaPonderada, notaRecuperacao);
    mensagem += resultadoRecuperacao.mensagem;
  }
 
  exibirResultado(mensagem);
});
 
function calcularMedia(nota1, nota2, nota3) {
  return (nota1 * 1 + nota2 * 2 + nota3 * 3) / 6;
}
 
function verificarResultado(media) {
  if (media >= 7) {
    return { status: 'aprovado', mensagem: `<br>Parabéns, você está **aprovado**!` };
  } else if (media >= 4) {
    return { status: 'recuperacao', mensagem: `<br>Você está de **recuperação**.` };
  } else {
    return { status: 'reprovado', mensagem: `<br>Você está **reprovado**.` };
  }
}
 
function verificarResultadoRecuperacao(media, notaRecuperacao) {
  if (media >= 5 || notaRecuperacao >= 7) {
    return { mensagem: `<br>Parabéns, você foi **aprovado** na recuperação!` };
  } else {
    return { mensagem: `<br>Infelizmente, você foi **reprovado** na recuperação.` };
  }
}
 
function exibirResultado(mensagem) {
  resultado.innerHTML = mensagem;
  resultado.classList.add(resultadoFinal.status);
}
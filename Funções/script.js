function entrar(){

let area = document.getElementById("area");
let nome = prompt("Qual seu nome? ");

area.innerHTML = "Bem-Vindo "+nome ; 

if ( nome === null ){
    alert("Ups! Parece que algo de errado aconteceu :(")
    area.innerHTML = "Nome inválido"
}else {
    area.innerHTML = "Bem-Vindo "+nome;

    // criar botão sair que irá apresentar "Até logo!"
    // criar o objeto

    let botaoSair = document.createElement("button");

    // alterar propriedades
    botaoSair.innerText = "Sair";
    botaoSair.onclick = sair; // não colocar () pois executa a função


    // inserir num posição do HTML (nó)
    area.appendChild(botaoSair);

}



}

function sair(){
    alert("Até logo!");
}

function verificarAprovacaoAluno(nota1Tri,nota2Tri,nota3Tri){
    let notaFinal = ( nota1Tri + Nnota2Tri*2 + nota3Tri*2)/5;
    let resultado;
    if (notaFinal >= 6) {
        resultado = 'aprovado';
    } else if (notaFinal >=4){
        resultado = 'conselho de classe';
    } else {
        resultado = 'reprovado';
    }
    return resultado;
    }
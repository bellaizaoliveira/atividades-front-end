function entrar(){

    let area = document.getElementById("area");
    let nome = prompt("Qual o seu nome ? ");

  
    if ( nome === null || nome === ''){
        alert("Ops !!! , algo de errado aconteceu ");
        area.innerHTML = "Nome inválido";
    } else {
        area.innerHTML = "Bem vindo "+nome ; 
        // criar botão sair que irá apresentar "Até Logo !!!"
        // criar o objeto
        let botaoSair = document.createElement("button");
        // alterar propriedades 
        botaoSair.innerText = "Sair";
        botaoSair.onclick = sair ; // não colocar () pois executa a função
        // Inserir num posição do HTML ( nó )
        area.appendChild(botaoSair);


    }





}

function sair(){
    alert("Até logo !!!");
}

function verificarAprovacaoAluno(nota1Tri,nota2Tri,nota3Tri){
   let notaFinal = ( nota1Tri + nota2Tri*2 + nota3Tri*2)/5;
   let resultado ;
   if ( notaFinal >= 6){
    resultado = 'aprovado';
   } else if ( notaFinal >=4 ){
    resultado= 'conselho de classe';
   } else {
    resultado='reprovado'
   }
   return resultado ;
}

function Pedir() {
    // Obtem a opção
    let opcao = prompt("Qual a opção ?");
    // a opção é uma string 
    console.log(typeof (opcao));
    // como vou usar a opcao numérica vou transformar
    opcao = Number(opcao);
    console.log(typeof (opcao));

    switch (opcao) {
        case 1:
            alert("Opção 1 escolhida");
            break;
        case 2:
            alert("Opção 2 escolhida");
            break;
        case 3:
            alert("Opção 3 escolhida");
            break;
        case 4:
            alert("Opção 4 escolhida");
            break;
        default:
            alert("Opção inválida ... ")
            break;
    }















}
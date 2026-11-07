// Lógica de Programação - Aula dia 30 de Outubro
const idade = 18;
const nome = "Ana";
const ativo = true;
console.log(typeof idade);  // resultado: number
console.log(typeof nome);   // resultado: string
console.log(typeof ativo);  // resultado: boolean

const idade = 18;
const nome = "444"; // qualquer coisa estre parênteses, irá ser lido como STRING. Letra sem "" dará erro; número sem "" dará number
const ativo = true;
console.log(typeof idade);  // resultado: number
console.log(typeof nome);   // resultado: string
console.log(typeof ativo);  // resultado: boolean


// --------------------------------------------------- //

const idade = 19;
const documento = true;
console.log (idade >= 18 && documento); // '&&' significa AND
console.log(idade < 18 || !documento);  // '||' significa OR; '!' significa NOT, em documento ele pergunta: "idade é menor que 18 OU documento NÃO existe"

// --------------------------------------------------- //

// Uso do SWITCH ao invês de IF/ELSE
const opcaoMenu = "8"

switch ( opcaoMenu ){
    case "1":
    console.log("[1] Abrir novo chamado");
    break;
    case "2":
    console.log("[2] Listar chamados");
    break;
    case "3":
    console.log("[3] Encerrar chamada");
    break;
    default:
    console.log("Opção inválida!")
}

// Problema para estudar ARRAYS: Por que está errado?

const joias = ["Rubi", "Safira", "Esmeralda", "Ametista"];

switch ( joias ){
    case "Rubi":
        console.log("[Rubi] Temos 4 estoques de rubi.");
    break;
    case "Safira":
        console.log("[Safira] Temos 3 estoques de safira.");
    break;
    case "Esmeralda":
        console.log("[Esmeralda] Temos 2 estoques de safira.");
    break;
    case "Ametista":
        console.log("[Ametista] Temos 1 estoque de ametista.")
    default:
        console.log("Sinto muito, não temos essa joia no momento.");
}

// Uso do FOR
const setores = ["Suporte TI", "Vendas", "Compras"]

console.log("---- Varrer com FOR ------");
console.log(setores);
console.log(setores[2]);
console.log(setores.length);

for(let i = 0; i < setores.length; i++){
  console.log(`Setor ${i} : ${setores[i]}`);
}

// ------------------------------------ //

// WHILE
let totalRegistros = 0;

while(true){
   const resposta = prompt("Deseja parar o registro de Chamados(S/N)");

  if(resposta === null || resposta.trim().toUpperCase() === "S"){

    console.log("Interrupção Solicitada");
    break;
  }
  totalRegistros++;
  console.log(`Chamado ${totalRegistros} Registrado!`)
}

console.log(`Processo Finalizado!`)
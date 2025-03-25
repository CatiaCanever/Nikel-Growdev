const nome = "Marcelo Eltz"
let nome2 = "";
let pessoaDefault = {
    nome: "Marcelo",
    idade: "33",
    trabalho: "programador"
}

let nomes = ["Marcelo", "Maria", "Pedro"];

let pessoas = [
    {
        nome: "Marcelo",
        idade:"2",
        trabalho: "eu"
    },
    {
        nome: "Maria",
        idade:"2",
        trabalho: "ue"
    }
];

function alterarNome() {
    nome2= "Maria Silva";
    console.log("Valor alterado");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome");
    console.log(pessoa.nome);

    console.log("Idade");
    console.log(pessoa.idade);

    console.log("Trabalho");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("--------IMPRIMIR PESSOAS------------");
    pessoas.forEach((item) => {
      console.log("Nome");
      console.log(item.nome);  

      console.log("Idade");
      console.log(item.idade);

      console.log("Trabalho");
      console.log(item.trabalho);
    })
}

imprimirPessoas();

adicionarPessoa({
    nome:"Pedro",
    idade:"28",
    trabalho:"porteiro"
})

//imprimirPessoa(pessoaDefault);



//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva");

//alterarNome();
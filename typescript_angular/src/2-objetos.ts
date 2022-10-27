
// Aula de objetos
//Objeto - sem previsibilidade.
//ex:
let produto:object = {
    name: "Rafaela",
    cidade: "Rj",
    idade: 30,
};

//objeto tipado - com previsibilidade
//ex:
type ProdutoLoja = {
    nome:string;
    preco:number;
    unidades:number;
}

let meuProduto:ProdutoLoja = {
    nome: "tênis",
    preco: 89.99,
    unidades: 5,
}


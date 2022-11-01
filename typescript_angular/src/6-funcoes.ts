 // funções
 // a declaração de uma função no typescript é bem parecida com a do javascript, porem você define o type que os parametros vão receber e defini o paramentro do retorno;

function addNumber(x:number, y:number):number {
   return x + y;
}
let soma:number = addNumber(4, 7);
console.log(soma);

function addToHello(name:string):string {
    return `Hello ${name}`;
}
console.log(addToHello("Rafaela"))

// nessa função adicionamos o pipe( | ) para enfatizar o (ou).
function CallToPhone(phone: number | string) {
    return phone;
}
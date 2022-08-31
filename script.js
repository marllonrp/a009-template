// let nome = prompt("Qual seu nome?");
// nome = nome.toLocaleUpperCase();

// const cor = prompt("Qual sua cor favorita?");

// const citacao = prompt("Qual a sua citação favorita?");

// console.log(
//   "A cor favorita de " +
//     nome +
//     " é " +
//     cor +
//     ' e a sua citação favorita é "' +
//     citacao +
//     '".'
// );
// console.log(
//   "A cor favorita de",
//   nome,
//   "é",
//   cor,
//   'e a sua citação favorita é "',
//   citacao,
//   '".'
// );

// console.log(
//   `A cor favorita de ${nome} é ${cor} e a sua citação favorita é \"${citacao}\".`
// );

// console.log(`Nome: ${nome} \nCor: ${cor} \nCitação: ${citacao}.`);

// console.log(`A Quantidade de caracteres do nome é: ${nome.length}.`);

// const verificacaoLetra = nome.includes("A");

// console.log(`O nome da pessoa tem letra \"a\'? ${verificacaoLetra}.`);


const nome = prompt ("Qual o seu nome?")
let caracteres = nome.length


const emailUsuário = prompt ("Qual o seu email?")
let includes = emailUsuário.includes("@")

console.log(`O e-mail ${emailUsuário} foi cadastrado com sucesso. Boas vindas, ${nome}. \nA quantidade de caracteres no seu nome é: ${caracteres} `)

let frase = `O e-mail ${emailUsuário} foi cadastrado com sucesso. Boas vindas, ${nome}. \nA quantidade de caracteres no seu nome é: ${caracteres} `

let trocaLetras = frase.replaceAll("r","l")

console.log(trocaLetras)
console.log(includes)
//se a hora tiver entre as 6 e as 12 bom dia
// se for entere 12 e 18 boa tarde
//caso contrario: boa noite
let hora = 10;
if (hora > 6 && hora < 12) {
    console.log('bom dia');
} else if (hora > 12 && hora < 18) {
        console.log('boa tarde');
    } else {
            console.log('boa noite');
};
//switch... case -->
let permissao = 'comum'; // comum, gerente, diretor
switch (permissao) {
    case 'comum':
        console.log('usuario comum');
        break;
    case 'gerente':
        console.log('usuario gerente');
        break;
    case 'diretor':
        console.log('usuario gerente');
        break;
};
// Laço de repetição --->
//for
for (let i = 0; i < 5; i++) { //repetição com laço for
    console.log('Estou Aprendendo!');
};
for (let i = 0; i <= 5; i++) { //numeros impares entre 0 e 5
    if (i % 2 !== 0) {
        console.log(i);
    };
};
//while
let ii = 5;
while (ii >= 1) {
    if (ii % 2 !== 0) {
        console.log(ii);
    };
    ii--;
};
//do while
let i = 1;
do {
    console.log('Olá!', i);
    i++;
} while (i <= 10);
// for in //para arrays
const pessoa = {
    nome: 'Jhonatan',
    idade: 25
};
for (let key in pessoa) {
    console.log(key, pessoa[key]); //posso usar o proprio key pra expor as propriedades do objeto pessoa.
};
const cores = ['vermelho', 'azul', 'verde'];
for (let indice in cores) {
    console.log(indice, cores[indice]);
};
//for of
for (let cor of cores) { //o cor aqui é o valor contido em cada indice percorrido durante o loop
    console.log(cor);
};
let valorMaior = maiorNumero(5, 9);
console.log(valorMaior);
function maiorNumero (n1, n2) {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    };
};
//se divisivel por 3 => fizz
//se por 5 => buzz
//pelos dois => fizzbuzz
//por nenhum => retorna o mesmo valor
//se nao for um numero =. nao é um numero

let resultado = fizzBuzz(5)
console.log(resultado)

function fizzBuzz (entrada) {
    if (entrada === NaN) {
        return 'Isso não é um número!';
    };
    if ((entrada % 3 === 0) && (entrada % 5 === 0)) {
        return 'fizzBuzz'
    };
    if (entrada % 3  === 0) {
        return 'fizz';
    };
    if (entrada % 5 === 0) {
        return 'buzz';
    };
    if ((entrada % 3 !== 0) || (entrada % 5 !== 0)) {
        return entrada;
    };
}; 
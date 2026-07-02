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
for (let i = 0; i < 5; i++) { //repetição com laço for
    console.log('Estou Aprendendo!');
}
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
}
//do while
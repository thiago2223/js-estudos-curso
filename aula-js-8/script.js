//operadores logicos
    // e (&&)
        //retorna true se os dois operandos forem true
            console.log(true && true);
            let maiorDeIdade = true;
            let possuiCarteiraDeTrabalho = true;
            let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
            console.log(podeAplicar)
    //ou (||)
            let maiorDeIdade2 = true;
            let possuiCarteiraDeTrabalho2 = true;
            let podeAplicar2 = maiorDeIdade2 || possuiCarteiraDeTrabalho2;
            console.log(`Pode Aplicar: ${podeAplicar2}`);
        //true se um dos operandos forem true
    //not (!)
            let candidatoRecusado = !podeAplicar2;
            console.log(`Candidato Recusado, ${candidatoRecusado}`);
//aritimeticos
//+ , - , *, /, **
let salario = 200;
console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(salario ** salario);
// ++ --
let idade = 18;
console.log(idade++);
console.log(idade);
console.log(++idade);
console.log(idade);

//atribuição

let valorTecladoGamer = 100;
console.log(valorTecladoGamer);
valorTecladoGamer += valorTecladoGamer;
console.log(valorTecladoGamer);

//operadores de igualdade
//igualdade estrita
console.log(1 === 1);
console.log('1' === 1); //Melhor que tudo 
//igualdade solta
console.log(1 == 1);

//operador ternario
    //tenho um cliente, se tiver 100 pontos ele é ´remiun, se não comum.
    let pontos = 100;
    let tipo = pontos > 100 ? 'premium' : 'comum';
    console.log(tipo);

//comparação
//bitwise
//falsy
    //undefined
    //null
    //0
    //false
    //''
    //NaN - not a number
//truthy
    //existir um true
    let corPersonalizada = 'vermelho';
    let corPadrao = 'azul';
    let corPerfil = corPersonalizada || corPadrao;
    console.log(corPerfil)

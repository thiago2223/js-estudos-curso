//verbp + substantivo
let corSite = "azul";
function resetarCor() {
    corSite = "";
};
console.log(corSite);
resetarCor();
console.log(corSite);


let nomeDoUsuario = 'Thiago';
function resetarNome(nome, sobrenome) {
    //nomeDoUsuario = nome + sobrenome; OU
    nomeDoUsuario = `${nome} ${sobrenome}`
};
console.log(nomeDoUsuario);
resetarNome('Pedro', 'junior');
console.log(nomeDoUsuario);
console.log('Exercicio -->......')
// Exercicio -->...
let possuiVip = undefined;
let amigoDoDonoDoJogo = undefined;
let nomeUsuario = 'caio';
let mensagem = `${nomeUsuario}:... Olá!`;
function usarMensagemEspecial() {
    if(possuiVip == false || amigoDoDonoDoJogo == false) {
        mensagem = `${nomeUsuario}:... Olá!`;
    } else if(possuiVip == true && amigoDoDonoDoJogo == true) {
        nomeUsuario = `[vip][AmigoDeThiago]${nomeUsuario}`;
        mensagem = `${nomeUsuario}:... Olá!`;
    }
};
possuiVip = true;
amigoDoDonoDoJogo = true;
console.log(mensagem);
usarMensagemEspecial();
console.log(mensagem)

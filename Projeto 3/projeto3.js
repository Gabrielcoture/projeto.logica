const readline = require('readline');

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia, plim plimmmmm";
                break;
            case "monge":
                ataque = "usou artes marciais, iaaaaaaa";
                break;
            case "guerreiro":
                ataque = "usou espada, zuuuuuuuuu";
                break;
            case "ninja":
                ataque = "usou rasengaaaaaaan";
                break;
            default:
                ataque = "atacou;"
        }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}, chama o SAMU`);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o nome do herói: ", (nomeHeroi) => {
    rl.question("Digite a idade do herói: ", (idadeHeroi) => {
        rl.question("Digite o tipo do herói (mago, guerreiro, monge ou ninja): ", (tipoHeroi) => {
            let heroi = new Heroi(nomeHeroi, idadeHeroi, tipoHeroi);
            heroi.atacar();
            rl.close();
        });
    });
});
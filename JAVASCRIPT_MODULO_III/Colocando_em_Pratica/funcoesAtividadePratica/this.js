function calcula_idade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}


const pessoa_1 = {
     nome: "Fabio",
     idade: 37

}

const pessoa_2 = {
    nome: "Simone",
    idade: 30

}

const animal = {
    nome: "Baby",
    idade: 3,
    raca: "Shih Tzu"

}

console.log(calcula_idade.call(pessoa_2, 30));
console.log(calcula_idade.apply(pessoa_1, [30]));
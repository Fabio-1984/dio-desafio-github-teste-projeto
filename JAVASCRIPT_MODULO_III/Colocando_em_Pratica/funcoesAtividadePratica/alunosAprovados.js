const alunos = [
	{
		nome: 'Fabio',
		nota: 6,
		turma: '2F',
	},
	{
		nome: 'Jonas',
		nota: 8,
		turma: '3J',
	},
	{
		nome: 'João',
		nota: 6,
		turma: '4C',
	},

    {
		nome: 'Rafael',
		nota: 3,
		turma: '4C',
	},
];


function alunos_aprovados(arr, media) {

    let aprovados = [];
    for (let i = 0; i < arr.length; i++) {
       
    const {nota, nome} = arr[i];

       if (nota >= media) {
          aprovados.push(nome)
       }
        
    }

    return aprovados
}

console.log(alunos_aprovados(alunos, 5));
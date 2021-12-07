const estudantes = [
  {
    nome: "Camila",
    nota: 7.5,
  },
  {
    nome: "Mario",
    nota: 6.3,
  },
  {
    nome: "Joana",
    nota: 8.5,
  },
  {
      nome: 'Marcos',
      nota: 5.9
  },
];

//Algum aluno aprovado?
console.log(estudantes.some((estudante) => estudante.nota >= 7));

//TODOS os alunos foram reprovados?
console.log(estudantes.every(estudante => estudante.nota<7))

//Ordenar array por notas da maior pra menor
console.log(estudantes.sort((atual,proximo) =>proximo.nota-atual.nota))

//reverter sentido do array
console.log(estudantes.reverse())


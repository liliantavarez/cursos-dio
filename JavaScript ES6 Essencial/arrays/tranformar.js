arr = [1,2,3,4,5,6]

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
  

//tranformar array em uma string com determinado delimitador 
console.log(arr.join('-'))

//retornar um novo tipo de dado iterando cada posição do array
somaDoArray = arr.reduce((total,value)=>total+=value,0)
console.log(somaDoArray)

//Soma das notas dos estudantes

somaNotas = estudantes.reduce((soma,estudante) => soma+=estudante.nota,0)
console.log(somaNotas.toFixed(2))

//Media das notas dos alunos

mediaNotas = somaNotas/estudantes.length
console.log(mediaNotas.toFixed(2))

//Retornar nome dos alunos com reduce
nomes = estudantes.reduce((listaNomes,estudante)=>`${listaNomes}${estudante.nome}`,'')
console.log(nomes)
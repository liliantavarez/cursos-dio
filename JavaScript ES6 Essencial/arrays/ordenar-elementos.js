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
  
//Ordenar array por notas da maior pra menor
console.log(estudantes.sort((atual,proximo) =>proximo.nota-atual.nota))

//reverter sentido do array
console.log(estudantes.reverse())

const arr = [3,4,7,5,1,6,9,2]
//ordernar array
const arrayOrdenado = arr.sort()
console.log(arrayOrdenado)

//inverter array
console.log(arrayOrdenado.reverse())
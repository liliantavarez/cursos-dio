//exemplo de imutabilidade

const user = {
  //objeto original
  name: "Guilerme",
  lastName: "Cabrini da Silva",
};

function getUserWithFullName(user) {
  //função que adiciona uma nova propriedade do objeto existente
  return {
    ...user,
    fullName: `${user.name} ${user.lastName}`,
  };
}

const userWithFullName = getUserWithFullName(user); //armazenando objeto alterado

console.log(userWithFullName); //novo objeto gerado
console.log(user); //objeto original permanece sem alteraçoes

//Outro exemplo

const students = [
  {
    name: "Grace",
    grade: 6,
  },
  {
    name: "Jennifer",
    grade: 4,
  },
  {
    name: "Paul",
    grade: 10,
  },
];

function getApprovedStudents(studentsList) {
  return studentsList.filter((students) => students.grade >= 7);
}

console.log("Alunos Aprovados:");
console.log(getApprovedStudents(students));

console.log("Lista de Estudantes:");
console.log(students);

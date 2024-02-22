/* 
Crie uma lista de pacientes
Cada paciente dentro da lista, deverá conter:
    nome
    idade
    peso
    altura
Escreva uma lista contendo o nome dos pacientes.
*/


const patients = [
    {
        name: "Luiz",
        age: 22,
        weight: 76,
        height: 188
    },
    {
        name: "Drica",
        age: 25,
        weight: 59,
        height: 159
    },
    {
        name: "Dani",
        age: 35,
        weight: 61,
        height: 162
    },
]

let patientsNames = []

for(let index = 0; index < patients.length; index++){
    patientsNames[index] = patients[index].name
}


for(let patient of patients ){
   alert(`${patient.name}, tem ${patient.age} anos, pesa ${patient.weight} kilos e tem ${patient.height} de altura.`)
   
}



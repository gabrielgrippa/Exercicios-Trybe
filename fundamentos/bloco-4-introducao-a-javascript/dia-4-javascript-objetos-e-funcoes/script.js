// let diasDaSemana = {
//     1: 'domingo',
//     2: 'segunda',
//     3: 'terça',
//     4: 'quarta',
//     5: 'quinta',
//     teste: 'sexta',
//     7: 'sábado',
// };
    
//     //diasDaSemana.1; // SyntaxError: Unexpected number
//     console.log(diasDaSemana['1']); // domingo

// let player = {
//     name : 'Marta',
//     lastName : 'Silva',
//     age : 34,
//     medals : { golden: 2, silver: 3 },
//     bestInTheWorld : [2006, 2007, 2008, 2009, 2010, 2018]
// }
// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade')
// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes' )
// console.log ('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata')

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge' 
//   };
// for (let key in names){
//     console.log ('Olá ' + names[key])
// }

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };
// for (let key in car){
//     console.log(key +': '+ car[key])
// }

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

// 1.
// console.log ('Bem vinda, ' + info.personagem)

// 2.
// console.log (info)

// 3.
// for (let key in info){
//     console.log (key)
// }

// 4.
// for (let key in info) {
//     console.log (info[key])
// }

// 5.
// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim'
//   };
// for (let properties in info){
//     if (
//         properties === 'recorrente' && 
//         info[properties] === 'Sim' && 
//         info2[properties]==='Sim'){
//         console.log ('Ambos recorrentes')
//     }
//     else{
//     console.log (info[properties] + ' e ' + info2[properties])
//     }
// }

6.
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco',
      }
    ],
  };
// console.log ('O livro favorita de ' + leitor.nome + ' ' + leitor.sobrenome + "se chama '" + leitor.livrosFavoritos[0].titulo + "'")

// 7.
// Done

// 8.
console.log (leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos')'''
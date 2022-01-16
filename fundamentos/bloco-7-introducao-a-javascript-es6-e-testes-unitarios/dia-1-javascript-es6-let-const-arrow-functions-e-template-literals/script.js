// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// // Seu código aqui.

// console.log(`Os números ${oddsAndEvens.sort(function (a, b) {  return a - b;  })} se encontram ordenados de forma crescente`);

// console.log(oddsAndEvens)

//Parte II

// const factorate = (n) => {
//     let result = 1
//     for (index = 1; index<=n; index++){
//         result = result * index
//     }
//     console.log(result)
// }
// factorate(10)

//Exercicio 2

// function getLongestWord(phrase){
//     let arrayOfWords = phrase.split(' ');
//     let longestWord = ''
//     for (index = 0; index<arrayOfWords.length; index++){
//         if (arrayOfWords[index].length > longestWord.length){
//             longestWord = arrayOfWords[index]
//         }
//     }
//     console.log(longestWord)
// }
// getLongestWord('Antônio foi no banheiro e não sabemos o que aconteceu')

//Exercicio 3 

// let botao = document.getElementById('button')
// function sumAmount() {
//     let number = parseInt(document.getElementById('counter').innerHTML)
//     document.getElementById('counter').innerHTML = number + 1
// }
// botao.addEventListener('click', sumAmount);

//exercicio 4 

function substituteX (phrase, newWord){
    let arrayOfLetters = phrase.split('')
    let result = ''
    for(index = 0; index<arrayOfLetters.length; index++){
        if(arrayOfLetters[index]=== 'x'){
            arrayOfLetters[index] = newWord
        }
    result = result + arrayOfLetters[index]
    }   
    return(result)
}
// substituteX('Tryber x aqui', 'Bebeto')

let skills = ['Js', 'React', 'Html', 'Css', 'Dom']

function function2(array){
    let firstPhrase = substituteX('Tryber x aqui', 'Bebeto');
    array.sort()
    console.log(`${firstPhrase}! Minhas cinco principais habilidades são:
    ${array[0]}
    ${array[1]}
    ${array[2]}
    ${array[3]}
    ${array[4]}`)
}

function2 (skills)
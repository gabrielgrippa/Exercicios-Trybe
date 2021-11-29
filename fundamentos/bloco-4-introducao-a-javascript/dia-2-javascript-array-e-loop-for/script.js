// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1.
// for (let index = 0; index < numbers.length; index ++){
//     console.log(numbers[index])
// }

// 2.
// let sum = 0
// for (let index = 0; index < numbers.length; index ++){
//     sum = sum + numbers [index]
// }
// console.log (sum)

// 3.
// let sum = 0
// for (let index = 0; index < numbers.length; index ++){
//     sum = sum + numbers [index]
// }
// let medium = sum / numbers.length
// console.log(medium)

// 4.
// let sum = 0
// for (let index = 0; index < numbers.length; index ++){
//     sum = sum + numbers [index]
// }
// let medium = sum / numbers.length
// if (medium > 20){console.log ('valor maior que 20')}
// else {console.log('valor menor ou igual a 20')}

// 5.
// let greatNum = numbers [0]
// for (let index = 0; index < numbers.length; index ++){
//     if (numbers [index] > greatNum){
//         greatNum = numbers [index]
//     }
// }
// console.log (greatNum)

// 6.
// let numOfOdd = 0
// for (let index = 0; index < numbers.length; index ++){
//     if (numbers[index] % 2 != 0){
//         numOfOdd = numOfOdd + 1
//     }
// }
// if (numOfOdd > 0) {
//     console.log (numOfOdd)
// }
// else {console.log('nenhum valor ímpar encontrado')}

// 7.
// let lesserNum = numbers [0]
// for (let index = 0; index < numbers.length; index ++){
//     if (numbers [index] < lesserNum){
//         lesserNum = numbers [index]
//     }
// }
// console.log (lesserNum)

// 8.
// let array = []
// for (let index = 0; index < 25; index ++){
// array.push (index +1)
// }
// console.log (array)

// 9.
// let array = []
// let halfArray = []
// for (let index = 0; index < 25; index ++){
// array.push (index + 1)
// halfArray.push (array[index] / 2)
// }
// console.log (halfArray)

// bonus.1
// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] < numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }
// console.log (numbers)

// bonus.2
// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] > numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }
// console.log (numbers)

// bonus.3
// let array = []
// for (let index = 1; index < numbers.length; index ++){
//     array.push (numbers[index - 1] * numbers[index])
// }
// array.push (numbers[numbers.length - 1]*2)
// console.log (array)
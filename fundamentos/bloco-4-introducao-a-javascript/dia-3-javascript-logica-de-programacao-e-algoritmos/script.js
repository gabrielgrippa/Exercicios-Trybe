// 1.
// let nLine = ''
// let n = 5
// for (let index = 0; index < n; index ++){
//     nLine = nLine + '*'
// }
// for (let index = 0; index < n; index ++){
//     console.log (nLine)
// }

// 2.
// let nLine = '******'
// let n = 5
// for (let index = 0; index < n; index ++){
//     nLine = nLine - '*'
//     console.log(nLine)
// }

// 3.
// let spaces = ''
// let stars = ''
// let line = ''
// let n = 5
// for (let index = 0, index2 = n; index <= n, index2 >=0; index ++, index2 --){
//     spaces = '' + (" ".repeat(index2))
//     stars = '' + ('*'.repeat(index))
//     line = spaces + stars
//     console.log(line)
//     }

// 4.
// let n = 16
// if (n % 2 === 0){
//     for (let index = 0; index <= n; index +=2){
//         let numOfSpaces = (n - index) / 2
//         let spaces = '' + (' '.repeat(numOfSpaces))
//         let stars = '' + ('*'.repeat(index))
//         let line = spaces + stars + spaces
//         console.log(line)
//     }}
// else {
//     console.log('  ')
//     for (let index = 1; index <= n; index +=2){
//         let numOfSpaces = (n - index) / 2
//         let spaces = '' + (' '.repeat(numOfSpaces))
//         let stars = '' + ('*'.repeat(index))
//         let line = spaces + stars + spaces
//         console.log(line)
//     }
// }

//1.bonus
// let n = 33
// let firstLine = (' '.repeat((n-1)/2)) + '*' + (' '.repeat((n-1)/2))

// console.log(' '.repeat(n))
// console.log(firstLine)
// for (let index = 1; index < n-2; index +=2 ){
//     let numOfOuterSpaces = ((n - 2 - index)/2)
//     let outerSpaces = '' + (' '.repeat(numOfOuterSpaces))
//     let innerSpaces = '' + (' '.repeat(index))
//     console.log(outerSpaces + '*' + innerSpaces + '*' + outerSpaces)
// }
// console.log ('*'.repeat(n))

//2.bonus
// let n = 3534
// let sum = 0
// for (index = 2; index < n; index ++){
//     if (n%index === 0){
//         sum = sum + 1}
//     }
// if (sum > 0){
//     console.log('Não é primo')
// }
// else {
//     console.log ('É primo')
// }
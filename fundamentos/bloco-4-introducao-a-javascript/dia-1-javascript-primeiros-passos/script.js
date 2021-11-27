// Exercicio 1
// let a = 5
// let b = 7
// let c = 10
// let add = (a+b)
// let subt = (a-b)
// let mult = (a*b)
// let division = (a/b)
// let rest = (a%b)

// // Exercicio 2
// if (a>b) {console.log ('a é maior')}
// else if (a<b) {console.log ('b é maior')}
// else {console.log ('a e b são iguais')}

// //exercicio 3
// if (a>b && a>c) {console.log ('a')}
// else if (b>a && b>c) {console.log ('b')}
// else if (c>a && c>b) {console.log ('c')}

// //exercicio 4
// if (a>0) {console.log ('positive')}
// else if (a<0) {console.log ('negative')}
// else {console.log ('zero')}

//exercicio 5
// const ang1 = 60
// const ang2 = 40
// const ang3 = 80
// if (ang1 + ang2 + ang3 == 180 ) {return true}
// else if (ang1 + ang2 + ang3 != 180 && ang1 + ang2 + ang3>0) {return false}
// else {return 'error'}

//exercicio 6

// function movement (chessPiece){
//     if (chessPiece.toLowerCase() == "king") {console.log ('movimentos do rei')} 
//     else if (chessPiece.toLowerCase() == "queen") {console.log ('movimentos da rainha')} 
//     else if (chessPiece.toLowerCase() == "rook") {console.log ('movimentos da torre')} 
//     else if (chessPiece.toLowerCase() == "bishop") {console.log ('movimentos do bispo')} 
//     else if (chessPiece.toLowerCase() == "knight") {console.log ('movimentos do cavalo')} 
//     else if (chessPiece.toLowerCase() == "pawn") {console.log ('movimentos do peão')} 
//     else {console.log ("error")}
// }

//exercicio 7

//exercicio 8
// let num1 
// let num2
// let num3
// if (num1%2==0 || num2%2==0 || num3%2==0){
//     console.log (true)}
// else {console.log (false)}

//exercicio 9

//exercicio 10
// const cost = 5
// const sell = 10
 
// function profitCalc1000 (cost, sell) {
//     let totalCost = cost + (cost/5)
//     let profit = sell - totalCost
//     if (cost < 0 || sell < 0) {
//         console.log("Error")
//     } 
//     else {console.log (profit*1000)}
// }
// profitCalc1000 (cost, sell)

//exercicio 11
// let bruteSal
// function salaryCalc (bruteSal){
//     if (bruteSal < 1556.95){baseSal = bruteSal - ((8/100)*bruteSal)}
//     else if (bruteSal >= 1556.95 && bruteSal <= 2594.92){baseSal = bruteSal - ((9/100)*bruteSal)}
//     else if (bruteSal >= 2594.93 && bruteSal <= 5189.82){baseSal = bruteSal - ((11/100)*bruteSal)}
//     else if (bruteSal > 5189.82){baseSal = bruteSal - 570.88}

//     if (baseSal <= 1903.98){finalSal = baseSal}
//     else if (baseSal >= 1903.99 && baseSal <=2826.65){finalSal = baseSal - ((7.5/100) * baseSal) + 142.80}
//     else if (baseSal >= 2826.66 && baseSal <=3751.05){finalSal = baseSal - ((15/100) * baseSal) + 354.80}
//     else if (baseSal >= 3751.06 && baseSal <=4664.68){finalSal = baseSal - ((22.5/100) * baseSal) + 636.13}
//     else if (baseSal >= 4664.68){finalSal = baseSal - ((27.5/100) * baseSal) + 869.36}
//     console.log (finalSal)
//     }
// const wakingUp = () => {
//     console.log('Acordando!!')
// }
// const breakfast = () => {
//     console.log('Bora tomar café!!')
// }
// const sleep = () => {
//     console.log('Partiu dormir!!')
// }
// const doingThings = (func) => {
//     func()
// }
// doingThings(wakingUp)

const createEmployee = (employeeName) =>{
    let username = employeeName.toLowerCase().replace(' ', '_')
    const object = {
        name: `${employeeName}`,
        email: `${username}@trybe.com` 
    }
    return object
};

const newEmployees = (func) => {
    const employees = {
      id1: func('Pedro Guerra'), 
      id2: func('Luiza Drumond'), 
      id3: func('Carla Paiva'), 
    }
    return employees;
  };

// console.log(newEmployees(createEmployee))

const checkNumber = (number, luckyNumber) => {
    if (number === luckyNumber) {
        return true
    }
}

const numbers = (number, func) => {
    let luckyNumber = Math.floor((Math.random() * 5) + 1)
    if(func(number, luckyNumber) === true){
        console.log('Parabéns você ganhou!')
        console.log(luckyNumber)
    } else {
        console.log('Tente novamente.')
        console.log(luckyNumber)
    }
}

// numbers(3, checkNumber)

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const grader = (rightAnswers, studentAnswers) => {
    let grade = 0
    for (let index = 0; index < rightAnswers.length; index++) {
        if (rightAnswers[index] === studentAnswers[index]) {
            grade = grade +=1            
        } else if (studentAnswers[index] === 'N.A') {
            grade = grade +=0            
        } else {
            grade -= 0.5            
        }
    }
    return grade
}

const returner = (rightAnswers, studentAnswers, func) => {
    console.log(func(rightAnswers, studentAnswers));
}

returner(RIGHT_ANSWERS, STUDENT_ANSWERS, grader)
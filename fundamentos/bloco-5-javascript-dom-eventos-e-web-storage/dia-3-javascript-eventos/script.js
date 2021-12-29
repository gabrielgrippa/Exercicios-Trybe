function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Ex 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
for (index = 0; index < dezDaysList.length; index ++){
  const dayOfTheMonth = document.createElement('li')
  dayOfTheMonth.innerHTML = dezDaysList[index]
  days.appendChild (dayOfTheMonth)
  dayOfTheMonth.classList.add('day')
  if (dezDaysList[index]=== 24 || dezDaysList[index]=== 25 ||dezDaysList[index] === 31){
    dayOfTheMonth.classList.add('holiday')
  }
  if (dezDaysList[index]=== 4 || dezDaysList[index]=== 11 ||dezDaysList[index] === 18 || dezDaysList[index]=== 25){
    dayOfTheMonth.classList.add('friday')
  }
}

//Ex 2
function createButton (buttonName){
  let button = document.createElement('button')
  button.innerHTML = buttonName
  button.setAttribute('id','btn-holiday')
  document.querySelector('.buttons-container').appendChild (button)
}
createButton ('Feriados')

//Ex 3
document.getElementById('btn-holiday').addEventListener ('click', function(){
let holidayClass = document.getElementsByClassName('holiday')
let greenColor = 'green'
let basicColor = 'rgb(238,238,238)'
if (document.querySelector('.holiday').style.backgroundColor == greenColor){
  for (let index = 0; index < holidayClass.length; index ++){
  holidayClass[index].style.backgroundColor = basicColor}}
else {
  for (let index = 0; index < holidayClass.length; index ++){
  holidayClass[index].style.backgroundColor = greenColor}}
  })

//Ex 4
function createFridayButton (buttonName){
  let button = document.createElement('button')
  button.innerHTML = buttonName
  button.setAttribute('id','btn-friday')
  document.querySelector('.buttons-container').appendChild (button)
}
createFridayButton ('Sexta-feira')

//Ex 5
function sextou(fridays){
  let fridayButton = document.getElementById('btn-friday')
  let fridayClass = document.getElementsByClassName('friday')
  let altText = 'Sextou!'
  fridayButton.addEventListener('click', function(){
  for (let index = 0; index < fridayClass.length; index ++){
  if (fridayClass[index].innerHTML == fridays[index]){
    fridayClass[index].innerHTML = altText}
  else {
    fridayClass[index].innerHTML = fridays[index]}
  }
  }
  )
  }
  decFridays = [4, 11, 18, 25]
  sextou(decFridays)

//Ex 6
function increase(){
  let diasDoMes = document.getElementById('days')
  diasDoMes.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '30px'
  })
}
increase()

function decrease(){
  let diasDoMes = document.getElementById('days')
  diasDoMes.addEventListener('mouseout', function(event){
    event.target.style.fontSize = '20px'
  })
}
decrease()

//Ex 7
function createTask(task){
  let createdTask = document.createElement('span')
  createdTask.innerHTML = task
  document.querySelector('.my-tasks').appendChild(createdTask)
}
createTask('Cozinhar')

//Ex 8
function addSubtitle(color){
  let subtitle = document.createElement('div')
  subtitle.style.backgroundColor = color
  subtitle.classList.add('task')
  document.querySelector('.my-tasks').appendChild(subtitle)
}
addSubtitle('red')

//Ex 9
function colorAttribution(){
  let colorDivs = document.querySelector('.my-tasks')
  colorDivs.addEventListener('click',function(event){
    if(event.target.classList.length == 1){
    event.target.classList.add('selected')}
    else {event.target.classList.remove('selected')}
  }
  )
}
colorAttribution()

//Ex 10
function paintDay(){
  let daysToBePainted = document.querySelector('#days')
  let selectedColor = document.querySelector('.task selected').style.backgroundColor
  daysToBePainted.addEventListener('click', function(event){
    if(event.target.style.color == selectedColor){
      event.target.style.color = rgb(119,119,119)
    }
    else{
      event.target.style.color = selectedColor
    }
  })
}
paintDay()
// Приветствие
let storage  = window.localStorage
let name = ''

if (!localStorage.getItem('name')) {
  name = prompt('Как тебя зовут?')
  name = name === null ? 'anonymous' : name
  storage.setItem('name', name)
} 

storage.getItem('name') && alert(`Здравствуй, ${storage.getItem('name')}!`)

// Открытие практчиеских
function openPracticalWork(numWork) {
  switch (numWork) {
    case 1: 
      alert('open of practical work one')
      break
    case 2: ;
      alert('open of practical work two')
      break
  }
}

let divTest = document.getElementById('test')
divTest.hidden = true

let btnOpenTest = document.getElementById('btnOpenTest')

let btnCheckTest = document.getElementById('btnCheckTest')
btnCheckTest.onclick = checkTest

// Открытие теста
function openTest() {
  divTest.hidden = false
}

// Проверка теста
function checkTest() {
  // Массив правильных ответов
  const rightAnswers = ['q1a3', 'q2a1', 'q3a3', 'q4a2', 'q5a3', 'q6a3', 'q7a2', 'q8a3', 'q9a2', 'q10a1' ]
  const RIGHT = '#0bb830'
  const WRONG = '#ca0202'

  // Если валидация пройдена
  if (validateTest()) {
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 3; j++) {
        let id = `q${i}a${j}`
        let answer = document.getElementById(id)
        let answerLable = document.getElementsByName(id)[0]
        if (answer.checked) {
          if (rightAnswers.indexOf(id) !== -1){
            answerLable.style.color = RIGHT
          } else {
            answerLable.style.color = WRONG
            // Если ответили неверно - подсвечиваем правильный
            let answerRightLabel = document.getElementsByName(rightAnswers[i-1])[0]
            answerRightLabel.style.color = RIGHT
          }
        }
      }
    }
  } else {
    alert(`${storage.getItem('name')}, ты ответил(-а) не на все вопросы!`)
  }
}

// Валидация теста 
function validateTest() {
  // Количество вопросов прошедших валидацию
  let qntValidate = 0

  for (let i = 1; i <= 10; i++) {
    let isValidate = false
    let question = document.getElementById(`q${i}`)
    let answers = document.getElementsByName(`q${i}`)
    let notify = document.getElementById('validateNotify')
    
    questionValidate(question, notify)

    for (let answer of answers) {
      if (answer.checked) isValidate = true
    }

    if (!isValidate) {
      questionNotValidate(question, notify)
    } else {
      qntValidate++
    }
  }

  return qntValidate === 10 ? true : false
}

// Вопрос прошёл валидацию
function questionValidate(question, notify) {
  question.style.border = 'solid 2px #0bb830'
  question.style['border-radius'] = '10px'
  notify.innerText = ''
}
// Вопрос не прошёл валдиццию
function questionNotValidate(question, notify) {
  question.style.border = 'solid 2px #ca0202'
  question.style['border-radius'] = '10px'
  notify.innerText  = 'Ты ответил(-а) не на все вопросы!'
}

// Заставка
let btnOpenBackground = document.getElementById('btnOpenBackground')
let background = document.getElementById('background')
background.hidden = true

btnOpenBackground.onclick = openBackground
background.onclick = closeBackground

let now = new Date()
let options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}

function openBackground() {
  background.hidden = false
  background.innerHTML = `<p class = "backgroundLabel">
                            ${now.toLocaleString('ru', options)}
                          <br><br><br>   
                            ${localStorage.getItem('name')}
                          </p>`
}

function closeBackground() {
  background.hidden = true
}

// Смена темы
let btnChangeBackground = document.getElementById('changeBackground')
let body = document.body

btnChangeBackground.addEventListener('click', () => {
  console.log(btnChangeBackground.getAttribute('class'))
  if (btnChangeBackground.getAttribute('class') === 'fa-regular fa-sun') {
    body.style['background-color'] = '#2d7767'
    body.style.color = '#18222d'
    btnChangeBackground.setAttribute('class', 'fa-solid fa-moon')
  } else {
    body.style['background-color'] = '#18222d'
    body.style.color = '#fcbe24'
    btnChangeBackground.setAttribute('class', 'fa-regular fa-sun')
  }
})

// Анимация для картинки
let imgJS = document.getElementById('imgJS')

imgJS.onmouseover = () => {
  imgJS.style['border-radius'] = '30px'
  imgJS.style.transition = 'border-radius .2s linear'
}

imgJS.onmouseout = () => {
  imgJS.style['border-radius'] = '0'
  imgJS.style.transition = 'border-radius .2s linear'
}
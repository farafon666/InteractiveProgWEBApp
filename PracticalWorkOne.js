// #0
var x = 123;
console.log(typeof x)
if (true) {
    alert(x)
} else {
    alert(x)
}

// #1
let age = prompt('Укажите ваш возраст:')
switch (age){
    case age < 18 && age > 4:
        alert(`Вы не достигли совершенного возраста! Вам - ${age} лет!`)
        break
    case age >= 18 && age < 130:
        alert(`Вы достигли совершенного возраста! Вам - ${age} лет!`)
        break
    default:
        alert('Вы ввели некорректный возраст!')
}

// #2
let i = 1;
while (i <= 40) {
    console.log(i)
    i++
}
let j = 1;
do {
    console.log(j)
    j++
} while (j < 40)
for (let k = 1; k <= 40; k++) {
    console.log(k)
}

// #3
while (true) {
    alert('VIRUS!!!1!1')
}

// #4
let num = prompt('Введите число больше:')
switch (num) {
    case num > 5:
        alert('Поздравляем!')
        break
    case num === null:
        alert('Вы закрыли окно!')
        break
    default:
        num = prompt('Введите число повторно!')
        num > 5 ? alert('Поздравляем!') : alert('Ошибка!')
}

// #5
for(let i = 8; i <= 20; i+=2) console.log(i)

// #6
for(let i = 1; i <= 7; i+=2){
    if (i === 5) continue
    console.log(i)
}

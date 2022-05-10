// #1
let arrOne = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let arrTwo = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
let arrThree = Array.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)

// #2
alert(arrOne[4])
arrOne[4] = 99

// #3
let length_of_array = arrOne.length
alert(length_of_array)

// #4
for (let item of arrOne)
    alert(item)

// #5
const arrConcatOne = ['a', 'b', 'c']
const arrConcatTwo = ['d', 'e', 'f']
let arrConcat = arrConcatOne.concat(arrConcatTwo)
alert(arrConcat)

// #6 #7
alert(arrConcatOne.pop())

// #8
arrConcat.unshift('f')

// #9
let now = new Date()
alert(now)

// #10
let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}
alert(now.toLocaleString('ru', options))

// #11
prodTwoNumbers = () => Math.floor(Math.random() * 50) * Math.floor(Math.random() * 50)
alert(prodTwoNumbers())
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str_1 = 'hello world'
console.log(str_1.length)
let str_2 = 'lorem ipsum'
console.log(str_2.length)
let str_3 = 'javascript is cool'
console.log(str_3.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str_1up = 'hello world'
console.log(str_1up.toUpperCase())
let str_2up = 'lorem ipsum'
console.log(str_2up.toUpperCase())
let str_3up = 'javascript is cool'
console.log(str_3up.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let str_1low = 'hello world'
console.log(str_1low.toLowerCase())
let str_2low = 'lorem ipsum'
console.log(str_2low.toLowerCase())
let str_3low = 'javascript is cool'
console.log(str_3low.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let d_str = ' dirty string   '
console.log(d_str.substring(1, 13));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';
let arr = str.split(' ');
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10,8,-7,55,987,-1011,0,1050,0];
let numsArray = []
let map = numbers.map (function (value){
    let strArray = value.toString()
    numsArray.push(strArray)
})
console.log(numsArray, typeof(numsArray[0]));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,22,3];
let sortNums = (direction) => {
    if (direction === 'ascending'){
        return nums.sort((a, b) => a - b)}
    if (direction === 'descending'){
        return nums.sort((a, b) => b - a)}
}
console.log(sortNums('ascending'));
console.log(sortNums('descending'));

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let desArr = coursesAndDurationArray.sort((a, b) => b.monthDuration -a.monthDuration)
console.log(desArr);
let filterArray = coursesAndDurationArray.filter(value => value.monthDuration >5)
console.log(filterArray);
let filmapArray = coursesAndDurationArray.map(function (value, index){
     return {...value, id:index+1}
})
console.log(filmapArray);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//in
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let cards = [

]




// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
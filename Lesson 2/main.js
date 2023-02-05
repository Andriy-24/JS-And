// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".


// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль.
let arr;
arr = [10, 20, -1, -4, 5, 'juji', true, "horo", 6.2, 'solo']
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title : 'book1',
    pageCount : 200,
    genre : 'detective'
}
console.log(book1);

let book2 = {
    title : 'book2',
    pageCount: 150,
    genre: 'fantasy'
}
console.log(book2);

let book3 = {
    title : 'book3',
    pageCount : 250,
    genre : 'horror'
}
console.log(book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book_1 = {
    title : 'book_1',
    pageCount : 230,
    genre : 'detective',
    authors : [name='vasya', age= 37]
}
console.log(book_1);

let book_2 = {
    title : 'book_2',
    pageCount: 180,
    genre: 'fantasy',
    authors : [name='misha', age= 27]
}
console.log(book_2);

let book_3 = {
    title : 'book_3',
    pageCount : 290,
    genre : 'horror',
    authors : [name='kolya', age= 35]
}
console.log(book_3);

// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let arrs = [
    user1= {
        name:'vasya',username:'vaskin',password:346345432},
    user2= {
        name:'petya',username:'petkin',password:3242623532},
    user3= {
        name:'kolya',username:'kolkin',password:678687682},
    user4= {
        name:'pasha',username:'latkin',password:67869690},
    user5= {
        name:'misha',username:'nitkin',password:33252672477348},
    user6= {
        name:'vova',username:'vokin',password:3412525235},
    user7= {
        name:'tolya',username:'rokin',password:32647858959},
    user8= {
        name:'sonia',username:'lekin',password:1214124},
    user9= {
        name:'katya',username:'sokin',password:98795678},
    user10= {
        name:'nadia',username:'shevkin',password:456734325}
]
console.log(arrs);
console.log(arrs[0].password);
console.log(arrs[1].password);
console.log(arrs[2].password);
console.log(arrs[3].password);
console.log(arrs[4].password);
console.log(arrs[5].password);
console.log(arrs[6].password);
console.log(arrs[7].password);
console.log(arrs[8].password);
console.log(arrs[9].password);

// Є змінна х, якій ви надаєте довільне числове значення.
    // Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x_1 = 1
    if(x_1 !== 0) {
        console.log('вірно')}
    else{
    console.log('невірно')
}

let x_2 = 0
if(x_2 !== 0) {
    console.log('вірно')}
else{
    console.log('невірно')
}

let x_3 = -3
if(x_3 !== 0) {
    console.log('вірно')}
else{
    console.log('невірно')
}

// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 59;
    if (time >=0 && time <=15) {
    console.log('first')}
    else if (time >=16 && time <=30) {
    console.log('second')}
    else if (time >=31 && time <=45){
        console.log('third')}
    else if (time >=46 && time <=59){
    console.log('fourth')}

// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 30;
    if (day >=0 && day <=10) {
        console.log('first decade')
    }
    else if (day >=11 && day <=20) {
        console.log('second decade')
    }
    else if (day >=21 && day <=31) {
        console.log('third decade')
    }
// з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]
if (coursesAndDurationArray[0].monthDuration >5){
        console.log('Супер!')}
if (coursesAndDurationArray[1].monthDuration >5){
        console.log('Супер!')}
if (coursesAndDurationArray[2].monthDuration >5){
        console.log('Супер!')}
if (coursesAndDurationArray[3].monthDuration >5){
        console.log('Супер!')}
if (coursesAndDurationArray[4].monthDuration >5){
        console.log('Супер!')}
if (coursesAndDurationArray[5].monthDuration >5){
        console.log('Супер!')}


// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let week = +prompt('enter the day number')
switch (week){
    case 1:
        alert('Monday')
        break;
    case 2:
        alert('Tuesday')
        break;
    case 3:
        alert('Wednesday')
        break;
    case 4:
        alert('Thursday')
        break;
    case 5:
        alert('Friday')
        break;
    case 6:
        alert('Saturday')
        break;
    case 7:
        alert('Sunday')
        break;
}

// Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let num1 = +prompt('enter first number')
let num2 = +prompt('enter second number')
    if (num1 > num2){
        console.log(num1)
    }
    else if (num1 === num2){
        console.log('first number = second number')
    }
    else {
    console.log(num2)
}

// є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x = 52;
    x = x || 'default'
console.log(x)

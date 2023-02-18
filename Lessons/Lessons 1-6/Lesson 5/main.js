// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250



// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let rectangle = (a, b) => a * b;
console.log(rectangle(10, 20))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const PI = 3.14;
let circle = (r) => PI * Math.pow(r,2);
console.log(circle(2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cylinder = (h, r) => 2* PI* r* (h+ r);
console.log(cylinder(10, 4));

// - створити функцію яка приймає масив та виводить кожен його елемент
let f_users = (arguments) => {
    for (const argument of arguments) {
        console.log(argument);
    }
}

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
f_users(users)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let text = (par) => document.write(`<p>${par}</p>`)
text('lorem')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let ul_1 = (lir) => {
    document.write(`<ul>`)
    document.write(`<li>${lir}</li><li>${lir}</li><li>${lir}</li>`)
    document.write(`</ul>`)
}
ul_1('lorem ipsum')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let ul = (a, b) => {
    document.write(`<ul>`)
    for (let i = 0; i < b; i++) {
        document.write(`<li>${a}</li>`)
    }
    document.write(`</ul>`)
}
ul('Lorem', 5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let primitive = [10, 5, 'lorem', 'ipsum', true, false,]

let far = (arr) => {
    document.write(`<ul>`)
    for (let i = 0; i < arr.length; i++) {
        const ar = arr[i];
        document.write(`<li>${ar}</li>`)
    }
    document.write(`</ul>`)
}
far(primitive)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let us = (mass) => {
    for (const mas of mass) {
        document.write(`<div>${mas.id} - ${mas.name} - ${mas.age}</div>`)
    }
}
let users_2 = [
    {name: 'vasya', age: 31,id: 1},
    {name: 'petya', age: 30,id: 2},
    {name: 'kolya', age: 29,id: 3},
    {name: 'olya', age: 28,id: 4},
    {name: 'max', age: 30,id: 5},
    {name: 'anya', age: 31,id: 6},
    {name: 'oleg', age: 28,id: 7},
    {name: 'andrey', age: 29,id: 8},
    {name: 'masha', age: 30,id: 9},
    {name: 'olya', age: 31,id: 10},
    {name: 'max', age: 31,id: 11}];
us(users_2)
document.write(`<hr>`)
// - створити функцію яка повертає найменьше число з масиву
let min_numArray = (array) => {
    min = array[0]
    max = min;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) max = array[i];
        if (array[i] < min) min = array[i];
    }
    document.write(max)
    document.write(`<br>`)
    document.write(min)
}
let arrayNumbers =  [15,6,7,-9,0,2,-14,-22,3,8,26,27]
min_numArray(arrayNumbers)
document.write(`<hr>`)
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (array) => {
    let su = 0;
    for (const item of array) {
        su += item;
    }
    return su;
}
let numebersArr = [1,2,3,4,5]
document.write(`${sum(numebersArr)}`)
document.write(`<hr>`)
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let arrs = [1,2,3,4,5,6,7]
let swap = (arr, index1,index2) => {
    temp1 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp1;
}
swap(arrs,0,1)
console.log(arrs)
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    if (exchangeCurrency === 'USD'){
        return  a = sumUAH / currencyValues;
    }
    if (exchangeCurrency === 'EUR'){
        return b = sumUAH / currencyValues;
    }
}
console.log(exchange(10000, 40,'USD'));
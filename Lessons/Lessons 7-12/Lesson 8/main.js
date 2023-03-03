// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let massUser = []
function User(id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    massUser.push(this)
}
new User(1, 'vasya', 'petkin', 'vasya@gmail.com', 380343240854);
new User(2, 'anna', 'andrerson', 'anna@gmail.com', 56564547);
new User(3, 'katya', 'brown', 'katya@gmail.com', 4567745);
new User(4, 'ira', 'kim', 'ira@gmail.com', 5745436346);
new User(5, 'bogdan', 'foster', 'bogdan@gmail.com', 7547457457);
new User(6, 'petya', 'davis', 'petro@gmail.com', 3459546363);
new User(7, 'andriy', 'garcia', 'andrik@gmail.com', 23435262);
new User(8, 'vasya', 'johnson', 'vasil@gmail.com', 1231235323);
new User(9, 'pasha', 'carter', 'pasha@gmail.com', 745845634);
new User(10, 'vitya', 'rodriguez', 'vitya22@gmail.com', 5433453544);
console.log(massUser);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(massUser.filter(value => value.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(massUser.sort((a, b) => b.id - a.id));


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client extends User{
    constructor(id,name,surname,email,phone,order) {
        super(id,name,surname,email,phone);
        this.order = order;
    }
}

console.log(new Client(10, 'vitya', 'rodriguez', 'vitya22@gmail.com', 5433453544, ['sdad', 'sdaaswfda', 'wdw']));

let clientMass = [
    new Client(1, 'vasya', 'petkin', 'vasya@gmail.com', 380343240854, ['ipsum']),
    new Client(2, 'anna', 'andrerson', 'anna@gmail.com', 56564547, [25]),
    new Client(3, 'katya', 'brown', 'katya@gmail.com', 4567745, []),
    new Client(4, 'ira', 'kim', 'ira@gmail.com', 5745436346, ['lorem','ipsum',25]),
    new Client(5, 'bogdan', 'foster', 'bogdan@gmail.com', 7547457457, ['lorem','ipsum',25,'wdaw','2254']),
    new Client(6, 'petya', 'davis', 'petro@gmail.com', 3459546363, ['lorem','ipsum',25]),
    new Client(7, 'andriy', 'garcia', 'andrik@gmail.com', 23435262, ['lorem','ipsum',25]),
    new Client(8, 'vasya', 'johnson', 'vasil@gmail.com', 1231235323, ['lorem',25]),
    new Client(9, 'pasha', 'carter', 'pasha@gmail.com', 745845634, ['lorem','ipsum',25]),
    new Client(10, 'vitya', 'rodriguez', 'vitya22@gmail.com', 5433453544, ['lorem','ipsum',25])
]
// створити пустий масив, наповнити його 10 об'єктами Client

// console.log(clientMass);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let clientSort = clientMass.sort((a, b) => a.order.length - b.order.length)
console.log(clientSort);

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
function Car(model,maker,year,maxSpeed,engineCapacity){
    this.model = model;
    this.maker = maker;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
}
let carFun = new Car('A5','Audi',2009,280,2.0)
console.log(carFun);
let carFunDrive = function (){
    console.log(`їдемо зі швидкістю ${carFun.maxSpeed} на годину`)
}
carFunDrive()

let carFunInfo = function (){
    console.log(`
        Модель - ${carFun.model}
        Виробник - ${carFun.maker}
        Рік випуску - ${carFun.year}
        Максимальна швидкість - ${carFun.maxSpeed}
        Об'єм двигуна - ${carFun.engineCapacity}
    `)
}
carFunInfo()

let carFunIncreaseMaxSpeed = function (newSpeed){
    return carFun.maxSpeed += newSpeed;
}
console.log(carFunIncreaseMaxSpeed(20));

carFunChangeYear = function (newValue){
    return carFun.year = newValue;
}
console.log(carFunChangeYear(2010));

carFunAddDriver = function (driver){
    return carFun.driver = driver;
}
console.log(carFunAddDriver({name: 'Petya', age: 31}));
console.log(carFun);

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
class Car1 extends Car{
    constructor(model,maker,year,maxSpeed,engineCapacity) {
        super(model,maker,year,maxSpeed,engineCapacity);
    }
}
let carFun1 = new Car1('A3','Audi',2016,240,1.8)

let carFun1Drive = function (){
    console.log(`їдемо зі швидкістю ${carFun1.maxSpeed} на годину`)
}
carFun1Drive()

let carFun1Info = function (){
    console.log(`
        Модель - ${carFun1.model}
        Виробник - ${carFun1.maker}
        Рік випуску - ${carFun1.year}
        Максимальна швидкість - ${carFun1.maxSpeed}
        Об'єм двигуна - ${carFun1.engineCapacity}
    `)
}
carFun1Info()

let carFun1IncreaseMaxSpeed = function (newSpeed){
    return carFun1.maxSpeed += newSpeed;
}
console.log(carFun1IncreaseMaxSpeed(20));

carFun1ChangeYear = function (newValue){
    return carFun1.year = newValue;
}
console.log(carFun1ChangeYear(2018));

carFun1AddDriver = function (driver){
    return carFun1.driver = driver;
}
carFun1AddDriver({name: 'Andriy', age: 29})
console.log(carFun1);

//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

function Cinderella(name,age,footsize) {
    this.name = name;
    this.age = age;
    this.footsize = footsize;
}
let cinderMass = [
    new Cinderella('Oksana',20,34),
    new Cinderella('Iryna',19, 36),
    new Cinderella('Olena',22 , 37),
    new Cinderella('Lyudmyla',21 , 35),
    new Cinderella('Yulia',18 , 35),
    new Cinderella('Anna',20 , 37),
    new Cinderella('Sofiya',18 , 38),
    new Cinderella('Yevheniia',19 , 36),
    new Cinderella('Liliya',18 , 36),
    new Cinderella('Viktoriya',21 , 37)
]
console.log(cinderMass);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

class Prince {
    constructor(name,age,shoe){
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let prince = new Prince('Borys',21,35)

for (const item of cinderMass) {
    if (item.footsize === prince.shoe & item.age <= 20){
        console.log(item)
    }
}
console.log('')
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

console.log(cinderMass.find(value => value.footsize === prince.shoe & value.age <=20));


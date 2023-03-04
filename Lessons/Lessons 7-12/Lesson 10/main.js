// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let form = document.createElement('form')
let input1 = document.createElement('input')
input1.placeholder = 'enter your name'
let input2 = document.createElement('input')
input2.placeholder = 'enter your surname'
let input3 = document.createElement('input')
input3.placeholder = 'enter your age'
input3.type = 'number'
let butForm = document.createElement('button')
let divForm = document.createElement('div')
butForm.innerText = 'Send'
butForm.onclick = function (ev){
    ev.preventDefault();
    let h2 = document.createElement('h2')
    h2.innerText = input1.value +' '+input2.value+' - '+input3.value
    divForm.appendChild(h2)
}
form.append(input1,input2,input3,butForm,divForm)
document.body.appendChild(form)
//
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1










// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію







// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//







//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// !! Є в минулому таску !!
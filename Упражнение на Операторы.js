//Упражнение после раздела 2.8 "Операторы сравнения" (учебник learn.javascript.ru)

/* alert( 5 > 4); //true
alert( "ананас" > "яблоко" ); //false
alert( "2" > "12" ); //true
alert( undefined == null ); //true
alert( undefined === null ); //false
alert ( null == "\n0\n" ); //false
alert ( null === +"\n0\n" ); //false */

//Упражнение после раздела 2.10 "Условные операторы" (учебник learn.javascript.ru)

//Выведется ли alert?
if ("0") {
    alert('Привет');
} //ДА, выведется. Т.к. любая строка, кроме пустой " ", в логическом контексте является TRUE. Строка "0" не пустая.


// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
let JsOfficialName = prompt("Какое официальное название JavaScript?", " ");
if (JsOfficialName == "ECMAScript") {
    alert("Верно!");
} else {
    alert("Не знаете? ECMAScript!");
}


/* Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа. */
let SetNumber = prompt("Введите число", " ");
if (SetNumber > 0) {
    alert(1);
} else if (SetNumber < 0) {
    alert(-1);
} else {
    alert(0);
}


//Задача от Шведа. Написать код, который проверит: есть ли пользователю 18 лет и девственник ли он (решить, используя if...else, prompt, alert).
//Вначале решил сделать при помощи confirm, т.к. такое решение показалось легче.
let UserAge = confirm("Тебе есть 18?");
if (UserAge == false) {
    alert("не дрочи! Учи JS!");
} else {
    let SexStatus = confirm("Был ли у тебя секс?");
    if (SexStatus == true) {
        alert("ты мачо!");
    } else {
        alert("ты девственник!");
    }
} //код работает. Программа выполняется

//Потом решил сделать через prompt и немного переформулировал вопрос.
let UserAge2 = prompt("Сколько тебе лет?", " ");
if (UserAge2 < 18) {
    alert("не дрочи! Учи JS!");
} else {
    let SexStatus2 = prompt("Сколько раз у тебя был секс?", " ");
    if (SexStatus2 > 0) {
        alert("Ты мачо!");
    } else {
        alert("Ты девственник!");
    }
} //код работает. Программа выполняется
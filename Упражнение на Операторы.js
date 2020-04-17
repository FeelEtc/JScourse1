//упражнение после раздела 2.8 "Операторы сравнения" (учебник learn.javascript.ru)

/* alert( 5 > 4); //true
alert( "ананас" > "яблоко" ); //false
alert( "2" > "12" ); //true
alert( undefined == null ); //true
alert( undefined === null ); //false
alert ( null == "\n0\n" ); //false
alert ( null === +"\n0\n" ); //false */

//Задача от Шведа. Написать код, который проверит: есть ли пользователю 18 лет и девственник ли он (решить, используя if...else, prompt, alert)


let UserAge = confirm("Тебе есть 18?"); //вначале решил сделать при помощи confirm, т.к. такое решение показалось легче
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


let UserAge2 = prompt("Сколько тебе лет?", " ");
if (UserAge2 < 18) {
    alert("не дрочи! Учи JS!");
}   else {
    let SexStatus2 = prompt("Сколько раз у тебя был секс?", " ");
        if (SexStatus2 > 0) {
            alert("Ты мачо!");
        } else {
            alert("Ты девственник!");
        }
}
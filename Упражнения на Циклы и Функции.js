//Задача 1
/*let i = 3;

while (i) {
  alert( i-- );
}
// 3 (итерация 1: значение i уменшилось на 1, т.е. i = 2, но выведется старое значение i = 3 (т.к. i-- в постфиксной форме))
// 2 (итерация 2: значение i уменшилось на 1, т.е. i = 1, но выведется старое значение i = 2 (т.к. i-- в постфиксной форме))
// 1 (итерация 3: значение i уменшилось на 1, т.е. i = 0, но выведется старое значение i = 1 (т.к. i-- в постфиксной форме))
// цикл закончился, т.к. i = 0
*/

//Задача2
/*let z = 3;

while (z >= 0) {
  alert( z--);
}// возвращаются значения: 3, 2, 1, 0 (т.к. в условии обозначено, что z может принимать значение >= 0)
*/

//Задача3
//Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
//Оба цикла выводят alert с одинаковыми значениями или нет?

/* //Префиксный вариант ++i:
let i = 0;

while (++i < 5) alert( i );// 1, 2, 3, 4
*/

/*
//Постфиксный вариант i++
let z = 0;

while (z++ < 5) alert(z);// 0, 1, 2, 3

//ОТВЕТ: цикл с преффиксной и постфиксной формой инкремента выводят разные значения
*/

//ФУНКЦИИ
//упражняюсь в выводе функции
let userName = 'Васян!';

function showMessage(){
  let message = 'Привет, ' + userName;
  alert(message);
  let ruka = prompt("А ты какой рукой дро...зубы чистишь?");
  if(ruka == "правой") {
    alert("Ну ты попса!");
  } else if(ruka == "да пошел ты"){
      alert("Сам иди, пёс!");
  } else if(ruka == "левой"){ 
      alert("Ну ты оригинал!")
  } else if(ruka == "обеими"){ 
      alert("Ну ты мужик!")
  } else if(ruka == "двумя"){ 
      alert("Ну ты мужик!")   
  } else {
      alert("Да ты одолел уже х##ню вводить всякую!!! Иди проспись, щенок");
  }
}

showMessage();//в диалоговом окне браузера вывелось "Привет, Васян!" А потом prompt и нужный alert, исходя из ответов пользователя (условий)

//alert(message); //переменная message не выведется в диалоговом окне, т.к. она создана и видна только ВНУТРИ ФУНКЦИИ



































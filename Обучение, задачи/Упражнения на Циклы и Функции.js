//Задачи из learn.javascript.ru
//Задача 1
//Какое последнее значение выведет этот код? Почему?
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
//Какие значения выведет цикл while?
//Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
//Оба цикла выводят alert с одинаковыми значениями или нет?

/* 
//Префиксный вариант ++i:
let i = 0;
while (++i < 5) alert( i );// alert выведет значения: 1, 2, 3, 4*/
//итерация 1: выведется 1 (++i вначале увеличит i до 1, затем произойдет сравнение и выполнится alert)
//итерация 2: выведется 2 (++i вначале увеличит i до 2, затем произойдет сравнение и выполнится alert)
//итерация 3: выведется 3 (++i вначале увеличит i до 3, затем произойдет сравнение и выполнится alert)
//итерация 4: выведется 4 (++i вначале увеличит i до 4, затем произойдет сравнение и выполнится alert)
//При i = 4 произойдёт увеличение i до 5, а потом сравнение while (5 < 5) – это неверно.
//Поэтому на этом цикл остановится, и значение 5 выведено не будет.

/* 
//Постфиксный вариант i++
let i = 0;
while (i++ < 5) alert(i);// 1, 2, 3, 4, 5
//итерация 1: 1 (i++ увеличит i до 1, но возвращает В СРАВНЕНИЕ старое значение i = 0, так что i++ < 5 это true.
//Но последующий вызов alert уже не относится к этому выражению, так что получит новый i = 1)
//итерация 2: 2 (i++ увеличит i до 2, но возвращает В СРАВНЕНИЕ старое значение i = 1, так что i++ < 5 это true.
//Но последующий вызов alert уже не относится к этому выражению, так что получит новый i = 2)
//итерация 3: 3 (i++ увеличит i до 3, но возвращает В СРАВНЕНИЕ старое значение i = 2, так что i++ < 5 это true.
//Но последующий вызов alert уже не относится к этому выражению, так что получит новый i = 3)
//итерация 4: 4 (i++ увеличит i до 4, но возвращает В СРАВНЕНИЕ старое значение i = 3, так что i++ < 5 это true.
//Но последующий вызов alert уже не относится к этому выражению, так что получит новый i = 4)
//итерация 5: (i++ увеличит i до 5, но возвращает В СРАВНЕНИЕ старое значение i = 4, так что i++ < 5 это true.
//Но последующий вызов alert уже не относится к этому выражению, так что получит новый i = 5)
//Значение i = 5 последнее, потому что на следующем шаге while (5 < 5) ложно.

//ОТВЕТ: цикл с преффиксной и постфиксной формой инкремента выводят разные значения*/

//примеры циклов do{}while(); и while(){}. Работают с ВНЕШНИМИ переменными.
/*let i2 = 1;
do {
  console.log(i2);
  i2++;
} while(i2 < 10); //1, 2, 3, 4, 5, 6, 7, 8, 9
*/

/*let i3 = 1;
while(i3 < 10) {
  console.log(i3);
  i3++;
} //1, 2, 3, 4, 5, 6, 7, 8, 9
*/

//ФУНКЦИИ
//упражняюсь в выводе функции
/* let userName = 'Васян!';

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
*/

function PlusNumber() {
  let i = 0;
  do {
    console.log(i);
    i = i + 3;
  } while(i < 10);
}
PlusNumber();

function MinusNumber() {
  let i = 10;
  while(i > 0) {
    console.log(i);
    i -= 2;
  }
}
MinusNumber();


function Division() {
  for (let i = 100; i > 0.5; i = i / 10) {
    console.log(i);
  }
}
Division();


//Задача после видео "Функции" 
function myFirstApp(name, age) {
  alert(`Привет, меня зовут ${name} и это моя первая программа!`);

  function showSkills() {
    let skills = ['html', 'css', 'javascript', 'python', 'MySQL'];   //вывести: "я владею.....название технологии"
    for (let i = 0; i < skills.length; i++) {
      alert(`Я владею ${skills[i]} и это очень круто!`);
    }
  }
  showSkills();

  function checkAge() { //открывается блок кода - "тело функции"
  let age = prompt('Сколько вам лет?', ' '); //просто заккоментил, дабы эта строчка кода не работала.
  //Prompt в данном случае - это альтернативный способ введения возраста
    if (age >= 18) {
      alert('У меня отличные шансы стать front-end developer!');
    } else {
      alert('Молодец, что ты так рано задумался о своем будущем!');
    }  
  }
  checkAge();

  function calcPow(num) {
    return num * num;
  }
  alert(calcPow(5)); //вывелось значение 25
  alert(calcPow(9)); //вывелось значение 81
} // тело функции закончилось, фигурная скобка закрывается
myFirstApp('Александр', 32);


// пример прямой проверки на undefined (при параметрах функции по умолчанию)
function showMessage(from, text) {
  if (text === undefined) {
    text = 'текст не добавлен';
  }

  alert( from + ": " + text );
}
showMessage('Привет');





























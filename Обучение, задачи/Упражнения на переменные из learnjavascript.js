//7.04.2020
// ПОВТОРЯЮ ПРИМЕРЫ ИЗ РАЗДЕЛА, ПРАКТИКУЮ

let message;

message = 'Hello!';

message = 'World!'; // значение изменено

alert(message);

let заяц;
заяц = 'серенький';
alert (заяц);

// Пример КАК НЕ НАДО СОЗДАВАТЬ (ОБЪЯВЛЯТЬ/ОПРЕДЕЛЯТЬ) ПЕРЕМЕННУЮ
num = 5; // создали переменную "num" без ключевого слова "let"
alert(num); //всё работает: значение переменной выводится во всплывающем окошке в браузере (но если код большой, в нём могут быть ошибки)

const myBirthday = '16.02.1988';

var MyAge = 32;
alert(MyAge);

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...когда нам нужно выбрать цвет, к примеру, то легче создать новую переменную с простым именем "color", чем вспоминать кодировку цвета
let color = COLOR_ORANGE;
alert(color); // #FF7F00

// ЗАДАЧИ

// 1. Работа с переменными
// Объявите две переменные: admin и name.
// Запишите строку "Джон" в переменную name.
// Скопируйте значение из переменной name в admin.
// Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).
let admin, name;
name = 'Джон';
admin = name;
alert(admin);

// 2. Придумайте правильные имена
// Создайте переменную для названия нашей планеты. Как бы вы её назвали?
// Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную?
let OurPlanetName = 'Земля';
let CurrentUserName = 'Джон';

//08.04.2020
// ТИПЫ ДАННЫХ

//Простые типы данных
//логический тип
let bool = true;
let bulBul = false;

//комплексные типы данных
// Объекты
let obj = {
    dog: 'Gavvv',
    cat: 'Meow'
};

//массив
let mass = [1, 'string', true];
mass[0] = 30;
// mass = [30, 'string', true];
console.log(mass);

console.log(4/0); //после запуска этого кода в консоле вывелось значение infinity (бесконечность), которое относится к типу данных "числа"
console.log('mass' * 8); ////после запуска этого кода в консоле вывелось значение Nan (not a number), которое, как ни странно, тоже относится к типу данных "числа"
console.log(2 + 2 + 2 == 6); //двойным знаком "равно" в JS обозначается  "равенство". Одинарное "=" это "оператор присваивания"
console.log(2 + 2 + 2 === 6); //тройной знак "равно" тоже допускается в качестве "равенства"

console.log(2 + "2" === 4 ); //при запуске этого кода вышло булинное значение false, т.к. слева будет значение "22", а справа "4"
console.log('p' + '47'); //КОНКАТЕНАЦИЯ: когда к любому типу данных прибавляется строка, то всё выражение (которое записано в скобках) превращается в строку

let x = 5;
x = x + 1; //изменяем значение переменной: к текущему значению переменной прибавляем 1
console.log(x); //вышло значение 6
//можно записать это же выражение быстрее. ПРИМЕР ниже

x += 1; //ПРИМЕР: здесь мы говорим, что к тому выражению, которое уже есть (значение переменной x), мы прибавляем значение, которое находится после знака += (число 1 в данном случае)
console.log(x); //вышло значение 7

let number = 7;
number++; // оператор ++ называется "инкремент". Он увеличивает текущее значение переменной на 1
console.log(number);
number--; //оператор -- называется "декремент". Он уменьшает текущее значение переменной на 1
console.log(number);

--number; //преффиксная форма
number--; //постфиксная форма
console.log(number); //вышло значение 5


let bada = 9;
let a = bada++;
console.log(a); //вышло значение 9 (постфиксная форма bada++ увеличивает bada на 1, но возвращает старое значение (которое было до увеличения)).

let counter = 14;
let b = ++counter;
console.log(b); //вышло значение 15 (префиксная форма увеличивает counter на 1, она возвращает новое значение 15.)

/* let answer = confirm('Вам есть 18 лет?');
console.log(answer); */


//let answer = prompt('Вам есть 18 лет?', '');
//console.log(answer);

let answers = []; //создали пустой массив данных
answers[0] = prompt('Как ваши дела?', ''); //задали первый элемент массива
answers[1] = prompt('Вы уверены?', ''); //задали второй элемент массива
answers[2] = prompt('А не обманываете?', ''); //задали третий элемент массива

// document.write(answers); //вывели на экран в браузере переменную answers, в которой находится созданный нами массив данных

var sdek = 2;
sdek += 3;
// var prek2 = sdek--;
console.log(sdek);
//console.log(prek2);

let mastifNeapoletano = [];
mastifNeapoletano[0] = 43;
mastifNeapoletano[1] = 'speak';
mastifNeapoletano[2] = 35;

// document.write(answers);
console.log(mastifNeapoletano);









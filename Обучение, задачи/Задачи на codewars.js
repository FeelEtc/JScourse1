//Задачи на codewars.com

//Задача от Шведа: посчитать СУММУ ВСЕХ ЭЛЕМЕНТОВ МАССИВА
function ArraySum(massiv) {
    let sum = 0;
    for (let i = 0; i  < massiv.length; i++){
        sum = sum + massiv[i];
        //console.log(sum);
        //console.log(massiv.length);
    }
    return sum;
}
let mastino = [1, 34, 47, -2, 5, 7, 29, -5, -23];
let noga = ArraySum(mastino);
console.log(noga);

let ruka = ArraySum([3, 4, 10]);
console.log(ruka);

//TASK 21.04.2020
//Задача: посчитать сумму всех ПОЛОЖИТЕЛЬНЫХ элементов массива
function ArraySumPlus(massiv) {
    let sum = 0;    
    for (let i = 0; i  < massiv.length; i++){
        if(massiv[i] > 0) {
            sum = sum + massiv[i];
        } 
    }
    return sum;         
}
let TotalArraySumm = ArraySumPlus([1,3,5,7,9, -2, -3, -159]);
console.log(TotalArraySumm);

let NewSumm = ArraySumPlus([-2,-7,-153000, 1, 2, 3]);
console.log(NewSumm); //проверяю с другими значениями


//TASK 28.04.2020
//Задача: Найти сумму двух массивов
function arrayPlusArray(arr1, arr2) { //1я
    //4я
       function CalcArraySum1(arr) { //5я 
           let sum = 0;    //8строка 20я
           for (let i = 0; i  < arr.length; i++){ //9я строка 11я 13я 15 21 23 25 27
               sum = sum + arr[i]; //10 12 14 22 24 26
           } //16 28
           return sum; //17 29
       }// 6я строка
   
      /* function CalcArraySum2(arr) { //в этой функции нет смысла, т.к. она, по сути, такая же, как первая
           let sum = 0;    
           for (let i = 0; i  < arr.length; i++){
               sum = sum + arr[i];
           }
           return sum;
       } */ 
       return CalcArraySum1(arr1) + CalcArraySum1(arr2); //7я строка 18я строка 19я строка 30 31
   } //2я
   console.log(arrayPlusArray([1, 1, 1], [2, 2, 2])); //3я строка. Следующая строка (4я): номер 2, потом 3 32
   //результат вызова консоли: вывелось 9
   
   //2й способ решения этой задачи (подсказал Лёха Ямб)
   function ArrayPlusArray2() {
   
       function CalcArraySum(arr) {
           let sum = 0;    
           for (let i = 0; i  < arr.length; i++){
               sum = sum + arr[i];
           }
           return sum;
       }
   
       let msum = 0;
       for (let i = 0; i < arguments.length; i++) {
           msum = msum + CalcArraySum(arguments[i]);
      } 
      return msum;
   }
   let nogach = ArrayPlusArray2([1,2,3,4,5], [6,7,8,9,10,11,12]); //вывелось 78
   console.log(nogach);
   
   //Усложняю задачу: посчитать сумму трех массивов
   function ArrayPlusTrio(arr1, arr2, arr3) {
   
       function CalcArraySum(arr) {
           let sum = 0;    
           for (let i = 0; i  < arr.length; i++){
               sum = sum + arr[i];
           }
           return sum;
       }
       return CalcArraySum(arr1) + CalcArraySum(arr2) + CalcArraySum(arr3);
   }
   console.log(ArrayPlusTrio([1, 1, 1], [2, 2, 2], [3,3,3])); //вывелось 18

//TASK 03.05.2020
//Задача: написать функция, которая бы возвращала "hello world!"
function greet() {
    return "hello world!";
  }
  console.log(greet());
  
  //2способ, более замороченный, с аргументами, конкатенацией и вот этим вот всем =)
  function greet1(what, who) {
    let FullPhrase = what + " " + who + "!";
    return FullPhrase;
  }
  console.log(greet1("hello", "world"));

//TASK 08.05.2020
//You take your son to the forest to see the monkeys. You know that there are a certain number there (n),
//but your son is too young to just appreciate the full number, he has to start counting them from 1.
//As a good parent, you will sit and count with him. Given the number (n),
//populate an array with all numbers up to and including that number, but excluding zero.
//For example:
//monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//monkeyCount(1) // --> [1]

//РАБОТАЮЩАЯ ВЕРСИЯ
function monkeyCount(n) {
    let monkeyGroup = [ ];
        monkeyGroup[0] = 1;
    for(let i = 1 ; i < n; i++){
        monkeyGroup[i] = monkeyGroup[0] + i;
    }
    return monkeyGroup;
}
console.log(monkeyCount(10));

//более правильное решение
function monkeyCount2(n) {
    let monkeyGroup = [ ];
    for(let i = 0 ; i < n; i++){
        monkeyGroup[i] = i + 1;
    }
    return monkeyGroup;
}
console.log(monkeyCount2(10));

/*
//упражнялся в автоматическом заполнении массива данными
let answers = [],
    questions = [1,2,3,4,5,6,7];
for( let i = 0; i < questions.length; i++) {
    answers[i] = questions[i];
}
console.log(answers);*/

//TASK 16.05.2020
//Your task is to find the first element of an array that is not consecutive.
//By not consecutive we mean not exactly 1 larger than the previous element of the array.
//E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
//If the whole array is consecutive then return null2.
//The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

function firstNonConsecutive (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if( (arr[i + 1] - arr[i]) != 1) {
            return arr[i + 1];
        } 
    } return null;
}
console.log(firstNonConsecutive([1,2,3,5,]));
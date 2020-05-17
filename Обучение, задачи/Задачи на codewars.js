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

let YourBunnyWrote = ArraySumPlus([-2,-7,-153000, 1, 2, 3]);
console.log(YourBunnyWrote);


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
console.log(firstNonConsecutive([1,2,3,4,5,6,8]));
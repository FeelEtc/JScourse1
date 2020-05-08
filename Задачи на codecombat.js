//Задачи на codewars.com

//You take your son to the forest to see the monkeys. You know that there are a certain number there (n),
//but your son is too young to just appreciate the full number, he has to start counting them from 1.
//As a good parent, you will sit and count with him. Given the number (n),
//populate an array with all numbers up to and including that number, but excluding zero.
//For example:
//monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//monkeyCount(1) // --> [1]

//первая версия функции. Неправильное рассуждение и алгоритм
/*function monkeyCount(n) { 
    let monkeyGroup = [ ];
    let firstMonkey = 1;
    for(let i = 0; i < n; i++){
        monkeyGroup[i] =  firstMonkey + 1;
        //++monkeyGroup;
    }
    return monkeyGroup;
}
console.log(monkeyCount(10)); */

/*
//упражнялся в автоматическом заполнении массива данными
let answers = [],
    questions = [1,2,3,4,5,6,7];
for( let i = 0; i < questions.length; i++) {
    answers[i] = questions[i];
}
console.log(answers);*/

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

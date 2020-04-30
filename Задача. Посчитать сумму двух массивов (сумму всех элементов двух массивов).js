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
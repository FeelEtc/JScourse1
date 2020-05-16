/* let answers = []; //создали пустой массив данных
answers[0] = prompt('Как ваши дела?', ''); //задали первый элемент массива
answers[1] = prompt('Вы уверены?', ''); //задали второй элемент массива
answers[2] = prompt('А не обманываете?', ''); //задали третий элемент массива

document.write(answers);
*/

//заполняем один массив answers ответами на вопросы пользователей через диалоговое окно (prompt).
//для этого создаем второй массив questions с вопросами и цикл for со специальными настройками.
/*let answers = [],
    questions = [
        "Как ваше имя?",
        "Как ваша фамилия?",
        "Сколько вам лет?"
    ];

    for (let i = 0; i < questions.length; i++) {
        answers[i] = prompt(questions[i], " ");
    }

    document.write(answers);*/

//закрепляю навык. Создаю свой пример
/*let answers2 = [],
    questions2 = [
        'Что?',
        'Где?',
        'Когда?'
    ];

    for (let i2 = 0; i2 < questions2.length; i2++) {
        answers2[i2] = prompt(questions2[i2], " ");
    }
console.log(answers2);*/

//закрепляю навык. Необходимо решить эту задачу еще и с помощью цикла while
let answers3 = [],
    questions3 = [
        'Как?',
        'Куда?',
        'Зачем?'
    ];
let i3 = 0;
while(i3 < questions3.length) {
    answers3[i3] = prompt(questions3[i3], " ");
    i3++;
}
console.log(answers3);

//закрепляю навык. Необходимо решить эту задачу еще и с помощью цикла do...for
let answers4 = [],
    questions4 = [
        'Какого хрена?',
        'Нафига?',
        'Ну вот зачем?'
    ];
let i4 = 0;
do {
    answers4[i4] = prompt(questions4[i4], " ");
    i4++;
} while(i4 < questions4.length);

console.log(answers4);













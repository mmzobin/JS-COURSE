let myName = 'Alex';

let bool = false;

let modal;
console.log(myName);

console.log('4' === 4)

console.log(4 + '4');

let x = 5;
//x++;
x--;
console.log(x);

//let answer = confirm('Вам есть 18 лет?');
//console.log(answer);

//let answer = prompt('Вам есть 18 лет?', '');
//console.log(answer);

let answers = [],
    questions = [
        'Как ваше имя?',
        'Как ваша фамилия?',
        'Сколько вам лет?'
    ];


for (let i = 0; i < questions.length; i++) {
    answers[i] = prompt(questions[i], '');
}
console.log(answers);


/*let i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);*/

/*let i = 0;
while (i<10) {
    console.log(i);
    i++;
}*/
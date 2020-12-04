let userInput1 = +prompt('Введите первое число:');
let userInput2 = +prompt('Введите второе число:');

function sumRange(x, y) {
    let sum = +0;
    for (let i = x; i <= y; i++) {
        sum += i;
    }
    alert("Сумма введеных чисел равна: " + sum);
}
sumRange(userInput1,userInput2);

let intNum = +prompt('Введите число и я скажу сколько в нем цифр!');

let digits = intNum.toString().split('');
let realDigits = digits.map(Number);
alert(realDigits.length);

let test = ['bob','sahra','anna','mishel'];
test.forEach(function(item, index, array) {
    alert(`${item} имеет позицию ${index} в ${array}`);
});
/* 
Розкласти за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.
Приклад:
10369
1 0 3 6 9
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const number = 10369;
const numberToStr = number.toString();
const splittedArr = numberToStr.split('');

console.log(splittedArr.join(' '));

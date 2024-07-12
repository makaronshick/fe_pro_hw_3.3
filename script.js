/* 
Розкласти за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.
Приклад:
10369
1 0 3 6 9
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const inputValue = prompt('Enter some 5 digits number to separate digits by whitespases');

if (inputValue === null) {
    alert("You clicked 'Cancel'");
}
else if (!inputValue.trim()) {

    alert('You entered nothing (or spaces only)');
}
else if (isNaN(inputValue)) {
    alert('You entered not a number');
}
else {
    const absInt = Math.abs(parseInt(inputValue));
    const absIntToStr = absInt.toString();

    if (absIntToStr.length === 5) {
        const splittedArr = absIntToStr.split('');
        alert(splittedArr.join(' '));
    }
    else {
        alert('The entered number does not contain 5 digits');
    }
}

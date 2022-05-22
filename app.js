const CLEAR = document.getElementById('clear');
const CALCULATE = document.getElementById('calculate');
const TOTAL = document.querySelector('.total');
const NUMBERS = document.querySelector('.numbers');



CLEAR.addEventListener('click', () => {
    NUMBERS.textContent = '0'
    TOTAL.textContent = '0'
})

document.querySelectorAll('#btnNumbers').forEach(number => number.addEventListener('click', () => {
    if(NUMBERS.textContent == '0'){
        NUMBERS.textContent = '';
    }
    
    
    NUMBERS.textContent += number.textContent

    
}))

document.querySelectorAll('#btnOpts').forEach(opt => opt.addEventListener('click', () => {
    NUMBERS.textContent += opt.textContent
}))


CALCULATE.addEventListener('click', () => {
    TOTAL.textContent = eval(NUMBERS.textContent)
})
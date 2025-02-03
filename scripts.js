const incomes = document.querySelectorAll('.incomes-input');
const totalIncomesSpan = document.getElementById('total-incomes-span');

function sumOfValues (inputs, result){
    return function () {
        let sum = 0;
        inputs.forEach(num => {
            if(num.value.trim() !== ''){
                sum += Number(num.value);
            }
        });
        result.textContent = sum;
    };
}

incomes.forEach(input => {
    input.addEventListener('input', sumOfValues(incomes, totalIncomesSpan))
})

const expensesInput = document.querySelectorAll('.expenses-input');








































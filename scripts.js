const incomesInput = document.querySelectorAll('.incomes-input');
const resumeIncomesSpan = document.getElementById('resume-incomes-span');
const resumeBalanceSpan = document.getElementById('resume-balance-span');

function sumOfValues (inputs, result){
    return function () {
        let sum = 0;
        inputs.forEach(num => {
            if(num.value.trim() !== ''){
                sum += Number(num.value)
            }
        });
        result.textContent = sum;
        updateBalance()
    };
}

incomesInput.forEach(input => {
    input.addEventListener('input', sumOfValues(incomesInput, resumeIncomesSpan))
})

const expensesInput = document.querySelectorAll('.expenses-input');
const resumeExpensesSpan = document.getElementById('resume-expenses-span');

expensesInput.forEach(input => {
    input.addEventListener('input', sumOfValues(expensesInput, resumeExpensesSpan))
})

function updateBalance() {
    const totalIncome = resumeIncomesSpan.textContent
    const totalExpenses = resumeExpensesSpan.textContent
    resumeBalanceSpan.textContent = totalIncome - totalExpenses
}





































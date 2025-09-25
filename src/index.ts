let cImput = '0';
let operator = '';
let pImput = '';

function addToDisplay(value: string): void {
    let update = false;
    if(['+', '-', '*', '/'].includes(value)) {
        if (cImput !== '0' && cImput !== '') {
            if (pImput !== '' && operator === '') {
                calculate();//crear funcion calcular
            }
            pImput = cImput;
            operator = value;
            cImput = '0';
        }
    } else {
        update = true;
        if (cImput === '0' && value !== '') {
            cImput = value;
        }else{
            cImput += value;
        }

    }
    if(update) {
        updateDisplay();
    }
}

function updateDisplay(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = cImput;
}

function clearDisplay(): void {
    cImput = '0';
    operator = '';
    pImput = '';
    updateDisplay();
}

function deleteLast(): void {
    if (cImput.length > 1) {
        cImput = cImput.slice(0, -1);
    } else {
        cImput = '0';
    }
    updateDisplay();
}

function calculate(): void {
    if (pImput === '' || operator === '' || cImput === '') return;

    const num1 = parseFloat(pImput);
    const num2 = parseFloat(cImput);
    let result: number;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Error: Division by zero");
                clearDisplay();
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }

    cImput = result.toString();
    operator = '';
    pImput = '';
    updateDisplay();
}
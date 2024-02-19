import './style.css';

function addNumbers() {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const result = num1 + num2;
    document.getElementById("result").innerText = `Result: ${result}`;
}
console.log('Hello!!!321');
document.getElementById("calculate").addEventListener("click", addNumbers);
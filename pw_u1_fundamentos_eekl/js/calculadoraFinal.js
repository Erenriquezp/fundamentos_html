let num1 = 0;
let num2 = 0;

function mostrarDisplay(valor) {
    let elemento = document.getElementById('display');
    elemento.innerText = elemento.innerText + valor;
}

function calcular(operacion) {

}

function sumar(num1, num2) {
    mostrarDisplay(num1 + num2);
}

function restar(num1, num2) {
    mostrarDisplay(num1 - num2);
}

function multiplicar(num1, num2) {
    mostrarDisplay(num1 * num2);
}

function dividir(num1, num2) {
    mostrarDisplay(num1 / num2);
}

function porcentaje() {

}
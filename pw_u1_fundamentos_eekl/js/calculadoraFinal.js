const OPERADORES = ['+', '-', '*', '/'];

let num1 = null;
let num2 = null;
let operacionActual = null;
let escribiendoSegundo = false; // true cuando elegimos operador y digitamos num2

function obtenerDisplay() {
    return document.getElementById('display');
}

function limpiarDisplay() {
    const display = obtenerDisplay();
    display.innerText = '0';
    num1 = null;
    num2 = null;
    operacionActual = null;
    escribiendoSegundo = false;
}

function retroceso() {
    const display = obtenerDisplay();
    const texto = display.innerText;

    if (texto === 'Error' || texto.length <= 1) {
        display.innerText = '0';
    } else {
        display.innerText = texto.slice(0, -1);
    }
}

function mostrarDisplay(valor) {
    const display = obtenerDisplay();
    let textoActual = display.innerText;

    if (textoActual === 'Error') {
        textoActual = '0';
    }

    // Si presionan un operador (+ - * /)
    if (OPERADORES.includes(String(valor))) {
        // Si aún no hay operador seleccionado, fijamos num1 y operador
        if (operacionActual === null) {
            num1 = parseFloat(textoActual);
            operacionActual = String(valor);
            escribiendoSegundo = true;
            display.innerText = '0'; // empezar a escribir num2
            return;
        } else {
            // Ya había operador: si aún no han escrito num2 (display sigue '0'), solo cambiamos operador
            if (escribiendoSegundo && display.innerText === '0') {
                operacionActual = String(valor);
                return;
            }
            // Si ya hay num2, calculamos y dejamos listo para nueva operación encadenada (si se desea)
            calcular();
            operacionActual = String(valor);
            escribiendoSegundo = true;
            return;
        }
    }

    // Si presionan el punto decimal
    if (valor === '.') {
        if (!textoActual.includes('.')) {
            display.innerText = textoActual === '0' ? '0.' : (textoActual + '.');
        }
        return;
    }

    // Si presionan un dígito (0-9)
    const v = String(valor);
    if (/^\d$/.test(v)) {
        if (textoActual === '0') {
            display.innerText = v; // reemplaza el 0 inicial
        } else {
            display.innerText = textoActual + v;
        }
        return;
    }
}

function calcular() {
    const display = obtenerDisplay();

    if (operacionActual === null || num1 === null) return;

    num2 = parseFloat(display.innerText);

    if (isNaN(num1) || isNaN(num2)) {
        display.innerText = 'Error';
        num1 = null;
        num2 = null;
        operacionActual = null;
        escribiendoSegundo = false;
        return;
    }

    let resultado;
    try {
        switch (operacionActual) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '/':
                if (num2 === 0) throw new Error('Div/0');
                resultado = num1 / num2;
                break;
            default:
                throw new Error('Operación inválida');
        }

        if (!Number.isFinite(resultado)) {
            display.innerText = 'Error';
        } else {
            const fixed = Number(resultado.toFixed(10));
            display.innerText = String(fixed);
        }
    } catch (e) {
        display.innerText = 'Error';
    }

    // Después de calcular, el resultado pasa a ser num1 para permitir una operación nueva simple
    num1 = Number(display.innerText);
    num2 = null;
    operacionActual = null;
    escribiendoSegundo = false;
}

function porcentaje() {
    const display = obtenerDisplay();
    const texto = display.innerText;

    if (!texto || texto === 'Error') return;

    const n = parseFloat(texto);
    if (isNaN(n)) return;

    const pct = n / 100;
    display.innerText = String(pct);
}

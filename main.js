let num1= 50, num2 = 32;
let resultado;
let myStyle = "background: #99CC33;color: #000066;font-family: sans-serif;padding: 5px;border: 2px solid #0c6963;border-radius: 5px;";

//Operador de adición SUMA
resultado = num1+num2;
console.log(`%c${num1} + ${num2}=${resultado}`, myStyle);

//Operador de sustracción RESTA
resultado = num1-num2;
console.log(`%c${num1} - ${num2}=${resultado}`, myStyle);

//Operador de Multiplicación
resultado = num1*num2;
console.log(`%c${num1} X ${num2}=${resultado}`, myStyle);

//Operador de División
resultado = num1/num2;
console.log(`%c${num1} / ${num2}=${resultado}`, myStyle);

//Operador de Exponenciación
resultado = num1**num2;
console.log(`%c${num1} ^ ${num2}=${resultado}`, myStyle);

//Operador de Residuo
resultado = num1%num2;
console.log(`%c${num1}%${num2}=${resultado}`, myStyle);

//Operador de Unario Negativo
resultado = -num1
console.log(`%c${num1} Negativo ${resultado}`, myStyle);

//Operador de Unario Negativo
num2 = -32
resultado = -num2
console.log(`%c${num2} Positivo ${resultado}`, myStyle);
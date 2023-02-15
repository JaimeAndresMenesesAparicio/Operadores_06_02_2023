let num1= 50, num2 = 32;
let resultado;
let myStyle = "background: #99CC33;color: #000066;font-family: sans-serif;padding: 5px;border: 2px solid #0c6963;border-radius: 5px;";

//Operador de igualdad
console.log(`%c${num1} == ${num2} ${num1==num2}`, myStyle);

//Operador de inegualdad
console.log(`%c${num1} != ${num2} ${num1!=num2}`, myStyle);

//Operador de identico
console.log(`%c${num1} === ${num2} ${num1===num2}`, myStyle);

//Operador de no identico
console.log(`%c${num1} !== ${num2} ${num1!==num2}`, myStyle);

//Operador de mayor que
console.log(`%c${num1} > ${num2} ${num1>num2}`, myStyle);

//Operador de mayor o igual que
console.log(`%c${num1} >= ${num2} ${num1>=num2}`, myStyle);

//Operador de menor que
console.log(`%c${num1} < ${num2} ${num1<num2}`, myStyle);

//Operador de menor o igual que
console.log(`%c${num1} <= ${num2} ${num1<=num2}`, myStyle);
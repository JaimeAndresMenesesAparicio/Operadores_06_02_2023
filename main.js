let num1= 50, num2 = 32;
let resultado;
let myStyle = "background: #99CC33;color: #000066;font-family: sans-serif;padding: 5px;border: 2px solid #0c6963;border-radius: 5px;";

// Math.ceil(x)
// Devuelve el entero más pequeño mayor o igual que un número.
resultado = Math.ceil(0.4563); // utilizando esta función nos da como resultado, que acerca el valor al número entero siguiente al número puesto en la función, siempre y cuando sea un número decimal
console.log(`%c${resultado}`, myStyle);

// Math.floor(x)
// Devuelve el mayor entero menor que o igual a un número.
resultado = Math.floor(2.5698);// utilizando esta función nos da como resultado, que acerca el valor al número entero anterior al número puesto en la función, siempre y cuando sea un número decimal
console.log(`%c${resultado}`, myStyle);

// Math.max()
// Devuelve el mayor de cero o más números.
resultado = Math.max(-2, 5, -4, 3);// utilizando esta función nos muestra como resultado, el número mayor que se haya ingresado en la serie ingresada en la función
console.log(`%c${resultado}`, myStyle);

// Math.min()
// Devuelve el más pequeño de cero o más números.
resultado = Math.min(-1, 2, -3, 4, 0);// utilizando esta función nos muestra como resultado, el número menor que se haya ingresado en la serie ingresada en la función
console.log(`%c${resultado}`, myStyle);

// Math.pow(x, y)
// Las devoluciones de base a la potencia de exponente, que es, baseexponent.
resultado = Math.pow(5, 4);// utilizando esta función nos da como resultado, que se eleva el primer número ingresado las veces del segundo número y nos muestra el resultado de la operación
console.log(`%c${resultado}`, myStyle);

// Math.random()
// Devuelve un número pseudo-aleatorio entre 0 y 1.
resultado = (Math.random()*20);// utilizando esta función nos muestra en el resultado un valor aleatorio que esta contenido entre 0 y 1, y colocamos un máximo el cual es número ingresado
console.log(`%c${resultado}`, myStyle);

// Math.round(x)
// Devuelve el valor de un número redondeado al número entero más cercano.
resultado = Math.round(10.4);//// Utilizando la función nos da como resultado, que el número ingresado si tiene un decimal entre .1 a .4 lo aproxima al número entero menor cercano, si tiene un decimal entre .5 a.9 lo aproxima al número entero mayor cercano
console.log(`%c${resultado}`, myStyle);

// Math.sqrt(x)
// Devuelve la raíz cuadrada positiva de un número.
resultado = Math.sqrt(64);// utilizando la la función obtenemos la raíz cuadrada del número ingresado
console.log(`%c${resultado}`, myStyle);

// Math.trunc(x)
// Devuelve la parte entera del número x, la eliminación de los dígitos fraccionarios.
resultado = Math.trunc(50.5);// Utilizando la función nos da como resultado, que el número decimal ingresado, le elimina los decimales aproximandolo al número entero menor
console.log(`%c${resultado}`, myStyle);

resultado = 3.685454445889225788.toFixed(6)// esta función nos indica que el número que se ingresa en la función, será el número de decimales que mostrará el resultado después de la coma
//Devuelve la cantidad de numeros decimal segun x
console.log(`%c${resultado}`, myStyle);
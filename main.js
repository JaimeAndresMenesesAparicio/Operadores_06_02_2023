// Operadores lógicos

// Los operadores lógicos nos devuelve un resultado a partir de que se cumpla (o no) una condición,
// su resultado es Booleano, y sus operandos son valores lógicos o asimilables a ellos

let a = confirm("Variable A\n\t\tSelecciona Aceptar si deseas el booleano True\n\t\tSelecciona Cancelar si deseas el booleano False");

let cuerpo = document.querySelector("#myNOT");
cuerpo.insertAdjacentHTML("beforeend", `<tr>
                                            <td>${a}</td>
                                            <td>${!a}</td>
                                        </tr>`)
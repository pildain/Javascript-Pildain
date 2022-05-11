function sumar (n1, n2)
{
    resultado = n1 + n2;
    return resultado;
}
function restar (n1, n2)
{
    resultado = n1 - n2;
    return resultado;
}
function multiplicar (n1, n2)
{
    resultado = n1 * n2;
    return resultado;
}
function dividir (n1, n2)
{
    resultado = n1 / n2;
    return resultado;
}
let resultado;
function calcular (n1, operador, n2)
{
    switch (operador)
    {
        case "+":
            resultado = sumar (n1, n2);
            return resultado;
        case "-":
            resultado = restar (n1, n2);
            return resultado;
        case "*":
            resultado = multiplicar (n1, n2);
            return resultado;
        case "/":
            resultado = dividir (n1, n2);
            return resultado;
        default:
            return "¡Operador incorrecto!";
    }
}
let consulta;
alert ("¡Bienvenido a la calculadora básica!");
let n1 = Number (prompt ("Introduzca un número"));
let operador = prompt ("Introduzca un operador");
let n2 = Number (prompt ("Introduzca otro número"));
resultado = calcular (n1, operador, n2);
if (isNaN(resultado) === true)
{
    alert ("Alguno de los datos ingresados no es un número o el operador es incorrecto");
}
else
{
    alert (resultado);
}
consulta = prompt ("¿Querés realizar otra operación? s para sí, cualquier otra cosa para salir");
while (consulta.toLowerCase() === "s")
{
    let n1 = Number (prompt ("Introduzca un número"));
    let operador = prompt ("Introduzca un operador");
    let n2 = Number (prompt ("Introduzca otro número"));
    resultado = calcular (n1, operador, n2);
    if (isNaN(resultado) === true)
    {
        alert ("Alguno de los datos ingresados no es un número o el operador es incorrecto");
    }
    else
    {
        alert (resultado);
    }
    consulta = prompt ("¿Querés realizar otra operación? s para sí, cualquier otra cosa para salir");
}
alert ("¡Gracias por usar la calculadora básica!");
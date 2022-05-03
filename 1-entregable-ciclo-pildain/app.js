/*Programa que nos pide escribir items hasta que ponemos fin. Cuando lo hacemos nos presenta la lista de items. 
Declaración de variables que se van a utilizar. Lista está vacía y item nos solicita el primer item.*/
let lista = "";
let item = prompt ("Ingrese un item. Para finalizar, escriba fin");
// Ciclo while que se ejecuta mientras lo introducido  sea distinto de fin . Suma un item a la lista y solicita uno nuevo. 
while (item.toLowerCase() != "fin")
{
    lista += item + "\n";
    item = prompt ("Ingrese un item. Para finalizar, escriba fin");
}
// If / else que muestra una alerta si la lista está vacía y, en caso contrario, la muestra. 
if (lista == "")
{
    alert ("¡La lista está vacía!");
}
else
{
    alert (lista);
}
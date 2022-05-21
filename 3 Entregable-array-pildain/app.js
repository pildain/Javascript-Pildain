const personas = [];
let id, nombre, apellido, edad, dni, persona, consultaCarga = "", busqueda, opcionMenu;
function Persona (id, nombre, apellido, edad, dni)
{
    this.id = Number (prompt ("Introduzca el ID de la persona a cargar"));
    while (isNaN (this.id) === true)
    {
        this.id = Number (prompt ("No introdujo un ID válido. Introduzca el ID de la persona a cargar"));
    }
    this.nombre = prompt ("Introduzca el nombre de la persona a cargar");
    while (this.nombre === "")
    {
        this.nombre = prompt ("Campo vacío. Introduzca el nombre de la persona a cargar");
    }
    this.apellido = prompt ("Introduzca el apellido de la persona a cargar");
    while (this.apellido === "")
    {
        this.apellido = prompt ("Campo vacío. Introduzca el apellido de la persona a cargar");
    }
    this.edad = Number (prompt ("Introduzca la edad de la persona a cargar"));
    while (isNaN (this.edad) === true)
    {
        this.edad = Number (prompt ("No introdujo una edad válida. Introduzca la edad de la persona a cargar"));
    }
    this.dni = Number (prompt ("Introduzca el DNI de la persona a cargar"));
    while (isNaN (this.dni) === true)
    {
        this.dni = Number (prompt ("No introdujo un DNI válido. Introduzca el DNI de la persona a cargar"));
    }
}
function mayoresDeEdad (arreglo)
{
    let mayoresEdad = arreglo.filter((elemento) => elemento.edad >= 18);
    return mayoresEdad;
}
function buscarNombreApellido (arreglo)
{
    let nombreBuscado = prompt ("Introduzca el nombre a buscar");
    let apellidoBuscado = prompt ("Introduzca el apellido a buscar");
    let resultado = arreglo.some((elemento) => elemento.nombre.toLowerCase() === nombreBuscado.toLowerCase() && elemento.apellido.toLowerCase() === apellidoBuscado.toLowerCase());
    return resultado;
}
while (consultaCarga.toLowerCase() != "n")
{
    persona = new Persona (id, nombre, apellido, edad, dni);
    personas.push (persona);
    consultaCarga = prompt ("¿Desea cargar màs datos? n para finalizar");
}
opcionMenu = Number (prompt ("Introduzca una opción:\n1. Comprobar si una persona determinada està en la lista\n2. Comprobar cuàntas personas mayores de edad hay en la lista\n3. Salir"));
while (opcionMenu !== 3)
{
    switch (opcionMenu)
    {
        case 1:
            let mayoresEdad = mayoresDeEdad (personas).length;
            alert ("Hay " + mayoresEdad + " personas mayores de edad");
            opcionMenu = Number (prompt ("Introduzca una opción:\n1. Comprobar si una persona determinada està en la lista\n2. Comprobar cuàntas personas mayores de edad hay en la lista\n3. Salir"));
        case 2:
            busqueda = buscarNombreApellido (personas);
            if (busqueda === true)
            {
                alert ("Existen coincidencias")
            }
            else
            {
                alert ("No existen coincidencias");
            }
            opcionMenu = Number (prompt ("Introduzca una opción:\n1. Comprobar si una persona determinada està en la lista\n2. Comprobar cuàntas personas mayores de edad hay en la lista\n3. Salir"));
        case 3:
            break;
        default:
            opcionMenu = Number (prompt ("¡Opción incorrecta!\nIntroduzca una opción:\n1. Comprobar si una persona determinada està en la lista\n2. Comprobar cuàntas personas mayores de edad hay en la lista\n3. Salir"));
    }
}
alert ("¡Gracias por usar la aplicación!");
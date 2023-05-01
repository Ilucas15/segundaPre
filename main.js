class Contacto {
    constructor(nombre, apellido, numero) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.numero = numero;
    }
}

// Agregue una persona a mano para hacer pruebas y no tener que cargar una c/vez que queria cambiar algo del Codigo; :)
const lucas = new Contacto("lucas", "s", 21);
const arrayContacto = [];
arrayContacto.push(lucas);
console.log(arrayContacto);
menu();


// Funcion para agregar el contacto 
function agregarContacto() {
    const nombre = prompt("Ingrese el nombre del contacto");
    const apellido = prompt("Ingrese el apellido");
    let numero;
    do {
        numero = prompt("Ingrese el número de teléfono del contacto:");
    } while (isNaN(numero));

    // Creamos el objeto con los datos que ingreso el Usuario
    const nuevoContacto = new Contacto(nombre, apellido, numero);

    // Lo agrego a la lista de Array 
    arrayContacto.push(nuevoContacto);
    alert("Agregaste a " + nuevoContacto.nombre + " " + nuevoContacto.apellido + " con exito");
    // para ver por consola si se estan agregando
    console.log(arrayContacto);
}

// Modificar contacto 

function modificarContacto() {
    const apellido = prompt("Ingrese Apellido del contacto que desea modificar");
    const index = arrayContacto.findIndex(contacto => contacto.apellido === apellido);
    let hora = new Date();
    // verifica que sea mayor a cero y cambia por los nuevos parametros que le paso
    if (index >= 0) {
        const nombre = prompt("Ingrese el nuevo nombre del contacto");
        const apellido = prompt("Ingrese el nuevo Apellido del contacto");
        const numero = parseInt(prompt("Ingrese el nuevo numero de telefono"));
        arrayContacto[index].nombre = nombre;
        arrayContacto[index].apellido = apellido;
        arrayContacto[index].numero = numero;
        alert("Contacto modificado correctamente" + "\n" + "Hora de modificacion " + hora.toTimeString());
    } else {
        alert("No se encontro el Apellido");
    }
}


// Elimino contacto 
function eliminarContacto() {
    const apellido = (prompt("Ingrese el Apellido del contacto a eliminar"));
    const busqueda = arrayContacto.find(buscado => buscado.apellido === apellido);
    const indexABorrar = arrayContacto.indexOf(busqueda);
    if (indexABorrar >= 0) {
        arrayContacto.splice(indexABorrar, 1);
        alert("Se elimino el contacto");
    } else {
        alert("No se encontro el Apellido buscado");
    }
}



// Mostrar contactos
function mostrarContactos() {
    let listaContactos = "Lista de contactos:\n";
    let modificacion = new Date();
    // Recorro la lista y por cada 
    for (let i = 0; i < arrayContacto.length; i++) {
        listaContactos += "Nombre: " + arrayContacto[i].nombre + "\n";
        listaContactos += "Apellido: " + arrayContacto[i].apellido + "\n";
        listaContactos += "Teléfono: " + arrayContacto[i].numero + "\n\n";
    }
    alert(listaContactos);
}
// Saludo del final
function fin() {
    alert("Que tengas buen dia!!!");
}
// menu 
function menu() {
    alert("Contactos");

    let opcion = parseInt(prompt("Ingrese una opción: \n 1) Agregar contacto \n 2) Modificar contacto \n 3) Eliminar Contacto \n 4) Ver contacto/s \n 5) Salir"));

    switch (opcion) {
        case 1:
            agregarContacto();
            menu();
            break;
        case 2:
            modificarContacto();
            menu();
            break;
        case 3:
            eliminarContacto();
            menu();
            break;
        case 4:
            mostrarContactos();
            menu();
            break;
        case 5:
            fin();
            break;
    }

}



let carrito = []
const ticket = [
    {
        sector: "CAMPO DELANTERO",
        precio: 19500
    },
    {
        sector: "PLATEA PREFERIDA",
        precio: 18000
    },
    {
        sector: "PLATEA",
        precio: 13500
    },
    {
        sector: "PLATEA ALTA",
        precio: 12500
    },
    {
        sector: "PLATEA MEDIA SIVORI",
        precio: 12000
    },
    {
        sector: "CAMPO",
        precio: 10000
    },
    {
        sector: "PLATEA ALTA SIVORI",
        precio: 8500
    },
];

let seleccion = prompt("¿Desea comprar tickets para el evento de ColdPlay?");

while (seleccion != "si" && seleccion != "no") {
    alert("por favor ingresa si o no")
    seleccion = prompt("hola desea comprar algo si o no")
}

if (seleccion == "si") {
    alert("Los siguientes sectores disponibles para el evento son:")
    let sectores = ticket.map((ticket) => ticket.sector + " " + ticket.precio + "$");

    alert(sectores.join(" - "))
} else if (seleccion == "no") {
    alert("Gracias por venir. Hasta pronto !!")
}

while (seleccion != "no") {
    let sector = prompt("Indique porfavor en que sector desea ubicarse para el evento");
    let precio = 0;

    if (sector == "CAMPO DELANTERO" || sector == "PLATEA PREFERIDA" || sector == "PLATEA" ||
        sector == "PLATEA ALTA" || sector == "PLATEA MEDIA SIVORI" || sector == "CAMPO" || sector == "PLATEA ALTA SIVORI") {
        switch (sector) {

            case "CAMPO DELANTERO":
                precio = 19500;
                break;

            case "PLATEA PREFERIDA":
                precio = 18000;
                break;

            case "PLATEA":
                precio = 13500;
                break;

            case "PLATEA ALTA":
                precio = 12500;
                break;

            case "PLATEA MEDIA SIVORI":
                precio = 12000;
                break;

            case "CAMPO":
                precio = 10000;
                break;

            case "PLATEA ALTA SIVORI":
                precio = 8500;
                break;

            default: break;
        }
        let unidades = parseInt(prompt("¿Cuantos tickects desea comprar?"))

        carrito.push({sector,unidades, precio})
    } else {
        alert("El sector que usted indica no se encuentra existente o habilitado")
    }

    seleccion = prompt("¿Desea modificar algo de su eleccion?")
    while(seleccion === "no"){
        alert("Genial, a continuancion se le estara mostrando su monto total a pagar:")
        carrito.forEach((carritoFinal   ) => {console.log(`Sector: ${carritoFinal.sector} - Unidades: ${carritoFinal.unidades} -
        Total a pagar: ${carritoFinal.unidades * carritoFinal.precio}`)})
        break;;
    } 
}



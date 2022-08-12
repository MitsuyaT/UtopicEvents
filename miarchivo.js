alert("Comprando 2 entradas obtendras el 10% de descuento en su compra.\nComprando 3 entradas en adelante sera del 20% de descuento en su compra.")

let descuento = 0;
let precioTotal = 0;
let carrito = [] /*Creo un array vacio para luego pushearle objetos*/
const ticket = [ /*Creo distintos objetos y los guardo en un array "ticket"*/
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

/*Le pido una entrada al usuario*/

let seleccion = prompt("¿Desea comprar tickets para el evento de ColdPlay? (responda con si o no porfavor)").toLowerCase();

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

/*Pido otra entrada al usuario mostrandole un abanico de opciones*/

while (seleccion != "no") {
    let sector = prompt("Indique porfavor en que sector desea ubicarse para el evento").toUpperCase();
    let precio = 0;

    if (sector == "CAMPO DELANTERO" || sector == "PLATEA PREFERIDA" || sector == "PLATEA" ||
        sector == "PLATEA ALTA" || sector == "PLATEA MEDIA SIVORI" || sector == "CAMPO" || sector == "PLATEA ALTA SIVORI") {
        switch (sector) {

            /*Creo un switch con las opciones ya indicadas para luego usar el valor de "precio"*/

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

        /*Pido otra entrada, pidiendo la cantidad de unidades que desea comprar el usuario*/

        let unidades = parseInt(prompt("¿Cuantos tickets desea comprar?"))

        while (unidades < 0) {
            alert("Porvafor indique la cantidad de unidades que desea comprar")
            unidades = parseInt(prompt("¿Cuantos tickects desea comprar?"))
        }
        /*Indico de cuanto sera el descuento*/
        if (unidades == 2) {
            descuento = 10;

        }
        else if (unidades >= 3) {
            descuento = 20;

        }
        carrito.push({ sector, unidades, precio, descuento }) /*Pusheo al carrito los siguientes parametros*/

    } else {
        alert("El sector que usted indica no se encuentra existente o habilitado")
    }

    seleccion = prompt("¿Desea modificar algo de su eleccion? (responda con si o no porfavor)") /*Entrada de verificacion si desea editar algo de sus elecciones*/
    while (seleccion === "no") {
        alert("Genial, a continuancion se le estara mostrando su monto total a pagar:")

        /*Muestro por consola la salida indicando que sector, cuantas unidades y monto final a pagar*/
        function aplicarDescuento(a) {/* Creo funcion para aplicar descuentos */
            return (descuento * a) / 100;
        }


        carrito.forEach((carritoFinal) => {

            precioTotal = `${(carritoFinal.precio * carritoFinal.unidades)}`

            console.log(`Sector: ${carritoFinal.sector}  \nUnidades: ${carritoFinal.unidades} \nDescuento: ${carritoFinal.descuento}%  \nTotal a pagar: ${precioTotal - aplicarDescuento(precioTotal)}`)
        })
        break;
    }
}






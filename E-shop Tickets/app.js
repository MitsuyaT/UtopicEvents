// Swal.fire({
    // title: 'Surprise!',
    // text: 'Comprando 2 entradas obtendras el 10% de descuento en su compra.Comprando 3 entradas en adelante sera del 20% de descuento en su compra.',
    // imageUrl: '../E-shop Tickets/resources/img/coldplaysweetaler.png',
    // imageWidth: 400,
    // imageHeight: 220,
    // imageAlt: 'Custom image',
//   })

let carrito = []; //creamos un array para luego pushear en el carrito
let myForm = document.querySelector("#formulario");
let recuperarCarrito = document.querySelector("#recuperarCarrito")

myForm.addEventListener("submit", obtenerDatos);
recuperarCarrito.addEventListener("click", obtenerLocalStorage)

function obtenerLocalStorage(){
    carrito = localStorage.getItem( "carrito")

    console.log(carrito)
}

if(localStorage.getItem("carrito")!=null){
    carrito=JSON.parse(localStorage.getItem("carrito"));
}

function obtenerDatos(e) {
    e.preventDefault()

    let sector = document.getElementById("sectores").value;
    let cantidadTickets = document.getElementById("cantidadTickets").value;

    carrito.push(`${sector} ${cantidadTickets}`)

    document.querySelector("tbody").innerHTML += `
    <tr>
        <td>${sector}</td>
        <td>${cantidadTickets}</td>
    </tr>`;

    localStorage.setItem("carrito", JSON.stringify(carrito));

}




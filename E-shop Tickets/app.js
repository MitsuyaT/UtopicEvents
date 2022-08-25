let carrito = [];

let recuperarCarrito = document.querySelector("#recuperarCarrito")
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
    let sector = document.querySelector("#sectores").value;
    let cantidadTickets = document.querySelector("#cantidadTickets").value;

    carrito.push(`${sector} ${cantidadTickets}`)
    console.log(carrito)

    document.querySelector("tbody").innerHTML+=`
        <tr>
            <td>${sector}</td>
            <td>${cantidadTickets}</td>
        </tr>
    `;

    localStorage.setItem("carrito", JSON.stringify(carrito));
}

let myForm = document.querySelector("#formulario"); 
myForm.addEventListener("submit", obtenerDatos);
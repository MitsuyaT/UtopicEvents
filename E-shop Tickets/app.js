const carrito = [];
function obtenerDatos(e) {
    e.preventDefault()
    let sector = document.querySelector("#sectores").value;
    let cantidadTickets = document.querySelector("#cantidadTickets").value;

    carrito.push(`${sector} ${cantidadTickets}`)
    console.log(carrito)

    document.querySelector("#tablabody").innerHTML+=`
        <tr>
            <td>${sector}</td>
            <td>${cantidadTickets}</td>
        </tr>
    `;
}

let myForm = document.querySelector("#formulario"); 
myForm.addEventListener("submit", obtenerDatos);
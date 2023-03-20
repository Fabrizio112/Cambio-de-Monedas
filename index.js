var myHeaders = new Headers();
myHeaders.append("apikey", "KXsiCwvBF9yxUugeOtslsAwgjIPmhdcX");

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

let $botonBuscar = document.querySelector("#buscar")
let $contenedorDeInputs = document.querySelector(".contenedor-programa-inicial")
$botonBuscar.onclick = function () {
    let valorDelInput = (document.querySelector("#input-divisa").value).toUpperCase();
    if (contadorContenedor >= 1) {
        eliminarEltituloDeLasDivisas();
        eliminarElContenedorConLasDivisas();
    }
    traerValoresEnComparacion(valorDelInput);
    return false;
}
function traerValoresEnComparacion(a) {
    fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols=GBP%2CARS%2CUSD%2CCHF%2CJPY%2CHKD%2CCAD%2CCNY%2CAUD%2CBRL%2CRUB%2CMXN&base=${a}`, requestOptions)
        .then(respuesta => respuesta.json())
        .then(datos => {
            crearContenedoresDeDatos(datos)
        })
        .catch(error => console.log('error', error));
}

let contadorContenedor = 0;
function crearContenedoresDeDatos(a) {
    contadorContenedor++;
    $(".container").append($(`<h1 id="titulo-divisa">${a.base} a la fecha ${a.date}</h1>`))
    $(".container").append($(`<div id="contenedor-de-divs"></div>`))
    Object.keys(a.rates).forEach((valor) => {
        $("#contenedor-de-divs").append($(
            `<div class="card">
        <p>${a.base}/${valor}</p>
        <span>${valor} : ${a.rates[valor]}
        </div>
        `
        ))
    })
    return contadorContenedor;
}

function ocultarAlgunElemento(a) {
    a.clasList.add("d-none");
}
function aparecerAlgunElemento(a) {
    a.clasList.remove("d-none");
}
function eliminarEltituloDeLasDivisas() {
    document.querySelector("#titulo-divisa").remove();
}
function eliminarElContenedorConLasDivisas() {
    document.querySelector("#contenedor-de-divs").remove();
}
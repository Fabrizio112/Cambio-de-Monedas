
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1cdc29d1fbmsh8c7f4b7d7ca48d8p1e78ddjsn2f86475e8467',
        'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
    }
};
let $botonDeCalcular = document.querySelector("#calcular")
let $botonDeComparar = document.querySelector("#comparar");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///// COMPARADOR DE DIVISAS     ////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let contadorDeBotonComparar = 0;
$botonDeComparar.addEventListener('click', () => {
    if (contadorDeBotonComparar >= 1) {
        eliminarAlgunElemento(document.querySelector(".contenedor-programa-comparar"))
    }
    $("#container").append($(`<div class="contenedor-programa-comparar">
    <h2 class="fs-1 text-uppercase p-3" id="titulo-comparador">Comparador de Divisas de Fabrizio</h2>
    <label class="form-label mb-3 fs-4" id="label-comparador" for="">Ingrese la divisa :</label>
    <input class="form-control mb-4 text-center fs-4" type="text" id="input-divisa">
    <button class="btn btn-outline-primary px-5 fs-3" id="buscar">Buscar</button>
</div>`))
    contadorDeBotonComparar++;
    document.querySelector("#buscar").addEventListener('click', () => {
        let valorDelInput = (document.querySelector("#input-divisa").value).toUpperCase();
        if (contadorContenedor >= 1) {
            eliminarEltituloDeLasDivisas();
            eliminarElContenedorConLasDivisas();
        }
        traerValoresEnComparacion(valorDelInput);
        return false;
    })
    return false
})

function traerValoresEnComparacion(a) {
    fetch(`https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?base=${a}&to=EUR%2CGBP`, options)
        .then(respuesta => respuesta.json())
        .then(datos => {
            crearContenedoresDeDatos(datos)
        })
        .catch(error => console.log('error', error));
}

let contadorContenedor = 0;
function crearContenedoresDeDatos(a) {
    contadorContenedor++;
    console.log(a.base)
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
function eliminarAlgunElemento(a) {
    a.remove();
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///// CALCULADOR DE DIVISAS //////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let contadorDeBotonCalcular = 0;
$botonDeCalcular.addEventListener('click', () => {
    if (contadorDeBotonCalcular >= 1) {
        eliminarAlgunElemento(document.querySelector(".contenedor-programa-calcular"))
    }
    $(".container").append($(`
    <div class="contenedor-programa-calcular">
    <h3>Conversor de Monedas </h3>
    <div class="contenedor-de-comparaciones">
        <div class="contenedor-cantidad-a-convertir">
            <label class="form-label" for="">Cantidad</label>
            <div class="cantidad-a-convertir">
                <input class="form-control" type="number" name="" id="input-convertir">
                <select class="form-select" name="" id="select-a-convertir">
                </select>
            </div>
        </div>
        <div class="contenedor-cantidad-convertida">
            <label class="form-label" for="">Convertido a </label>
            <div class="cantidad-convertida">
                <input class="form-control " type="text" name="" id="input-convertido" disabled>
                <select class="form-select" name="" id="select-convertido">
                </select>
            </div>
        </div>
    </div>
    <button class="btn btn-outline-primary px-5 fs-3" id="conversion">Hacer Conversion</button>
</div>`
    ))
    contadorDeBotonCalcular++;
    traerValores();
    let $select = document.querySelector("#select-a-convertir")
    let $selectConvertido = document.querySelector("#select-convertido")
    let $input = document.querySelector("#input-convertir")
    let $inputConvertido = document.querySelector("#input-convertido")
    let opcionSeleccionadaDelSelectAConvertir = "";
    let opcionSeleccionadaDelSelectConvertido = "";
    let valorEnTiempoRealDelInput = 0;
    let $botonConversion = document.querySelector("#conversion")
    $select.addEventListener('change',
        function () {
            opcionSeleccionadaDelSelectAConvertir = this.options[$select.selectedIndex].text;
            console.log(opcionSeleccionadaDelSelectAConvertir)
        });
    $selectConvertido.addEventListener('change',
        function () {
            opcionSeleccionadaDelSelectConvertido = this.options[$selectConvertido.selectedIndex].text;
            console.log(opcionSeleccionadaDelSelectConvertido)
        });
    $input.addEventListener('keyup',
        function () {
            valorEnTiempoRealDelInput = $(this).val();
            console.log(valorEnTiempoRealDelInput)
        });

    $botonConversion.addEventListener("click", () => {
        if (opcionSeleccionadaDelSelectAConvertir && opcionSeleccionadaDelSelectConvertido) {
            traerValoresParaElConversorDeMonedas(opcionSeleccionadaDelSelectAConvertir, opcionSeleccionadaDelSelectConvertido, parseInt(valorEnTiempoRealDelInput), $inputConvertido)
        } else {

        }
    })
})



function traerValoresParaElConversorDeMonedas(a, b, c, d) {
    fetch(`https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${a}&to=${b}&amount=${c}`, options)
        .then(respuesta => respuesta.json())
        .then(datos => {
            d.value = datos.result
        })
        .catch(error => console.log('error', error));
}

function traerValores() {
    fetch(`https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CGBP%2CARS%2CUSD%2CCHF%2CJPY%2CHKD%2CCAD%2CMXN%2CCNY%2CAUD%2CBRL%2CRUB`, options)
        .then(respuesta => respuesta.json())
        .then(datos => {
            $("#select-a-convertir").append($(`<option value="${datos.base}">${datos.base}</option>`))
            $("#select-convertido").append($(`<option value="${datos.base}">${datos.base}</option>`))
            Object.keys(datos.rates).forEach((valor) => {
                $("#select-a-convertir").append($(`<option value="${valor}">${valor}</option>`))
                $("#select-convertido").append($(`<option value="${valor}">${valor}</option>`))
            })
        })
        .catch(error => console.log('error', error));
}




////////////// Despues debo agregarle las Pruebas Unitarias con el Console.assert(); Pero eso sera mas tarde xd
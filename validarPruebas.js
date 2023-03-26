function validarElInputTexto(a) {
    if (!/^[a-zA-Z]{1,3}$/.test(a)) {
        return `Solo puede ingresarse letras y como maximo 3 caracteres`
    }
    if (a.length === 0) {
        return `Este campo no puede enviarse vacio`;
    }
    return "";
}
function validarElInputNumero(a) {
    if (/^[0]/.test(a)) {
        return `Este campo no puede enviarse con un cero`;
    }
    if (a.length === 0) {
        return `Este campo no puede enviarse vacio`;
    }
    return "";
}
function validarElSelect(a) {
    if (a.length === 0) {
        return `Este campo no puede enviarse vacio`;
    }
    return "";
}

let $contenedorErrores = document.querySelector("#contenedor-errores");
let $contenedorProgramaCalcular = document.querySelector(".contenedor-programa-calcular")
function manejarErrorDelComparadorDeDivisas(a) {
    borrarMensajesDeError();
    let contadorError = 0;
    let error = validarElInputTexto(a)
    if (error) {
        contadorError++
        document.querySelector("#input-divisa").classList.add("border", "border-danger", "border-4");
        $contenedorErrores.classList.add("bg-danger", "text-center", "text-light", "p-3", "my-4", "border", "rounded");
        let elementoError = document.createElement('li')
        elementoError.textContent = error;
        elementoError.classList.add("fs-4");
        elementoError.id = "error";
        $contenedorErrores.classList.remove("d-none")
        $contenedorErrores.appendChild(elementoError)
    } else {
        $contenedorErrores.classList.add("d-none")
        document.querySelector("#input-divisa").classList.remove("border", "border-danger", "border-4");
    }
    return contadorError;
}
function manejarErroresDelConversorDeDivisas(a) {
    borrarMensajesDeError();
    let contadorErrores = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i]) {
            contadorErrores++
            document.querySelector(`[name="errormark${i + 1}"]`).classList.add("border", "border-danger", "border-4");
            $contenedorErrores.classList.add("bg-danger", "text-center", "text-light", "p-3", "my-4", "border", "rounded");
            let elementoError = document.createElement('li')
            elementoError.textContent = a[i];
            elementoError.classList.add("fs-4");
            elementoError.id = "error";
            $contenedorErrores.classList.remove("d-none")
            $contenedorErrores.appendChild(elementoError)
        } else {
            $contenedorErrores.classList.add("d-none")
            document.querySelector(`[name="errormark${i + 1}"]`).classList.remove("border", "border-danger", "border-4");
        }
    }
    return contadorErrores;

}

function borrarMensajesDeError() {
    document.querySelectorAll(`[id="error"]`).forEach(function (a) {
        a.remove();
    })
}
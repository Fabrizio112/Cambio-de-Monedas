function probarValidarElInputText() {
    console.assert(
        validarElInputTexto("dolares") === `Solo puede ingresarse letras y como maximo 3 caracteres`,
        `Validar el input no valido que no se ingresen caracteres y que posean una longitud de mas de 3 `
    )
    console.assert(
        validarElInputTexto("") === `Este campo no puede enviarse vacio`,
        `Validar el input no valido que no se envie vacio `
    )
    console.assert(
        validarElInputTexto("USD") === "",
        `Validar el input no valido que se realizo un ingreso valido`
    )
}
function probarValidarElSelect() {
    console.assert(
        validarElSelect("") === `Este campo no puede enviarse vacio`,
        `Validar el select no valido que no se haya seleccionado alguna opcion`
    )
    console.assert(
        validarElSelect("USD") === "",
        `Validar el select no valido que se selecciono una opcion valida`
    )
}
function probarValidarElInputNumero() {
    console.assert(
        validarElInputNumero("0") === `Este campo no puede enviarse con un cero`,
        `Validar El Input Numero no valido que no se envie con un cero `
    )
    console.assert(
        validarElInputNumero("") === `Este campo no puede enviarse vacio`,
        `Validar El Input Numero no valido que  no se envie vacio`
    )
    console.assert(
        validarElInputNumero("12") === "",
        `Validar El Input Numero no valido que  se realice un ingreso correcto `
    )
}
probarValidarElInputText();
probarValidarElInputNumero();
probarValidarElSelect();
document.getElementById("calcular").addEventListener("click", function() {
    let op1 = parseInt(document.getElementById("op1").value);
    let op2 = parseInt(document.getElementById("op2").value);
    let operador = document.getElementById("operador").value;
    let resultado = "ERROR: Operador No Válido!";

    if (operador === "+") resultado = op1 + op2;
    if (operador === "-") resultado = op1 - op2;
    if (operador === "*") resultado = op1 * op2;
    if (operador === "/") resultado = op2 !== 0 ? op1 / op2 : "ERROR: ¡No se puede dividir por cero!";
    if (operador === "%") resultado = op1 % op2;
    if (operador === "**") resultado = op1 ** op2;

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
});

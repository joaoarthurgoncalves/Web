function parimpar() {
    var numero = parseInt(document.frAula.n1.value);
    var rotulo = document.getElementById("resultado")
        if(numero % 2 == 0)
            txt = "par"
        else
            txt = "ímpar"
    rotulo.innerHTML = "<h1> O número informado é: " +txt+ "! </h1>";
}
function receberFoco(campo) {
    
    label=document.getElementById("resposta");
    label.innerHTML = campo.name + "recebeu foco";
        //onblur: usado para perder o foco;
        //onfocus: ao clicar no campo, fazendo com que ele receba o foco;
        //onmousemove: ao passar o mouse em cima do campo, fazendo ele receber foco;
        //onkeypress: ao pressionar uma tecla no campo, o que faz ele receber foco.
}


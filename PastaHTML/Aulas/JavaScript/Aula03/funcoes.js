function dadosFormulario(){
txt = document.getElementById("txt1");
sel = document.getElementById("sel");
radio = document.getElementsByName("radio")
box = document.getElementsByName("box")
area = document.getElementById("texto")
resumo = "";
console.log(box);
label=document.getElementsByTagName("label")[0];
        resumo+="<br> Campo Texto: "+txt.value;
        resumo+="<br> Campo de Seleção: "+sel.value;

if(radio[0].checked) {
        resumo+="<br> Radio selecionado: "+radio[0].value;
}else {
        resumo+="<br> Radio selecionado: "+radio[1].value;
}

    for(i=0; i<box.length;i++) {
    if(box[i].checked)
        resumo+="<br> Box selecionado: "+box[i].value;
    }
        resumo+= "<br> Texto: "+area.value;
    label.innerHTML=resumo;     
}
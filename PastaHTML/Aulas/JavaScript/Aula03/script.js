function totalCompras(){
    label = document.getElementById("label");
    const frutas = document.getElementsByName("box");
    totalfruta=0;
    resumo="";

    for (i=0; i<frutas.length; i++) {

        if(frutas[i].checked){
            totalfruta+=parseFloat(frutas[i].value);
            resumo+=frutas[i].id+", ";  
        }
    }
    label.innerHTML="<hr> Frutas compradas<br>" +resumo+ "<br> Total: " +totalfruta; 
}
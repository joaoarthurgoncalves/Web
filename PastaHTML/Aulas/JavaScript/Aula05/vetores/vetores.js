var painel = document.getElementById("painel");
var vet =[];
var frutas = ["Maçã", "Banana","Laranja","Uva","Pêra"];
function escreverLer(){
    vet[0]=1;
    vet[1]=2;
    vet[2]=3;
    painel.innerHTML=vet;
}
function escreverLer1(){
    for(let i=0;i<10;i++)
        vet[i]= Math.round(Math.random()*100);
     painel.innerHTML=vet;
}
function escreverLer2(){
    for(let i=0;i<frutas.length;i++)
         painel.innerHTML+="["+frutas[i]+"]";
}
function escreverLer3_1(item, indice){
    frutas[indice]= frutas[indice].toUpperCase();
}
function escreverLer3(){
    frutas.forEach(escreverLer3_1)
    painel.innerHTML=frutas;
}
function incluirItem(){
    frutas.push(document.getElementById("novaFruta").value);
    frutas.forEach(escreverLer3);
}
function excluirItem(opt){
    switch (opt) {
        case 0:
            frutas.pop();
            break;
        case 1:
            frutas.shift();
            break;
        case 2:
            frutas.splice(1, 2);
            break;
    }
    frutas.forEach(escreverLer3);
}
function buscarIndice(){
    let fruta=document.getElementById("fruta").value;
    let pos= frutas.indexOf(fruta);
    painel.innerHTML=pos;

}

var vetComandos=[];
var lR, cR, lC, cC, posCasa, robocasa, posRobo, comando = 0;
var numcom = 0;
    const robo = document.createElement("img");
    const casa = document.createElement("img");
    const final = document.createElement("img");
    const col=8, lin=8;

function criarTabela(){
var pai = document.getElementsByTagName("body")[0];
var tabela = document.createElement("table");
   for(let i=0;i<col;i++) {

    var tr = document.createElement("tr");
        for (let j = 0; j < lin; j++) {
        var td = document.createElement("td");
           td.setAttribute("id", i+","+j);
           tr.appendChild(td);
       }

       if (i === 0) {
           var td = document.createElement("td");
           td.setAttribute("rowspan", lin);
           td.setAttribute("id", "comandos");
           tr.appendChild(td);
       }
       tabela.appendChild(tr);
   }
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.setAttribute("colspan", col/2+1);
    td.setAttribute("id", "botoes");
    tr.appendChild(td);

    var td = document.createElement("td");
    td.setAttribute("colspan", col/2);
    td.setAttribute("id", "display");
    tr.appendChild(td);
    tabela.appendChild(tr);
    pai.appendChild(tabela);
    posicionarImagens();
}

function posicionarImagens(){
   var vet=["abaixo.png","acima.png","direita.png","esquerda.png","vai.png","reset.png"];
   const celula=document.getElementById("botoes");
   for(let i=0;i<vet.length;i++){
       const botao = document.createElement("img");
       botao.setAttribute("id",i);
       botao.setAttribute("onclick","incluirComandos(this)");
       botao.src = "img/"+vet[i];
       celula.appendChild(botao);
   }
     lR= Math.round(Math.random() * (lin/2));
     cR= Math.round(Math.random()* (col-1));
     posRobo=document.getElementById(lR+","+cR);
     robo.src="img/robo.png";
     posRobo.appendChild(robo);
     
    lC= Math.round(Math.random() * ((lin-1) - (lin/2)) + (lin/2));
    cC= Math.round(Math.random()* (col-1));
    posCasa=document.getElementById(lC+","+cC);
    casa.src="img/casa.png"
    posCasa.appendChild(casa);

}

function incluirComandos(bt){
    celula=document.getElementById("comandos");
    var i= parseInt(bt.id);
    numcom++;
        switch (i){
            
            case 0:{
            celula.innerHTML+="Abaixo<br>";
            vetComandos.push(i);
            break;
        }
            case 1:{
            celula.innerHTML+="Acima<br>";
            vetComandos.push(i);
            break;
        }
            case 2:{
            celula.innerHTML+="Direita<br>";
            vetComandos.push(i);
            break;
        }
            case 3:{
            celula.innerHTML+="Esquerda<br>";
            vetComandos.push(i);
            break;
        }
            case 4:{
            executarComandos(0);
            break;
        }
            case 5:{
            window.location.reload();
            break;
        }
    }
}

function movimentarRobo(l,c){
    posRobo.innerHTML="";
    posRobo=document.getElementById(l+","+c);
    posRobo.appendChild(robo);
}

function executarComandos(){
    display= document.getElementById("display");
        switch (vetComandos[comando++]) {
            case 0: {
                if (lR !== (lin - 1))
                    movimentarRobo(++lR,cR);
                else {
                    display.innerHTML=("Impossível prosseguir, esse movimento está fora dos limites! Tente novamente pressionando o botão reset.");
                    break;

                }
                break;
            }
            case 1: {
                if (lR !== 0)
                    movimentarRobo(--lR,cR);
                else {
                    display.innerHTML=("Impossível prosseguir, esse movimento está fora dos limites! Tente novamente pressionando o botão reset.");
                   
                }
                break;
            }
            case 2: {
                if(cR!==col-1)
                  movimentarRobo(lR,++cR);
                else {
                    display.innerHTML=("Impossível prosseguir, esse movimento está fora dos limites! Tente novamente pressionando o botão reset.");
                   
                }
                break;
            }
            case 3: {
                if(cR!==0)
                     movimentarRobo(lR,--cR);
                else {
                    display.innerHTML=("Impossível prosseguir, esse movimento está fora dos limites! Tente novamente pressionando o botão reset.");
                    

                }
                break;

            }
    }
    if(comando<=vetComandos.length){
        setInterval(executarComandos,1000);
    }else {
        if (posCasa.id === posRobo.id){
             posRobo.innerHTML="";
             posCasa.innerHTML="";
             final.src="img/robocasa.jpeg";
             final.style.width = "120px";
             final.style.height = "120px";
             posCasa.appendChild(final);
            display.innerHTML=("Parabéns, você chegou! <br> Número de movimentos necessários: "+numcom);
         } else
          if(display.innerHTML === ""){
            display.innerHTML=("O robô não chegou! Tente novamente pressionando o botão reset.");
          }          
    }
}
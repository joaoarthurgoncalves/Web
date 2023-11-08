var i 
for(i=0; i<10; i++) {    
    document.write("[" +i+ "]");
}

    document.write("<hr>");
do{
    document.write("[" +(i++)+ "]");

}while(i<20);
    document.write("<hr>");
while(i<30){
    document.write("[" +(++i)+ "]");
};


//Joguinho: Adivinhe o número! (ou sucumba pra sempre)
var al= Math.round(Math.random()*100);

    document.write("<br> <br> Número Correto: "+(al));
var numero;
var ten = 1;
var txt = "";
    numero = prompt("Informe um número de 0 a 100: ")

    do{
            if(numero > 100){
            alert("O número informado é maior do que 100! Tente novamente.")
            numero = prompt("Informe um número de 0 a 100: ")
            ten++;
            txt += numero; 
            }

            else if(numero > al){
            numero = prompt("Errado! o número sorteado é menor.");
            ten++;
            txt += numero;
            }

            else if(numero < al){
            numero = prompt("Errado! o número sorteado é maior.");
            ten++;
            txt += numero;
            }

    }while (numero != al);
    alert("Parabéns! Você informou o número correto!")

document.write("<br> <br> Número de tentativas realizadas: " +ten);
document.write("<br> <br> Números informados: " +txt) ;
function criarTabela (linhas, colunas) {
    pai=document.getElementsByTagName("table")[0];
    linhas= document.getElementById("linhas").value;
    colunas= document.getElementById("colunas").value;
    
    for (i=0; i<linhas; i++) {
        linha=document.createElement("tr")
    
    for(j=0; j<colunas;j++) {
        celula=document.createElement("td");
        linha.appendChild(celula);    
    }
        pai.appendChild(linha);
    }
}s
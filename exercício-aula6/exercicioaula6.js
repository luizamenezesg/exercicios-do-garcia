function obterObjeto(){
    let obj = { numeros : [1, 3, 7, 9, -1, 0, 4], quantidade : 7
              };
    return obj;
}

function montarTabela(){
    let objNumero = obterObjeto();
    let divP = document.createElement("div");
    divP.className = "numeros da div";

    let divT = document.createElement("div");
    divT.textContent = "Numeros";
    divT.className = "titulo da div";
    
    divP.appendChild(divT);

    let divN = document.createElement("div");
    divN.className = "lista de numeros";
    divP.appendChild(divN);

    let divQ = document.createElement("div");
    divQ.className = "quantidade de números";
    divQ.textContent = "Quantidade: ";
    divP.appendChild(divQ);


    let divS = document.createElement("div");
    divS.className = "soma";
    divS.textContent = "Soma Total: ";
    divP.appendChild(divS);
    
    let somaTotal = 0;
    for (let i = 0; i < objNumero.numeros.length; i++) {
        somaTotal += objNumero.numeros[i];
    }

    for(let i=0; i < objNumero.numeros.length; i++){
        let divNum = document.createElement("div");
        divNum.textContent = objNumero.numeros[i];
        divNum.className = "números da div";
        
        divN.appendChild(divNum);        
    }

    divS.textContent = "Soma Total: " + somaTotal;
    divQ.textContent = "Quantidade: " + objNumero.quantidade;

    document.body.appendChild(divP);
    document.body.appendChild(divS);  

}
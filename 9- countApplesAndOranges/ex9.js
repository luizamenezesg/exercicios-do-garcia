function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let qtdeMacas = 0;
    let qtdeLaranjas = 0;  
    let macas = [];
    let laranjas = [];
    
        for (let i = 0; i < apples.length; i++) {
            macas [i] = a + apples[i];
        }
    
        for (let i = 0; i < oranges.length; i++) { 
            laranjas [i] = b + oranges[i];
      }      
       
        for (let i = 0; i < macas.length; i++) {      
            if (macas[i] >= s && macas[i] <= t) {
            qtdeMacas++;
            } 
        }             
         
        for (let i = 0; i < laranjas.length; i++) {          
            if (laranjas[i] >= s && laranjas[i] <= t) {
            qtdeLaranjas++;
        }
      }
              
        console.log(qtdeMacas);
        console.log (qtdeLaranjas);    
}

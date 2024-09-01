function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let qtdeMacas = 0;
    let qtdeLaranjas = 0;
          
    for (let i = 0; i < apples.length; i++) {
                    
        if (apples[i] >= s && apples[i] <= t) {
            qtdeMacas++;
        }        
    }    
    
       for (let i = 0; i < oranges.length; i++) {
  
        if (oranges[i] >= s && oranges[i] <= t) {
            qtdeLaranjas++;
        }              
    }
      
    console.log (qtdeMacas, qtdeLaranjas);
    
}
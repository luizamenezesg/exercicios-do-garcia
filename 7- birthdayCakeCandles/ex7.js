function birthdayCakeCandles(candles) {
    let height = 0;
    let cand = 0;
    
    for (let i = 0; i < candles.length; i++){
        if (candles[i] > height) {
            height = candles[i];
            cand = 1;
                  
        } else if (candles[i] === height) {    
        cand++;        
        } 
    
    }
        return cand;   
        
    }
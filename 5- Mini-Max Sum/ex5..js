function miniMaxSum(arr) {
    let min = arr[0];
    let max = arr[0];
    let total = 0;   

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] <= min) {
            min = arr[i];
        }               
        
        if(arr[i] >= max) {
            max = arr[i];
        }
        total += arr[i];
    }    

 let totalMin = total - max; 
 let totalMax = total - min;
 console.log (totalMin, totalMax)
    
} 
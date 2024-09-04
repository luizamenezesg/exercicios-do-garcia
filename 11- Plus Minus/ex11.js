function plusMinus(arr) {
    let positivo = 0;
    let negativo = 0;
    let zero = 0;
      
    for (let i = 0; i < arr.length; i++ ) {
    
        if(arr[i] > 0){
            positivo++;
        } else if ( arr[i] < 0) {
            negativo++;
        } else if (arr[i] == 0) {
            zero++    ;    
        }
}

    const total = arr.length;
    const totalp = (positivo / total).toFixed(6);
    const totaln = (negativo / total).toFixed(6);
    const totalz = (zero / total).toFixed(6);

 
        console.log(totalp)
        console.log(totaln)
        console.log (totalz)

}
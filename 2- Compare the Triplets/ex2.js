
/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
    let result = [0,0];    

    for (let i = 0; i < 3; i++){
        if (a [i] > b[i]){
            result[0] += 1;
            
        } else if (a[i] < b[i]) {
            result[1] += 1;            
        }  
                       
    }   
    return result; 
}  

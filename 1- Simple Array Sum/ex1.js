
/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar) {
    let total = 0;
    for (let i = 0; i < ar.length; i++) { // lê número a número do array
        total += ar[i];
        console.log(ar[i]); // mostra cada número do array
    }
    return total; // retorna o total da soma
}


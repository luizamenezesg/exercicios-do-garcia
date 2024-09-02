function diagonalDifference(arr) {

    let n = arr.length;
    let soma1 = arr.reduce((sum, row, index) => sum + row[index], 0);
    let soma2 = arr.reduce((sum, row, index) => sum + row[n-1-index],0);
    let diferenca = soma2 - soma1;
    
    return (diferenca);       

}
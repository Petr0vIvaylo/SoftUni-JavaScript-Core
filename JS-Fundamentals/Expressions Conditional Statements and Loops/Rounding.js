function roundingNumber([num, precision]) {
    if (precision > 15){
        precision=15
    }
    let result = parseFloat(num.toFixed(precision))
    console.log(result)
}

roundingNumber([3.000004566899898998989898998989, 25])
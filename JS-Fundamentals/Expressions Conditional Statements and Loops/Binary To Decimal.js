function binary2Decimal(binaryNum) {
    let decNumber = 0
    for (let i = 0; i < binaryNum.length; i++) {
        decNumber += binaryNum[i] * Math.pow(2,binaryNum.length-(i+1))

    }
    console.log(decNumber)
}

binary2Decimal('11110000')
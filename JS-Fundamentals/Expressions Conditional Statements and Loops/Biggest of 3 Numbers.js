function biggestNumber(numbersArr) {
    biggestNum = -9999999999999999999
    for (let i = 0; i < numbersArr.length; i++) {
        if (numbersArr[i] > biggestNum){
            biggestNum = numbersArr[i]
        }
    }
    console.log(biggestNum)
}

biggestNumber([130, 5, 99])
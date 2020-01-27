function increasingElements(input) {
    let currentBiggestNum = Number.NEGATIVE_INFINITY
    let result = []
    for (let i = 0; i < input.length; i++) {
        if (input[i] >= currentBiggestNum){
            currentBiggestNum = input[i]
            result.push(currentBiggestNum)
        }
    }
    console.log(result.join('\n'))
}

increasingElements([1,3,8,4,10,12,3,2,24])
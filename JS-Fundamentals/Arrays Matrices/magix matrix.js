function magicMatrix(input) {
    let sum = 0
    input[0].forEach(x => sum += x)
    for (let row = 0; row < input.length; row++) {
        let rowSum = 0
        input[row].forEach(x => rowSum += x)
        if (sum != rowSum){
            console.log(false)
            return
        }
    }
    for (let col = 0; col < input[0]; col++) {
        let sumCol = 0
        for (let row = 0; row < input.length; row++) {
            sumCol += input[row][col]
            if (sumCol != sum){
                console.log(false)
                return
            }
        }
    }
    console.log(true)

}
magicMatrix([[4, 5, 1],
            [6, 5, 4],
            [5, 5, 5]])
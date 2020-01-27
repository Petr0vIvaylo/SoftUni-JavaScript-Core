function modifyAverage(input) {
    let inputAsString = input.toString()
    let avgCheck = 0

    function averageChecker(numAsString) {
        let avg = 0
        for (let i = 0; i < numAsString.length; i++) {
            avg += Number(numAsString[i])
        }
        return avg / numAsString.length
    }

    while (true) {

        avgCheck = averageChecker(inputAsString)

        if (avgCheck > 5) {
            console.log(inputAsString)
            break
        }
        else {
            inputAsString += 9
        }
    }
}

modifyAverage(5835)
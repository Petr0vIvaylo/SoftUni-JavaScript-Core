function nElements(input) {
    let stepIncrement = Number(input[input.length - 1][0])
    input.pop()
    let result = []
    for (let i = 0; i < input.length; i+=stepIncrement) {
        result.push(input[i])
    }
    console.log(result.join('\n'))
}

nElements([[1], [2], [3],[4],[5], [6]])
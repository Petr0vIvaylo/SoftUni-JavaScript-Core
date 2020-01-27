function rotateArr(input) {
    let rotations = Number(input[input.length - 1])
    input.pop()
    for (let i = 0; i < rotations; i++) {
        input.unshift(input.pop())
    }

    console.log(input.join(' '))
}

rotateArr(['Banana','Orange'
    ,'Coconut'
    ,'Apple'
    ,'15'])
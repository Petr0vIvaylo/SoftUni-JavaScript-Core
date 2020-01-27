function addRemoveElements(input) {
    let initialNum = 0
    let result = []
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'add'){
            initialNum++
            result.push(initialNum)
        }
        else if (input[i] === 'remove') {
            initialNum++
            result.pop()
        }
    }
    if (result.length < 1){
        console.log('Empty')
    }
    else{
        console.log(result.join('\n'))
    }

}

addRemoveElements(['remove','remove','remove','remove'])
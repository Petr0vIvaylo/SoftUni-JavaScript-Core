function composeObject(input) {
    let dataObject = {}
    for (let i = 0; i < input.length-1; i+=2) {
        dataObject[input[i]] = input[i+1]

    }
    console.log(dataObject)

}

composeObject(['name', 'Pesho', 'age', '23', 'gender', 'male'])
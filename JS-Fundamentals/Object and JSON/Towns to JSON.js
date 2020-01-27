function convert2JSON(input) {
    let arrObj = []

    for (let i = 1; i < input.length; i++) {
        let values = input[i].split(/\s*\|\s*/).filter(x => x !== '')
        arrObj.push( { Town: values[0], Latitude: +values[1], Lngitude: +values[2]})

    }
    console.log(JSON.stringify(arrObj))
}

convert2JSON(['| Town | Latitude | Longitude |'
                , '| Sofia | 42.696552 | 23.32601 |'
                , '| Beijing | 39.913818 | 116.363625 |'])
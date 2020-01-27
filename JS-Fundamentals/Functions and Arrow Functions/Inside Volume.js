function insideVolume(userInput) {
    let x1 = 10, x2 = 50;
    let y1 = 20, y2 = 80;
    let z1 = 15, z2 = 50;
    for (let i = 0; i < userInput.length; i+=3) {
        let x = userInput[i]
        let y = userInput[i+1]
        let z = userInput[i+2]
        console.log( (x >= x1 && x <= x2) && (y >= y1 && y <= y2) && (z >= z1 && z <= z2) ? "inside" : "outside")
    }
}

insideVolume([13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43])
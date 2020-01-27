function inches2Feet(n) {
    let foot =Math.floor(n/12)
    let inches = n % 12
    console.log(`${foot}'-${inches}"`)
}

inches2Feet(55)
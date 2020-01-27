function interestCalc([p, i, n, t]) {
    let yearSequence= 12/n
    let interest = i/100
    let totalSum = p*Math.pow((1+interest/yearSequence),yearSequence*t)
    console.log(totalSum)
}

interestCalc([100000, 5, 12, 25])
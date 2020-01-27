function calcDistance([v1, v2, t]) {
    let firstDistance = ((v1 * 1000) * t)/3600
    let secondDistance = ((v2 * 1000) * t)/3600
    let totalDistance = Math.abs(firstDistance - secondDistance)
    console.log(totalDistance)
}

calcDistance([5, -5, 40])
function grad2Degree(num) {
    let degree = num * 0.9
    if (degree >= 360){
        while (degree >= 360){
            degree-=360
            }
    }
    else if (degree < 0){
        degree+=360
    }
    console.log(degree)

}


grad2Degree(-50)
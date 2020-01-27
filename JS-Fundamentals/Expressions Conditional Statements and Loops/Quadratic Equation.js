function calcQuadraticEquation(a, b, c) {
    d = b*b - 4*a*c
    x = ''
    x1= ''
    x2= ''
    if (d > 0){
        x1 = (-b + Math.sqrt(d)) / (2*a)
        x2 = (-b - Math.sqrt(d)) / (2*a)
    }
    else if (d === 0){
        x = -b / (2*a)
    }
    else{
        console.log('No')
    }
    if (x){
        console.log(x)
    }
    else if (x1 && x2){
        console.log(Math.min(x1,x2))
        console.log(Math.max(x1,x2))
    }

    
}

calcQuadraticEquation(6, 11, -35)
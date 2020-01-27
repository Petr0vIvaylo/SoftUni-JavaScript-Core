function roadRadar(input) {
    let speed = input[0];
    let zone = input[1];
    
    function getLimitByZone(zone) {
        switch (zone){
            case 'city':return 50;
            case 'motorway': return 130;
            case 'interstate': return 90;
            case 'residential': return 20;
        }
    }

    let speedLimit = getLimitByZone(zone);

    function infraction(speed, speedLimit) {
        let overSpeed = speed - speedLimit;
        if (overSpeed <= 0){
            return '';
        }
        else{
            if (overSpeed <= 20){
                return 'speeding'
            }
            else if (overSpeed > 20 && overSpeed <= 40){
                return 'excessive speeding'
            }
            else if (overSpeed > 40){
                return 'reckless driving'
            }
        }
    }
    let isInfraction = infraction(speed, speedLimit)
    console.log(isInfraction)
}
roadRadar([200, 'motorway']);
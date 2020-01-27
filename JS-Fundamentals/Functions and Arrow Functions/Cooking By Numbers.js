function cookingByNumbers(input) {
    function command(cmd, number) {
        switch (cmd) {
            case 'chop':
                return number / 2
            case 'dice':
                return Math.sqrt(number)
            case 'spice':
                return ++number
            case 'bake':
                return number * 3
            case 'fillet':
                return number * 0.8
        }
    }
        for (let i = 1; i < input.length; i++) {
            let currnetValue = command(input[i], input[0])
            input[0] = currnetValue
            console.log(currnetValue)
        }

}

cookingByNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet'])
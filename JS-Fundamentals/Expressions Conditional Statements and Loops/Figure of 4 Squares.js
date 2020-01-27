function figureOfSquare(n) {
    rows = n - 3
    if (rows % 2 === 0){
        console.log('+'+ '-'.repeat(n - 2) + '+' + '-'.repeat(n - 2) + '+')
        for (let i = 0; i < (n-3)/2; i++) {
                console.log('|' + ' '.repeat(n-2) + '|' + ' '.repeat(n-2) + '|')
        }
        console.log('+'+ '-'.repeat(n - 2) + '+' + '-'.repeat(n - 2) + '+')
        for (let i = 0; i < (n-3)/2; i++) {
            console.log('|' + ' '.repeat(n-2) + '|' + ' '.repeat(n-2) + '|')
        }
        console.log('+'+ '-'.repeat(n - 2) + '+' + '-'.repeat(n - 2) + '+')
    }
    else{
        rows = n - 4
        console.log('+'+ '-'.repeat(n - 2) + '+' + '-'.repeat(n - 2) + '+')
        for (let i = 0; i < rows/2; i++) {
            console.log('|' + ' '.repeat(n-2) + '|' + ' '.repeat(n-2) + '|')
        }
        console.log('+'+ '-'.repeat(n - 2) + '+' + '-'.repeat(n - 2) + '+')
        for (let i = 0; i < rows/2; i++) {
            console.log('|' + ' '.repeat(n-2) + '|' + ' '.repeat(n-2) + '|')
        }
        console.log('+'+ '-'.repeat(n - 2) + '+' + '-'.repeat(n - 2) + '+')
    }

}

figureOfSquare(8)
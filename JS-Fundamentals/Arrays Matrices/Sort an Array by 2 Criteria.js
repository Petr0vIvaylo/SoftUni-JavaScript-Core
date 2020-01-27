function sortBy2Criteria(input) {
    let sorted = input.sort().sort((a,b) => a.length > b.length)
    console.log(sorted.join('\n'))
}

sortBy2Criteria(['alpha','beta','gamma'])
function lastMonth(dateArr) {
    let date = new Date( dateArr.reverse())

    date.setDate(0)

    console.log(date.getDate())
}


lastMonth([13, 12, 2004])
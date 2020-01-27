function calendar(dateArr) {
    let date = new Date( dateArr.reverse())
    day = date.getDay()

    prevMonth = ''
    console.log('<table>')
    console.log('<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>')
    if (day > 0){
        for (let i = 0; i < date.setDate(0); i++) {
            prevMonth += ' <tr><td class="prev-month">28</td>'
        }
    }



}


calendar([23, 5, 2018])
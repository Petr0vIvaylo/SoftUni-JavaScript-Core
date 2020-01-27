function multiplicationTable(n) {
    firstRow = ' <tr><th>x</th>'

    console.log('<table border="1">')
    for (let row = 1; row <= n; row++) {
        if(row === 1){
            for (let i = 1; i <= n; i++) {
                firstRow += "<th>" + `${i}` + "</th>"
            }
            firstRow += '</tr>'
            console.log(firstRow)
        }
        nrow = ' <tr>'
        for (let col = 1; col <= n; col++) {
            if (col === 1){
                nrow += "<th>" + `${row*col}` + "</th>"
            }
            nrow += "<td>" + `${row*col}` + "</td>"
        }
        nrow += '</tr>'
        console.log(nrow)

    }
    console.log('</table>')

}

multiplicationTable(5)
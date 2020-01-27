function score2HTML(str) {

    let result = '<table>\n  <tr>'
    let arr = JSON.parse(str)
    for (const key in arr[0]) {
        result += '<th>'+ `${key}` + '</th>'
    }
    result += '</tr>\n'
    for (const obj of arr) {
        result += '  <tr><td>'+`${htmlEscaping(obj['name'])}`+'</td><td>'+`${htmlEscaping(obj['score'].toString())}`+'</td></tr>\n'
    }
    console.log(result + '</table>')

    function htmlEscaping(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
    }
}

score2HTML('[{"name": "Pesho", "score": 479}, {"name": "Gosho", "score": 205}]')
function templateFormat(QA) {
    console.log('<?xml version="1.0" encoding="UTF-8"?>\n <quiz>')
    for (let i = 0; i < QA.length; i+=2) {
        let question = QA[i]
        let answer = QA[i+1]
        console.log(
            '\t<question>\n'+
            '\t\t'+`${question}`+'\n'+
            '\t</question>\n'+
            '\t<answer>\n'+
            '\t\t'+`${answer}`+'\n'+
            '\t</answer>')
    }
    console.log('</quiz>')
}

templateFormat(['Who was the forty-second president of the U.S.A.?', 'William Jefferson Clinton',
    'What is the brightest star in the night sky?', 'Sirius'])
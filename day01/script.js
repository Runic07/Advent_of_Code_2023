const inputfield = document.querySelector('#input-field');
const outputfield = document.querySelector('#output-field');

inputfield.addEventListener('input', () => {
    let result = 0

    const input = inputfield.value;
    for (const line of input.split('\n')) {
        let firstNum = ''
        let lastNum = ''

        const decodedLine = line.replaceAll('one', 'one1one')
                                .replaceAll('two', 'two2two')
                                .replaceAll('three', 'three3three')
                                .replaceAll('four', 'four4four')
                                .replaceAll('five', 'five5five')
                                .replaceAll('six', 'six6six')
                                .replaceAll('seven', 'seven7seven')
                                .replaceAll('eight', 'eight8eight')
                                .replaceAll('nine', 'nine9nine')

        //console.log(decodedLine);

        for(const elem of decodedLine) {
            if(firstNum === '' && elem.match(/^[0-9]+$/)) {
                firstNum = elem
            }
            if(elem.match(/^[0-9]+$/)) {
                lastNum = elem
            }
        }   

        if(firstNum !== '' && lastNum !== '') {
            //console.log('>', line, '=>', firstNum + lastNum);
            //console.log(result, '+', firstNum + lastNum);
            result += parseInt(firstNum + lastNum)
        }
    }

    outputfield.innerHTML = result;
});
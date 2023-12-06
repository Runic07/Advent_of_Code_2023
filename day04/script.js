const inputfield = document.querySelector('#input-field');
const outputfield = document.querySelector('#output-field');
// const modifierfield = document.getElementById('mod-field');

const inputTemplate = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"

// -------- Part 1 --------
/*
inputfield.addEventListener('input', () => {
    let result = 0
    
    const values = inputfield.value.split('\n')
        .map((line) => (line.split(':')[1].split('|').map((item) => (item.split(' ').map((item) => (item.trim())).filter(item => item != '')))));

    for(const line of values) {
        let currentValue = 0;
        for(const tip of line[1]) {
            if(line[0].filter(item => item == tip).length > 0) {
                currentValue = currentValue > 0 ? currentValue*2 : 1;   
            }
        }
        result += currentValue;
    }

    outputfield.innerHTML = result;
});
*/

// -------- Part 2 --------
inputfield.addEventListener('input', () => {
    let result = 0

    const winningObject = countWins(inputfield.value);
    console.log(winningObject);

    outputfield.innerHTML = result;
});

const countWins = (input) => {
    const result = {};
    const values = inputfield.value.split('\n').forEach((line) => {
            let cnt = 0;
            const splitHeader = line.split(':')
            const splitBody = splitHeader[1].split('|').map((item) => (item.split(' ').map((item) => (item.trim())).filter(item => item != '')));
            splitBody[1].forEach((tip) => {
                if(splitBody[0].includes(tip)) {
                    cnt++;
                };
            });
            result[splitHeader[0]] = cnt;
        });
    return result;
}

const inputfield = document.querySelector('#input-field');
const outputfield = document.querySelector('#output-field');
// const modifierfield = document.getElementById('mod-field');

const inputTemplate = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"

// -------- Part 1 --------
/*
const limiters = {
    "red": 12,
    "green": 13,
    "blue": 14,
}

inputfield.addEventListener('input', () => {
    let result = 0

    const input = inputfield.value;
    for (const line of input.split('\n')) {
        let headersplitLine = line.split(':');
        let ID = headersplitLine[0].split(' ')[1];
        if(checkLegalGame(headersplitLine[1])){
            result += parseInt(ID);
        }
    }

    outputfield.innerHTML = result;
});

const checkLegalGame = (game) => {
    for (const part of game.split(';')) {
        //console.log("->", part);
        for(const cubes of part.split(',')){
            let cube = cubes.trim().split(' ');
            //console.log("-->", cube[0], cube[1]);
            if(!(cube[1] in limiters && parseInt(cube[0]) <= limiters[cube[1]])){
                return false;
            }
        }
    }
    return true;
}*/

// -------- Part 2 --------
inputfield.addEventListener('input', () => {
    let result = 0

    const input = inputfield.value;
    for (const line of input.split('\n')) {
        let game = line.split(':');
        
        const maxCubes = {
            "red": 0,
            "green": 0,
            "blue": 0,
        }

        for (const part of game[1].split(';')) {
            for(const segment of part.split(',')){
                let cubes = segment.trim().split(' ');
                if(cubes[1] in maxCubes){
                    maxCubes[cubes[1]] = Math.max(maxCubes[cubes[1]], parseInt(cubes[0]));
                }
            }
        }

        result += calculateDictPower(maxCubes);
    }

    outputfield.innerHTML = result;
});

const calculateDictPower = (dict) => {
    if(dict.length === 0){
        return 0;
    }else{
        let result = 1;
        for (const value of Object.values(dict)) {
            result *= value;
        }
        return result;
    }
}

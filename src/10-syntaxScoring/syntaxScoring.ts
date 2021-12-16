import { syntaxScoringInput } from './input';

// console.log(syntaxScoringInput);

interface SyntaxDictCount {
    [bracket:string]: number;
}

const corruptLine = (syntaxString:string):boolean => {

    const syntaxCount:SyntaxDictCount = {
        parenthesis: 0,
        square: 0,
        curly: 0,
        triangle: 0
    }

    for(let character of syntaxString){
        switch(character){
            case '(':
                syntaxCount.parenthesis++;
                break;
            case '[':
                syntaxCount.square++;
                break;
            case '{':
                syntaxCount.curly++;
                break;
            case '<':
                syntaxCount.triangle++;
                break;
            case ')':
                syntaxCount.parenthesis--;
                break;
            case ']':
                syntaxCount.square--;
                break;
            case '}':
                syntaxCount.curly--;
                break;
            case '>':
                syntaxCount.triangle--;
                break;
        }
        // console.log(syntaxCount);
        if(Object.values(syntaxCount).some(value => value <0)){
            return true;
        }
    }
    // console.log(syntaxCount);
    return false;
}


const corruptLineVersionScore = (syntaxString:string):number => {

    let lastOpen:string[] = [...syntaxString[0]];
    // console.log(lastOpen);

    const sytnaxScore:SyntaxDictCount = {
        ')': 3,
        ']': 57,
        '}': 1197,
        '>': 25137
    }

    for(let character = 1; character < syntaxString.length; character++){
        // console.log(syntaxString[character]);
        if(['(','{','[','<'].includes(syntaxString[character])){
            lastOpen.push(syntaxString[character]);
        } else {
            const lastChar:string = lastOpen[lastOpen.length-1];
            switch (lastChar) {
                case '(':
                    if(syntaxString[character] !== ')') {
                    return sytnaxScore[syntaxString[character]];
                    }
                    lastOpen.pop();
                    break;

                case '[':
                    if(syntaxString[character] !== ']') {
                    return sytnaxScore[syntaxString[character]];
                    }
                    lastOpen.pop();
                    break;

                case '{':
                    if(syntaxString[character] !== '}') {
                    return sytnaxScore[syntaxString[character]];
                    }
                    lastOpen.pop();
                    break;

                case '<':
                    if(syntaxString[character] !== '>') {
                    return sytnaxScore[syntaxString[character]];
                    }
                    lastOpen.pop();
                    break;
            }
        }

    // console.log('here',lastOpen);
    }

    return 0;
}

const scoreCalc = (syntaxInput:string[]):number => {
    return syntaxInput.reduce((agg, cur) => {
        return agg + corruptLineVersionScore(cur);
    },0)
}


// console.log('[({(<(())[]>[[{[]{<()<>>')
// corruptLineVersionScore('{([(<{}[<>[]}>{[]{[(<()>');
// console.log(corruptLineVersionScore('{([(<{}[<>[]}>{[]{[(<()>'))
// console.log(corruptLineVersionScore('[[<[([]))<([[{}[[()]]]'))
// console.log(corruptLineVersionScore('[{[{({}]{}}([{[{{{}}([]'))
// console.log(corruptLineVersionScore('[<(<(<(<{}))><([]([]()'))
// console.log(corruptLineVersionScore('<{([([[(<>()){}]>(<<{{'))

console.log(scoreCalc(syntaxScoringInput));

//part 2

const getUnfinishedLines = (syntaxInput:string[]):string[] => {
    const unfinishedString: string[] =[];
    for(let string of syntaxInput){
        if(corruptLineVersionScore(string) === 0) {
            unfinishedString.push(string);
        }
    }
    return unfinishedString;
}

const unfinishedLines:string[] = getUnfinishedLines(syntaxScoringInput);

const unfinishedLinesRemaining = (syntaxString:string):number => {

    const lastOpen:string[] = [...syntaxString[0]];

    for(let character = 1; character < syntaxString.length; character++){
        // console.log(syntaxString[character]);
        if(['(','{','[','<'].includes(syntaxString[character])){
            lastOpen.push(syntaxString[character]);
        } else {
            lastOpen.pop();
        }

    // console.log('here',lastOpen);
    }
    // console.log(lastOpen);
    const remainingSyntax:string[] = [];

    for(let i = (lastOpen.length - 1); i >= 0; i--){
        switch(lastOpen[i]) {
            case '(':
                remainingSyntax.push(')');
                break;
            case '[':
                remainingSyntax.push(']');
                break;
            case '{':
                remainingSyntax.push('}');
                break;
            case '<':
                remainingSyntax.push('>');
                break;
        }
    }

    const sytnaxScore:SyntaxDictCount = {
        ')': 1,
        ']': 2,
        '}': 3,
        '>': 4
    }

    const score:number = remainingSyntax.reduce((agg, cur) => {
        // console.log(5 * sytnaxScore[cur]);
        return (agg * 5) + sytnaxScore[cur];
    },0)

    return score;
}

// console.log(unfinishedLinesRemaining('(((({<>}<{<{<>}{[]{[]{}'));

const scoreCalcAutoCorrect = (syntaxInput:string[]):number => {
    const scores:number[] = [];
    for(let string of syntaxInput){
        scores.push(unfinishedLinesRemaining(string));
    }
    scores.sort((a,b) => a-b);

    return scores[Math.floor(scores.length/2)];
}

console.log(scoreCalcAutoCorrect(unfinishedLines));
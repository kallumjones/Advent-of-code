import { sevenSegmentSearchInput, Segment } from "./input";

// console.log(sevenSegmentSearchInput);

const outputValues = (segments:Segment):number[][] => {
    const results:number[][] = [];

    for(let segment of segments){
        const output:string[] = segment[1].split(' ');
        const outputNumbers: number[] = output.map(value => value.length);
        results.push(outputNumbers);
    }

    return results;
}

const howManyEasyDigits = (outputValue:number[][]):number => {
    let easyDigits = 0;

    for(let output of outputValue){
        for(let value of output){
            if(value === 2 || value === 3 || value === 4 || value === 7){
                easyDigits++;
            }
        }
    }
    return easyDigits;
}

// const output = outputValues(sevenSegmentSearchInput);
// console.log(howManyEasyDigits(output));

//part 2

interface NumberLog {
    [key:string]: string
}

const getKeyByValue = (object:NumberLog, value:string) => {
    return Object.keys(object).find(key => object[key] === value);
}

console.log(sevenSegmentSearchInput[0]);

const decoder = (segment:string[]):number => {

    const inputs:string[] = segment[0].split(' ');
    const decoderDict:NumberLog = {
        '0': '',
        '1': '',
        '2': '',
        '3': '',
        '4': '',
        '5': '',
        '6': '',
        '7': '',
        '8': '',
        '9': ''
    }
    
    for(let input of inputs){
        // console.log(input);
        switch(input.length){
            case 2:
                decoderDict['1'] = input.split('').sort().join('');
                break;
            case 3:
                decoderDict['7'] = input.split('').sort().join('');
                break;
            case 4:
                decoderDict['4'] = input.split('').sort().join('');
                break;
            case 7:
                decoderDict['8'] = input.split('').sort().join('');
                break;
        }
    }

    //length 6

    for(let input of inputs){
        if(input.length === 6){
            const inputSplit:string[] = input.split('')
            const seven:string[] = decoderDict['7'].split('');
            const four:string[] = decoderDict['4'].split('');
            const arraySeven:boolean[] = [];
            const arrayFour:boolean[] = [];

            for(let i = 0; i < seven.length; i++){
                arraySeven.push(inputSplit.includes(seven[i]));
            }

            for(let i = 0; i < four.length; i++){
                arrayFour.push(inputSplit.includes(four[i]));
            }

            if(arraySeven.includes(false)){
                decoderDict['6'] = input.split('').sort().join('');
            } else if(arrayFour.every(element => element === true)){
                decoderDict['9'] = input.split('').sort().join('');
            } else if(arraySeven.every(element => element === true) && arrayFour.includes(false)){
                decoderDict['0'] = input.split('').sort().join('');
            }
        }
    }

    //length 5

    for(let input of inputs){
        if(input.length === 5){
            const inputSplit:string[] = input.split('')
            const one:string[] = decoderDict['1'].split('');
            const six:string[] = decoderDict['6'].split('');
            const arrayOne:boolean[] = [];
            const arraySix:boolean[] = [];

            for(let i = 0; i < one.length; i++){
                arrayOne.push(inputSplit.includes(one[i]));
            }

            for(let i = 0; i < inputSplit.length; i++){
                arraySix.push(six.includes(inputSplit[i]));
            }

            if(arrayOne.every(element => element === true)){
                decoderDict['3'] = input.split('').sort().join('');
            } else if(arraySix.every(element => element === true)){
                decoderDict['5'] = input.split('').sort().join('');
            } else {
                decoderDict['2'] = input.split('').sort().join('');
            }
        }
    }
    

    // console.log(decoderDict);
    const outputs:string[] = segment[1].split(' ').map(element => element.split('').sort().join(''));
    const newOutputs:string[] = [];

    for(let output of outputs){
        let numberValue:string | undefined = getKeyByValue(decoderDict, output);
        if(typeof numberValue === 'string') {
            newOutputs.push(numberValue);
        }
    }
    // console.log(newOutputs);
    return Number(newOutputs.join(''));
}

// console.log(decoder(sevenSegmentSearchInput[0]));

const totalResult:number = sevenSegmentSearchInput.reduce((agg, cur) => {
    return agg + decoder(cur);
},0)

console.log(totalResult);
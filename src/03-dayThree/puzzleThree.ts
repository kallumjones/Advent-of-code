import { puzzleThreeInput } from "./puzzleThreeInput";

// console.log(puzzleThreeInput);

//part 1;
const binarySum = (binary:string[]):string[][] => {
    let gamma: string[] = [];
    let epsilon: string[] = [];

    for(let i = 0; i < binary[0].length; i++) {
        let currentTotal:number = 0;
        for(let j = 0; j < binary.length; j++) {
            currentTotal += Number(binary[j][i]);

        }
        currentTotal >= 500 ? gamma.push('1') : gamma.push('0');
        currentTotal >= 500 ? epsilon.push('0') : epsilon.push('1');
    }

    return [gamma, epsilon];
}

const multipleTwoBinary = (binaryOne:string[], binaryTwo:string[]):number => {
    const binaryOneDecimal: number = parseInt(binaryOne.join(''),2);
    const binaryTwoDecimal: number = parseInt(binaryTwo.join(''),2);

    return binaryOneDecimal * binaryTwoDecimal; 
}

const [gamma , epsilon] = binarySum(puzzleThreeInput);
console.log(multipleTwoBinary(gamma,epsilon));


// part 2

const calculateCommonBit = (binary:string[], index:number, type:string):string =>{
    const binaryCap:number = Math.floor(binary.length/2);
    const currentTotal = binary.reduce((agg, cur) => {
        return agg + Number(cur[index]);
    },0);
    if(type === 'oxygen'){
        return currentTotal >= binaryCap ? '1':'0';
    } else {
        return currentTotal >= binaryCap ? '0':'1';
    }
}

const OxygenGeneratorRating = (binary:string[], type:string): string[] =>{
    let result:string[] = [];

    for(let i = 0; i < 12; i++) {
        const mostCommonBit:string = calculateCommonBit(binary,i,type);
        // console.log(mostCommonBit);
        binary = binary.filter(string => string[i] === mostCommonBit);
        // console.log(binary);

        if(binary.length === 1) {
            result = binary[0].split('');
            break;
        }

    }

    return result;
    
}

// console.log(gamma);
const oxygen = OxygenGeneratorRating(puzzleThreeInput,'oxygen');
// console.log(epsilon);
const co2 = OxygenGeneratorRating(puzzleThreeInput, 'co2');

console.log(multipleTwoBinary(oxygen,co2));


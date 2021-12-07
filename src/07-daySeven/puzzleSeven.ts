import { puzzleSevenInput } from "./PuzzleSevenInput";

// console.log(puzzleSevenInput);

const totalFuelCountToMove = (puzzleSevenInput: number[]):number => {
    let totalFuel: number = 100000000000000;

    for(let i = 0; i < puzzleSevenInput.length; i++){
        const currentHorz = puzzleSevenInput.reduce((agg, cur) => {
            if(cur > i) {
                // console.log(cur - i);
                return agg + (cur - i);
            } if (cur < i) {
                // console.log(i - cur)
                return agg + (i - cur);
            } else {
                // console.log('Zero')
                return agg;
            }
        },0)
        // console.log(currentHorz);
        if(currentHorz < totalFuel){
            totalFuel = currentHorz;
        }
    }


    return totalFuel;
}

console.log(totalFuelCountToMove(puzzleSevenInput));

//part 2

const triangleNumber = (num:number):number => {
    if(num === 0){
        return 0;
    } else if(num === 1){
        return 1;
    } else {
        return num + triangleNumber(num-1);
    }
}

const totalFuelCountToMoveWithTriangleNumbers = (puzzleSevenInput: number[]):number => {
    let totalFuel: number = 1000000000000000;

    for(let i = 0; i < puzzleSevenInput.length; i++){
        const currentHorz = puzzleSevenInput.reduce((agg, cur) => {
            if(cur > i) {
                // console.log(cur - i);
                return agg + triangleNumber(cur - i);
            } if (cur < i) {
                // console.log(i - cur)
                return agg + triangleNumber(i - cur);
            } else {
                // console.log('Zero')
                return agg;
            }
        },0)
        // console.log(currentHorz);
        if(currentHorz < totalFuel){
            totalFuel = currentHorz;
        }
    }


    return totalFuel;
}

// console.log(triangleNumber(0));
console.log(totalFuelCountToMoveWithTriangleNumbers(puzzleSevenInput));

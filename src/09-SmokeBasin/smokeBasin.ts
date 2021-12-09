import { smokeBasinInput, Map } from "./input";

// console.log(smokeBasinInput[0]);
// console.log(smokeBasinInput[1]);


const checkLowPoint = (row:number, col:number):boolean => {
    const currentValue = smokeBasinInput[row][col];
    // console.log(currentValue);



    //left
    if(col !== 0){
        if(currentValue >= smokeBasinInput[row][col - 1]){
            return false;
        }
    }
    //top
    if(row !== 99) {
        if(currentValue >= smokeBasinInput[row + 1][col]){
            return false;
        }
    }
    //right
    if(col !== 99){
        if(currentValue >= smokeBasinInput[row][col + 1]){
            return false;
        } 
    }
    //left
    if(row !== 0){ 
        if(currentValue >= smokeBasinInput[row - 1][col]){
            return false;
        } 
    }
    return true;
}

const calculateRisk = (input:Map):number => {
    let risk:number = 0;
    for(let row = 0; row < input.length;row++){
        for(let col = 0; col < input[0].length; col++){
            // console.log(input[row][col]);
            if(checkLowPoint(row,col)){
                risk += input[row][col] + 1;
            }
        }
    }
    return risk;
}

// console.log(checkLowPoint(0,1))
// console.log(calculateRisk(smokeBasinInput));

//part 2 basin

const isEnd = (row:number, col:number,res:number):number => {
    let result = res;
    let currentRes = res;

    // console.log('here',smokeBasinInput[row][col], row, col);

    // console.log(result);
    smokeBasinInput[row][col] = 10;
    //left
    if(col !== 0){
        if(smokeBasinInput[row][col - 1] < 9){
            currentRes += isEnd(row,col - 1,result);
        }
    }
    //bottom
    if(row !== 99) {
        // console.log('here');
        if(smokeBasinInput[row + 1][col] < 9){
            currentRes += isEnd(row + 1,col,result);
        }
    }
    //right
    if(col !== 99){
        if(smokeBasinInput[row][col + 1] < 9){
            currentRes += isEnd(row,col + 1,result);
        }
    }
    //top
    if(row !== 0){ 
        if(smokeBasinInput[row - 1][col] < 9){
            currentRes += isEnd(row - 1,col,result);
        }
    }

    // console.log(currentRes);

    return currentRes + 1;
}

const calculateLargeBasin = (input:Map):number => {
    let basin:number[] = [];

    for(let row = 0; row < input.length;row++){
        for(let col = 0; col < input[0].length; col++){
            // console.log(input[row][col]);

            if(input[row][col] < 9){
                const basinSize = isEnd(row,col,0);
                // console.log('here:', basinSize)
                // console.log(input);
                basin.push(basinSize);
            }
        }
    }
    basin.sort((a,b) => b - a);
    return basin[0] * basin[1] * basin[2];
}

// console.log(smokeBasinInput);
// console.log(isEnd(0,5,0));

console.log(calculateLargeBasin(smokeBasinInput));

// console.log(smokeBasinInput);

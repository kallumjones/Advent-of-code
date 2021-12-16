import { DumboGrid, dumboGridInput } from "./input";

// console.log(dumboGridInput);

const dumboStep = (grid:DumboGrid, currentChanges:number, firstTime:number):[DumboGrid, number] => {
    let numberOfChanges:number = 0;
    let totalNumberOfChanges:number = currentChanges;
    // console.log(grid);
    const nextStepGrid:DumboGrid = JSON.parse(JSON.stringify(grid));

    if(firstTime === 0) {
        // console.log('here');
        
        for(let row = 0; row < 10; row++){
            for(let col = 0; col < 10; col++){
                nextStepGrid[row][col]++;
                }
            }
        }

    for(let row = 0; row < 10; row++){
        for(let col = 0; col < 10; col++){
            if(nextStepGrid[row][col] > 9){
                if(row > 0) {
                    if(col > 0) {
                        if(nextStepGrid[row-1][col-1] > 0) nextStepGrid[row-1][col-1]++;
                    }
                    if(nextStepGrid[row-1][col] > 0) nextStepGrid[row-1][col]++;
                    if(col < 9){
                        if(nextStepGrid[row-1][col+1] > 0) nextStepGrid[row-1][col+1]++;
                    }
                }
                if(col > 0){
                    if(nextStepGrid[row][col-1] > 0) nextStepGrid[row][col-1]++;
                }
                if(col < 9){
                    if(nextStepGrid[row][col+1] > 0) nextStepGrid[row][col+1]++;
                }
                if(row < 9){
                    if(col > 0){
                        if(nextStepGrid[row+1][col-1] > 0) nextStepGrid[row+1][col-1]++;
                    }
                    if(nextStepGrid[row+1][col] > 0) nextStepGrid[row+1][col]++;
                    if(col < 9){
                        if(nextStepGrid[row+1][col+1] > 0) nextStepGrid[row+1][col+1]++;
                    }
                }
                    
                nextStepGrid[row][col] = 0;
                numberOfChanges++;
            }
        }
    }

    totalNumberOfChanges += numberOfChanges;
    if(numberOfChanges === 0){
        return [nextStepGrid, totalNumberOfChanges];
    } else {
        return dumboStep(nextStepGrid, totalNumberOfChanges, 1);
    }
}

const numberOfSteps = (grid:DumboGrid, steps:number):[DumboGrid,number] => {
    let totalNumberOfChanges:number = 0;
    let newGrid:DumboGrid = grid;
    for(let i = 1; i <= steps; i++){
        const [nextGrid, numberOfChanges] = dumboStep(newGrid,0,0);
        newGrid = nextGrid;
        totalNumberOfChanges += numberOfChanges;
    }

    return [newGrid, totalNumberOfChanges];
}


console.log(dumboStep(dumboGridInput,0,0));
console.log(numberOfSteps(dumboGridInput, 100));
// console.log(grid);

//part 2

const numberOfStepsAllFlash = (grid:DumboGrid):number => {
    let steps:number = 1;
    let allFlashStep:number = 0;
    let newGrid:DumboGrid = grid;

    while(allFlashStep === 0) {
        const [nextGrid, numberOfChanges] = dumboStep(newGrid,0,0);
        newGrid = nextGrid;
        if(numberOfChanges === 100){
            allFlashStep = steps;
        }
        steps++;
    }
    return allFlashStep;
}


console.log(numberOfStepsAllFlash(dumboGridInput));

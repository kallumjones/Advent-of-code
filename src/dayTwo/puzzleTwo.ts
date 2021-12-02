import { puzzleTwoInput, direction } from "./puzzleTwoInput";

// console.log(puzzleTwoInput);

interface depthGauge {
    horizontal: number,
    depth: number
}

const calculatePath = (puzzleTwoInput: direction[]):depthGauge => {
    const path:depthGauge ={
        horizontal: 0,
        depth: 0
    };

    for(let direct of puzzleTwoInput){
        switch(direct[0]){
            case 'forward':
                path.horizontal += direct[1];
                break;
            case 'down':
                path.depth += direct[1];
                break;
            case 'up':
                path.depth -= direct[1];
                break;
        }
    }

    return path;
}

const finalPath:depthGauge = calculatePath(puzzleTwoInput)
console.log(finalPath.depth * finalPath.horizontal);

//part 2 additional aim quantity

interface depthAimGauge {
    horizontal: number,
    depth: number,
    aim: number
}

const calculatePathWithAim = (puzzleTwoInput: direction[]):depthAimGauge => {
    const path:depthAimGauge ={
        horizontal: 0,
        depth: 0,
        aim: 0
    };

    for(let direct of puzzleTwoInput){
        switch(direct[0]){
            case 'forward':
                path.horizontal += direct[1];
                path.depth = path.depth + (path.aim * direct[1]);
                break;
            case 'down':
                path.aim += direct[1];
                break;
            case 'up':
                path.aim -= direct[1];
                break;
        }
    }

    return path;
}

// console.log(calculatePathWithAim(puzzleTwoInput))
const finalPathWithAim: depthAimGauge = calculatePathWithAim(puzzleTwoInput);
console.log(finalPathWithAim.depth * finalPathWithAim.horizontal);

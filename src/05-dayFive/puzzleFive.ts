import { puzzleFiveInput } from "./puzzleFiveInput";

console.log(puzzleFiveInput[0]);

type Grid = number[][];

const hydroVents:Grid = [];

for(let i = 0; i < 999; i++) {
    hydroVents.push(new Array(999).fill(0));
}
// for(let i = 0; i < 10; i++) {
//     hydroVents.push(new Array(10).fill(0));
// }

// console.log(hydroVents);

const addLine = (grid:Grid, rule:string):Grid => {
    let coOrd:string[] = rule.split(' -> ');
    console.log(coOrd);
    let [x1, y1] = coOrd[0].split(',');
    let [x2, y2] = coOrd[1].split(',');

    
    if(x1 === x2){
        let start:number = Math.min(Number(y1),Number(y2));
        let end:number = Math.max(Number(y1),Number(y2));
        // console.log(x1, start, end)
        for(let y = start; y <= end; y++){
            grid[y][Number(x1)]++;
        }
    } else if(y1 === y2) {
        let start:number = Math.min(Number(x1),Number(x2));
        let end:number = Math.max(Number(x1),Number(x2));
        // console.log(y1, start, end)
        for(let x = start; x <= end; x++){
            grid[Number(y1)][x]++;
        }
    } else {
        
        let startX:number = Number(x1);
        let endX:number = Number(x2);

        let startY:number = Number(y1);
        let endY:number = Number(y2);



        let minX:number = Math.min(Number(x1),Number(x2));
        let maxX:number = Math.max(Number(x1),Number(x2));
        const diff = maxX - minX + 1;

        console.log('Number' , diff);

        for(let i = 0; i < diff; i++){
            grid[startY][startX]++;
            if(startX > endX){
                startX--;
            } else {
                startX++;
            }
            if(startY > endY){
                startY--;
            } else {
                startY++;
            }
        }
               
    }
    // console.log(x1,y1,x2,y2);
    return grid;
}

// addLine(hydroVents, '0,9 -> 5,9');
// addLine(hydroVents, '8,0 -> 0,8');
// addLine(hydroVents, '9,4 -> 3,4');
// addLine(hydroVents, '2,2 -> 2,1');
// addLine(hydroVents, '7,0 -> 7,4');
// addLine(hydroVents, '6,4 -> 2,0');

// 0,9 -> 5,9
// 8,0 -> 0,8
// 9,4 -> 3,4
// 2,2 -> 2,1
// 7,0 -> 7,4
// 6,4 -> 2,0
// 0,9 -> 2,9
// 3,4 -> 1,4
// 0,0 -> 8,8
// 5,5 -> 8,2

puzzleFiveInput.forEach(rule => addLine(hydroVents, rule));

const hydroVentsNumber:number = hydroVents.reduce((agg, cur) => {
    return agg + cur.reduce((agg, cur) => {
        return cur >=2 ? agg + 1: agg;
    },0)
},0)

// console.log(hydroVents.map(element => element.join('')));
console.log(hydroVentsNumber);

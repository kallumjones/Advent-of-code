import path = require('path');
import fs = require('fs');
// const path = require('path');
// const fs = require('fs');
// console.log(path);

export type direction = [string, number];

export const puzzleTwoInput: direction[] = fs
    .readFileSync(path.join(__dirname, 'puzzleTwoInput.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n')
    .map((direction: string) => {
        let current:string[] = direction.split(' ')
        return [current[0], Number(current[1])];
    });


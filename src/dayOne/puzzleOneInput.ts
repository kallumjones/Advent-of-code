import path = require('path');
import fs = require('fs');
// const path = require('path');
// const fs = require('fs');
// console.log(path);
export const puzzleOneInput: number[] = fs
    .readFileSync(path.join(__dirname, 'puzzleOneInput.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n')
    .map((depth: string) => parseInt(depth, 10));


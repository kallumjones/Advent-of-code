import path = require('path');
import fs = require('fs');
// const path = require('path');
// const fs = require('fs');
// console.log(path);

export const puzzleThreeInput: string[] = fs
    .readFileSync(path.join(__dirname, 'puzzleThreeInput.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n');


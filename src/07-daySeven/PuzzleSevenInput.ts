import path = require('path');
import fs = require('fs');

export const puzzleSevenInput: number[] = fs
    .readFileSync(path.join(__dirname, 'puzzleSevenInput.txt'), 'utf8')
    .toString()
    .trim()
    .split(',')
    .map((depth: string) => parseInt(depth, 10));

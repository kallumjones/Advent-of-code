import path = require('path');
import fs = require('fs');

export const puzzleSixInput: number[] = fs
    .readFileSync(path.join(__dirname, 'puzzleSixInput.txt'), 'utf8')
    .toString()
    .trim()
    .split(',')
    .map((depth: string) => parseInt(depth, 10));


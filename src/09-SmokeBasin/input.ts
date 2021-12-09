import path = require('path');
import fs = require('fs');

export type Map = number[][]

export const smokeBasinInput: Map = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n')
    .map(element => element.split('')
        .map(num => Number(num)));

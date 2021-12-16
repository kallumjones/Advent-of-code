import path = require('path');
import fs = require('fs');

export type DumboGrid = number[][];

export const dumboGridInput:DumboGrid = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n')
    .map(element => element.split('')
        .map(num => Number(num)));

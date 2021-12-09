import path = require('path');
import fs = require('fs');

export type Segment = string[][]

export const sevenSegmentSearchInput: Segment = fs
    .readFileSync(path.join(__dirname, 'Input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n')
    .map(element => element.split(' | '));

import path = require('path');
import fs = require('fs');

export const syntaxScoringInput: string[] = fs
    .readFileSync(path.join(__dirname, 'Input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n');

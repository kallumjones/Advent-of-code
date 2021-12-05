import path = require('path');
import fs = require('fs');
// const path = require('path');
// const fs = require('fs');
// console.log(path);

export type BingoCard = string[][];

export const bingoNumbers: string[] = fs
    .readFileSync(path.join(__dirname, 'puzzleFourInputBingoNumbers.txt'), 'utf8')
    .toString()
    .trim()
    .split(',');

export const bingoCards: BingoCard[] = fs
    .readFileSync(path.join(__dirname, 'puzzleFourInputBingoCards.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n\n')
    .map(card => card.split('\n')
        .map(card => {
            const newCard:string[] = [];
            const currentCard:string[]  = card.split(' ');

            for(let number of currentCard){
                if(number){
                    newCard.push(number);
                }   
            }

            return newCard;
        })
    );



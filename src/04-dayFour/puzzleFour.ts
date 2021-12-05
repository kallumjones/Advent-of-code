import { bingoNumbers, bingoCards, BingoCard } from "./puzzleFourInput";

// console.log(bingoNumbers);
// console.log(bingoCards);

const isWinner = (bingoCard:BingoCard):boolean => {
    //rows
    for(let i = 0; i < 5; i++){
        if(bingoCard[i].every(number => number === 'X')){
            return true;
        }
    }
    //columns
    for(let col = 0; col < 5; col++){
        let currentCol: string[] = []
        for(let row = 0; row < 5; row++){
            currentCol.push(bingoCard[row][col])
        }
        if(currentCol.every(number => number === 'X')){
            return true;
        }
    }
    return false;
}

const bingo = (bingoCards:BingoCard[], bingoNumbers:string[]):[BingoCard, string] => {
    for( let bingoNumber = 0; bingoNumber < bingoNumbers.length; bingoNumber++){
        
        for(let card of bingoCards){

            for(let row = 0; row < 5; row++){
                for(let col = 0; col < 5; col++){
                    if(card[row][col] === bingoNumbers[bingoNumber]){
                        card[row][col] = 'X';
                        break;
                    }
                }
            }

            if(bingoNumber > 5 && isWinner(card)) {
                return [card, bingoNumbers[bingoNumber]];
            }
        }

    }
    return [[[]],'']; //not sure how to get rid of this
}


const [winningBingoCard, winningNumber] = bingo(bingoCards, bingoNumbers);

console.log(winningBingoCard);
console.log(winningNumber);

console.log(
    winningBingoCard.reduce((agg, cur) => {
        return agg + cur.reduce((agg, cur) => {
            return cur !== 'X' ? agg + Number(cur) : agg;
            },0);
    },0) * Number(winningNumber)
)

// console.log(isWinner([
//     [ 'X', 'X', 'X', 'X', '80' ],
//     [ '47', '67', 'X', '81', '9' ],
//     [ 'X', 'X', 'X', 'X', '45' ],
//     [ '50', '24', 'X', '45', '71' ],
//     [ '66', '15', 'X', '3', '97' ]
//   ]))

//part 2

const emptyCard = ():BingoCard => {
    return [['','','','',''],['','','','',''],['','','','',''],['','','','',''],['','','','','']]
};

const bingoLastWinner = (bingoCards:BingoCard[], bingoNumbers:string[]):[BingoCard, string] => {
    let lastToWin:BingoCard = [[]];
    let winningNumber:string = '';
    for( let bingoNumber = 0; bingoNumber < bingoNumbers.length; bingoNumber++){
        

        for(let i = 0; i < bingoCards.length; i++) {
        // for(let card of bingoCards){
            let card = bingoCards[i];
            
            for(let row = 0; row < 5; row++){
                for(let col = 0; col < 5; col++){
                    if(card[row][col] === bingoNumbers[bingoNumber]){
                        card[row][col] = 'X';
                        break;
                    }
                }
            }

            if(bingoNumber > 5 && isWinner(card)) {
                
                lastToWin = card;
                winningNumber = bingoNumbers[bingoNumber];
                // console.log(lastToWin);
                bingoCards[i] = emptyCard(); //this can be done better (maybe try remove the card without affect for loop order)
            }
            
        }
        // console.log(bingoCards);

    }
    return [lastToWin,winningNumber]; //not sure how to get rid of this
}

const [lastWinningBingoCard, lastWinningNumber] = bingoLastWinner(bingoCards, bingoNumbers);

console.log(lastWinningBingoCard);
console.log(lastWinningNumber);

console.log(
    lastWinningBingoCard.reduce((agg, cur) => {
        return agg + cur.reduce((agg, cur) => {
            return cur !== 'X' ? agg + Number(cur) : agg;
            },0);
    },0) * Number(lastWinningNumber)
)
import { puzzleSixInput } from "./puzzleSixInput";

// console.log(puzzleSixInput);



const newDay = (fishes:number[], days: number): number => {
    let currentDay:number = 0;
    let firstBabyIndex:number = fishes.length - 1;
    // console.log(firstBabyIndex);
    while (currentDay < days) {
        const newFish:number[] = fishes.map(fish => fish - 1 < 0 ? 6: fish - 1);

        const newFirstBabyIndex:number = newFish.lastIndexOf(0);

        if(newFirstBabyIndex > firstBabyIndex) {
            firstBabyIndex = newFirstBabyIndex;
        }
        // console.log(firstBabyIndex);

        for(let fish = 0; fish <= firstBabyIndex; fish++){
            if(newFish[fish] === 6) {
                newFish.push(8);
            }
        }

        currentDay++;
        fishes = newFish;
        // console.log(currentDay ,newFish);
    }
    return fishes.length;
}

// console.log(newDay(puzzleSixInput,256));

//part 2, now works for part 1 too

interface Fishes {
    [key: string]: number; 
};

const newDayObject = (fishes:number[], days: number): Fishes => {

    const fishCount:Fishes = {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0
        }

    for(let fish of fishes) {
        fishCount[fish]++
    }

    let currentDay:number = 0;
    while (currentDay < days) {
        const babyFish = fishCount[0];

        fishCount[0] = fishCount[1];
        fishCount[1] = fishCount[2];
        fishCount[2] = fishCount[3];
        fishCount[3] = fishCount[4];
        fishCount[4] = fishCount[5];
        fishCount[5] = fishCount[6];
        fishCount[6] = fishCount[7] + babyFish;
        fishCount[7] = fishCount[8];
        fishCount[8] = babyFish;

        currentDay++;
        // console.log(fishCount);
    }
    return fishCount;
}

const totalFishCount:Fishes = newDayObject(puzzleSixInput,256);

const totalFishCountNumber:number = Object.values(totalFishCount)
                                          .reduce((agg, cur)=> agg + cur,0);

console.log(totalFishCountNumber)

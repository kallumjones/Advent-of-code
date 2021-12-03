import { puzzleOneInput } from "./puzzleOneInput";

//Part 1 how many depth increases

const numberOfDepthIncrease = (array: number[]): number => {
  let depthIncrease: number = 0;

  for (let i = 0; i < puzzleOneInput.length - 1; i++) {
    if (puzzleOneInput[i] < puzzleOneInput[i + 1]) {
      depthIncrease++;
    }
  }
  return depthIncrease;
};

console.log(numberOfDepthIncrease(puzzleOneInput));

//part 2 three moving window depth increase

const windowSum = (array: number[], start:number, window: number): number => {
    return array.slice(start, start + window).reduce((agg, cur) => agg + cur, 0);
}

const numberOfDepthIncreaseWindow = (array: number[], window:number): number => {
    let depthIncrease: number = 0;
  
    for (let i = 0; i < puzzleOneInput.length - window; i++) {
        const firstWindow:number = windowSum(array, i, window);
        const secondsWindow:number = windowSum(array, i + 1, window);
      if (secondsWindow > firstWindow) {
        depthIncrease++;
      }
    }
    return depthIncrease;
  };
  console.log(numberOfDepthIncreaseWindow(puzzleOneInput, 3));

export const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
} // array of 6
// floor( .99 * (5 - 1 + 1)) => .99 * 5 => 4.95 => 4 + 1

export const gridDefault = () => {
    const rows = 18;
    const cols = 10;
    const grid = [];
    
    for(let i = 0; i < rows; i++ ) {
        grid.push([]);
        let currentRow = grid[i];
        for(let j = 0; j < cols; j++ ) {
            currentRow.push(0);
        }
    }
    return grid
}

export const shapes = [
    // none
  [[[0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0]]],

// I
[[[0,0,0,0],
  [1,1,1,1],
  [0,0,0,0],
  [0,0,0,0]],

 [[0,1,0,0],
  [0,1,0,0],
  [0,1,0,0],
  [0,1,0,0]]],

// T
[[[0,0,0,0],
  [1,1,1,0],
  [0,1,0,0],
  [0,0,0,0]],

 [[0,1,0,0],
  [1,1,0,0],
  [0,1,0,0],
  [0,0,0,0]],

 [[0,1,0,0],
  [1,1,1,0],
  [0,0,0,0],
  [0,0,0,0]],

 [[0,1,0,0],
  [0,1,1,0],
  [0,1,0,0],
  [0,0,0,0]]],

// L
[[[0,0,0,0],
  [1,1,1,0],
  [1,0,0,0],
  [0,0,0,0]],

 [[1,1,0,0],
  [0,1,0,0],
  [0,1,0,0],
  [0,0,0,0]],

 [[0,0,1,0],
  [1,1,1,0],
  [0,0,0,0],
  [0,0,0,0]],

 [[0,1,0,0],
  [0,1,0,0],
  [0,1,1,0],
  [0,0,0,0]]],

// J
[[[1,0,0,0],
  [1,1,1,0],
  [0,0,0,0],
  [0,0,0,0]],

 [[0,1,1,0],
  [0,1,0,0],
  [0,1,0,0],
  [0,0,0,0]],

 [[0,0,0,0],
  [1,1,1,0],
  [0,0,1,0],
  [0,0,0,0]],

 [[0,1,0,0],
  [0,1,0,0],
  [1,1,0,0],
  [0,0,0,0]]],

// Z
[[[0,0,0,0],
  [1,1,0,0],
  [0,1,1,0],
  [0,0,0,0]],

 [[0,0,1,0],
  [0,1,1,0],
  [0,1,0,0],
  [0,0,0,0]]],

// S
[[[0,0,0,0],
  [0,1,1,0],
  [1,1,0,0],
  [0,0,0,0]],

 [[0,1,0,0],
  [0,1,1,0],
  [0,0,1,0],
  [0,0,0,0]]],

// O
[[[0,1,1,0],
  [0,1,1,0],
  [0,0,0,0],
  [0,0,0,0]]]
]

export const randomShape = () => {
    return random(1, shapes.length - 1);
}

export const nextRotation = (shape, rotation) => {
    const lastRotation = shapes[shape].length - 1;
    console.log(lastRotation)
    if (rotation === lastRotation) {
      return 0
    }
    else {
      rotation += 1;
      return rotation
    }
}

export const canMoveTo = (shape, grid, x, y, rotation) => {
  // need to determine if the current block can move to new x,y, or rotation
  const currentShape = shapes[shape][rotation];
  // loop through all parts of 2d array representing currentShape
  for (let row = 0; row < currentShape.length; row++) {
    for (let col = 0; col < currentShape[row].length; col++) {

      if(currentShape[row][col] !== 0) {
        const offsetX = col + x; // define where the 1's repping the shape are
        const offsetY = row + y; // row and col just define the 4 x 4 shape
        // offsetX and offsetY tells us where the actual shape exists in the grid
        if(offsetY < 0) { // if the given square is not yet on the grid
          continue // no need to look at it
        }

        const possibleRow = grid[offsetY]; // maps whole row that contains 1's
        // onto the grid

        // check that row is within bounds of grid
        if(possibleRow) {
          // check if specific square in row is occupied
          if(possibleRow[offsetX] === undefined || possibleRow[offsetX] !== 0) {
            return false // square is occupied or off the grid
          }
        } else {
          return false // row does not exist
        }
      }
    }
  }
  return true // shape can occupy the space
}

export const addBlockToGrid = (shape, grid, x, y, rotation) => {
  const block = shapes[shape][rotation];
  const newGrid = [...grid]; 

  // map block onto grid
  for (let row = 0; row < block.length; row++) {
    for ( let col = 0; col < block[row].length; col++) {
      if (block[row][col]) { // only map the 1's
        newGrid[row + y][col + x] = shape; // set that location to a number indicating a color
      }
    }
  }
  return newGrid;
}

// check for completed rows and score points
export const checkRows = (grid) => {
  const points = [0, 40, 100, 300, 1200];
  let completedRows = 0;

  for (let row = 0; row < grid.length; row++) {
    if (grid[row].indexOf(0) === - 1) {
      completedRows += 1;
      // remove row and add empty one at top
      grid.splice(row, 1); // remove
      grid.unshift(Array(10).fill(0));
    }
  }
  return points[completedRows];
}
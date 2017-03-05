class Game {
	constructor(gridSize) {
		this.gridSize = gridSize;
		this.generationCount = 0;
		this.grid = this.initialize(gridSize);
	}

	initialize(gridSize) {
	  let gridArray = [];
		
    for (var row = 0; row < gridSize; row++) {
			gridArray.push([]);
      for (var col = 0; col < gridSize; col++) {
				/* 
					Since each cell only has two states, they are represented by boolean values.
					A true value for alive cells, a false value for dead cells.
				*/
        gridArray[row].push(false);
      }
    }

		return gridArray;
	}

	/* 
		Counts the number of alive neighbors, or the number of surrounding true
		values.

			   X-1  X  X+1
		Y-1 | N | N | N |
		  Y	| N | C | N |
		Y+1	| N | N | N |

	*/
	countNeighbors(cellX, cellY, gridToCheck = this.grid) {
		let numberOfAliveNeighbors = 0;

		for (let row = cellY - 1; row <= cellY + 1; row++ ) {
			for (let col = cellX - 1; col <= cellX + 1; col++) {
				if (gridToCheck[row][col] && !(row === cellY && col === cellX)) {
					/* 
						If the cell is alive (true) & it isn't the center cell,
						increment the counter.
					*/

					numberOfAliveNeighbors++;
				}
			}
		}

		return numberOfAliveNeighbors;
	}

	/*
		Evaluates the next state/generation of the current game instance.
		This method will not mutate the current game grid.

		According to Wikipedia, the rules of the game are:
			1. Any live cell with fewer than 2 live neighbors dies.
			2. Any live cell with two or three live neighbors lives on to the next generation.
			3. Any live cell with three or more live neighbors dies.
			4. Any dead cell with exactly three live neighbors becomes a live cell.
	*/
	evaluate() {
		let previousGrid = this.grid;
		let newGrid = this.initialize(this.gridSize);

		for (let row = 0; row < this.gridSize; row++) {
			for (let col = 0; col < this.gridSize; col++) {
				// Next cell state depends on the number of neighbors.
				const cellState = previousGrid[row][col];
				const liveNeighborCount = this.countNeighbors(col, row, previousGrid);

				if (cellState) {
					// Alive cell changes
					if (liveNeighborCount <= 2 || liveNeighborCount >= 3) {
						newGrid[row][col] = false;
						continue;
					}
				} else {
					// Dead cell changes
					if (liveNeighborCount === 3) {
						newGrid[row][col] = true;
						continue;
					}
				}

				// No changes happened
				newGrid[row][col] = cellState;
			}
		}

		console.log(newGrid);
		return newGrid;
	}

	/*
		Mutates the current game grid with a new state. Intended to be used
		with the game's .evalute() method.
	*/
	next(newGrid = this.evalute()) {
		this.grid = newState;
	}
}

export default Game;
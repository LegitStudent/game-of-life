import Grid from './Grid';

class Game {
	constructor(gridSize) {
		this._generationCount = 0;
		this._grid = new Grid(gridSize);
	}

	/* 
		Counts the number of alive neighbors, or the number of surrounding true
		values.

			   X-1  X  X+1
		Y-1 | N | N | N |
		  Y	| N | C | N |
		Y+1	| N | N | N |

	*/
	
	get grid() {
		return this._grid;
	}

	set grid(newState) {
		this._grid.state = newState;
	}

	countNeighbors(cellRow, cellCol, gridToCheck = this.grid) {
		let numberOfAliveNeighbors = 0;

		for (let row = cellRow - 1; row <= cellRow + 1; row++ ) {
			if (row < 0 || row > gridToCheck.gridSize) {
				continue;
			}

			for (let col = cellCol - 1; col <= cellCol + 1; col++) {
				// Make sure row and column are both positive and less than the gridSize
				if (col < 0 || col > gridToCheck.gridSize) {
					continue;
				}

				if (gridToCheck.getCell(row, col) && !(row === cellRow && col === cellCol)) {
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
		const previousGrid = this.grid;
		let newGrid = new Grid(previousGrid.gridSize);

		for (let row = 0; row < previousGrid.gridSize; row++) {
			for (let col = 0; col < previousGrid.gridSize; col++) {
				// Next cell state depends on the number of neighbors.
				const cellState = previousGrid.getCell(row, col);
				const liveNeighborCount = this.countNeighbors(row, col, previousGrid);

				console.log('%s, %s', row, col);
				if (cellState) {
					// Alive cell changes
					if (liveNeighborCount < 2 || liveNeighborCount > 3) {
						newGrid.setCell(row, col, !cellState);
						console.log('alive to dead');
					} else {
						newGrid.setCell(row, col, cellState);
						console.log('alive to alive');
					}
				} else {
					// Dead cell changes
					if (liveNeighborCount === 3) {
						newGrid.setCell(row, col, !cellState);
						console.log('dead to alive');
					} else {
						newGrid.setCell(row, col, cellState);
						console.log('dead to dead');
					}
				}
			}
		}

		return newGrid;
	}

	/*
		Mutates the current game grid with a new state. Intended to be used
		with the game's .evalute() method.
	*/
	nextGeneration(newGrid = this.evalute()) {
		this.grid = newState;
	}
}

export default Game;
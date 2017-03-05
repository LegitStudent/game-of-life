/*
  This is the Grid data structure which will be represented by a 
  two-dimensional array.

  Spec:
    * A grid is an array of arrays. Each member of the top-level grid is a row.
    * A column is a group of cells which share the same index in all row arrays.
    * In cartesian terms, a row is the y-axis of the grid and a column is the x-
      axis of the grid.
    * A cell is a member of the row array.
    * [Style] All interactions with the grid has to reference row before column.

  Required operations:
    1. Get the value of a cell.
    2. Get the location of a cell.
    3.
*/

class Grid {
  constructor(gridSize) {
    this._gridSize = gridSize;
    this._data = this.initialize(gridSize);
  }

  initialize(gridSize, initialValue = false) {
	  let gridArray = [];
		
    for (var row = 0; row < gridSize; row++) {
      // Create a row array.
			gridArray.push([]);

      for (var col = 0; col < gridSize; col++) {
        gridArray[row].push(initialValue);
      }
    }

		return gridArray;
	}

  // Getter and Setter methods for the grid.
  getCell(row, col) {
    return this._data[row][col];
  }

  setCell(row, col, value) {
    return this._data[row][col] = value;
  }

  

}

export default Grid;
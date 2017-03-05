/*
    This is the Grid data structure which will be represented by a 
    two-dimensional array.

    Spec:
    * A grid is an array of arrays. Each member of the top-level grid is a row.
    * A column is a group of cells which share the same index in all row arrays.
    * In cartesian terms, a row is the y-axis of the grid and a column is the x-
      axis of the grid.
    * A cell is a member of the row array.

  Required operations:
    1. 
*/

class Grid {
  constructor(gridSize) {
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
}

export default Grid;
import Grid from './Grid';

let grid = new Grid(3);

grid.setCell(1, 1, true);

test('Grid cell should have a value', () => {
  expect(grid.getCell(1, 1)).toBeTruthy();
})
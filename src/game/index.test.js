import Game from './index';

let sample = new Game(3);

sample.grid = [
    [false, false, true],
    [true,  false, true],
    [false, true,  true]
];

/*
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        sample.grid[i][j] = true;
    }
}
*/
test('counts the right number of neighbors', () => {
    expect(sample.countNeighbors(0, 0)).toBe(1);
});

test('correctly evaluates the next generation', () => {
    let newGrid = sample.evaluate();
    
    expect(newGrid.getCell(1, 2)).toBeTruthy();
});
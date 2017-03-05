import Game from './index';

let sample = new Game(3);

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        sample.grid[i][j] = true;
    }
}

test('counts the right number of neighbors', () => {
    sample.grid[0][0] = false;
    sample.grid[0][1] = false;
    expect(sample.countNeighbors(1, 1)).toBe(6);
});

test('correctly evaluates the next generation', () => {
    let newGrid = sample.evaluate();
    expect(newGrid[2][2]).toBeTruthy();
});
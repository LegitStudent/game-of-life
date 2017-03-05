import Game from './index';

test('counts the right number of neighbors', () => {
    let sample = new Game(3);
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            sample.grid[i][j] = true;
        }
    }

    expect(sample.countNeighbors(1, 1)).toBe(8);
});
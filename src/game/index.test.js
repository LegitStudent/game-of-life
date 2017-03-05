import Game from './index';

let sample = new Game(3);

sample.grid = [
    [false, false, true],
    [true,  false, true],
    [false, true,  true]
];

test('counts the right number of neighbors', () => {
    expect(sample.countNeighbors(0, 0)).toBe(1);
});

test('correctly evaluates the next generation', () => {
    let newGrid = sample.evaluate();

    /*
        New Grid Reference:
        | F | T | F |
        | F | F | T |
        | T | T | T |
    */

    expect(newGrid.getCell(0, 0)).toBeFalsy();
    expect(newGrid.getCell(1, 2)).toBeTruthy();
});
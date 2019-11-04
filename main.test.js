 const orderPasses = require("./main.js");

it('should order the passes in correctly', () => {
    expect(orderPasses([{dest: 'A', origin: 'C'}, {dest: 'C', origin: 'B'}, {dest: 'D', origin: 'E'}, {dest: 'B', origin: 'D'}]))
    .toEqual([{dest: 'D', origin: 'E'}, {dest: 'B', origin: 'D'}, {dest: 'C', origin: 'B'}, {dest: 'A', origin: 'C'}])
})
it ('should return an empty object if empty', () => {
    expect(orderPasses([]))
    .toEqual([])
})
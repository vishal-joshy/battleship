import Ship from './ship';

describe('ship functions', () => {
	let ship1;
	beforeEach(() => {
		ship1 = new Ship(5);
	});

	it('Ship taking hit', () => {
		ship1.addHit(2);
		expect(ship1.hits).toEqual([, , 'hit']); //toEqual for objects and arrays
	});

	it('Ship sunk', () => {
		ship1.sinkShip();
		expect(ship1.IsSunk).toBe(true); //toEqual for objects and arrays
	});
});

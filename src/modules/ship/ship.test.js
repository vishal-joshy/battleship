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

	it('Ship sunk test', () => {
		expect(ship1.IsSunk).toBe(false); //toEqual for objects and arrays
	});
	it('sinking ship', () => {
		ship1.addHit(0);
		ship1.addHit(1);
		ship1.addHit(2);
		ship1.addHit(3);
		ship1.addHit(4);
		expect(ship1.IsSunk).toBe(true); //toEqual for objects and arrays
	});
});

import GameBoard from './gameboard';

describe('GameBoard tests', () => {
	let gameboard1 = new GameBoard();
	gameboard1.addShip('submarine', [0, 1, 2]);

	it('add ship to gameboard', () => {
		console.log(gameboard1.ships[0]);
		expect(gameboard1.ships[0]).toEqual({ name: 'submarine', location: [0, 1, 2] });
	});
});

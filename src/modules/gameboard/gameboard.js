import Ship from '../ship/ship';

const GameBoard = function () {
	this.board = [];
	this.ships = [];
};

GameBoard.prototype.addShip = function (shipName, location) {
	const shipLength = location.length;
	const newShip = new Ship(shipLength);
	this.ships.push({ name: shipName, location: location });
};

export default GameBoard;

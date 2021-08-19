const Ship = function (length) {
	this.length = length;
	this.hits = [];
	this.IsSunk = false;
};

Ship.prototype.addHit = function (hitLocation) {
	this.hits[hitLocation] = 'hit';
};

Ship.prototype.sinkShip = function () {
	this.IsSunk = true;
};

export default Ship;

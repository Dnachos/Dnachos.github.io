"use strict";

class Vector {
	constructor(_x, _y) {
		this.x = _x || 0;
		this.y = _y || 0;
	}
	add(obj) {
		this.x += obj.x;
		this.y += obj.y;
	}
	set(x, y) {
		this.x = x;
		this.y = y;
	}
}
class Piece extends Vector {
	constructor(_x, _y, _size, _solids) {
		super(_x, _y);
		this.velocity = new Vector();
		this.size = _size || 0;
		this.spaces = _solids;
	}
	draw(_ctx) {
		for (let x = 0; x < this.spaces.length; x++) {
				const col = this.spaces[x];
				for (let y = 0; y < col.length; y++) {
					 if (col[y]) {
						_ctx.rect(this.x + x * this.size, this.y + y * this.size, this.size, this.size);
					 }
				}
		}
	}
	rotateCW() {
		const width = this.spaces.length;
		const height = this.spaces[0].length;
		let rotated = new Array(height);
		for (let n = 0; n < rotated.length; n++) {
				rotated[n] = new Array(width);
		}
		for (let x = 0; x < width; x++) {
				let col = this.spaces[x];
				for (let y = 0; y < height; y++) {
					rotated[height - y - 1][x] = col[y];
				}
		}
		this.spaces = rotated;
	}
}

const cols = 20;
const rows = 20;
const size = 30;
const gravity = new Vector(0, 0.1);
const shapes = [
	[
		[1]
	],
	[
		[0, 1],
		[0, 1],
		[1, 1]
	],
	[
		[1, 1, 1]
	],
	[
		[1, 1],
		[1, 0],
		[1, 1]
	],
	[
		[1, 1],
		[1, 0]
	]
];

const loop = () => {
	if (!(tickNumber % Math.floor(60 * 0.75))) {
		const randShape = shapes[Math.floor(Math.random() * shapes.length)];
		let newPiece = new Piece(0, 0, size, randShape);
		const randRotation = Math.floor(Math.random() * 4);
		for (let n = 0; n < randRotation; n++) {
				newPiece.rotateCW();
		}
		newPiece.x = Math.floor(Math.random() * (cols - newPiece.spaces.length + 1)) * size;
		newPiece.y = -newPiece.spaces[0].length * size;
		newPiece.color = "hsl(" + Math.floor(Math.random() * 360) + ", 100%, 50%)";
		ent.push(newPiece)
	}
	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	entLoop:
		for (let n = 0; n < ent.length; n++) {
				let cur = ent[n];
				cur.velocity.add(gravity);
				cur.add(cur.velocity);
				let height = cur.spaces[0].length;
				for (let x = 0; x < cur.spaces.length; x++) {
					const col = cur.spaces[x];
					for (let y = height - 1; y >= 0; y--) {
						if (col[y]) {
								const curX = cur.x / size + x;
								const curY = Math.floor(cur.y / size) + y + 1;
								if (curY == rows || field[curX][curY]) {
									 for (let shapeX = 0; shapeX < cur.spaces.length; shapeX++) {
										const fieldCol = field[cur.x / size + shapeX];
										const shapeCol = cur.spaces[shapeX];
										for (let shapeY = 0; shapeY < height; shapeY++) {
												fieldCol[Math.floor(cur.y / size) + shapeY] = fieldCol[Math.floor(cur.y / size) + shapeY] || shapeCol[shapeY] && cur.color;
										}
									}
									ent.splice(n--, 1);
									continue entLoop;
								}
								break;
						}
					 }
				}
				ctx.beginPath();
				ctx.fillStyle = cur.color;
				cur.draw(ctx);
				ctx.fill();
		}
	for (let x = 0; x < cols; x++) {
		const col = field[x];
		for (let y = 0; y < rows; y++) {
			const cur = col[y];
			if (cur) {
				 ctx.fillStyle = cur;
				 ctx.fillRect(x * size, y * size, size, size);
			}
		}
	}
	tickNumber++;
	requestAnimationFrame(loop);
};
const classic = () => {
	field = new Array(cols);
	for (let x = 0; x < cols; x++) {
		field[x] = new Array(rows);
	}
	requestAnimationFrame(loop);
};

let ent = [];
let canvas;
let ctx;
let tickNumber = 0;
let field;


const begin = () => {
	canvas = document.getElementById("canvas");
	canvas.width = cols * size;
	canvas.height = rows * size;
	ctx = canvas.getContext("2d");

	ctx.fillStyle = "rgb(0,0,0)";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	setInterval(() => {
		ctx.beginPath();
		ctx.strokeStyle = "white";
		ctx.rect(225,150,150,50);
		ctx.stroke();
		ctx.fillStyle = `hsl(${Date.now() / .75e4 * 360 % 360}, 100%, 50%)`;
		ctx.font = "45px Crayon";
		ctx.textBaseline = "middle";
		ctx.textAlign = "center";
		ctx.fillText("Classic", 300, 180);
	}, 33);

	
	
	
	
};

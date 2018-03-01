"use strict";

CanvasRenderingContext2D.prototype.circle = function(_x, _y, _r) {
	this.moveTo(_x + _r, _y);
	this.arc(_x, _y, _r, 0, 2 * Math.PI);
};

let n;
let turn = 0;
let size = 200;
let complexity = 3;
let canvas;
let ctx;
let win = false;
let MLG = new Audio("audio/MLGHORN.mp3");
let toeField;
let topWin = false;
let midHorizWin = false;
let botWin = false;
let leftVertWin = false;


document.addEventListener("DOMContentLoaded", () => {
	canvas = document.getElementById("canvas");
	canvas.width = complexity * size;
	canvas.height = complexity * size;
	ctx = canvas.getContext("2d");

	toeField = new Array(complexity);
	for (let x = 0; x < toeField.length; x++) {
		let col = toeField[x] = new Array(complexity);
		for (let y = 0; y < col.length; y++) {
			col[y] = {
				wok: 0
			};
		}
	}
	canvas.addEventListener("click", canvasClicked);
	draw();
});

const canvasClicked = event => {
	let x = Math.floor(event.offsetX / size);
	let y = Math.floor(event.offsetY / size);
	if (toeField[x][y].wok == 0 && win == false) {
		toeField[x][y].wok = turn % 2 + 1;
		draw();
		turn++;
			for (let n = 0; n < complexity; n++) {
				if (toeField[0][0].wok == toeField[1][0].wok && toeField[2][0].wok) {
					ctx.beginPath();
					ctx.moveTo(0, 100);
					ctx.lineTo(600,100);
					ctx.lineWidth = 3;
					ctx.stroke();
					topWin = true;
					win = true;
				}
			}
		
		for (let n = 0; n < complexity; n++) {
				if (toeField[0][1].wok == toeField[1][1].wok && toeField[2][1].wok) {
					ctx.beginPath();
					ctx.moveTo(0, 300);
					ctx.lineTo(600,300);
					ctx.lineWidth = 3;
					ctx.stroke();
					midHorizWin = true;
					win = true;
				}
			}
		
		
		for (let n = 0; n < complexity; n++) {
				if (toeField[0][2].wok == toeField[1][2].wok && toeField[2][2].wok) {
					ctx.beginPath();
					ctx.moveTo(0, 500);
					ctx.lineTo(600,500);
					ctx.lineWidth = 3;
					ctx.stroke();
					botWin = true;
					win = true;
				}
			}
		
		
		for (let n = 0; n < complexity; n++) {
				if (toeField[0][0].wok == toeField[0][1].wok && toeField[0][2].wok) {
					ctx.beginPath();
					ctx.moveTo(100, 0);
					ctx.lineTo(100,600);
					ctx.lineWidth = 3;
					ctx.stroke();
					leftVertWin = true;
					win = true;
				}
			}
		
		
		
if (turn == 9 && win == false) {
	window.setTimeout(  
    function() {  
        location.reload(); 
    	},  
    1.5*1000);
}

		
		
		if (win == true) {
			setInterval(function() {
				draw("hsl(" + Math.floor(Math.random() * 360) + ", 100%, 50%)");
				
				if (topWin == true) {
					ctx.beginPath();
					ctx.moveTo(0, 100);
					ctx.lineTo(600, 100);
					ctx.lineWidth = 3;
					ctx.stroke();
				}
				
				
				if (midHorizWin == true) {
					ctx.beginPath();
					ctx.moveTo(0, 300);
					ctx.lineTo(600, 300);
					ctx.lineWidth = 3;
					ctx.stroke();
				}
				
				
				if (botWin == true) {
					ctx.beginPath();
					ctx.moveTo(0, 500);
					ctx.lineTo(600, 500);
					ctx.lineWidth = 3;
					ctx.stroke();
				}
				
				
				if (leftVertWin == true) {
					ctx.beginPath();
					ctx.moveTo(100, 0);
					ctx.lineTo(100, 600);
					ctx.lineWidth = 3;
					ctx.stroke();
				}
				
				
			}, 33);
			
				
			MLG.volume = 1;
			MLG.addEventListener("ended", function() {
				let button = document.createElement("button");
				ctx.fillStyle = "lightgray";
				ctx.fillRect(200, 200, 600, 200);
				button.textContent = "Reset";
				button.style.width = size * complexity + "px";
				button.style.height = size * complexity / 2 + "px";
				button.style.position = "absolute";
				button.style.left = "0px";
				button.style.top = size * complexity / 4 + "px";
				button.style.padding = "0px";
				button.style.border = "0px";
				button.style.fontSize = "120px";
				button.addEventListener("click", function() {
					location.reload();
				});
				document.body.appendChild(button);
			});
			MLG.play();
		}
	}
};

function draw(color) {
	ctx.fillStyle = color || "white";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.lineWidth = 1;
	ctx.beginPath();
	for (let x = 1; x < complexity; x++) {
		ctx.moveTo(x * size, 0);
		ctx.lineTo(x * size, canvas.height);
	}
	for (let y = 1; y < complexity; y++) {
		ctx.moveTo(0, y * size);
		ctx.lineTo(canvas.width, y * size);
	}
	for (let x = 0; x < toeField.length; x++) {
		for (let y = 0; y < toeField.length; y++) {
			if (toeField[x][y].wok == 2) {
				ctx.circle((x + 0.5) * size, (y + 0.5) * size, size * 3 / 8);
			} else if (toeField[x][y].wok == 1) {
				ctx.moveTo(x * size, y * size);
				ctx.lineTo((x + 1) * size, (y + 1) * size);
				ctx.moveTo(x * size, (y + 1) * size);
				ctx.lineTo((x + 1) * size, y * size);
			}
		}
	}
	ctx.stroke();
}

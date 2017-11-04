"use strict";

CanvasRenderingContext2D.prototype.circle = function(_x, _y, _r) {
    this.moveTo(_x + _r, _y);
    this.arc(_x, _y, _r, 0, 2 * Math.PI);
};

let turn = 0;
let size = 200;
let complexity = 3;
let canvas = document.getElementById("canvas");
canvas.width = complexity * size;
canvas.height = complexity * size;
let ctx = canvas.getContext("2d");

let toeField = new Array(complexity);
for (let x = 0; x < toeField.length; x++) {
    let col = toeField[x] = new Array(complexity);
    for (let y = 0; y < col.length; y++) {
        col[y] = {
       wok: 0
        };
    }
}

canvas.addEventListener("click", function(event) {
    let x = Math.floor(event.offsetX / size);
    let y = Math.floor(event.offsetY / size);
    if (toeField[x][y].wok == 0) {
      toeField[x][y].wok = turn % 2 + 1;
      draw();
      turn++;
    if(toeField[0][0].wok != 0){
       if(toeField[0][0]==toeField[1][0]&&toeField[2][0]==toeField[0][0]) {
          ctx.moveTo(0,size/2);
           ctx.lineTo(size*3,size/2);
       }
       }
    }
});

function draw() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    for (let x = 1; x < complexity; x++){
        ctx.moveTo(x * size, 0);
        ctx.lineTo(x * size, canvas.height);
    }
    for (let y = 1; y < complexity; y++){
        ctx.moveTo(0, y * size);
        ctx.lineTo(canvas.width, y * size);
    }
    for (let x = 0;  x <toeField.length; x++) {
      for (let y = 0; y<toeField.length; y++) {
        if (toeField[x][y].wok == 2) {
          ctx.circle((x + 0.5) * size, (y + 0.5) * size, size * 3/8);
        } else if (toeField[x][y].wok == 1) {
          ctx.moveTo(x * size, y * size);
          ctx.lineTo((x + 1) * size,(y + 1) * size);
          ctx.moveTo(x * size, (y + 1) * size);
          ctx.lineTo((x + 1) * size, y * size);
        }
      }
    }
    ctx.stroke();
}
draw();


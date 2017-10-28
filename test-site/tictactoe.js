"use strict";

CanvasRenderingContext2D.prototype.circle = function(_x, _y, _r) {
    this.moveTo(_x + _r, _y);
    this.arc(_x, _y, _r, 0, 2 * Math.PI);
};

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let turn = 0;
let size = 100;

let toeField = new Array(3);
for (let x = 0; x < toeField.length; x++) {
    let col = toeField[x] = new Array(3);
    for (let y = 0; y < col.length; y++) {
        col[y] = {};
    }

}

canvas.addEventListener("click", function(event) {
    let x = Math.floor(event.offsetX / size);
    let y = Math.floor(event.offsetY / size)
    toeField[x][y].wok = turn % 2;
    draw();
});

function draw() {

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 300, 300);

    ctx.beginPath();
    ctx.moveTo(size * 1, 0);
    ctx.lineTo(size * 1, size * 3);

    ctx.moveTo(size * 2, 0);
    ctx.lineTo(size * 2, size * 3);

    ctx.moveTo(0, size * 1);
    ctx.lineTo(size * 3, size * 1);

    ctx.moveTo(0, size * 2);
    ctx.lineTo(size * 3, size * 2);

    for (let x = 0;  x <toeField.length; x++){
      for (let y = 0; y<toeField.length; y++){
        if (toeField[x][y].wok==1){
          ctx.circle((x + 0.5) * size, (y + 0.5) * size, size * 3/8);
        } else if (toeField[x][y].wok == 0){
          ctx.moveTo(x * size, y * size);
          ctx.lineTo((x + 1) * size,(y + 1) * size);
          ctx.moveTo(x * size, (y+1) * size);
          ctx.lineTo((x+1) * size, y * size);
      }
    }

    //
    ctx.stroke();

}

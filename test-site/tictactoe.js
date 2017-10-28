"use strict";

CanvasRenderingContext2D.prototype.circle = function(_x, _y, _r) {
  this.moveTo(_x + _r, _y);
  this.arc(_x, _y, _r, 0, 2 * Math.PI);
};

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let toeField = new Array(3);
for (let n=0; n<toeField.length;n++) {
  let col=toeField[n] = new Array(3);
  for(let y = 0; y<col.length; y++){
    col[y]={};
  }
  
}

  
ctx.beginPath();
ctx.moveTo(100, 0);
ctx.lineTo(100, 300);

ctx.moveTo(200, 0);
ctx.lineTo(200, 300);

ctx.moveTo(0, 100);
ctx.lineTo(300, 100);

ctx.moveTo(0, 200);
ctx.lineTo(300,200 );

ctx.circle(50, 50, 35);
ctx.stroke();


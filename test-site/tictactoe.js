"use strict";

CanvasRenderingContext2D.prototype.circle = (_x, _y, _r) => {
  this.moveTo(_x + _r, _y);
  this.arc(_x, _y, _r, 0, 2 * Math.PI);
};

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

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

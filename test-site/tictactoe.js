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
for (let n=0; n<toeField.length;n++) {
  let col=toeField[n] = new Array(3);
  for(let y = 0; y<col.length; y++){
    col[y]={};
  }
  
}

canvas.addEventListener("click", function(event){
  console.log(event);
  
} );
  
ctx.beginPath();
ctx.moveTo(size*1, 0);
ctx.lineTo(size*1, size*3);

ctx.moveTo(size*2, 0);
ctx.lineTo(size*2, size*3);

ctx.moveTo(0, size*1);
ctx.lineTo(size*3, size*1);

ctx.moveTo(0, size*2);
ctx.lineTo(size*3,size*2 );

ctx.circle(size/2, size/2, size*3/8);
ctx.stroke();


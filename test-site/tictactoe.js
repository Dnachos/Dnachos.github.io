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

ctx.moveTo(100,50);
ctx.arc(50,50,50,0, 2*Math.PI);
ctx.stroke();

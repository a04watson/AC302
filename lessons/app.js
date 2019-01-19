console.log("test...")

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);

ctx.moveTo(200,150);
ctx.lineTo(0,200);

ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.stroke();
ctx.fillStyle = "rgb(200,50,10)";
ctx.fillRect = (75, 125, 150, 100);
ctx.strokeStyle = "green"
ctx.strokeRect(50,100,200,150);
ctx.clearRect(125, 150, 50, 50);



var c2 - document.getElementById("myCanvas");
var ctx2 = c2.getContext("2d");
ctx2.moveTo(0,305);
ctx2.strokeRect(155,0,150,150);
ctx2.fillRect = (75,125,150,100);
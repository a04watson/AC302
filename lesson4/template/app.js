var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//var img = new Image();
//img.src = 'Alpaca.jpg';

//img.onload = function() {
	//ctx.drawImage(img,0,0,100,50);
//}

// ctx.font = "60px Trebuchet MS"
// ctx.fillStyle = "royalblue";
// ctx.fillText("Canvas",40,125);
// ctx.strokeStyle = "seagreen";
// ctx.strokeText("Text", 140, 205);

var bw = new Image();
var capt = new Image();
var hawkeye = new Image();
var hulk = new Image();
var im = new Image();
var thor = new Image();
bw.src = "Black-Widow.png";
capt.src = "capt.png";
hawkeye.src = "hawkeye.png";
hulk.src = "hulk.png";
im.src = "Iron_Man.png";
thor.src = "thor.png";
bw.onload = function() {
	ctx.drawImage(bw,730,200,150,200);
}
capt.onload = function() {
	ctx.drawImage(capt,400,350,200,200);
}
hawkeye.onload = function() {
	ctx.drawImage(hawkeye,20,200,150,190);
}
hulk.onload = function() {
	ctx.drawImage(hulk,220,150,200,200);
}
im.onload = function() {
	ctx.drawImage(im,500,150,200,200);
}
thor.onload = function() {
	ctx.drawImage(thor,150,350,200,180);
}

ctx.fillStyle = "sandybrown";
ctx.fillRect(0,380,900,600);
ctx.fillStyle = "midnightblue";
ctx.fillRect(0,0,900,380);

ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * 6.28);
ctx.closePath();
ctx.fillStyle = "ivory";
ctx.fill();

ctx.font = "60px Bangers"
ctx.fillStyle = "ivory";
ctx.fillText("Avengers Assemble!", 210, 80);

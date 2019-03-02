var game = new Phaser.Game(800,600, Phaser.AUTO, '', 
    {preload:preload, create:create, update:update});

var score = 0;
var lives = 3;


function preload(){
	//image -static image
	//sprite sheet --> animations of different image
	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/platform.png');
	game.load.image('firstaid', 'assets/firstaid.png');
	game.load.image('diamond', 'assets/diamond.png');
	game.load.image('star', 'assets/star.png');
    game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32); 
    game.load.spritesheet('dude', 'assets/dude.png', 32, 48); 

}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);

	game.add.sprite(0, 0, 'sky');

	platforms = game.add.physicsGroup();
	platforms.enableBody = true;

	var ground = platforms.create(0, 550, 'ground');
	//multiplies the height & width of the ground image by 2
	ground.scale.setTo(2, 2);
	//set the ground to stay still
	ground.body.immoveable = true;

	var ledge1 = platforms.create(350, 400, 'ground');
	ledge1.body.immoveable = true;

    var ledge2 = platforms.create(-70, 250, 'ground');
	ledge2.body.immoveable = true;

	var style = {font: "bold 32px Arial", fill: "white"};

	scorelabel = game.add.text(300, 565, "score", style);
	scoretext = game.add.text(420, 560, score, style);
	scorelabel.setShadow(3, 3, 'black', 2);
	scoretext.setShadow(3, 3, 'black', 2);

	liveslabel = game.add.text(10, 5, "lives", style);
	livestext = game.add.text(120, 5, lives, style);
	liveslabel.setShadow(3, 3, 'black', 2);
	livestext.setShadow(3, 3, 'black', 2);
}



function update(){}










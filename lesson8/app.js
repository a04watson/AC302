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
	ground.body.immovable = true;

	var ledge1 = platforms.create(380, 400, 'ground');
	ledge1.body.immovable = true;

    var ledge2 = platforms.create(-70, 250, 'ground');
	ledge2.body.immovable = true;

	var style = {font: "bold 32px Arial", fill: "white"};

	scorelabel = game.add.text(300, 565, "score", style);
	scoretext = game.add.text(420, 560, score, style);
	scorelabel.setShadow(3, 3, 'black', 2);
	scoretext.setShadow(3, 3, 'black', 2);

	liveslabel = game.add.text(10, 5, "lives", style);
	livestext = game.add.text(120, 5, lives, style);
	liveslabel.setShadow(3, 3, 'black', 2);
	livestext.setShadow(3, 3, 'black', 2);

	//creating the player sprite
	player = game.add.sprite(32,400,'dude');
	//animating the player sprite
	player.animations.add('left',[0,1,2,3],10,true);
	player.animations.add('right',[5,6,7,8],10,true);
	game.physics.arcade.enable(player);
	player.body.bounce.y = 0.2;
	player.body.gravity.y = 300;
	player.body.collideWorldBounds = true;

	//creating the enemy
	baddie = game.add.sprite(760,20,'baddie');
	baddie.animations.add('left',[0,1], 10, true);
	baddie.animations.add('right',[2,3], 10, true);
	game.physics.arcade.enable(baddie);
	baddie.body.bounce.y = 0.2;
	baddie.body.gravity.y = 400;
	player.body.collideWorldBounds = true;

	//creating the firstaid kit
	firstaidKit = game.add.physicsGroup();
	firstaidKit.enableBody = true;
	var firstaid = firstaidKit.create(Math.floor(Math.random()*750),0,'firstaid');
	firstaid.body.gravity.y = 250;
	firstaid.body.bounce.y = 0.7 - Math.random()*0.5;

	//creating the diamond
	diamonds = game.add.physicsGroup();
	diamonds.enableBody = true;
	var diamond = diamonds.create(Math.floor(Math.random()*750), 0, 'diamond');
	diamond.body.gravity.y = 250;
	diamond.body.bounce.y = 0.7 - Math.random()*0.5;

	//creating the stars
	stars = game.add.physicsGroup();
	stars.enableBody = true;

	var star1 = stars.create(0,0,'star');
	star1.body.gravity.y = 250;
	star1.body.bounce.y = 0.7 - Math.random() * 0.2;

	var star2 = stars.create(60,0,'star');
	star2.body.gravity.y = 250;
	star2.body.bounce.y = 0.7 - Math.random() * 0.2;

	var star3 = stars.create(120,0,'star');
	star3.body.gravity.y = 250;
	star3.body.bounce.y = 0.7 - Math.random() * 0.2;

	var star4 = stars.create(180,0,'star');
	star4.body.gravity.y = 250;
	star4.body.bounce.y = 0.7 - Math.random() * 0.2;

	var star5 = stars.create(240,0,'star');
	star5.body.gravity.y = 250;
	star5.body.bounce.y = 0.7 - Math.random() * 0.2;

	var star6 = stars.create(300,0,'star');
	star6.body.gravity.y = 250;
	star6.body.bounce.y = 0.7 - Math.random() * 0.2;

	var star7 = stars.create(360,0,'star');
	star7.body.gravity.y = 250;
	star7.body.bounce.y = 0.7 - Math.random() * 0.2;

	var star8 = stars.create(420,0,'star');
	star8.body.gravity.y = 250;
	star8.body.bounce.y = 0.7 - Math.random() * 0.2;

	var star9 = stars.create(480,0,'star');
	star9.body.gravity.y = 250;
	star9.body.bounce.y = 0.7 - Math.random() * 0.2;

	var star10 = stars.create(560,0,'star');
	star10.body.gravity.y = 250;
	star10.body.bounce.y = 0.7 - Math.random() * 0.2;

	var star11 = stars.create(630,0,'star');
	star11.body.gravity.y = 250;
	star11.body.bounce.y = 0.7 - Math.random() * 0.2;

	var star12 = stars.create(700,0,'star');
	star12.body.gravity.y = 250;
	star12.body.bounce.y = 0.7 - Math.random() * 0.2;

	cursors = game.input.keyboard.createCursorKeys();
	game.time.events.add(Phaser.Timer.SECOND * 30, newFirstaid, this);
}



function update(){
	game.physics.arcade.collide(player,platforms);
	game.physics.arcade.collide(stars,platforms);
	game.physics.arcade.collide(baddie,platforms);
	game.physics.arcade.collide(diamonds,platforms);
	game.physics.arcade.collide(firstaidKit,platforms);
	game.physics.arcade.overlap(player,stars,collectStar);
	game.physics.arcade.overlap(player,baddie,loseLife);
	game.physics.arcade.overlap(player,diamonds,collectDiamond);
	game.physics.arcade.overlap(player,firstaidKit,collectFirstaid);

	//player not doing anything or default condition
	player.body.velocity.x = 0;

	//do the player control
	if(cursors.left.isDown) {
		player.body.velocity.x = -150;
		player.animations.play('left');
	} else if (cursors.right.isDown) {
		player.body.velocity.x = 150;
		player.animations.play('right');
	} else {
		player.animations.stop();
		player.frame = 4;
	}
	if (cursors.up.isDown && player.body.touching.down) {
		player.body.velocity.y = -300;
	}

	moveEnemy()
	if(lives<0){
		endGame();
	}
}

function moveEnemy(){
	//Enemy AI
	if(baddie.x > 759) {
		baddie.animations.play('left');
		baddie.body.velocity.x = -120;
	} else if (baddie.x < 405){
		baddie.animations.play('right');
		baddie.body.velocity.x = 120;
	}
}

function collectStar(player,star){
	//update score
	score+=1;
	//reflect in text
	scoretext.setText(score);
	//remove the star and reset
	star.kill();
	star.reset(Math.floor(Math.random()*750),0);
}

function collectDiamond(player,diamond){
	score+=10;
	scoretext.setText(score);
	diamond.kill();
	diamond.reset(Math.floor(Math.random()*750),0);
}

function collectFirstaid(player,firstaid){
	lives += 1;
	livestext.setText(lives);
	firstaid.kill();
}

function newFirstaid(firstaid){
	var firstaid = firstaidKit.create(Math.floor(Math.random()*750),0,'firstaid');
	firstaid.body.gravity.y = 250;
	firstaid.body.bounce.y = 0.7 - Math.random()*0.5;
}

function loseLife(player,baddie){
	lives -= 1;
	livestext.setText(lives);
	baddie.kill();
	baddie.reset(10,20);
}

function endGame(){
	player.kill();
	scorelabel.text="GAME OVER! You scored: " + score;
	scoretext.visible = false;
	liveslabel.visible = false;
	livestext.visible = false;
}
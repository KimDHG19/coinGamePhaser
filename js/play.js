const playState = {

	preload: function () {
		game.load.audio('background', './assets/sound/background.mp3');
	},

	create: function () {
		console.log("game started");
		this.backgroundSound = game.add.sound('background');
		this.backgroundSound.loopFull();

		// Adding background
		Gamepad.add.image(0,0, 'bg');
		//adding player
		this.player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
		// function to create our world
		this.createWorld();
	},

	update: function () {


	},

	createWorld: function () {

		this.walls = game.add.group();
		this.walls.enableBody = true;

		game.add.sprite(0,0, 'wallV', 0, this.walls);

		const middleTop = this.game.add.sprite(100, 80, 'wallH', 0, this.walls);
		middleTop.scale.setTo(1.5, 1);

		this.walls.setAll('body.immovable', true)
	},


};
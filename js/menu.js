const menuState = {


    create: function () {

        const menuLabel = game.add.text(game.world.centerX, 30,
            'menu..', {font: '30px Arial', fill: '#ffffff'});

        menuLabel.anchor.setTo(0.5, 0.5);

        const startLabel = game.add.text(game.world.centerX, 150,
            'Press the up arrow key to start', {font: '30px Arial', fill: '#ffffff'});

        startLabel.anchor.setTo(0.5, 0.5);

        game.add.tween(startLabel).to({angle: -2}, 500).to({angle: 2}, 500).loop().start();


        // start the game when up arrow key is pressed
        const upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        upKey.onDown.addOnce(this.start, this);


    },


    start: function () {
        game.state.start('play');

    }


};